import fs from "node:fs";
import path from "node:path";

const SERVICES_DIR = path.join(process.cwd(), "content", "services");

function parseFrontmatter(source) {
  const match = source.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);

  if (!match) {
    return { data: {}, content: source };
  }

  const data = {};
  let currentKey = null;

  for (const line of match[1].split("\n")) {
    if (!line.trim()) continue;

    if (line.startsWith("  - ")) {
      if (currentKey && Array.isArray(data[currentKey])) {
        data[currentKey].push(line.replace(/^\s*-\s*["']?|["']?$/g, "").trim());
      }
      continue;
    }

    const separator = line.indexOf(":");
    if (separator === -1) continue;

    const key = line.slice(0, separator).trim();
    const rawValue = line.slice(separator + 1).trim();

    currentKey = key;

    if (rawValue.startsWith("[") && rawValue.endsWith("]")) {
      data[key] = rawValue
        .slice(1, -1)
        .split(",")
        .map((value) => value.trim().replace(/^["']|["']$/g, ""))
        .filter(Boolean);
      continue;
    }

    if (!rawValue) {
      data[key] = [];
      continue;
    }

    data[key] = rawValue.replace(/^["']|["']$/g, "");
  }

  return { data, content: match[2].trim() };
}

export function getAllServices() {
  if (!fs.existsSync(SERVICES_DIR)) return [];

  return fs
    .readdirSync(SERVICES_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const source = fs.readFileSync(path.join(SERVICES_DIR, file), "utf8");
      const { data, content } = parseFrontmatter(source);

      return {
        slug,
        content,
        ...data,
      };
    })
    .sort((a, b) => Number(a.number) - Number(b.number));
}

export function getServiceBySlug(slug) {
  return getAllServices().find((service) => service.slug === slug);
}

export function markdownToParagraphs(markdown) {
  return markdown
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.replace(/\n/g, " ").trim())
    .filter(Boolean);
}
