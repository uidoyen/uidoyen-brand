export const metadata = {
  title: "Contact Uidoyen – Start Automating Your Business",
  description:
    "Get in touch with Uidoyen to discuss your automation project. We're here to help you automate workflows, build internal tools, and create AI-powered business systems.",
  keywords: [
    "contact Uidoyen",
    "AI automation consultation",
    "business automation inquiry",
    "get in touch",
    "start automation project",
    "Uidoyen contact",
  ],
  openGraph: {
    title: "Contact Uidoyen – Start Automating Your Business",
    description:
      "Get in touch with Uidoyen to discuss your automation project. We help businesses automate workflows and build AI-powered systems.",
    url: "https://uidoyen.com/contact",
  },
  alternates: {
    canonical: "https://uidoyen.com/contact",
  },
};

export default function ContactPage() {
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
                <h1 className="title">We’re just a message away to help you</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero section End */}

      {/* Map section Start */}
      <div className="uidoyen-map-area style-2 overflow-hidden">
        <div className="container custom-container position-relative">
          <a
            href="#uidoyen-contact-section"
            className="scroll-down section-link"
          >
            Scroll down
            <img src="/assets/images/icons/scroll-down.svg" alt="Scroll down" />
          </a>
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6511980.545439102!2d-124.59221413351302!3d37.160355323932215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2sbd!4v1739717831300!5m2!1sen!2sbd"
                width="600"
                height="800"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="d-block w-100"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      {/* Map section End */}

      {/* Contact section Start */}
      <section
        id="uidoyen-contact-section"
        className="uidoyen-contact-section bg-color-white section-padding-top-bottom"
      >
        <div className="container custom-container">
          <div className="row g-4 justify-content-between">
            <div className="col-lg-6 col-xxl-5">
              <div className="uidoyen-contact__content">
                <h3 className="title">Let’s create your brand that shines!</h3>
                <p>
                  Whether you’re interested in collaborating with us on your
                  next project or simply want to reach out for a conversation.
                </p>
                <div className="address">
                  <h6>Address:</h6>
                  <span>
                    101, R.T. Nagar, <br />
                    Bangalore, India - 560032
                  </span>
                </div>
                <div className="contact-info">
                  <h5>
                    <a href="mailto:info@uidoyen.com">info@uidoyen.com</a>
                  </h5>
                  <a href="tel:+919739745932">+91 973 974 5932</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xxl-6">
              <form
                action="index.html"
                className="uidoyen-contact__form"
                autoComplete="off"
              >
                <div className="row g-3 g-xl-4">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      required
                      className="form-control"
                      pattern="[A-Za-z\s]+"
                      title="Please enter only alphabets and spaces"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="company"
                      placeholder="Company name"
                      className="form-control"
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your e-mail address"
                      required
                      className="form-control"
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                      title="Please enter a valid email address"
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      name="message"
                      id="message"
                      rows="4"
                      placeholder="Your message"
                      required
                      className="form-control"
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button className="uidoyen-link-btn btn-pill border-0" type="submit">
                      Send message
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
      </section>
      {/* Contact section End */}
    </>
  );
}
