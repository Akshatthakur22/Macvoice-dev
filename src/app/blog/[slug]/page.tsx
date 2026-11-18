import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { JsonLd, buildBreadcrumbSchema } from "@/components/seo/JsonLd";
import {
  getAllPosts,
  getPostBySlug,
  getRelatedPosts,
  getCategoryFor,
  formatDate,
} from "@/lib/blog";

const BASE = "https://macvoice.akshatt.in";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  const url = `${BASE}/blog/${post.slug}`;
  const image = `${BASE}/blog/cover/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    authors: [{ name: "Akshat Thakur", url: "https://akshatt.in" }],
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url,
      publishedTime: post.published,
      modifiedTime: post.updated ?? post.published,
      authors: ["Akshat Thakur"],
      images: [{ url: image, width: 1200, height: 630, alt: post.title }],
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.description, images: [image] },
  };
}

export default async function BlogPostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();
  const category = getCategoryFor(post);
  const url = `${BASE}/blog/${post.slug}`;
  const image = `${BASE}/blog/cover/${post.slug}`;

  const schemas: Record<string, unknown>[] = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      datePublished: post.published,
      dateModified: post.updated ?? post.published,
      mainEntityOfPage: url,
      url,
      image,
      articleSection: category.name,
      keywords: post.primaryKeyword,
      author: { "@type": "Person", name: "Akshat Thakur", url: "https://akshatt.in" },
      publisher: { "@id": `${BASE}/#organization` },
    },
    buildBreadcrumbSchema([
      { name: "Home", item: BASE },
      { name: "Blog", item: `${BASE}/blog` },
      { name: category.name, item: `${BASE}/blog/category/${category.slug}` },
      { name: post.title, item: url },
    ]),
  ];
  if (post.faq.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: post.faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
  }
  const related = getRelatedPosts(post, 3);

  return (
    <div className="py-12 sm:py-16 bg-[#FFFFFF]">
      <JsonLd schema={schemas} />
      <Container size="narrow">
        <article className="max-w-2xl mx-auto">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-xs text-[#6E6E73] mb-6">
            <Link href="/blog" className="inline-flex items-center gap-1 text-[#0071E3] hover:underline">
              <ArrowLeft className="w-3.5 h-3.5" /> Blog
            </Link>
            <span>/</span>
            <Link href={`/blog/category/${category.slug}`} className="hover:underline" style={{ color: category.color }}>
              {category.name}
            </Link>
          </nav>

          <header className="mb-8">
            <h1 className="text-3xl sm:text-[2.75rem] font-bold tracking-tight text-[#1D1D1F] leading-[1.12] mb-4">
              {post.title}
            </h1>
            <p className="text-base sm:text-lg text-[#6E6E73] leading-relaxed mb-4">{post.description}</p>
            <div className="text-sm text-[#6E6E73]">
              By <a href="https://akshatt.in" className="hover:underline text-[#1D1D1F]">Akshat Thakur</a>, maker of MacVoice ·{" "}
              <time dateTime={post.updated ?? post.published}>
                {post.updated ? `Updated ${formatDate(post.updated)}` : formatDate(post.published)}
              </time>{" "}
              · {post.readingMinutes} min read
            </div>
          </header>

          {/* eslint-disable-next-line @next/next/no-img-element -- prerendered PNG route, fixed size */}
          <img
            src={`/blog/cover/${post.slug}`}
            alt={`${post.title} (cover image)`}
            width={1200}
            height={630}
            className="w-full h-auto rounded-2xl border border-[#E8E8ED] mb-8"
            fetchPriority="high"
          />

          <div className="mb-10 p-5 sm:p-6 rounded-2xl bg-[#EAF3FF] border border-[#0071E3]/20">
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#0071E3] mb-2">Short answer</div>
            <p className="text-[15px] text-[#1D1D1F] leading-relaxed">{post.tldr}</p>
          </div>

          {post.toc.length >= 3 && (
            <nav aria-label="Contents" className="mb-10 p-5 rounded-2xl border border-[#E8E8ED]">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#6E6E73] mb-3">In this guide</div>
              <ol className="space-y-1.5 text-sm list-decimal pl-5">
                {post.toc.map((h) => (
                  <li key={h.id}>
                    <a href={`#${h.id}`} className="text-[#0071E3] hover:underline">
                      {h.text}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          )}

          <div className="post-body" dangerouslySetInnerHTML={{ __html: post.html }} />

          {post.faq.length > 0 && (
            <section className="mt-12" aria-labelledby="faq">
              <h2 id="faq" className="text-2xl font-bold tracking-tight text-[#1D1D1F] mb-4">
                Frequently asked questions
              </h2>
              <div className="space-y-3">
                {post.faq.map((f) => (
                  <details key={f.q} className="group rounded-2xl border border-[#E8E8ED] p-4">
                    <summary className="cursor-pointer list-none font-semibold text-[#1D1D1F] [&::-webkit-details-marker]:hidden">
                      <h3 className="inline text-base">{f.q}</h3>
                    </summary>
                    <p className="mt-2 text-[15px] text-[#3A3A3C] leading-relaxed">{f.a}</p>
                  </details>
                ))}
              </div>
            </section>
          )}

          <aside className="mt-14 p-6 sm:p-8 rounded-3xl bg-[#F5F5F7] border border-[#E8E8ED]">
            <h2 className="text-xl font-bold text-[#1D1D1F] mb-2">Voice typing that stays on your Mac</h2>
            <p className="text-sm text-[#6E6E73] leading-relaxed mb-5">
              MacVoice types what you say at your cursor in any Mac app. It removes the “ums”, follows commands like “new line”
              and “scratch that”, never touches your clipboard, and never uploads your voice. $9 once, 14-day refund.
            </p>
            <Button href="/pricing" variant="primary" size="md" className="group">
              Get MacVoice for $9
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
            </Button>
          </aside>

          {related.length > 0 && (
            <nav aria-label="Related articles" className="mt-14">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-[#6E6E73] mb-4">Related guides</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link
                      href={`/blog/${r.slug}`}
                      className="block h-full p-4 rounded-2xl border border-[#E8E8ED] hover:border-[#0071E3]/40 text-sm font-medium text-[#1D1D1F] hover:text-[#0071E3]"
                    >
                      {r.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </article>
      </Container>
    </div>
  );
}
