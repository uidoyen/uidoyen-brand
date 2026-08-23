import { notFound } from "next/navigation";
import {
  getAllProjects,
  getProjectBySlug,
  markdownToParagraphs,
} from "../../lib/portfolio.js";

export function generateStaticParams() {
  return getAllProjects().map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return {};

  return {
    title: `${project.title} | Uidoyen Portfolio`,
    description: project.excerpt,
  };
}

export default async function PortfolioProjectPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const paragraphs = markdownToParagraphs(project.content);

  return (
    <>
      {/* Hero section Start */}
      <section className="uidoyen-hero-common-section section-padding-bottom overflow-hidden">
        <div className="container custom-container">
          <div className="row g-4">
            <div className="col-lg-12 col-xxl-11">
              <div className="uidoyen-hero-common__content move-anim" data-delay="0.45">
                <h1 className="title">{project.title}</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero section End */}

      {/* Image section Start */}
      <div className="uidoyen-image-area style-2 overflow-hidden">
        <div className="container custom-container position-relative">
          <a
            href="#uidoyen-portfolio-details-section"
            className="scroll-down section-link"
          >
            Scroll down
            <img src="/assets/images/icons/scroll-down.svg" alt="Scroll down" />
          </a>
          <div className="row">
            <div className="col-12">
              <div className="uidoyen-hero__thumb text-end">
                <img
                  src={project.heroImage || project.image}
                  alt={project.title}
                  data-speed="0.8"
                  className="d-block w-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Image section End */}

      {/* Portfolio Details section Start */}
      <div
        id="uidoyen-portfolio-details-section"
        className="uidoyen-portfolio-details-section section-padding-top-bottom"
      >
        <div className="container custom-container">
          <div className="row g-4 justify-content-between">
            <div className="col-lg-4">
              <h2 className="portfolio-details__title move-anim" data-delay="0.45">
                Project overview
              </h2>
            </div>
            <div className="col-lg-6">
              <div className="portfolio-details__content">
                {paragraphs.map((paragraph, index) => (
                  <p
                    className={index > 0 ? "portfolio-text move-anim" : "move-anim"}
                    data-delay="0.45"
                    key={paragraph}
                  >
                    {paragraph}
                  </p>
                ))}
                <a className="uidoyen-link-btn" href={project.liveUrl || "/"}>
                  Visit live website
                  <span>
                    <i className="fa-solid fa-arrow-right arry1"></i>
                    <i className="fa-solid fa-arrow-right arry2"></i>
                  </span>
                </a>
              </div>
              <div className="portfolio-details__info row-padding-top">
                <div className="portfolio-details-box fade-anim" data-delay="0.2">
                  <span className="title">Category</span>
                  <h6 className="info">{project.category}</h6>
                </div>
                <div className="portfolio-details-box fade-anim" data-delay="0.4">
                  <span className="title">Service</span>
                  <h6 className="info">{project.service}</h6>
                </div>
                <div className="portfolio-details-box fade-anim" data-delay="0.6">
                  <span className="title">Date</span>
                  <h6 className="info">{project.date}</h6>
                </div>
                <div className="portfolio-details-box fade-anim" data-delay="0.8">
                  <span className="title">Client</span>
                  <h6 className="info">{project.client}</h6>
                </div>
                <div className="portfolio-details-box fade-anim" data-delay="1">
                  <span className="title">Software</span>
                  <h6 className="info">{project.software}</h6>
                </div>
              </div>
            </div>
          </div>
          {project.gallery?.length ? (
            <div className="row g-3 g-lg-4 section-padding-top">
              {project.gallery.map((image, index) => (
                <div
                  className={index === 2 ? "col-12 overflow-hidden" : "col-sm-6 overflow-hidden"}
                  key={image}
                >
                  <img
                    src={image}
                    alt={`${project.title} figure ${index + 1}`}
                    data-speed="0.8"
                    className="w-100"
                  />
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
      {/* Portfolio Details section End */}

          </>
  );
}
