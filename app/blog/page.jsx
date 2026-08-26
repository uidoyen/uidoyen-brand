import BlogIndex from "./BlogIndex.jsx";

export const metadata = {
  title: "Blog – AI Automation Insights, Tips & Business Growth",
  description:
    "Read the latest Uidoyen articles on AI automation, business systems, workflow optimization, and practical strategies to help your business grow.",
  keywords: [
    "AI automation blog",
    "business automation tips",
    "AI insights",
    "workflow automation guide",
    "business growth strategies",
    "Uidoyen blog",
  ],
  openGraph: {
    title: "Blog – AI Automation Insights, Tips & Business Growth",
    description:
      "Read the latest Uidoyen articles on AI automation, business systems, and practical strategies to grow your business.",
    url: "https://uidoyen.com/blog",
  },
  alternates: {
    canonical: "https://uidoyen.com/blog",
  },
};

export default function BlogPage() {
  return <BlogIndex currentPage={1} />;
}
