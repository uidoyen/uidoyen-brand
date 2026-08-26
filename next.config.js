/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // ── Core Service Mappings ──────────────────────────────────────────
      {
        source: "/services",
        destination: "/service",
        permanent: true, // HTTP 308
      },
      {
        source: "/services/:slug*",
        destination: "/service/:slug*",
        permanent: true, // HTTP 308
      },

      // ── Page Slug Mappings ─────────────────────────────────────────────
      {
        source: "/about-us",
        destination: "/about",
        permanent: true, // HTTP 308
      },
      {
        source: "/contact-us",
        destination: "/contact",
        permanent: true, // HTTP 308
      },
      {
        source: "/careers",
        destination: "/career",
        permanent: true, // HTTP 308
      },

      // ── Blog & Article Mappings ────────────────────────────────────────
      {
        source: "/articles",
        destination: "/blog",
        permanent: true, // HTTP 308
      },
      {
        source: "/articles/:slug*",
        destination: "/blog/:slug*",
        permanent: true, // HTTP 308
      },
      {
        source: "/posts/:slug*",
        destination: "/blog/:slug*",
        permanent: true, // HTTP 308
      },
      {
        source: "/post/:slug*",
        destination: "/blog/:slug*",
        permanent: true, // HTTP 308
      },

      // ── Portfolio & Work Mappings ──────────────────────────────────────
      {
        source: "/work",
        destination: "/portfolio",
        permanent: true, // HTTP 308
      },
      {
        source: "/work/:slug*",
        destination: "/portfolio/:slug*",
        permanent: true, // HTTP 308
      },
      {
        source: "/case-studies",
        destination: "/portfolio",
        permanent: true, // HTTP 308
      },
      {
        source: "/case-studies/:slug*",
        destination: "/portfolio/:slug*",
        permanent: true, // HTTP 308
      },
      {
        source: "/projects/:slug*",
        destination: "/portfolio/:slug*",
        permanent: true, // HTTP 308
      },

      // ── Legacy Extensions (.html / .php) ──────────────────────────────
      {
        source: "/:path*.html",
        destination: "/:path*",
        permanent: true, // HTTP 308
      },
      {
        source: "/:path*.php",
        destination: "/:path*",
        permanent: true, // HTTP 308
      },
    ];
  },
};

export default nextConfig;
