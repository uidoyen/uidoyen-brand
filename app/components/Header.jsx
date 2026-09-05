import ScrollToTopButton from "./ScrollToTopButton.jsx";

export function HeaderChrome() {
  return (
    <>
      {/* Custom Cursor */}

      <div className="cursor d-none d-lg-block"></div>

      {/* Custom Cursor End */}

      {/* Preloader */}

      <div className="preloader">
        <div className="spinner-wrap">
          <div className="preloader-logo">
            <img
              src="/assets/images/preloader.svg"
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="spinner"></div>
        </div>
      </div>

      {/* Preloader End */}

      {/* back to top button start*/}
      <ScrollToTopButton />
      {/* back to top button end*/}

      {/* Mobile Menu */}
      <div className="uidoyen-menu-wrapper">
        <div className="uidoyen-menu-area text-center">
          <div className="uidoyen-menu-mobile-top">
            <div className="mobile-logo">
              <a href="/">
                <img src="/assets/images/logo-1.svg" alt="logo" />
              </a>
            </div>
            <button className="uidoyen-menu-toggle mobile" aria-label="Toggle navigation menu">
              <i className="ri-close-line"></i>
            </button>
          </div>
          <div className="uidoyen-mobile-menu">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/service">Services</a>
              </li>
              <li>
                <a href="/portfolio">Portfolio</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>

              <li>
                <a href="/contact">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="uidoyen-mobile-menu-btn">
            <div className="sidebar-wrap">
              <h6>101, R.T. Nagar,</h6>
              <h6>Bangalore, India - 560032</h6>
            </div>
            <div className="sidebar-wrap">
              <h6>
                <a href="tel:+919739745932">+91 973 974 5932</a>
              </h6>
              <h6>
                <a href="mailto:info@uidoyen.com">
                  info@uidoyen.com
                </a>
              </h6>
            </div>
            <div className="social-btn style3">
              <a href="https://www.facebook.com/" aria-label="Facebook">
                <span className="link-effect">
                  <span className="effect-1">
                    <i className="fab fa-facebook"></i>
                  </span>
                  <span className="effect-1">
                    <i className="fab fa-facebook"></i>
                  </span>
                </span>
              </a>
              <a href="https://instagram.com/" aria-label="Instagram">
                <span className="link-effect">
                  <span className="effect-1">
                    <i className="fab fa-instagram"></i>
                  </span>
                  <span className="effect-1">
                    <i className="fab fa-instagram"></i>
                  </span>
                </span>
              </a>
              <a href="https://twitter.com/" aria-label="Twitter">
                <span className="link-effect">
                  <span className="effect-1">
                    <i className="fab fa-twitter"></i>
                  </span>
                  <span className="effect-1">
                    <i className="fab fa-twitter"></i>
                  </span>
                </span>
              </a>
              <a href="https://dribbble.com/" aria-label="Dribbble">
                <span className="link-effect">
                  <span className="effect-1">
                    <i className="fab fa-dribbble"></i>
                  </span>
                  <span className="effect-1">
                    <i className="fab fa-dribbble"></i>
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* End mobile menu */}

      {/* Large menu */}
      <div
        className="offcanvas offcanvas-end desktop-sidemenu"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header sidemenu-header">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M8.58981 10.0001L0.796875 2.20718L2.21109 0.792969L10.004 8.58582L17.7969 0.792969L19.2111 2.20718L11.4182 10.0001L19.2111 17.7929L17.7969 19.2072L10.004 11.4143L2.21109 19.2072L0.796875 17.7929L8.58981 10.0001Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
        <div className="offcanvas-body sidemenu-body">
          <div className="short-info">
            <img src="/assets/images/desktop-logo.svg" alt="uidoyen" />
            <p>
              We help small and mid-sized businesses automate operations and
              build AI-powered internal tools and customer-facing applications.
            </p>
          </div>
          <div className="contact-info">
            <h6>Contact</h6>
            <p>101, R.T. Nagar, Bangalore, India - 560032</p>

            <div className="contact">
              <a href="mailto:info@uidoyen.com">info@uidoyen.com</a>
              <a href="tel:+919739745932">+91 973 974 5932</a>
            </div>
          </div>

        </div>
      </div>
      {/* Large menu */}

      <div className="has-smooth" id="has_smooth"></div>
    </>
  );
}

export default function Header() {
  return (
    <>
      {/* Header section Start */}
      <header
        className="uidoyen-header main-header header-on-light"
        id="sticky-menu"
      >
        <div className="sticky-wrap">
          <div className="sticky-active">
            <div className="container custom-container">
              <div className="row gx-3 align-items-center justify-content-between">
                <div className="col-8 col-sm-auto">
                  <div className="header-logo">
                    <a href="/">
                      <img src="/assets/images/logo-1.svg" alt="logo" />
                    </a>
                  </div>
                </div>
                <div className="col text-end text-lg-end">
                  <nav className="main-menu menu-style1 d-none d-lg-block">
                    <ul>
                      <li>
                        <a href="/">Home</a>
                      </li>
                      <li>
                        <a href="/about">About Us</a>
                      </li>
                      <li>
                        <a href="/service">Services</a>
                      </li>
                      <li>
                        <a href="/portfolio">Portfolio</a>
                      </li>
                      <li>
                        <a href="/blog">Blog</a>
                      </li>
                      <li>
                        <a href="/contact">Contact</a>
                      </li>
                    </ul>
                  </nav>
                  <button
                    className="menuBar-toggle uidoyen-menu-toggle d-inline-block d-lg-none"
                    aria-label="Open mobile navigation menu"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                    >
                      <path
                        d="M24.4444 26V28H0V26H24.4444ZM40 19V21H0V19H40ZM40 12V14H15.5556V12H40Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </div>
                <div className="col-auto d-none d-lg-block ms-5">
                  <button
                    className="uidoyen-menu-large-toggle"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight"
                    aria-label="Open navigation menu"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                    >
                      <path
                        d="M24.4444 26V28H0V26H24.4444ZM40 19V21H0V19H40ZM40 12V14H15.5556V12H40Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Header section End */}
    </>
  );
}
