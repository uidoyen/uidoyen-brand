import { formatPostDate, getAllPosts } from "../lib/blog.js";

export const POSTS_PER_PAGE = 6;

export function getTotalBlogPages() {
  return Math.ceil(getAllPosts().length / POSTS_PER_PAGE);
}

function getPageHref(page) {
  return page === 1 ? "/blog" : `/blog/page/${page}`;
}

export default function BlogIndex({ currentPage = 1 }) {
  const posts = getAllPosts();
  const totalPages = getTotalBlogPages();
  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const pagePosts = posts.slice(start, start + POSTS_PER_PAGE);

  return (
    <>
      {/* Hero section Start */}
      <section className="uidoyen-hero-blog-section section-padding-bottom overflow-hidden">
        <div className="container custom-container">
          <div className="row g-4">
            <div className="col-lg-12 col-xxl-11">
              <div className="uidoyen-hero-blog__content move-anim" data-delay="0.45">
                <h1 className="title">Explore latest news and insights</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero section End */}

      {/* Blog section Start */}
      <section className="uidoyen-blog-section section-padding-bottom overflow-hidden">
        <div className="container custom-container">
          <div className="row g-4 g-xl-6 uidoyen-blog3__row overflow-hidden">
            {pagePosts.map((post, index) => (
              <div className="col-xl-6" key={post.slug}>
                <div
                  className={`uidoyen-blog-box style-2 fade-anim ${
                    index < pagePosts.length - 2 ? "border-bottom-style" : ""
                  }`}
                  data-delay={(0.3 + Math.min(index, 2) * 0.15).toFixed(2)}
                  data-direction="right"
                >
                  <div className="uidoyen-blog-content">
                    <span className="uidoyen-blog-date">{formatPostDate(post.date)}</span>
                    <h2 className="line-clamp-3">
                      <a href={`/blog/${post.slug}`}>{post.title}</a>
                    </h2>

                    <a
                      className="uidoyen-link-btn"
                      href={`/blog/${post.slug}`}
                      aria-label={`Read more about ${post.title}`}
                    >
                      Read more
                      <span>
                        <i className="fa-solid fa-arrow-right arry1"></i>
                        <i className="fa-solid fa-arrow-right arry2"></i>
                      </span>
                    </a>
                  </div>
                  <div className="uidoyen-blog-thumb">
                    <a
                      className="d-inline-block overflow-hidden"
                      href={`/blog/${post.slug}`}
                    >
                      <img src={post.image} alt={post.title} className="w-100" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {totalPages > 1 ? (
            <div className="row row-padding-top">
              <div className="col-12">
                <div className="blog-pagination">
                  <nav aria-label="Blog pagination">
                    <ul className="pagination justify-content-end align-items-center custom-ul">
                      {currentPage > 1 ? (
                        <li className="page-item">
                          <a className="page-link prev" href={getPageHref(currentPage - 1)}>
                            <i className="fa-solid fa-arrow-left"></i>
                            Prev
                          </a>
                        </li>
                      ) : null}
                      {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                        (page) => (
                          <li className="page-item" key={page}>
                            <a
                              aria-current={page === currentPage ? "page" : undefined}
                              className={`page-link ${
                                page === currentPage ? "active" : ""
                              }`}
                              href={getPageHref(page)}
                            >
                              {page}
                            </a>
                          </li>
                        )
                      )}
                      {currentPage < totalPages ? (
                        <li className="page-item">
                          <a className="page-link next" href={getPageHref(currentPage + 1)}>
                            Next
                            <i className="fa-solid fa-arrow-right"></i>
                          </a>
                        </li>
                      ) : null}
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </section>
      {/* Blog section End */}

          </>
  );
}
