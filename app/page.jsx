export const metadata = {
  title: {
    absolute:
      "Uidoyen – AI Automation & Business Systems for Growing Businesses",
  },
  description:
    "Uidoyen automates business workflows with AI. We build AI-powered systems, WhatsApp automation, CRM tools, internal apps, and customer experiences that save time and boost growth.",
  keywords: [
    "AI automation agency",
    "business workflow automation",
    "WhatsApp automation",
    "AI-powered business systems",
    "CRM automation",
    "lead follow-up automation",
    "internal business apps",
    "AI customer experience",
    "product engineering",
    "Uidoyen",
  ],
  openGraph: {
    title: "Uidoyen – AI Automation & Business Systems for Growing Businesses",
    description:
      "Uidoyen automates business workflows with AI. We build AI-powered systems, WhatsApp automation, CRM tools, and customer experiences that save time and boost growth.",
    url: "/",
  },
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      {/* Hero section Start */}
      <section
        className="uidoyen-hero2-section bg-color-primary section-padding-bottom"
        data-bg-src="/assets/images/hero/ryunosuke-kikuno-v7xw4p7KdFQ-unsplash.jpg"
      >
        <div className="container custom-container">
          <div className="row align-items-end">
            <div className="col-lg-10">
              <div className="hero2-content">
                <h1 className="text-color-white move-anim" data-delay="0.45">
                  We automate <br />
                  business <br />
                  workflows <br />
                  with AI
                </h1>

                <p className="word-anim" data-delay="1">
                  Uidoyen helps growing businesses automate repetitive work,
                  streamline operations, and build AI-powered systems that save
                  time and improve customer experiences.
                </p>

                <div
                  className="hero-actions d-flex flex-wrap gap-2 gap-md-2 mt-4 move-anim"
                  data-delay="1"
                  data-direction="bottom"
                >
                  <a
                    href="/contact"
                    className="uidoyen-link-btn btn-pill btn-light"
                  >
                    Automate Your Business
                  </a>
                  <span
                    style={{ width: "10px", display: "inline-block" }}
                  ></span>
                  <a
                    href="/service"
                    className="uidoyen-link-btn btn-pill btn-light"
                  >
                    See What We Automate
                    <span>
                      <i className="fa-solid fa-arrow-right arry1"></i>
                      <i className="fa-solid fa-arrow-right arry2"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero section End */}

      {/* Service section Start */}
      <section
        className="uidoyen-service2-section section-padding-top-bottom overflow-hidden"
        id="service-section"
      >
        <div className="container custom-container">
          <div className="row gx-2 gy-3 justify-content-between">
            <div className="col-12 col-xl-6 col-xxl-6">
              <div className="uidoyen__header service_hero_title text-center text-lg-start">
                <h2 className="title move-anim mb-4">
                  Automate the work that slows your business down
                </h2>
                <p className="w-75">
                  From lead follow-ups to internal operations, we design and
                  build AI-powered systems around the way your business actually
                  works.
                </p>
              </div>
            </div>
            <div className="col-12 col-xl-6 col-xxl-6">
              <div className="row g-114 uidoyen-service2__row">
                <div
                  className="col-md-6 fade-anim"
                  data-delay="0.30"
                  data-direction="right"
                >
                  <div className="uidoyen-service-box style-2">
                    <div className="uidoyen-iconbox-icon">
                      <img
                        src="/assets/images/service/service-icon-1.svg"
                        alt="service-icon"
                      />
                    </div>
                    <div className="uidoyen-iconbox-data">
                      <div className="uidoyen-iconbox-data-wrapper">
                        <h3>AI Automation</h3>
                        <p>
                          Automate lead qualification, WhatsApp conversations,
                          follow-ups, emails, CRM updates, and repetitive
                          business workflows.
                        </p>
                      </div>
                      <a
                        className="uidoyen-link-btn"
                        href="/service/ai-automation"
                      >
                        Explore AI Automation
                        <span>
                          <i className="fa-solid fa-arrow-right arry1"></i>
                          <i className="fa-solid fa-arrow-right arry2"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-6 fade-anim"
                  data-delay="0.45"
                  data-direction="right"
                >
                  <div className="uidoyen-service-box style-2">
                    <div className="uidoyen-iconbox-icon">
                      <img
                        src="/assets/images/service/service-icon-2.svg"
                        alt="service-icon"
                      />
                    </div>
                    <div className="uidoyen-iconbox-data">
                      <div className="uidoyen-iconbox-data-wrapper">
                        <h3>Business Applications</h3>
                        <p>
                          Replace spreadsheets and disconnected tools with
                          custom dashboards, CRM systems, portals, approval
                          workflows, and internal business apps.
                        </p>
                      </div>
                      <a
                        className="uidoyen-link-btn"
                        href="/service/business-applications"
                      >
                        See Business Applications
                        <span>
                          <i className="fa-solid fa-arrow-right arry1"></i>
                          <i className="fa-solid fa-arrow-right arry2"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-6 fade-anim"
                  data-delay="0.60"
                  data-direction="right"
                >
                  <div className="uidoyen-service-box style-2">
                    <div className="uidoyen-iconbox-icon">
                      <img
                        src="/assets/images/service/service-icon-3.svg"
                        alt="service-icon"
                      />
                    </div>
                    <div className="uidoyen-iconbox-data">
                      <div className="uidoyen-iconbox-data-wrapper">
                        <h3>AI Customer Experiences</h3>
                        <p>
                          Build smarter customer experiences with AI assistants,
                          intelligent search, recommendations, support
                          automation, and personalized interactions.
                        </p>
                      </div>
                      <a
                        className="uidoyen-link-btn"
                        href="/service/ai-customer-systems"
                      >
                        See Customer Solutions
                        <span>
                          <i className="fa-solid fa-arrow-right arry1"></i>
                          <i className="fa-solid fa-arrow-right arry2"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-6 fade-anim"
                  data-delay="0.75"
                  data-direction="right"
                >
                  <div className="uidoyen-service-box style-2">
                    <div className="uidoyen-iconbox-icon">
                      <img
                        src="/assets/images/service/service-icon-4.svg"
                        alt="service-icon"
                      />
                    </div>
                    <div className="uidoyen-iconbox-data">
                      <div className="uidoyen-iconbox-data-wrapper">
                        <h3>Product Engineering</h3>
                        <p>
                          Design and build production-ready web and mobile
                          products with UX/UI, scalable architecture, AI
                          integration, and cloud deployment.
                        </p>
                      </div>
                      <a
                        className="uidoyen-link-btn"
                        href="/service/product-engineering"
                      >
                        See Product Engineering
                        <span>
                          <i className="fa-solid fa-arrow-right arry1"></i>
                          <i className="fa-solid fa-arrow-right arry2"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service section Start */}

      {/* Project section Start */}
      <section className="uidoyen-project-section section-padding-bottom overflow-hidden">
        <div className="container custom-container">
          <div className="row">
            <div className="col-12">
              <div className="uidoyen__header text-center">
                <h2 className="title move-anim">Selected work</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="project-horizontal-scrolling horizontal-scroll">
                {/* Project 01 */}
                <div className="uidoyen-project-box scroll-item overflow-hidden">
                  <a href="/portfolio/ai-leadflow">
                    <div className="uidoyen-project-thumb overflow-hidden">
                      <img
                        src="/assets/images/project/project-2-1.png"
                        alt="AI LeadFlow - AI lead qualification and follow-up system"
                        className="w-100 img_reveal"
                      />
                    </div>
                  </a>

                  <div className="uidoyen-project-content">
                    <h3 className="line-clamp-1">
                      <a href="/portfolio/ai-leadflow">AI LeadFlow</a>
                    </h3>

                    <span className="uidoyen-project-date text-color-primary">
                      AI Automation
                      <i className="bi bi-dash"></i>
                      Sales
                    </span>
                  </div>
                </div>

                {/* Project 02 */}
                <div className="uidoyen-project-box scroll-item overflow-hidden">
                  <a href="/portfolio/opspilot">
                    <div className="uidoyen-project-thumb overflow-hidden">
                      <img
                        src="/assets/images/project/project-2-2.png"
                        alt="OpsPilot - internal business operations platform"
                        className="w-100 img_reveal"
                      />
                    </div>
                  </a>

                  <div className="uidoyen-project-content">
                    <h3 className="line-clamp-1">
                      <a href="/portfolio/opspilot">OpsPilot</a>
                    </h3>

                    <span className="uidoyen-project-date text-color-primary">
                      Business Application
                      <i className="bi bi-dash"></i>
                      Operations
                    </span>
                  </div>
                </div>

                {/* Project 03 */}
                <div className="uidoyen-project-box scroll-item overflow-hidden">
                  <a href="/portfolio/supportai">
                    <div className="uidoyen-project-thumb overflow-hidden">
                      <img
                        src="/assets/images/project/project-2-3.png"
                        alt="SupportAI - AI customer support platform"
                        className="w-100 img_reveal"
                      />
                    </div>
                  </a>

                  <div className="uidoyen-project-content">
                    <h3 className="line-clamp-1">
                      <a href="/portfolio/supportai">SupportAI</a>
                    </h3>

                    <span className="uidoyen-project-date text-color-primary">
                      AI Customer Experience
                      <i className="bi bi-dash"></i>
                      Support
                    </span>
                  </div>
                </div>

                {/* Project 04 */}
                <div className="uidoyen-project-box scroll-item overflow-hidden">
                  <a href="/portfolio/salespulse">
                    <div className="uidoyen-project-thumb overflow-hidden">
                      <img
                        src="/assets/images/project/project-2-4.png"
                        alt="SalesPulse - AI-powered sales dashboard"
                        className="w-100 img_reveal"
                      />
                    </div>
                  </a>

                  <div className="uidoyen-project-content">
                    <h3 className="line-clamp-1">
                      <a href="/portfolio/salespulse">SalesPulse</a>
                    </h3>

                    <span className="uidoyen-project-date text-color-primary">
                      Business Application
                      <i className="bi bi-dash"></i>
                      CRM
                    </span>
                  </div>
                </div>

                {/* Project 05 */}
                <div className="uidoyen-project-box scroll-item overflow-hidden">
                  <a href="/portfolio/docuflow-ai">
                    <div className="uidoyen-project-thumb overflow-hidden">
                      <img
                        src="/assets/images/project/project-2-5.png"
                        alt="DocuFlow AI - intelligent document processing system"
                        className="w-100 img_reveal"
                      />
                    </div>
                  </a>

                  <div className="uidoyen-project-content">
                    <h3 className="line-clamp-1">
                      <a href="/portfolio/docuflow-ai">DocuFlow AI</a>
                    </h3>

                    <span className="uidoyen-project-date text-color-primary">
                      AI Automation
                      <i className="bi bi-dash"></i>
                      Documents
                    </span>
                  </div>
                </div>

                {/* Project 06 */}
                <div className="uidoyen-project-box scroll-item overflow-hidden">
                  <a href="/portfolio/clinicflow">
                    <div className="uidoyen-project-thumb overflow-hidden">
                      <img
                        src="/assets/images/project/project-2-6.png"
                        alt="ClinicFlow - automated appointment and customer workflow"
                        className="w-100 img_reveal"
                      />
                    </div>
                  </a>

                  <div className="uidoyen-project-content">
                    <h3 className="line-clamp-1">
                      <a href="/portfolio/clinicflow">ClinicFlow</a>
                    </h3>

                    <span className="uidoyen-project-date text-color-primary">
                      Business Automation
                      <i className="bi bi-dash"></i>
                      Healthcare
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row row-padding-top">
            <div className="coll-12 text-center">
              <a className="uidoyen-link-btn btn-pill" href="/portfolio">
                View all solutions
                <span>
                  <i className="fa-solid fa-arrow-right arry1"></i>
                  <i className="fa-solid fa-arrow-right arry2"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Project section end */}

      {/* About section Start */}
      <section className="uidoyen-about-area2 bg-color-2 section-padding-top">
        <div className="container custom-container">
          <div className="row">
            <div className="col-xl-9 col-xxl-8 mx-auto">
              <div className="uidoyen__header text-center text-lg-start">
                <h2 className="title move-anim">
                  We don't automate for the sake of AI. We automate what makes
                  your business better.
                </h2>
              </div>
            </div>
          </div>
          <div className="row g-4 justify-content-between row-padding-top overflow-hidden">
            <div className="col-md-6 col-xl-5 col-xxl-4 d-flex align-items-xl-center order-1 order-xl-0 overflow-hidden">
              <div className="overflow-hidden">
                <img
                  src="/assets/images/about/about-thumb-2-1.png"
                  alt="about-thumb"
                  data-speed="0.8"
                  className="w-100 img_reveal"
                />
              </div>
            </div>
            <div className="col-xl-5 col-xxl-4 order-0 order-xl-1">
              <div className="section-content">
                <p className="move-anim" data-duration="0.01">
                  We start by understanding how your business works, where time
                  is being lost, and which processes can be improved. Then we
                  design and build practical AI-powered systems around your real
                  workflows.
                </p>
                <p className="move-anim" data-duration="0.01">
                  From automating repetitive tasks to building internal
                  applications and customer-facing experiences, we focus on
                  solutions that are useful, measurable, and built to grow with
                  your business.
                </p>
                <a className="uidoyen-link-btn" href="/about">
                  How we work
                  <span>
                    <i className="fa-solid fa-arrow-right arry1"></i>
                    <i className="fa-solid fa-arrow-right arry2"></i>
                  </span>
                </a>

                <figure className="overflow-hidden">
                  <div className="overflow-hidden">
                    <img
                      src="/assets/images/about/about-thumb-2-2.png"
                      alt="about-thumb"
                      data-speed="0.8"
                      className="img_reveal"
                    />
                  </div>
                </figure>
              </div>
            </div>
            <div className="col-md-6 col-xl-2 d-flex align-items-xl-center order-xl-2 overflow-hidden">
              <div className="overflow-hidden">
                <img
                  src="/assets/images/about/about-thumb-2-3.png"
                  alt="about-thumb"
                  data-speed="0.8"
                  className="w-100 img_reveal"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About section Start */}

      {/* Blog section Start */}
      <div className="uidoyen-blog2-section section-padding-top section-padding-bottom">
        <div className="container custom-container">
          <div className="row g-4">
            <div className="col-12 col-xl-6 col-xxl-5 gsap-sticky">
              <div className="uidoyen__header text-center text-lg-start">
                <h2 className="title">Our latest news and insights</h2>
              </div>
            </div>
            <div className="col-12 col-xl-6 col-xxl-6 gsap-scroll">
              <div className="row uidoyen-blog2__row">
                <div className="col-12">
                  <div
                    className="uidoyen-blog-box style-2 border-bottom-style fade-anim"
                    data-delay="0.30"
                    data-direction="right"
                  >
                    <div className="uidoyen-blog-content">
                      <span className="uidoyen-blog-date">March 8, 2024</span>
                      <h3 className="line-clamp-3">
                        <a href="/blog/brand-audit">
                          Reveal business opportunities with our five point
                          brand audit
                        </a>
                      </h3>

                      <a
                        className="uidoyen-link-btn"
                        href="/blog/brand-audit"
                        aria-label="Read more about Reveal business opportunities with our five point brand audit"
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
                        href="/blog/brand-audit"
                      >
                        <img
                          src="/assets/images/blog/blog-thumb-1.png"
                          alt="blog-thumb"
                          className="w-100"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div
                    className="uidoyen-blog-box style-2 border-bottom-style fade-anim"
                    data-delay="0.45"
                    data-direction="right"
                  >
                    <div className="uidoyen-blog-content">
                      <span className="uidoyen-blog-date">March 8, 2024</span>
                      <h3 className="line-clamp-3">
                        <a href="/blog/ai-driven-agency-workflows">
                          Uidoyen agency revolutionizes work with the power of
                          ai-driven
                        </a>
                      </h3>

                      <a
                        className="uidoyen-link-btn"
                        href="/blog/ai-driven-agency-workflows"
                        aria-label="Read more about Uidoyen agency revolutionizes work with the power of ai-driven"
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
                        href="/blog/ai-driven-agency-workflows"
                      >
                        <img
                          src="/assets/images/blog/blog-thumb-2.png"
                          alt="blog-thumb"
                          className="w-100"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div
                    className="uidoyen-blog-box style-2 fade-anim"
                    data-delay="0.60"
                    data-direction="right"
                  >
                    <div className="uidoyen-blog-content">
                      <span className="uidoyen-blog-date">March 8, 2024</span>
                      <h3 className="line-clamp-3">
                        <a href="/blog/young-leaders-growth">
                          How young leaders can take charge of their
                          professional growth
                        </a>
                      </h3>

                      <a
                        className="uidoyen-link-btn"
                        href="/blog/young-leaders-growth"
                        aria-label="Read more about How young leaders can take charge of their professional growth"
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
                        href="/blog/young-leaders-growth"
                      >
                        <img
                          src="/assets/images/blog/blog-thumb-3.png"
                          alt="blog-thumb"
                          className="w-100"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Blog section End */}
    </>
  );
}
