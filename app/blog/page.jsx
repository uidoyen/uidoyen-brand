import BlogIndex from "./BlogIndex.jsx";

export const metadata = {
  title: "Blog | Uidoyen",
  description: "Read the latest Uidoyen articles, ideas, and insights.",
};

export default function BlogPage() {
  return <BlogIndex currentPage={1} />;
}
