export const metadata = {
  title: "About Uidoyen – AI Systems That Help Businesses Work Smarter",
  description:
    "Learn how Uidoyen builds AI-powered systems that automate workflows, reduce manual effort, and improve business operations. Meet our team and discover our approach.",
  keywords: [
    "about Uidoyen",
    "AI automation company",
    "business automation team",
    "how Uidoyen works",
    "AI business solutions",
    "intelligent business systems",
    "workflow automation agency",
  ],
  openGraph: {
    title: "About Uidoyen – AI Systems That Help Businesses Work Smarter",
    description:
      "Learn how Uidoyen builds AI-powered systems that automate workflows, reduce manual effort, and improve business operations.",
    url: "https://uidoyen.com/about",
  },
  alternates: {
    canonical: "https://uidoyen.com/about",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero section Start */}
      <section className="uidoyen-hero-about-section overflow-hidden">
        <div className="container custom-container">
          <div className="row g-4 align-items-end">
            <div className="col-lg-12">
              <div
                className="uidoyen-hero-about__content move-anim"
                data-delay="0.45"
              >
                <h1 className="title">
                  Building AI-powered systems that help businesses work smarter
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero section End */}

      {/* Video section Start */}
      <div className="uidoyen-video-area style-2 overflow-hidden">
        <div className="container custom-container position-relative">
          <a
            href="#uidoyen-funfacts-section"
            className="scroll-down section-link"
          >
            Scroll down
            <img src="/assets/images/icons/scroll-down.svg" alt="Scroll down" />
          </a>
          <div className="row">
            <div className="col-12">
              <video
                muted
                autoPlay
                loop
                src="https://videos.pexels.com/video-files/4630092/4630092-uhd_2560_1440_25fps.mp4"
                className="uidoyen-video"
                id="uidoyen-video-2"
                data-speed="0.8"
              ></video>
              <button className="play-btn">Play</button>
            </div>
          </div>
        </div>
      </div>
      {/* Video section End */}
      {/* About section Start */}
      <section className="uidoyen-about-area2 bg-color-white section-padding-top">
        <div className="container custom-container">
          <div className="row">
            <div className="col-xl-9 col-xxl-8 mx-auto">
              <div className="uidoyen__header text-center text-lg-start">
                <h3 className="title move-anim">
                  We turn complex business workflows into simple, intelligent
                  systems
                </h3>
              </div>
            </div>
          </div>
          <div className="row g-4 justify-content-between row-padding-top overflow-hidden">
            <div className="col-md-6 col-xl-5 col-xxl-4 d-flex align-items-xl-center order-1 order-xl-0 overflow-hidden">
              <div className="img_reveal overflow-hidden">
                <img
                  src="/assets/images/about/about-thumb-2-1.png"
                  alt="about-thumb"
                  className="w-100"
                />
              </div>
            </div>
            <div className="col-xl-5 col-xxl-4 order-0 order-xl-1">
              <div className="section-content">
                <p className="move-anim" data-duration="0.01">
                  We start by understanding how your business works, where your
                  teams spend time, and which processes create unnecessary
                  manual effort. From there, we identify opportunities to
                  automate, simplify, and improve the way your business
                  operates.
                </p>
                <p className="move-anim" data-duration="0.01">
                  Combining AI, thoughtful design, and modern engineering, we
                  build practical systems that fit your workflows — from
                  automated customer interactions and internal tools to
                  AI-powered applications and digital products.
                </p>
                <a className="uidoyen-link-btn" href="/about">
                  More about us
                  <span>
                    <i className="fa-solid fa-arrow-right arry1"></i>
                    <i className="fa-solid fa-arrow-right arry2"></i>
                  </span>
                </a>

                <figure className="overflow-hidden">
                  <div className="img_reveal overflow-hidden">
                    <img
                      src="/assets/images/about/about-thumb-2-2.png"
                      alt="about-thumb"
                    />
                  </div>
                </figure>
              </div>
            </div>
            <div className="col-md-6 col-xl-2 d-flex align-items-xl-center order-xl-2 overflow-hidden">
              <div className="img_reveal overflow-hidden">
                <img
                  src="/assets/images/about/about-thumb-2-3.png"
                  alt="about-thumb"
                  className="w-100"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About section Start */}

      {/* Team section Start */}
      <section className="uidoyen-team-area section-padding-bottom section-padding-top">
        <div className="container custom-container">
          <div className="row gx-4 gy-2 align-items-end">
            <div className="col-md-9 col-xl-7 col-xxl-6">
              <div className="uidoyen__header">
                <h3
                  className="title text-center text-md-start fade-anim"
                  data-direction="left"
                >
                  Meet our innovative team members
                </h3>
              </div>
            </div>
            <div className="col-md-3 col-xl-5 col-xxl-6">
              <div className="uidoyen__headerr d-flex justify-content-center justify-content-lg-end">
                <a className="uidoyen-link-btn" href="/team">
                  Join the team
                  <span>
                    <i className="fa-solid fa-arrow-right arry1"></i>
                    <i className="fa-solid fa-arrow-right arry2"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="row g-4 g-sm-3 g-md-4 row-padding-top">
            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
              <div
                className="uidoyen-team-box fade-anim"
                data-delay="0.30"
                data-direction="right"
              >
                <figure className="team-thumb">
                  <img
                    src="/assets/images/team/team-1.png"
                    alt="team"
                    className="w-100"
                  />
                  <img
                    src="/assets/images/team/team-1.png"
                    alt="team"
                    className="w-100"
                  />

                  <ul className="custom-ul">
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-x-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                </figure>
                <div className="team-content">
                  <h6 className="team-member-name">
                    <a href="/team-details">Tony Lixivel</a>
                  </h6>
                  <span className="team-member-position">
                    Lead Full Stack Developer
                  </span>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
              <div
                className="uidoyen-team-box fade-anim"
                data-delay="0.45"
                data-direction="right"
              >
                <figure className="team-thumb">
                  <img
                    src="/assets/images/team/team-2.png"
                    alt="team"
                    className="w-100"
                  />
                  <img
                    src="/assets/images/team/team-2.png"
                    alt="team"
                    className="w-100"
                  />

                  <ul className="custom-ul">
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-x-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                </figure>
                <div className="team-content">
                  <h6 className="team-member-name">
                    <a href="/team-details">Daniel Schrier</a>
                  </h6>
                  <span className="team-member-position">
                    Senior Product Designer
                  </span>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
              <div
                className="uidoyen-team-box fade-anim"
                data-delay="0.45"
                data-direction="right"
              >
                <figure className="team-thumb">
                  <img
                    src="/assets/images/team/team-3.png"
                    alt="team"
                    className="w-100"
                  />
                  <img
                    src="/assets/images/team/team-3.png"
                    alt="team"
                    className="w-100"
                  />

                  <ul className="custom-ul">
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-x-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                </figure>
                <div className="team-content">
                  <h6 className="team-member-name">
                    <a href="/team-details">Audrey Tassel</a>
                  </h6>
                  <span className="team-member-position">
                    Administrative & HR Assistant
                  </span>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
              <div
                className="uidoyen-team-box fade-anim"
                data-delay="0.75"
                data-direction="right"
              >
                <figure className="team-thumb">
                  <img
                    src="/assets/images/team/team-4.png"
                    alt="team"
                    className="w-100"
                  />
                  <img
                    src="/assets/images/team/team-4.png"
                    alt="team"
                    className="w-100"
                  />

                  <ul className="custom-ul">
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-x-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                </figure>
                <div className="team-content">
                  <h6 className="team-member-name">
                    <a href="/team-details">Tanguy Caruel</a>
                  </h6>
                  <span className="team-member-position">
                    Chief Technology Officer
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Team section End */}

      {/* Testimonial section start */}
      <section className="uidoyen-testimonial3-section bg-color-2 section-padding-top-bottom">
        <div className="container custom-container">
          <div className="row g-4 justify-content-between overflow-hidden">
            <div className="col-lg-6 col-xxl-5 pe-xxl-0">
              <div className="uidoyen__header h-100">
                <h3
                  className="title fade-anim"
                  data-delay="0.30"
                  data-direction="left"
                >
                  What clients says about our company
                </h3>
              </div>
            </div>
            <div className="col-lg-6 col-xxl-5">
              <div
                className="swiper testimonial3-slider fade-anim"
                data-delay="0.30"
                data-direction="right"
              >
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="testimonial3-content">
                      <p>
                        “Uidoyen team quickly understood our business
                        requirements and were proactive and flexible with our
                        ongoing support and developments. You can definitely
                        trust them for complex project requirements as they are
                        top-notch in their field and we can only recommend it.”
                      </p>
                      <div className="client-info">
                        <h5 className="client-name">Jenny Bennett</h5>
                        <span className="client-designation">
                          Senior Marketing Manager at Caya
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial3-navigation">
                <div className="next-btn bg-color-white">
                  <i className="fa-solid fa-angle-left"></i>
                </div>
                <div className="prev-btn bg-color-white">
                  <i className="fa-solid fa-angle-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonial section End */}

      {/* Clients section Start */}
      <div className="uidoyen-lients-area bg-color-2 section-padding-bottom">
        <div className="container custom-container">
          <div className="row g-4">
            <div className="col-12">
              <p>We worked with largest global brands</p>
            </div>
            <div className="col-12 clients__box-wrapper">
              <div
                className="client-box fade-anim"
                data-delay="0.30"
                data-direction="right"
              >
                <img
                  src="/assets/images/clients/logo-3.png"
                  alt="client-logo"
                />
              </div>
              <div
                className="client-box fade-anim"
                data-delay="0.45"
                data-direction="right"
              >
                <img
                  src="/assets/images/clients/logo-4.png"
                  alt="client-logo"
                />
              </div>
              <div
                className="client-box fade-anim"
                data-delay="0.60"
                data-direction="right"
              >
                <img
                  src="/assets/images/clients/logo-5.png"
                  alt="client-logo"
                />
              </div>
              <div
                className="client-box fade-anim"
                data-delay="0.75"
                data-direction="right"
              >
                <img
                  src="/assets/images/clients/logo-6.png"
                  alt="client-logo"
                />
              </div>
              <div
                className="client-box fade-anim"
                data-delay="0.90"
                data-direction="right"
              >
                <img
                  src="/assets/images/clients/logo-7.png"
                  alt="client-logo"
                />
              </div>
              <div
                className="client-box fade-anim"
                data-delay="1.05"
                data-direction="right"
              >
                <img
                  src="/assets/images/clients/logo-8.png"
                  alt="client-logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Clients section End  */}
    </>
  );
}
