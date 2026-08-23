export default function Footer() {
  return (
    <footer className="footer-area bg-color-primary overflow-hidden">
      <div className="footer__center section-padding-top-bottom">
        <div className="container custom-container">
          <div className="row">
            <div className="col-12">
              <div className="footer-widgets-wrapper">
                <div className="footer-widgets contact text-color-white fade-anim">
                  <h6 className="widget-title text-color-white">Contact</h6>
                  <p className="address">
                    101, R.T. Nagar, Bangalore, India - 560032
                  </p>
                  <div className="contacts">
                    <ul className="custom-ul">
                      <li>
                        <a className="email" href="mailto:info@uidoyen.com">
                          info@uidoyen.com
                        </a>
                      </li>
                      <li>
                        <a className="mobile" href="tel:+919739745932">
                          +91 973 974 5932
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="footer-widgets fade-anim" data-delay="0.2">
                  <h6 className="widget-title text-color-white">Agency</h6>
                  <div className="widget-links">
                    <ul className="custom-ul">
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
                        <a href="/portfolio">Case Studies</a>
                      </li>
                      <li>
                        <a href="/blog">Blog</a>
                      </li>
                      <li>
                        <a href="/career">Careers</a>
                      </li>
                      <li>
                        <a href="/faq">FAQ</a>
                      </li>
                      <li>
                        <a href="/contact">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="footer-widgets fade-anim" data-delay="0.4">
                  <h6 className="widget-title text-color-white">Services</h6>
                  <div className="widget-links">
                    <ul className="custom-ul">
                      <li>
                        <a href="/service/ai-automation">AI Automation</a>
                      </li>
                      <li>
                        <a href="/service/business-applications">Business Applications</a>
                      </li>
                      <li>
                        <a href="/service/ai-customer-systems">AI-Powered Customer Systems</a>
                      </li>
                      <li>
                        <a href="/service/product-engineering">Product Engineering</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="footer-widgets fade-anim" data-delay="0.6">
                  <div className="social-links">
                    <ul className="custom-ul">
                      <li>
                        <a
                          href="https://x.com"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fab fa-x-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://instagram.com"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://linkedin.com"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fab fa-linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://behance.net"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fab fa-behance"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://dribbble.com"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fab fa-dribbble"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom has-bodder">
        <div className="container custom-container p-xxl-0 overflow-hidden">
          <div className="row">
            <div className="col-12">
              <div className="footer__bottom-content row-padding-bottom">
                <div className="copyright-text text-color-white">
                  All rights reserved — 2026 &copy; uidoyen
                </div>
                <a href="#sticky-menu" className="scroll-to-top section-link">
                  Back to top
                  <i className="fas fa-angle-up"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
