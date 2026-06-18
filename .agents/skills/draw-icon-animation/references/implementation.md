# Draw Icon Animation Implementation

Use this reference when adding, porting, or debugging the Emperor-style SVG icon draw-in animation.

## Dependencies

Use GSAP with `DrawSVGPlugin` and `ScrollTrigger`:

```ts
import gsap from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);
```

Register plugins once in the shared animation entrypoint.

## Selectors

Use the same selector contract as the project:

```ts
const DRAW_SVG_SEL = "[data-draw-icon], svg.lucide:not([data-static-icon])";
const STROKE_CHILDREN = "path, circle, polyline, line, rect, ellipse";
```

Notes:

- `svg.lucide` catches Lucide Astro icons automatically.
- `data-draw-icon` opts custom inline SVGs into the animation.
- `data-static-icon` opts icons out, especially nav buttons, carousel arrows, and UI controls.
- DrawSVG works on visible stroke/fill geometry, but this project is designed around stroke icons.

## Standalone Icons

Use this when icons are not inside a staggered card grid:

```ts
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
```

## Staggered Cards

Use this when a parent has `[data-stagger-parent]` and children have `[data-stagger-card]`. Hide the strokes first to prevent a flash before the card enters.

```ts
function drawIconsInCard(card: Element) {
	for (const svg of card.querySelectorAll(DRAW_SVG_SEL)) {
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
		for (const svg of parent.querySelectorAll(DRAW_SVG_SEL)) {
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
```

## Reduced Motion

Initialize draw animations only when motion is allowed:

```ts
export function initAnimations() {
	gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
		initCardStagger();
		initDrawIcons();
	});
}
```

If the project already has an `initAnimations()` function, add the icon functions there instead of creating another entrypoint.

## Astro Usage

Lucide Astro icons usually need no extra attribute:

```astro
<Zap size={48} strokeWidth={1.5} class="stroke-emperor-green" />
```

Custom inline SVGs should opt in:

```astro
<svg data-draw-icon viewBox="0 0 24 24" fill="none" stroke="currentColor">
	<path d="M4 12h16" />
</svg>
```

Icons that should stay immediate should opt out:

```astro
<ChevronRight size={22} aria-hidden="true" data-static-icon />
```

## Debugging

If an icon flashes before drawing, set its strokes to `drawSVG: "0%"` before creating the tween. For grids, do this at the `[data-stagger-parent]` level.

If an icon does not animate, check that:

- The SVG has stroke children matching `STROKE_CHILDREN`.
- The icon is not marked with `data-static-icon`.
- `DrawSVGPlugin` and `ScrollTrigger` are registered.
- The animation runs inside the reduced-motion media query only when motion is allowed.
- The page imports and calls the shared animation initializer.
