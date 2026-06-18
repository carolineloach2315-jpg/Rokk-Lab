import gsap from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const DRAW_SVG_SEL = "[data-draw-icon], svg.lucide:not([data-static-icon])";
const STROKE_CHILDREN = "path, circle, polyline, line, rect, ellipse";
const HERO_SCROLL_IMAGE_SEL = "[data-hero-scroll-image]";
const MICRO_REVEAL_SEL = "[data-micro-reveal]";
const MICRO_REVEAL_GROUP_SEL = "[data-micro-reveal-group]";
const MICRO_REVEAL_ITEM_SEL = "[data-micro-reveal-item]";
const MICRO_LINE_SEL = "[data-micro-line]";
const MICRO_IMAGE_SEL = "[data-micro-image]";
const MICRO_CARD_SEL = "[data-micro-card]";
const MICRO_TAB_BUTTON_SEL = "[data-tab-button]";
const MICRO_TAB_PANEL_SEL = "[data-tab-panel]";

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

function initMicroReveals() {
  for (const group of gsap.utils.toArray<HTMLElement>(
    MICRO_REVEAL_GROUP_SEL,
  )) {
    const items = gsap.utils.toArray<HTMLElement>(
      group.querySelectorAll(MICRO_REVEAL_ITEM_SEL),
    );

    if (!items.length) continue;

    gsap.fromTo(
      items,
      {
        autoAlpha: 0,
        y: 18,
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.68,
        ease: "power2.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: group,
          start: "top 86%",
          once: true,
        },
      },
    );
  }

  for (const element of gsap.utils.toArray<HTMLElement>(MICRO_REVEAL_SEL)) {
    if (element.closest(MICRO_REVEAL_GROUP_SEL)) continue;

    gsap.fromTo(
      element,
      {
        autoAlpha: 0,
        y: 18,
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.72,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 88%",
          once: true,
        },
      },
    );
  }
}

function initMicroLines() {
  for (const line of gsap.utils.toArray<HTMLElement>(MICRO_LINE_SEL)) {
    const origin = line.dataset.microLineOrigin ?? "left";

    gsap.fromTo(
      line,
      {
        scaleX: 0,
        transformOrigin: `${origin} center`,
      },
      {
        scaleX: 1,
        duration: 0.78,
        ease: "power2.out",
        scrollTrigger: {
          trigger: line,
          start: "top 90%",
          once: true,
        },
      },
    );
  }
}

function initMicroImages() {
  for (const image of gsap.utils.toArray<HTMLElement>(MICRO_IMAGE_SEL)) {
    gsap.fromTo(
      image,
      {
        autoAlpha: 0.92,
        scale: 1.035,
        y: 12,
      },
      {
        autoAlpha: 1,
        scale: 1,
        y: 0,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: {
          trigger: image,
          start: "top 88%",
          once: true,
        },
      },
    );
  }
}

function initMicroCards() {
  const cleanup: Array<() => void> = [];

  for (const card of gsap.utils.toArray<HTMLElement>(MICRO_CARD_SEL)) {
    const liftCard = () => {
      gsap.to(card, {
        y: -5,
        duration: 0.28,
        ease: "power2.out",
        overwrite: "auto",
      });
    };
    const settleCard = () => {
      gsap.to(card, {
        y: 0,
        duration: 0.32,
        ease: "power2.out",
        overwrite: "auto",
      });
    };

    card.addEventListener("pointerenter", liftCard);
    card.addEventListener("pointerleave", settleCard);
    card.addEventListener("focusin", liftCard);
    card.addEventListener("focusout", settleCard);

    cleanup.push(() => {
      card.removeEventListener("pointerenter", liftCard);
      card.removeEventListener("pointerleave", settleCard);
      card.removeEventListener("focusin", liftCard);
      card.removeEventListener("focusout", settleCard);
    });
  }

  return cleanup;
}

function initMicroTabs() {
  const cleanup: Array<() => void> = [];

  for (const button of gsap.utils.toArray<HTMLElement>(MICRO_TAB_BUTTON_SEL)) {
    const revealSelectedPanel = () => {
      const selectedTab = button.getAttribute("data-tab-button");
      const panel = document.querySelector<HTMLElement>(
        `${MICRO_TAB_PANEL_SEL}[data-tab-panel="${selectedTab}"]`,
      );

      if (!panel) return;

      const items = gsap.utils.toArray<HTMLElement>(
        panel.querySelectorAll(MICRO_REVEAL_ITEM_SEL),
      );

      if (!items.length) return;

      gsap.fromTo(
        items,
        {
          autoAlpha: 0,
          y: 10,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.36,
          ease: "power2.out",
          stagger: 0.035,
          overwrite: "auto",
        },
      );
    };

    button.addEventListener("click", revealSelectedPanel);
    cleanup.push(() => button.removeEventListener("click", revealSelectedPanel));
  }

  return cleanup;
}

export function initAnimations() {
  const media = gsap.matchMedia();

  media.add("(prefers-reduced-motion: no-preference)", () => {
    initCardStagger();
    initDrawIcons();
    initMicroReveals();
    initMicroLines();
    initMicroImages();
    const microCardCleanup = initMicroCards();
    const microTabCleanup = initMicroTabs();

    return () => {
      microCardCleanup.forEach((cleanup) => cleanup());
      microTabCleanup.forEach((cleanup) => cleanup());
    };
  });

  media.add(
    "(prefers-reduced-motion: no-preference) and (min-width: 768px)",
    () => {
      initHeroScrollImage();
    },
  );
}
