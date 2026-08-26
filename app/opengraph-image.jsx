import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Uidoyen – AI Automation & Business Systems";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
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
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #6366F1 0%, #A855F7 100%)",
              color: "white",
              fontWeight: "bold",
              fontSize: "24px",
            }}
          >
            U
          </div>
          <span
            style={{
              fontSize: "28px",
              fontWeight: "700",
              letterSpacing: "-0.5px",
              color: "#FFFFFF",
            }}
          >
            Uidoyen
          </span>
          <span
            style={{
              fontSize: "14px",
              fontWeight: "600",
              color: "#818CF8",
              backgroundColor: "rgba(99, 102, 241, 0.15)",
              padding: "6px 16px",
              borderRadius: "20px",
              border: "1px solid rgba(99, 102, 241, 0.3)",
              letterSpacing: "1px",
              textTransform: "uppercase",
              marginLeft: "12px",
            }}
          >
            AI Automation & Systems
          </span>
        </div>

        {/* Main Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            maxWidth: "1000px",
          }}
        >
          <h1
            style={{
              fontSize: "64px",
              fontWeight: "800",
              lineHeight: "1.15",
              letterSpacing: "-1.5px",
              margin: 0,
              background: "linear-gradient(to right, #FFFFFF, #CBD5E1)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            We automate business workflows with AI
          </h1>
          <p
            style={{
              fontSize: "26px",
              color: "#94A3B8",
              lineHeight: "1.4",
              margin: 0,
            }}
          >
            Custom AI systems, WhatsApp automation, CRM tools, internal apps, and customer experiences that save time and boost growth.
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
            paddingTop: "32px",
          }}
        >
          <span
            style={{
              fontSize: "20px",
              color: "#64748B",
              fontWeight: "500",
            }}
          >
            uidoyen.com
          </span>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "#818CF8",
              fontSize: "18px",
              fontWeight: "600",
            }}
          >
            Work Smarter With AI →
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
