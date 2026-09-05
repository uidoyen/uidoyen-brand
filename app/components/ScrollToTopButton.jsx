"use client";

import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <a
      href="#sticky-menu"
      id="scroll-top"
      className={`back-to-top-btn ${isVisible ? "show" : ""}`}
      aria-label="Scroll to top"
      onClick={scrollToTop}
    >
      <i className="fa-solid fa-arrow-up"></i>
    </a>
  );
}
