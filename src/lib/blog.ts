import fs from "node:fs";
import path from "node:path";
import { Marked, type Tokens } from "marked";
import { categories, type BlogCategory } from "@/content/blog/categories";

/**
 * Blog posts live as Markdown files in src/content/blog/posts/<slug>.md.
 *
 * Front matter is one `key: <JSON value>` per line, between `---` lines:
 *
 *   ---
 *   title: "How to use dictation on Mac"
 *   description: "…"            (≈150 chars, used for search snippets)
 *   published: "2026-11-18"
 *   updated: "2026-12-01"       (optional)
 *   category: "mac-dictation"   (a slug from categories.ts)
 *   primaryKeyword: "…"
 *   tldr: "…"                   (2–3 sentence direct answer shown first)
 *   faq: [{"q": "…", "a": "…"}] (optional, rendered + FAQPage schema)
 *   draft: true                 (optional, hides the post everywhere)
 *   ---
 */

export interface FaqEntry {
  q: string;
  a: string;
}

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  published: string;
  updated?: string;
  category: string;
  primaryKeyword: string;
  tldr: string;
  faq: FaqEntry[];
  draft: boolean;
  readingMinutes: number;
}

export interface Post extends PostMeta {
  html: string;
  toc: { id: string; text: string }[];
}

const POSTS_DIR = path.join(process.cwd(), "src", "content", "blog", "posts");

function parseFrontMatter(raw: string, file: string) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) throw new Error(`Missing front matter in ${file}`);
  const data: Record<string, unknown> = {};
  for (const line of match[1].split("\n")) {
    if (!line.trim()) continue;
    const idx = line.indexOf(":");
    const key = line.slice(0, idx).trim();
    const value = line.slice(idx + 1).trim();
    try {
      data[key] = JSON.parse(value);
    } catch {
      throw new Error(`Bad front matter value for "${key}" in ${file}: ${value}`);
    }
  }
  return { data, body: match[2] };
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/<[^>]+>/g, "")
    .replace(/&[a-z]+;/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function render(body: string) {
  const toc: { id: string; text: string }[] = [];
  const marked = new Marked({
    gfm: true,
    renderer: {
      heading({ tokens, depth }: Tokens.Heading) {
        const text = this.parser.parseInline(tokens);
        const id = slugify(text);
        if (depth === 2) toc.push({ id, text: text.replace(/<[^>]+>/g, "") });
        return `<h${depth} id="${id}">${text}</h${depth}>\n`;
      },
      link({ href, title, tokens }: Tokens.Link) {
        const text = this.parser.parseInline(tokens);
        const external = /^https?:\/\//.test(href);
        const t = title ? ` title="${title}"` : "";
        return external
          ? `<a href="${href}"${t} target="_blank" rel="noopener">${text}</a>`
          : `<a href="${href}"${t}>${text}</a>`;
      },
      image({ href, title, text }: Tokens.Image) {
        const caption = title ? `<figcaption>${title}</figcaption>` : "";
        return `<figure><img src="${href}" alt="${text}" loading="lazy" decoding="async" />${caption}</figure>`;
      },
      table(token: Tokens.Table) {
        const head = token.header.map((c) => `<th>${this.parser.parseInline(c.tokens)}</th>`).join("");
        const rows = token.rows
          .map((r) => `<tr>${r.map((c) => `<td>${this.parser.parseInline(c.tokens)}</td>`).join("")}</tr>`)
          .join("");
        return `<div class="table-wrap"><table><thead><tr>${head}</tr></thead><tbody>${rows}</tbody></table></div>`;
      },
    },
  });
  const html = marked.parse(body, { async: false }) as string;
  return { html, toc };
}

function load(file: string): Post {
  const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");
  const { data, body } = parseFrontMatter(raw, file);
  const slug = file.replace(/\.md$/, "");
  for (const key of ["title", "description", "published", "category", "tldr"]) {
    if (!data[key]) throw new Error(`Post ${slug} is missing "${key}"`);
  }
  if (!categories.some((c) => c.slug === data.category)) {
    throw new Error(`Post ${slug} has unknown category "${String(data.category)}"`);
  }
  const words = body.split(/\s+/).filter(Boolean).length;
  const { html, toc } = render(body);
  return {
    slug,
    title: data.title as string,
    description: data.description as string,
    published: data.published as string,
    updated: data.updated as string | undefined,
    category: data.category as string,
    primaryKeyword: (data.primaryKeyword as string) ?? "",
    tldr: data.tldr as string,
    faq: (data.faq as FaqEntry[]) ?? [],
    draft: Boolean(data.draft),
    readingMinutes: Math.max(2, Math.round(words / 220)),
    html,
    toc,
  };
}

let cache: Post[] | null = null;

/** All published posts, newest first (ties broken by title). */
export function getAllPosts(): Post[] {
  if (!cache) {
    cache = fs
      .readdirSync(POSTS_DIR)
      .filter((f) => f.endsWith(".md"))
      .map(load)
      .filter((p) => !p.draft)
      .sort((a, b) => b.published.localeCompare(a.published) || a.title.localeCompare(b.title));
  }
  return cache;
}

export function getPostBySlug(slug: string): Post | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}

export function getPostsByCategory(category: string): Post[] {
  return getAllPosts().filter((p) => p.category === category);
}

/** Same-category posts first, then others; never the post itself. */
export function getRelatedPosts(post: Post, count = 3): Post[] {
  const all = getAllPosts().filter((p) => p.slug !== post.slug);
  const same = all.filter((p) => p.category === post.category);
  const other = all.filter((p) => p.category !== post.category);
  return [...same, ...other].slice(0, count);
}

export function getCategoryFor(post: PostMeta): BlogCategory {
  return categories.find((c) => c.slug === post.category)!;
}

export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
