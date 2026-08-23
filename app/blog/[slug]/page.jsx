import { notFound } from "next/navigation";
import {
  formatPostDate,
  getAllPosts,
  getPostBySlug,
  markdownToBlocks,
} from "../../lib/blog.js";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) return {};

  return {
    title: `${post.title} | Uidoyen Blog`,
    description: post.excerpt,
  };
}

function MarkdownBlock({ block }) {
  if (block.type === "heading") {
    return <h4>{block.text}</h4>;
  }

  if (block.type === "quote") {
    return (
      <blockquote>
        <img src="/assets/images/icons/blockquote.svg" alt="blockquote" />
        <div className="text">
          <p>{block.text}</p>
        </div>
      </blockquote>
    );
  }

  if (block.type === "image") {
    return (
      <div className="uidoyen-single-thumb overflow-hidden">
        <img
          src={block.src}
          alt={block.alt}
          data-speed="0.8"
          className="w-100"
        />
      </div>
    );
  }

  if (block.type === "list") {
    return (
      <ul>
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }

  return <p className="blog-text">{block.text}</p>;
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getAllPosts()
    .filter((item) => item.slug !== post.slug)
    .slice(0, 3);

  return (
    <>
      <section className="blog-page-sec blog-detail-page section-padding-bottom">
        <div className="container custom-container">
          <div className="row">
            <div className="col-12">
              <div className="blog-item-wrapper">
                <div className="blog-item blog-item-details">
                  <div className="row justify-content-center row-padding-bottom">
                    <div className="col-xl-9 col-xxl-9">
                      <div
                        className="title-box blog-title move-anim"
                        data-delay="0.45"
                      >
                        <h2>{post.title}</h2>
                      </div>
                      <div className="meta-box">
                        <ul className="custom-ul meta-info d-flex">
                          <li>
                            <span>
                              <a href="/blog">{formatPostDate(post.date)}</a>
                            </span>
                          </li>
                          <li>
                            <span>
                              <a href="/blog">{post.category}</a>
                            </span>
                          </li>
                          <li>
                            <span>
                              <a href="/blog">by {post.author}</a>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="img-box overflow-hidden">
                    <img
                      src={post.heroImage || post.image}
                      alt={post.title}
                      data-speed="0.8"
                      className="w-100 d-block"
                    />
                  </div>
                  <div className="content-box row-padding-top">
                    <div className="row justify-content-center social-links-scroll position-relative">
                      <div className="col-xl-9 col-xxl-8">
                        <div className="blog-body">
                          {markdownToBlocks(post.content).map(
                            (block, index) => (
                              <MarkdownBlock
                                block={block}
                                key={`${block.type}-${index}`}
                              />
                            ),
                          )}
                        </div>
                        {post.tags?.length ? (
                          <div className="blog-tags">
                            <ul className="custom-ul">
                              {post.tags.map((tag) => (
                                <li key={tag}>
                                  <a href="/blog">{tag}</a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ) : null}

                        {/* Comments Section */}
                        <div className="blog-comments row-margin-top">
                          <h4>2 Comments</h4>
                          <ul className="custom-ul">
                            <li className="comment-item">
                              <div className="post-comment">
                                <div className="comment-avater">
                                  <img
                                    src="/assets/images/blog/comment-avater.png"
                                    alt="Tony Lixivel"
                                  />
                                </div>
                                <div className="comment-content">
                                  <h6 className="name">Tony Lixivel</h6>
                                  <span className="commented-on">
                                    December 3, 2024 | 9:32 am
                                  </span>
                                  <p className="text">
                                    Great insights on workflow automation and team productivity! 
                                    Integrating smart AI triggers transformed how our team handles daily operations.
                                  </p>
                                  <div className="reply_and_edit">
                                    <a
                                      className="uidoyen-link-btn"
                                      href="#respond"
                                    >
                                      Reply
                                      <span>
                                        <i className="fa-solid fa-arrow-right arry1"></i>
                                        <i className="fa-solid fa-arrow-right arry2"></i>
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <ul className="custom-ul children">
                                <li className="comment-item">
                                  <div className="post-comment">
                                    <div className="comment-avater">
                                      <img
                                        src="/assets/images/blog/comment-avater2.png"
                                        alt="Audrey Tassel"
                                      />
                                    </div>
                                    <div className="comment-content">
                                      <h6 className="name">Audrey Tassel</h6>
                                      <span className="commented-on">
                                        December 3, 2024 | 10:12 am
                                      </span>
                                      <p className="text">
                                        Totally agree! Designing user-centric internal tools makes a huge difference in adoption.
                                      </p>
                                      <div className="reply_and_edit">
                                        <a
                                          className="uidoyen-link-btn"
                                          href="#respond"
                                        >
                                          Reply
                                          <span>
                                            <i className="fa-solid fa-arrow-right arry1"></i>
                                            <i className="fa-solid fa-arrow-right arry2"></i>
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>

                        {/* Comment Form Section */}
                        <div className="blog-contact-form row-margin-top" id="respond">
                          <h4>Leave a reply</h4>
                          <p>
                            Your email address will not be published. Required
                            fields are marked *
                          </p>
                          <form
                            className="uidoyen-cform row-margin-top"
                            autoComplete="off"
                          >
                            <div className="row g-3">
                              <div className="col-md-6">
                                <div className="mb-2">
                                  <input
                                    type="text"
                                    id="firstn"
                                    name="firstn"
                                    className="form-control"
                                    placeholder="Your name *"
                                    required
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="mb-2">
                                  <input
                                    type="email"
                                    id="lastn"
                                    name="lastn"
                                    className="form-control"
                                    placeholder="Enter your e-mail address *"
                                    required
                                  />
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="mb-2">
                                  <textarea
                                    name="message"
                                    id="message"
                                    className="form-control"
                                    rows={6}
                                    placeholder="Write your comment..."
                                    required
                                  ></textarea>
                                </div>
                              </div>
                              <div className="col-12 mt-4">
                                <button
                                  type="submit"
                                  className="uidoyen-link-btn btn-pill mt-2"
                                >
                                  Submit Now
                                  <span>
                                    <i className="fa-solid fa-arrow-right arry1"></i>
                                    <i className="fa-solid fa-arrow-right arry2"></i>
                                  </span>
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {relatedPosts.length ? (
        <section className="uidoyen-blog-section section-padding-bottom overflow-hidden">
          <div className="container custom-container">
            <div className="row">
              <div className="col-12">
                <div className="uidoyen__header text-center text-md-start row-padding-bottom">
                  <h3
                    className="title fade-anim"
                    data-delay="0.30"
                    data-direction="left"
                  >
                    More articles
                  </h3>
                </div>
              </div>
            </div>
            <div className="row gx-4 gy-5">
              {relatedPosts.map((relatedPost, index) => (
                <div className="col-md-6 col-lg-4" key={relatedPost.slug}>
                  <div
                    className="uidoyen-blog-box fade-anim"
                    data-delay={(0.3 + index * 0.15).toFixed(2)}
                    data-direction="right"
                  >
                    <div className="uidoyen-blog-thumb">
                      <a href={`/blog/${relatedPost.slug}`}>
                        <img src={relatedPost.image} alt={relatedPost.title} />
                      </a>
                    </div>
                    <div className="uidoyen-blog-content">
                      <h5 className="line-clamp-2">
                        <a href={`/blog/${relatedPost.slug}`}>
                          {relatedPost.title}
                        </a>
                      </h5>
                      <span className="uidoyen-blog-date">
                        {formatPostDate(relatedPost.date)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
