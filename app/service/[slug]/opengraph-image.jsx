import { ImageResponse } from "next/og";
import { getServiceBySlug } from "../../lib/services.js";

export const runtime = "nodejs";
export const alt = "Uidoyen Service";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  const title = service?.title || "Uidoyen Service";
  const tagline = service?.tagline || service?.excerpt || "AI Automation & Business Systems";

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
              background: "linear-gradient(135deg, #10B981 0%, #3B82F6 100%)",
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
            Uidoyen Services
          </span>
          <span
            style={{
              fontSize: "14px",
              fontWeight: "600",
              color: "#34D399",
              backgroundColor: "rgba(16, 185, 129, 0.15)",
              padding: "6px 14px",
              borderRadius: "20px",
              border: "1px solid rgba(16, 185, 129, 0.3)",
              letterSpacing: "0.5px",
              marginLeft: "12px",
            }}
          >
            Service Solution
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
          <p
            style={{
              fontSize: "24px",
              color: "#94A3B8",
              lineHeight: "1.4",
              margin: 0,
            }}
          >
            {tagline}
          </p>
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
            uidoyen.com/service
          </span>
          <span
            style={{
              fontSize: "18px",
              color: "#34D399",
              fontWeight: "600",
            }}
          >
            Explore Solution →
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
