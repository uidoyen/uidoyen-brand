export const metadata = {
  title: "FAQ – Common Questions About AI Automation & Uidoyen Services",
  description:
    "Find quick answers to common questions about Uidoyen's AI automation services, how we work, pricing, timelines, and how we can help your business grow.",
  keywords: [
    "AI automation FAQ",
    "Uidoyen FAQ",
    "business automation questions",
    "how AI automation works",
    "automation pricing",
    "common automation questions",
  ],
  openGraph: {
    title: "FAQ – Common Questions About AI Automation & Uidoyen Services",
    description:
      "Find quick answers to common questions about Uidoyen's AI automation services, how we work, pricing, and timelines.",
    url: "https://uidoyen.com/faq",
  },
  alternates: {
    canonical: "https://uidoyen.com/faq",
  },
};

export default function FaqPage() {
  return (
    <>
      {/* Hero section Start */}
      <section className="uidoyen-hero-faq-section section-padding-bottom overflow-hidden">
        <div className="container custom-container">
          <div className="row g-4">
            <div className="col-lg-12 col-xxl-11">
              <div
                className="uidoyen-hero-faq__content move-anim"
                data-delay="0.45"
              >
                <h1 className="title">Quick answers to common questions</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero section End */}

      {/* Video section Start */}
      <div className="uidoyen-video-area style-2 overflow-hidden">
        <div className="container custom-container position-relative">
          <a href="#uidoyen-faq-area" className="scroll-down section-link">
            Scroll down
            <img src="/assets/images/icons/scroll-down.svg" alt="Scroll down" />
          </a>
          <div className="row">
            <div className="col-12">
              <div className="uidoyen-hero__thumb text-center">
                <img
                  src="/assets/images/hero/common-hero-thumb-6.png"
                  alt="hero-thumb"
                  data-speed="0.8"
                  className="w-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Video section End */}

      {/* FAQ section Start */}
      <section
        id="uidoyen-faq-area"
        className="uidoyen-faq-area section-padding-top-bottom bg-color-white"
      >
        <div className="container custom-container">
          <div className="row g-4 justify-content-between">
            <div className="col-lg-6 col-xl-5 col-xxl-4 gsap-sticky">
              <div className="uidoyen__header">
                <h3
                  className="title fade-anim"
                  data-delay="0.30"
                  data-direction="left"
                >
                  Frequently asked questions
                </h3>
              </div>
            </div>
            <div className="col-lg-6 col-xl-7 col-xxl-7">
              <div
                className="accordion uidoyen-faq-accordion"
                id="accordionExample"
              >
                <div className="accordion-item fade-anim">
                  <h6 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      What kind of business processes can you automate?
                    </button>
                  </h6>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      We can automate repetitive workflows such as lead
                      qualification, WhatsApp and email follow-ups, CRM updates,
                      customer support, document processing, reporting,
                      notifications, approvals, and other manual tasks. We first
                      understand your workflow and identify where automation can
                      create the most value.
                    </div>
                  </div>
                </div>
                <div className="accordion-item fade-anim">
                  <h6 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Do I need to replace my existing tools?
                    </button>
                  </h6>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Not necessarily. We can integrate with the tools you
                      already use, including CRMs, WhatsApp, email platforms,
                      databases, spreadsheets, and other business software. Our
                      goal is to connect and improve your existing workflow
                      wherever possible.
                    </div>
                  </div>
                </div>
                <div className="accordion-item fade-anim">
                  <h6 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Can you build a custom AI solution for my business?
                    </button>
                  </h6>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Yes. We build AI-powered solutions around specific
                      business needs, including AI assistants, internal
                      knowledge systems, intelligent search, customer support
                      systems, document processing, recommendations, and
                      workflow automation.
                    </div>
                  </div>
                </div>
                <div className="accordion-item fade-anim">
                  <h6 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      How do you decide what should be automated?
                    </button>
                  </h6>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      We start by understanding your current processes, the
                      repetitive work your team handles, and where time or
                      opportunities are being lost. We then identify practical
                      automation opportunities based on business impact,
                      complexity, and feasibility rather than adding AI where it
                      is not needed.
                    </div>
                  </div>
                </div>
                <div className="accordion-item fade-anim">
                  <h6 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      Can you build internal tools and dashboards?
                    </button>
                  </h6>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Yes. We build custom internal applications such as admin
                      dashboards, CRM systems, operations platforms, employee
                      portals, approval workflows, reporting systems, and other
                      tools designed around your team's processes.
                    </div>
                  </div>
                </div>
                <div className="accordion-item fade-anim">
                  <h6 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSix"
                      aria-expanded="false"
                      aria-controls="collapseSix"
                    >
                      Can you work with an existing product or application?
                    </button>
                  </h6>
                  <div
                    id="collapseSix"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Absolutely. We can improve existing applications, add AI
                      capabilities, automate workflows, integrate third-party
                      services, improve the user experience, or help modernize
                      and scale an existing product.
                    </div>
                  </div>
                </div>
                <div className="accordion-item fade-anim">
                  <h6 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSeven"
                      aria-expanded="false"
                      aria-controls="collapseSeven"
                    >
                      How long does an AI automation project take?
                    </button>
                  </h6>
                  <div
                    id="collapseSeven"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      It depends on the workflow and integrations involved. A
                      focused automation can often be delivered within a few
                      weeks, while larger business applications or AI-powered
                      products require more time. We define the scope and
                      milestones before development begins.
                    </div>
                  </div>
                </div>
                <div className="accordion-item fade-anim">
                  <h6 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseEight"
                      aria-expanded="false"
                      aria-controls="collapseEight"
                    >
                      What do you need from us to get started?
                    </button>
                  </h6>
                  <div
                    id="collapseEight"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Start by telling us about your business, the process you
                      want to improve, and what tools you currently use. We will
                      review the workflow, identify potential opportunities, and
                      recommend a practical approach before development begins.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ section End */}
    </>
  );
}
