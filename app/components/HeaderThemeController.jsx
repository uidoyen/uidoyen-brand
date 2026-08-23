"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const DARK_LOGO = "/assets/images/logo-2.svg";
const LIGHT_LOGO = "/assets/images/logo-1.svg";

function parseRgb(color) {
  const match = color.match(
    /rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/,
  );

  if (!match) return null;

  const alpha = match[4] === undefined ? 1 : Number(match[4]);

  if (alpha === 0) return null;

  return {
    r: Number(match[1]),
    g: Number(match[2]),
    b: Number(match[3]),
  };
}

function luminance({ r, g, b }) {
  return (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
}

function getThemeFromElement(element) {
  let current = element;

  while (current && current !== document.documentElement) {
    const declaredTheme = current.dataset?.headerTheme;

    if (declaredTheme === "dark" || declaredTheme === "light") {
      return declaredTheme;
    }

    const background = parseRgb(getComputedStyle(current).backgroundColor);

    if (background) {
      return luminance(background) < 0.5 ? "dark" : "light";
    }

    current = current.parentElement;
  }

  return "light";
}

export default function HeaderThemeController() {
  const pathname = usePathname();

  useEffect(() => {
    const header = document.querySelector(".uidoyen-header");
    const logo = header?.querySelector(".header-logo img");

    if (!header) return undefined;

    let frameId = null;
    let currentTheme = "light";
    const useHomepageTheme = pathname === "/";

    function applyTheme(theme) {
      currentTheme = theme;

      const isDark = theme === "dark";

      header.classList.toggle("header-on-dark", isDark);
      header.classList.toggle("header-on-light", !isDark);

      if (logo) {
        logo.src = isDark ? DARK_LOGO : LIGHT_LOGO;
      }
    }

    function updateTheme() {
      frameId = null;

      const rect = header.getBoundingClientRect();
      const sampleX = Math.round(window.innerWidth / 2);
      const sampleY = Math.min(
        window.innerHeight - 1,
        Math.max(0, Math.round(rect.bottom + 1)),
      );
      const elements = document.elementsFromPoint(sampleX, sampleY);
      const section = elements.find((element) => !header.contains(element));

      applyTheme(getThemeFromElement(section));
    }

    function requestUpdate() {
      if (frameId !== null) return;
      frameId = window.requestAnimationFrame(updateTheme);
    }

    if (!useHomepageTheme) {
      applyTheme("light");
      return undefined;
    }

    requestUpdate();
    const observer = new MutationObserver(() => applyTheme(currentTheme));

    observer.observe(header, {
      attributeFilter: ["class"],
    });

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }

      observer.disconnect();
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, [pathname]);

  return null;
}
