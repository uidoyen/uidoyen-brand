import { getAllProjects } from "../lib/portfolio.js";

export const metadata = {
  title: "Selected Work & Case Studies | Uidoyen",
  description: "Explore our selected projects in AI automation, custom business applications, and AI customer experiences.",
};

export default function PortfolioPage() {
  const projects = getAllProjects();

  return (
    <>
      {/* Hero section Start */}
      <section className="uidoyen-hero-section section-padding-bottom overflow-hidden">
        <div className="container custom-container">
          <div className="row g-4">
            <div className="col-lg-12 col-xxl-11">
              <div
                className="uidoyen-hero-common__content move-anim"
                data-delay="0.45"
              >
                <h1 className="title">
                  Selected Work &amp; Case Studies
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero section End */}

      {/* Project section Start */}
      <section className="uidoyen-project-section bg-color-white section-padding-bottom">
        <div className="container custom-container">
          <div className="row">
            <div className="col-12">
              <div className="uidoyen-project-gard-row">
                {projects.map((project) => (
                  <div className="uidoyen-project-box2 overflow-hidden" key={project.slug}>
                    <div className="uidoyen-project-thumb overflow-hidden order-0 order-md-1">
                      <a href={`/portfolio/${project.slug}`}>
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-100 img_reveal"
                        />
                      </a>
                    </div>
                    <div className="uidoyen-project-content order-1 order-md-0">
                      <div className="top-content">
                        <h4 className="text-color-primary line-clamp-1">
                          <a href={`/portfolio/${project.slug}`}>{project.title}</a>
                        </h4>
                        <p>{project.excerpt}</p>
                      </div>
                      <span className="uidoyen-project-date text-color-primary">
                        {project.category}
                        <i className="bi bi-dash"></i>
                        {project.service}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Project section End */}
    </>
  );
}
