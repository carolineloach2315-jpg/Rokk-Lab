import gsap from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const DRAW_SVG_SEL = "[data-draw-icon], svg.lucide:not([data-static-icon])";
const STROKE_CHILDREN = "path, circle, polyline, line, rect, ellipse";
const HERO_SCROLL_IMAGE_SEL = "[data-hero-scroll-image]";

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

function drawIconsInCard(card: Element) {
  for (const svg of card.querySelectorAll<SVGElement>(DRAW_SVG_SEL)) {
    const strokes = svg.querySelectorAll(STROKE_CHILDREN);

    if (!strokes.length) continue;

    gsap.fromTo(
      strokes,
      { drawSVG: "0%" },
      {
        drawSVG: "100%",
        duration: 1.1,
        ease: "power1.inOut",
        stagger: 0.12,
      },
    );
  }
}

function initCardStagger() {
  for (const parent of document.querySelectorAll("[data-stagger-parent]")) {
    for (const svg of parent.querySelectorAll<SVGElement>(DRAW_SVG_SEL)) {
      gsap.set(svg.querySelectorAll(STROKE_CHILDREN), { drawSVG: "0%" });
    }

    for (const card of parent.querySelectorAll("[data-stagger-card]")) {
      ScrollTrigger.create({
        trigger: card,
        start: "top 85%",
        once: true,
        onEnter: () => drawIconsInCard(card),
      });
    }
  }
}

function initDrawIcons() {
  for (const svg of gsap.utils.toArray<SVGElement>(DRAW_SVG_SEL)) {
    const parentCard = svg.closest("[data-stagger-card]");

    if (parentCard?.closest("[data-stagger-parent]")) continue;

    const strokes = svg.querySelectorAll(STROKE_CHILDREN);

    if (!strokes.length) continue;

    gsap.set(strokes, { drawSVG: "0%" });
    gsap.fromTo(
      strokes,
      { drawSVG: "0%" },
      {
        drawSVG: "100%",
        duration: 1.1,
        ease: "power1.inOut",
        stagger: 0.12,
        scrollTrigger: {
          trigger: svg,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      },
    );
  }
}

function initHeroScrollImage() {
  for (const image of gsap.utils.toArray<HTMLElement>(HERO_SCROLL_IMAGE_SEL)) {
    const section = image.closest<HTMLElement>("[data-hero-scroll-section]");

    if (!section) continue;

    gsap.fromTo(
      image,
      {
        scale: 1.02,
        yPercent: 0,
      },
      {
        scale: 1.08,
        yPercent: 5,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      },
    );
  }
}

export function initAnimations() {
  gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
    initCardStagger();
    initDrawIcons();
  });

  gsap.matchMedia().add(
    "(prefers-reduced-motion: no-preference) and (min-width: 768px)",
    () => {
      initHeroScrollImage();
    },
  );
}
