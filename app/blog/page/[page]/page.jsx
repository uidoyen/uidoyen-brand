import { notFound } from "next/navigation";
import BlogIndex, { getTotalBlogPages } from "../../BlogIndex.jsx";

export const dynamicParams = false;

export function generateStaticParams() {
  const totalPages = getTotalBlogPages();

  return Array.from({ length: Math.max(0, totalPages - 1) }, (_, index) => ({
    page: String(index + 2),
  }));
}

export async function generateMetadata({ params }) {
  const { page } = await params;

  return {
    title: `Blog - Page ${page} | Uidoyen`,
    description: "Read the latest Uidoyen articles, ideas, and insights.",
  };
}

export default async function BlogPaginatedPage({ params }) {
  const { page } = await params;
  const currentPage = Number(page);
  const totalPages = getTotalBlogPages();

  if (
    !Number.isInteger(currentPage) ||
    currentPage < 2 ||
    currentPage > totalPages
  ) {
    notFound();
  }

  return <BlogIndex currentPage={currentPage} />;
}
