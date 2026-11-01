import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://macvoice.akshatt.in";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/success", "/success/"],
      },
      // Search Engines
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/success", "/success/"],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/api/", "/success", "/success/"],
      },
      {
        userAgent: "Applebot",
        allow: "/",
        disallow: ["/api/", "/success", "/success/"],
      },
      // AI Crawlers & Answer Engines (AEO / GEO)
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "ClaudeBot",
          "anthropic-ai",
          "PerplexityBot",
          "Google-Extended",
          "Applebot-Extended",
          "cohere-ai",
          "CCBot",
          "Diffbot",
          "FacebookBot",
          "Bytespider",
        ],
        allow: ["/", "/llms.txt", "/llms-full.txt"],
        disallow: ["/api/", "/success", "/success/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}

