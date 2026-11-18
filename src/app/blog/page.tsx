import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { JsonLd, buildBreadcrumbSchema } from "@/components/seo/JsonLd";
import { categories } from "@/content/blog/categories";
import { getAllPosts, getPostsByCategory } from "@/lib/blog";

const BASE = "https://macvoice.akshatt.in";

export const metadata: Metadata = {
  title: "Dictation & Speech-to-Text Guides for Mac",
  description:
    "Free, practical guides to dictation and voice typing on Mac: setup, commands, troubleshooting, privacy, speech-to-text explained, and honest app comparisons.",
  alternates: { canonical: `${BASE}/blog` },
  openGraph: {
    title: "MacVoice Blog: Dictation & Speech-to-Text Guides",
    description: "Practical guides to dictation and voice typing on Mac.",
    url: `${BASE}/blog`,
  },
};

export default function BlogIndexPage() {
  const total = getAllPosts().length;
  const schemas = [
    buildBreadcrumbSchema([
      { name: "Home", item: BASE },
      { name: "Blog", item: `${BASE}/blog` },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "MacVoice Blog",
      url: `${BASE}/blog`,
      publisher: { "@id": `${BASE}/#organization` },
    },
  ];

  return (
    <div className="py-16 sm:py-24 bg-[#FFFFFF]">
      <JsonLd schema={schemas} />
      <Container>
        <SectionHeader
          eyebrow="Blog"
          title="Dictation & speech-to-text, explained"
          description={`${total} practical guides to talking instead of typing on your Mac: how to set it up, fix it, keep it private, and get faster at it.`}
        />

        <nav aria-label="Topics" className="flex flex-wrap justify-center gap-2 mb-16">
          {categories.map((c) => (
            <a
              key={c.slug}
              href={`#${c.slug}`}
              className="px-4 py-2 rounded-full text-sm border border-[#E8E8ED] hover:border-current transition-colors"
              style={{ color: c.color }}
            >
              {c.name}
            </a>
          ))}
        </nav>

        <div className="space-y-20">
          {categories.map((c) => {
            const posts = getPostsByCategory(c.slug);
            if (posts.length === 0) return null;
            return (
              <section key={c.slug} id={c.slug} className="scroll-mt-24">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1D1D1F]">{c.name}</h2>
                    <p className="text-sm text-[#6E6E73] mt-1 max-w-2xl">{c.description}</p>
                  </div>
                  <Link
                    href={`/blog/category/${c.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-medium shrink-0 hover:underline"
                    style={{ color: c.color }}
                  >
                    All {posts.length} guides <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {posts.slice(0, 6).map((p) => (
                    <Link
                      key={p.slug}
                      href={`/blog/${p.slug}`}
                      className="group rounded-2xl border border-[#E8E8ED] overflow-hidden hover:border-[#0071E3]/40 transition-colors"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element -- prerendered PNG route */}
                      <img
                        src={`/blog/cover/${p.slug}`}
                        alt=""
                        width={1200}
                        height={630}
                        loading="lazy"
                        className="w-full h-auto border-b border-[#E8E8ED]"
                      />
                      <div className="p-4">
                        <h3 className="font-semibold text-[#1D1D1F] group-hover:text-[#0071E3] leading-snug mb-1">{p.title}</h3>
                        <p className="text-xs text-[#6E6E73] leading-relaxed line-clamp-2">{p.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
