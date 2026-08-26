import { ImageResponse } from "next/og";
import { getProjectBySlug } from "../../lib/portfolio.js";

export const runtime = "nodejs";
export const alt = "Uidoyen Portfolio Case Study";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  const title = project?.title || "Uidoyen Case Study";
  const category = project?.category || "Case Study";
  const year = project?.year || "";

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
          padding: "80px",
          fontFamily: "sans-serif",
          color: "white",
        }}
      >
        {/* Top Header */}
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
              background: "linear-gradient(135deg, #3B82F6 0%, #6366F1 100%)",
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
            }}
          >
            Uidoyen Portfolio
          </span>
          <span
            style={{
              fontSize: "14px",
              fontWeight: "600",
              color: "#60A5FA",
              backgroundColor: "rgba(59, 130, 246, 0.15)",
              padding: "6px 14px",
              borderRadius: "20px",
              border: "1px solid rgba(59, 130, 246, 0.3)",
              letterSpacing: "0.5px",
              marginLeft: "12px",
            }}
          >
            {category}
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            maxWidth: "1050px",
          }}
        >
          <h1
            style={{
              fontSize: "58px",
              fontWeight: "800",
              lineHeight: "1.2",
              letterSpacing: "-1px",
              margin: 0,
              color: "#FFFFFF",
            }}
          >
            {title}
          </h1>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            paddingTop: "30px",
          }}
        >
          <span
            style={{
              fontSize: "20px",
              color: "#64748B",
              fontWeight: "500",
            }}
          >
            uidoyen.com/portfolio
          </span>
          {year && (
            <span
              style={{
                fontSize: "18px",
                color: "#94A3B8",
                fontWeight: "500",
              }}
            >
              {year} Case Study
            </span>
          )}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
