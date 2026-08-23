import { notFound } from "next/navigation";
import {
  getAllServices,
  getServiceBySlug,
  markdownToParagraphs,
} from "../../lib/services.js";

export function generateStaticParams() {
  return getAllServices().map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) return {};

  return {
    title: `${service.title} | Uidoyen Services`,
    description: service.tagline || service.excerpt,
  };
}

export default async function ServiceDetailsPage({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const paragraphs = markdownToParagraphs(service.content);

  return (
    <>
      {/* Hero section Start */}
      <section className="uidoyen-hero-common-section section-padding-bottom overflow-hidden">
        <div className="container custom-container">
          <div className="row g-4 justify-content-center">
            <div className="col-lg-12 col-xl-10 col-xxl-9">
              <div
                className="uidoyen-hero-common__content move-anim"
                data-delay="0.45"
              >
                <span className="text-color-primary fw-bold mb-2 d-inline-block">
                  {service.number} — SERVICE
                </span>
                <h1 className="title">{service.title}</h1>
                <p className="lead mt-3 text-color-light fs-4">{service.tagline}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero section End */}

      {/* Image section Start */}
      <div className="uidoyen-video-area style-2 overflow-hidden">
        <div className="container custom-container position-relative">
          <a
            href="#uidoyen-service-details-section"
            className="scroll-down section-link"
          >
            Scroll down
            <img
              src="/assets/images/icons/scroll-down.svg"
              alt="Scroll down"
            />
          </a>
          <div className="row">
            <div className="col-12">
              <div className="uidoyen-hero__thumb text-center">
                <img
                  src={service.heroImage || "/assets/images/hero/common-hero-thumb-2.png"}
                  alt={service.title}
                  data-speed="0.8"
                  className="w-100 rounded-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Image section End */}

      {/* Service Details section Start */}
      <section
        id="uidoyen-service-details-section"
        className="uidoyen-service-details-section row-padding-top row-padding-bottom overflow-hidden"
      >
        <div className="container custom-container">
          <div className="row g-4 justify-content-center">
            <div className="col-xl-8">
              <div className="uidoyen-service-details__content">
                {paragraphs.map((paragraph, index) => (
                  <p
                    className={index > 0 ? "service-text move-anim" : "move-anim"}
                    data-delay="0.45"
                    key={paragraph}
                  >
                    {paragraph}
                  </p>
                ))}

                {service.features?.length ? (
                  <div className="my-4">
                    <h5 className="mb-3">What we build &amp; automate:</h5>
                    <div className="d-flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="badge bg-light text-dark border px-3 py-2 fs-6 rounded-pill"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : null}

                {service.benefits?.length ? (
                  <div className="service-benefits mt-5">
                    <h4>Key Business Benefits</h4>
                    <p>
                      How {service.title} drives measurable business outcomes and operational efficiency:
                    </p>
                    <div className="benefits-list mt-3">
                      <ul className="custom-ul list-unstyled d-flex flex-column gap-2">
                        {service.benefits.map((benefit) => (
                          <li key={benefit} className="d-flex align-items-center gap-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              className="text-color-primary flex-shrink-0"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M8.26686 17.2517L23.3996 2.09009C18.5966 8.6869 13.7937 15.2841 9.01958 21.9098L0.599609 11.6671C3.17479 13.5188 5.72074 15.3708 8.2673 17.2513L8.26686 17.2517Z"
                                fill="currentColor"
                              />
                            </svg>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : null}

                <div className="mt-5 pt-3">
                  <a className="uidoyen-link-btn btn-pill" href="/contact">
                    Start {service.title} Project
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
      {/* Service Details section End */}
    </>
  );
}
