"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const legacyScripts = [
  "/assets/js/jquery-3.7.1.min.js",
  "/assets/js/bootstrap.bundle.min.js",
  "/assets/js/jquery.mixitup.min.js",
  "/assets/js/swiper-bundle.min.js",
  "/assets/js/jquery.magnific-popup.min.js",
  "/assets/js/odometer.min.js",
  "/assets/js/viewport.jquery.js",
  "/assets/js/gsap.js",
  "/assets/js/gsap-scroll-smoother.js",
  "/assets/js/gsap-scroll-to-plugin.js",
  "/assets/js/gsap-scroll-trigger.js",
  "/assets/js/gsap-split-text.js",
  "/assets/js/menu.js",
  "/assets/js/main.js",
];

function removeLegacyScripts() {
  document
    .querySelectorAll("script[data-legacy-template]")
    .forEach((script) => script.remove());
}

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = `${src}?v=${Date.now()}`;
    script.async = false;
    script.dataset.legacyTemplate = "true";
    script.onload = resolve;
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.body.appendChild(script);
  });
}

export default function LegacyScripts() {
  const pathname = usePathname();

  useEffect(() => {
    let cancelled = false;

    async function bootLegacyTemplate() {
      removeLegacyScripts();
      await new Promise((resolve) => requestAnimationFrame(resolve));

      for (const src of legacyScripts) {
        if (cancelled) return;
        await loadScript(src);
      }
    }

    bootLegacyTemplate().catch((error) => {
      console.error(error);
    });

    return () => {
      cancelled = true;
    };
  }, [pathname]);

  return null;
}
