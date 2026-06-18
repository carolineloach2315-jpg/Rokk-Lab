---
name: draw-icon-animation
description: Recreate, extend, or debug the Emperor Double Glazing SVG icon draw-in animation. Use when adding GSAP DrawSVG + ScrollTrigger line-drawing animations for inline SVG icons, Lucide Astro icons, data-draw-icon SVGs, staggered cards, reduced-motion handling, or data-static-icon opt-outs in Astro/Tailwind projects.
---

# Draw Icon Animation

## Overview

Use this skill to apply the project's signature icon animation: SVG strokes start hidden, then draw from 0% to 100% as the icon or card scrolls into view.

The source pattern comes from `src/scripts/animations.ts` in Emperor Double Glazing. Prefer preserving that behavior over inventing a new animation vocabulary.

## Workflow

1. Check the app's animation entrypoint first, usually `src/scripts/animations.ts`.
2. Ensure GSAP registers both `ScrollTrigger` and `DrawSVGPlugin` once.
3. Target stroke-based SVG children: `path, circle, polyline, line, rect, ellipse`.
4. Animate `drawSVG` from `"0%"` to `"100%"` with about `duration: 1.1`, `ease: "power1.inOut"`, and `stagger: 0.12`.
5. Wrap initialization in `gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", ...)`.
6. Add `data-static-icon` to icons that must not draw, such as carousel controls or constantly visible UI buttons.
7. After UI changes in this repo, run `bun run check:write` and visually verify with the `playwright-cli` skill if a server is already running.

## Project Pattern

Read `references/implementation.md` when implementing or porting the pattern. It includes the canonical selectors, card-stagger behavior, and sample TypeScript.

Key conventions:

- Auto-animate Lucide Astro icons because they render as `svg.lucide`.
- Also support explicit custom SVGs with `data-draw-icon`.
- Exclude static controls with `data-static-icon`.
- For card grids, hide all icon strokes immediately in the parent, then draw each card's icons on card entry.
- For standalone icons, use the SVG itself as the `ScrollTrigger` trigger.

## Common Requests

- "Add the draw-in icon animation to this new section."
- "Make these Lucide icons draw in when the card appears."
- "Port the Emperor icon animation to another Astro site."
- "Why are my icons flashing before drawing?"
- "Exclude this nav/control icon from the draw animation."
