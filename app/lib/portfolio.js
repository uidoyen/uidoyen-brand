import fs from "node:fs";
import path from "node:path";

const PORTFOLIO_DIR = path.join(process.cwd(), "content", "portfolio");

function parseFrontmatter(source) {
  const match = source.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);

  if (!match) {
    return { data: {}, content: source };
  }

  const data = {};

  for (const line of match[1].split("\n")) {
    const separator = line.indexOf(":");

    if (separator === -1) continue;

    const key = line.slice(0, separator).trim();
    const rawValue = line.slice(separator + 1).trim();

    if (rawValue.startsWith("[") && rawValue.endsWith("]")) {
      data[key] = rawValue
        .slice(1, -1)
        .split(",")
        .map((value) => value.trim().replace(/^["']|["']$/g, ""))
        .filter(Boolean);
      continue;
    }

    data[key] = rawValue.replace(/^["']|["']$/g, "");
  }

  return { data, content: match[2].trim() };
}

export function getAllProjects() {
  return fs
    .readdirSync(PORTFOLIO_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const source = fs.readFileSync(path.join(PORTFOLIO_DIR, file), "utf8");
      const { data, content } = parseFrontmatter(source);

      return {
        slug,
        content,
        ...data,
      };
    })
    .sort((a, b) => Number(b.year) - Number(a.year));
}

export function getProjectBySlug(slug) {
  return getAllProjects().find((project) => project.slug === slug);
}

export function markdownToParagraphs(markdown) {
  return markdown
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.replace(/\n/g, " ").trim())
    .filter(Boolean);
}
