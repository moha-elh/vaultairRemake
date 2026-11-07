"use client";
import { useEffect } from "react";
import { SECTIONS } from "./sections";

const sectionOf = (path) => path.replace(/^\/|\/$/g, "");
const scrollTo = (path, behavior) => {
  const id = sectionOf(path);
  if (!id) return window.scrollTo({ top: 0, behavior });
  document.getElementById(id)?.scrollIntoView({ behavior });
};

// Scroll reveals, sticky-header state, and hash-free section links:
// /features renders the home page, scrolled to <section id="features">.
export default function Reveal() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("js");

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
      }),
      { rootMargin: "0px 0px -10% 0px" }
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));

    const onScroll = () => root.classList.toggle("is-scrolled", scrollY > 8);
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });

    // Landing on /features etc.
    if (SECTIONS.includes(sectionOf(location.pathname))) scrollTo(location.pathname, "instant");

    const onClick = (e) => {
      const a = e.target.closest("a[href^='/']");
      if (!a || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
      const path = new URL(a.href).pathname;
      if (path !== "/" && !SECTIONS.includes(sectionOf(path))) return;
      e.preventDefault();
      scrollTo(path, "smooth");
      if (path !== location.pathname) history.pushState(null, "", path);
    };
    const onPop = () => scrollTo(location.pathname, "smooth");
    document.addEventListener("click", onClick);
    addEventListener("popstate", onPop);

    return () => {
      io.disconnect();
      removeEventListener("scroll", onScroll);
      document.removeEventListener("click", onClick);
      removeEventListener("popstate", onPop);
    };
  }, []);
  return null;
}
