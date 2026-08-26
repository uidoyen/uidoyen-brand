import { ImageResponse } from "next/og";
import { formatPostDate, getPostBySlug } from "../../lib/blog.js";

export const runtime = "nodejs";
export const alt = "Uidoyen Blog Article";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  const title = post?.title || "Uidoyen Insights & Tech Blog";
  const category = post?.category || (post?.tags?.[0] ?? "Article");
  const author = post?.author || "Uidoyen Team";
  const dateFormatted = post?.date ? formatPostDate(post.date) : "2026";
  const excerpt = post?.excerpt || "";

  // Load custom font dynamically for Satori engine rendering
  let interFont = null;
  try {
    const fontRes = await fetch(
      "https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-700-normal.ttf"
    );
    if (fontRes.ok) {
      interFont = await fontRes.arrayBuffer();
    }
  } catch (err) {
    console.error("Font fetch error:", err);
  }

  const fontsConfig = interFont
    ? [
        {
          name: "Inter",
          data: interFont,
          style: "normal",
          weight: 700,
        },
      ]
    : [];

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#0B0F19",
          backgroundImage:
            "radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.05) 2px, transparent 0)",
          backgroundSize: "50px 50px",
          padding: "70px 80px",
          fontFamily: interFont ? "Inter, sans-serif" : "sans-serif",
          color: "white",
        }}
      >
        {/* Top Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "44px",
                height: "44px",
                borderRadius: "10px",
                background:
                  "linear-gradient(135deg, #6366F1 0%, #A855F7 100%)",
                color: "white",
                fontWeight: "bold",
                fontSize: "22px",
              }}
            >
              U
            </div>
            <span
              style={{
                fontSize: "26px",
                fontWeight: "700",
                color: "#FFFFFF",
                letterSpacing: "-0.5px",
              }}
            >
              Uidoyen Insights
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <span
              style={{
                fontSize: "14px",
                fontWeight: "700",
                color: "#A855F7",
                backgroundColor: "rgba(168, 85, 247, 0.15)",
                padding: "6px 16px",
                borderRadius: "20px",
                border: "1px solid rgba(168, 85, 247, 0.3)",
                letterSpacing: "0.5px",
                textTransform: "uppercase",
              }}
            >
              {category}
            </span>
          </div>
        </div>

        {/* Main Content Area (Flexbox) */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            maxWidth: "1040px",
            margin: "20px 0",
          }}
        >
          <h1
            style={{
              fontSize: title.length > 55 ? "46px" : "54px",
              fontWeight: "800",
              lineHeight: "1.2",
              letterSpacing: "-1px",
              margin: 0,
              color: "#FFFFFF",
            }}
          >
            {title}
          </h1>

          {excerpt && (
            <p
              style={{
                fontSize: "22px",
                color: "#94A3B8",
                lineHeight: "1.4",
                margin: 0,
              }}
            >
              {excerpt.length > 140 ? excerpt.slice(0, 140) + "..." : excerpt}
            </p>
          )}
        </div>

        {/* Footer Area with Author, Date & Brand URL */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            paddingTop: "24px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "24px",
            }}
          >
            {/* Author Badge */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(99, 102, 241, 0.2)",
                  border: "1px solid #6366F1",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#818CF8",
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                ✍️
              </div>
              <span
                style={{
                  fontSize: "18px",
                  color: "#CBD5E1",
                  fontWeight: "600",
                }}
              >
                {author}
              </span>
            </div>

            <span style={{ color: "#475569", fontSize: "18px" }}>•</span>

            {/* Date */}
            <span
              style={{
                fontSize: "18px",
                color: "#94A3B8",
                fontWeight: "500",
              }}
            >
              {dateFormatted}
            </span>
          </div>

          <span
            style={{
              fontSize: "18px",
              color: "#818CF8",
              fontWeight: "600",
            }}
          >
            uidoyen.com/blog
          </span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: fontsConfig,
    }
  );
}
