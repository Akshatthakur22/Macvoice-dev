import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { JsonLd, buildBreadcrumbSchema } from "@/components/seo/JsonLd";
import { categories, getCategory } from "@/content/blog/categories";
import { getPostsByCategory, formatDate } from "@/lib/blog";

const BASE = "https://macvoice.akshatt.in";

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/category/[category]">): Promise<Metadata> {
  const { category } = await params;
  const c = getCategory(category);
  if (!c) return {};
  const url = `${BASE}/blog/category/${c.slug}`;
  return {
    title: `${c.name}: Guides & How-Tos`,
    description: c.description,
    alternates: { canonical: url },
    openGraph: { title: `${c.name} | MacVoice Blog`, description: c.description, url },
  };
}

export default async function CategoryPage({ params }: PageProps<"/blog/category/[category]">) {
  const { category } = await params;
  const c = getCategory(category);
  if (!c) notFound();
  const posts = getPostsByCategory(c.slug);
  const url = `${BASE}/blog/category/${c.slug}`;

  const schemas = [
    buildBreadcrumbSchema([
      { name: "Home", item: BASE },
      { name: "Blog", item: `${BASE}/blog` },
      { name: c.name, item: url },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: c.name,
      description: c.description,
      url,
      hasPart: posts.map((p) => ({ "@type": "BlogPosting", headline: p.title, url: `${BASE}/blog/${p.slug}` })),
    },
  ];

  return (
    <div className="py-16 sm:py-24 bg-[#FFFFFF]">
      <JsonLd schema={schemas} />
      <Container size="narrow">
        <Link href="/blog" className="inline-flex items-center gap-1 text-xs font-medium text-[#0071E3] hover:underline mb-6">
          <ArrowLeft className="w-3.5 h-3.5" /> All topics
        </Link>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1D1D1F] mb-4">{c.name}</h1>
        <p className="text-base sm:text-lg text-[#6E6E73] leading-relaxed mb-12 max-w-2xl">{c.intro}</p>

        <ol className="space-y-4">
          {posts.map((p) => (
            <li key={p.slug}>
              <article className="rounded-2xl border border-[#E8E8ED] p-5 sm:p-6 hover:border-[#0071E3]/40 transition-colors">
                <h2 className="text-lg sm:text-xl font-bold tracking-tight text-[#1D1D1F] mb-1.5">
                  <Link href={`/blog/${p.slug}`} className="hover:text-[#0071E3]">
                    {p.title}
                  </Link>
                </h2>
                <p className="text-sm text-[#6E6E73] leading-relaxed mb-2">{p.description}</p>
                <div className="text-xs text-[#6E6E73]">
                  <time dateTime={p.published}>{formatDate(p.published)}</time> · {p.readingMinutes} min read
                </div>
              </article>
            </li>
          ))}
        </ol>
      </Container>
    </div>
  );
}
