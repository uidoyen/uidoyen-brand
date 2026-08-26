export default function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://uidoyen.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/404"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
