import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { categories } from "@/content/blog/categories";

const baseUrl = "https://macvoice.akshatt.in";

/**
 * lastModified uses real content dates, not the build time: a lastmod that
 * changes on every deploy teaches Google to ignore it. Bump the date here when
 * a page's content actually changes.
 */
const SITE_UPDATED = new Date("2026-11-18");

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: SITE_UPDATED, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/pricing`, lastModified: SITE_UPDATED, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/docs`, lastModified: SITE_UPDATED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/compatibility`, lastModified: SITE_UPDATED, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/privacy`, lastModified: SITE_UPDATED, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/blog`, lastModified: SITE_UPDATED, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/terms`, lastModified: new Date("2026-10-31"), changeFrequency: "yearly", priority: 0.3 },
  ];

  const categoryPages: MetadataRoute.Sitemap = categories.map((c) => ({
    url: `${baseUrl}/blog/category/${c.slug}`,
    lastModified: SITE_UPDATED,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  const blogPages: MetadataRoute.Sitemap = getAllPosts().map((p) => ({
    url: `${baseUrl}/blog/${p.slug}`,
    lastModified: new Date(p.updated ?? p.published),
    changeFrequency: "monthly",
    priority: 0.6,
    images: [`${baseUrl}/blog/cover/${p.slug}`],
  }));

  return [...pages, ...categoryPages, ...blogPages];
}
