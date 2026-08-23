import fs from "node:fs";
import path from "node:path";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

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

export function formatPostDate(date) {
  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00`));
}

export function getAllPosts() {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const source = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");
      const { data, content } = parseFrontmatter(source);

      return {
        slug,
        content,
        ...data,
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getPostBySlug(slug) {
  return getAllPosts().find((post) => post.slug === slug);
}

export function markdownToBlocks(markdown) {
  const blocks = [];
  const lines = markdown.split("\n");
  let index = 0;

  while (index < lines.length) {
    const line = lines[index].trim();

    if (!line) {
      index += 1;
      continue;
    }

    if (line.startsWith("## ")) {
      blocks.push({ type: "heading", text: line.slice(3).trim() });
      index += 1;
      continue;
    }

    if (line.startsWith("> ")) {
      const quote = [];

      while (lines[index]?.trim().startsWith("> ")) {
        quote.push(lines[index].trim().slice(2));
        index += 1;
      }

      blocks.push({ type: "quote", text: quote.join(" ") });
      continue;
    }

    if (line.startsWith("![") && line.includes("](") && line.endsWith(")")) {
      const imageMatch = line.match(/^!\[(.*)]\((.*)\)$/);

      if (imageMatch) {
        blocks.push({
          type: "image",
          alt: imageMatch[1],
          src: imageMatch[2],
        });
      }

      index += 1;
      continue;
    }

    if (line.startsWith("- ")) {
      const items = [];

      while (lines[index]?.trim().startsWith("- ")) {
        items.push(lines[index].trim().slice(2));
        index += 1;
      }

      blocks.push({ type: "list", items });
      continue;
    }

    const paragraph = [];

    while (
      index < lines.length &&
      lines[index].trim() &&
      !lines[index].trim().startsWith("## ") &&
      !lines[index].trim().startsWith("> ") &&
      !lines[index].trim().startsWith("![") &&
      !lines[index].trim().startsWith("- ")
    ) {
      paragraph.push(lines[index].trim());
      index += 1;
    }

    blocks.push({ type: "paragraph", text: paragraph.join(" ") });
  }

  return blocks;
}
