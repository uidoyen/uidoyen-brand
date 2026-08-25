import Script from "next/script";
import "./globals.css";
import Header, { HeaderChrome } from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import HeaderThemeController from "./components/HeaderThemeController.jsx";
import LegacyScripts from "./components/LegacyScripts.jsx";

export const metadata = {
  title: "Uidoyen - AI Automation & Business Systems",
  description:
    "Uidoyen helps growing businesses automate repetitive work, streamline operations, and build AI-powered business systems that improve efficiency and customer experiences.",
  keywords: [
    "AI automation",
    "business automation",
    "AI business systems",
    "workflow automation",
    "WhatsApp automation",
    "AI agents",
    "internal tools",
    "business applications",
    "Uidoyen",
  ],
  verification: {
    google: "68ujtA-fCziSQf6SqXWvk28oSN5TkT_aQkJa2BPJSf8",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="68ujtA-fCziSQf6SqXWvk28oSN5TkT_aQkJa2BPJSf8"
        />
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
