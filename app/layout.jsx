import Script from "next/script";
import "./globals.css";
import Header, { HeaderChrome } from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import HeaderThemeController from "./components/HeaderThemeController.jsx";
import LegacyScripts from "./components/LegacyScripts.jsx";

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://uidoyen.com"
  ),
  title: {
    default: "Uidoyen | We automate business workflows with AI",
    template: "%s | Uidoyen - AI Automation & Business Systems",
  },
  description:
    "Uidoyen helps growing businesses automate repetitive work, streamline operations, and build AI-powered systems that save time and improve customer experiences.",
  keywords: [
    "AI automation",
    "business automation",
    "AI business systems",
    "workflow automation",
    "WhatsApp automation",
    "AI agents",
    "internal tools",
    "business applications",
    "CRM automation",
    "product engineering",
    "Uidoyen",
  ],
  authors: [{ name: "Uidoyen" }],
  creator: "Uidoyen",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Uidoyen",
    title: "Uidoyen – AI Automation & Business Systems",
    description:
      "Uidoyen helps growing businesses automate repetitive work, streamline operations, and build AI-powered business systems that improve efficiency and customer experiences.",
    images: [
      {
        url: "/assets/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Uidoyen – AI Automation & Business Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Uidoyen – AI Automation & Business Systems",
    description:
      "Uidoyen helps growing businesses automate repetitive work, streamline operations, and build AI-powered business systems.",
    images: ["/assets/images/og-image.png"],
    creator: "@uidoyen",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ── Google Fonts preconnect (reduces font RTT) ──────────────── */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* ── Google Analytics ──────────────────────────────────────── */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QDDD9BNQ92"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QDDD9BNQ92');
          `}
        </Script>
      </head>
      <body>
        <HeaderChrome />
        <div id="smooth-wrapper">
          <Header />
          <HeaderThemeController />
          <div id="smooth-content">
            {children}
            <Footer />
          </div>
        </div>
        <LegacyScripts />
      </body>
    </html>
  );
}
