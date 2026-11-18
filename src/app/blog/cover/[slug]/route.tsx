import { ImageResponse } from "next/og";
import { getAllPosts, getPostBySlug, getCategoryFor } from "@/lib/blog";

/**
 * 1200×630 cover image for each post, prerendered at build time.
 * Used as the hero image on the post page and as its social/OG image.
 */
export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function GET(_req: Request, ctx: RouteContext<"/blog/cover/[slug]">) {
  const { slug } = await ctx.params;
  const post = getPostBySlug(slug);
  if (!post) return new Response("Not found", { status: 404 });
  const category = getCategoryFor(post);
  const titleSize = post.title.length > 70 ? 54 : post.title.length > 45 ? 62 : 72;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "#FFFFFF",
          color: "#1D1D1F",
          borderTop: `14px solid ${category.color}`,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "10px 22px",
              borderRadius: 999,
              background: `${category.color}18`,
              color: category.color,
              fontSize: 26,
            }}
          >
            {category.name}
          </div>
          <div style={{ display: "flex", fontSize: 24, color: "#6E6E73" }}>{post.readingMinutes} min read</div>
        </div>

        <div style={{ display: "flex", fontSize: titleSize, fontWeight: 700, lineHeight: 1.12, letterSpacing: -1.5 }}>
          {post.title}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "linear-gradient(180deg, #0A84FF 0%, #0071E3 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
              <rect x="8.5" y="2.5" width="7" height="11.5" rx="3.5" fill="white" />
              <path d="M5.5 10.5C5.5 14.09 8.41 17 12 17C15.59 17 18.5 14.09 18.5 10.5" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
              <path d="M12 17V21" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
              <path d="M8.5 21H15.5" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 30, fontWeight: 700 }}>MacVoice Blog</div>
            <div style={{ fontSize: 22, color: "#6E6E73" }}>macvoice.akshatt.in/blog</div>
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
