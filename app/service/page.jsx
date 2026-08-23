import { getAllServices } from "../lib/services.js";

export const metadata = {
  title: "Our Services & Core Offerings | Uidoyen",
  description:
    "AI Automation, Business Applications, AI-Powered Customer Systems, and Product Engineering services.",
};

export default function ServicePage() {
  const services = getAllServices();

  return (
    <>
      {/* Hero section Start */}
      <section className="uidoyen-hero-service-section section-padding-bottom overflow-hidden">
        <div className="container custom-container">
          <div className="row g-4">
            <div className="col-lg-12 col-xxl-11">
              <div
                className="uidoyen-hero-service__content move-anim"
                data-delay="0.45"
              >
                <h1 className="title">
                  AI Automation &amp; Digital Solutions for Growing Businesses
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero section End */}
      <div className="quanto-video-area style-2 overflow-hidden">
        <div className="container custom-container position-relative">
          <a href="#service-section" className="scroll-down section-link">
            Scroll down
            <img
              src="./assets/images/icons/scroll-down.svg"
              alt="Scroll down"
            />
          </a>

          <div className="row">
            <div className="col-12">
              <div className="quanto-hero__thumb text-end">
                <img
                  src="./assets/images/hero/common-hero-thumb.png"
                  alt="hero-thumb3"
                  data-speed="0.8"
                  className="w-100"
                  data-lag="0"
                  style={{ transform: "translate(0px, -69.4999px)" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Service section Start */}
      <section
        className="uidoyen-service4-section section-padding-top-bottom overflow-hidden"
        id="service-section"
      >
        <div className="container custom-container">
          <div className="row gx-4 gy-5">
            <div className="col-md-10 col-lg-8 col-xxl-6">
              <div className="uidoyen__header row-padding-bottom text-center text-md-start">
                <h3 className="title move-anim">What We Build &amp; Deliver</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              {services.map((service, index) => (
                <div className="uidoyen-service-box4 mb-4" key={service.slug}>
                  <h5 className="service-title">
                    {service.number} ─ {service.title}
                  </h5>
                  <div className="service-info">
                    <p className="fw-semibold text-dark fs-5 mb-3">
                      {service.tagline}
                    </p>
                    <div className="d-flex flex-wrap gap-2 mb-4">
                      {service.features?.map((item, idx) => (
                        <span
                          key={idx}
                          className="badge bg-light text-dark border px-3 py-2 fw-normal"
                          style={{ fontSize: "14px", borderRadius: "20px" }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    <a
                      className="uidoyen-link-btn"
                      href={`/service/${service.slug}`}
                    >
                      Explore {service.title} →
                      <span>
                        <i className="fa-solid fa-arrow-right arry1"></i>
                        <i className="fa-solid fa-arrow-right arry2"></i>
                      </span>
                    </a>
                  </div>
                  {index === 0 && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="52"
                      height="52"
                      viewBox="0 0 52 52"
                      fill="none"
                    >
                      <path
                        d="M52 1.1365e-06L52 52L9.78146e-07 0L52 1.1365e-06Z"
                        fill="currentColor"
                      />
                      <path d="M26 26L26 52L0 26L26 26Z" fill="currentColor" />
                    </svg>
                  )}
                  {index === 1 && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="52"
                      height="52"
                      viewBox="0 0 52 52"
                      fill="none"
                    >
                      <path
                        d="M26 52C32.8956 52 39.5088 49.2607 44.3848 44.3848C49.2607 39.5088 52 32.8956 52 26C52 19.1044 49.2607 12.4912 44.3848 7.61525C39.5088 2.7393 32.8956 2.40725e-05 26 2.27299e-05L26 26L26 52Z"
                        fill="currentColor"
                      />
                      <path
                        d="M0 52C6.89562 52 13.5088 49.2607 18.3848 44.3848C23.2607 39.5088 26 32.8956 26 26C26 19.1044 23.2607 12.4912 18.3848 7.61522C13.5088 2.73928 6.89563 1.34263e-06 6.19888e-06 0L0 52Z"
                        fill="currentColor"
                      />
                    </svg>
                  )}
                  {index === 2 && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="52"
                      height="52"
                      viewBox="0 0 52 52"
                      fill="none"
                    >
                      <path
                        d="M35.36 0L26 9.36L16.64 7.27358e-07H1.54563e-06V16.64L9.36 26L0 35.36L8.18277e-07 52H16.64L26 42.64L35.36 52H52V35.36L42.64 26L52 16.64V7.27358e-07L35.36 0Z"
                        fill="currentColor"
                      />
                    </svg>
                  )}
                  {index === 3 && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="52"
                      height="52"
                      viewBox="0 0 52 52"
                      fill="none"
                    >
                      <path
                        d="M52 2.34V0L0 3.44309e-07L4.11567e-08 2.34C2.24047e-07 12.7384 6.10429 21.7111 14.9249 25.87C6.10429 30.0289 -1.84046e-07 39.0016 2.56176e-07 49.4L3.66248e-07 52L52 52V49.4C52 39.0016 45.8957 30.0289 37.0751 25.87C45.8957 21.7111 52 12.7384 52 2.34Z"
                        fill="currentColor"
                      />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Service section End */}
    </>
  );
}
