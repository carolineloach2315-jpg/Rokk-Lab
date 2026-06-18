# Codebase Design

## Architecture

Rokk Lab is a static Astro site built with Bun, Tailwind CSS, and strict TypeScript settings. Astro owns routing and rendering; Tailwind utility classes provide most layout and visual styling.

## Routes

Routes live in `src/pages/`. Each route folder uses `index.astro`, for example `src/pages/about/index.astro`, `src/pages/services/index.astro`, and `src/pages/contact/index.astro`. Keep new route folders lowercase and URL-friendly. Avoid spaces or mixed casing for new routes.

## Components

Reusable UI belongs in `src/components/`. Landing-page sections live in `src/components/landing/`, including `hero.astro`, `about.astro`, `services.astro`, `booking-cta.astro`, `header.astro`, and `button.astro`. Prefer focused Astro components for repeated sections or shared controls. Keep page-only arrays and copy near the page that owns them unless they are reused.

## Styling

Import global CSS from `src/styles/global.css` in each page. Use Tailwind utilities for spacing, layout, typography, color, and responsive states. Keep global CSS limited to Tailwind import, base behavior, shared animation rules, and accessibility-wide preferences such as reduced motion.

## Assets

Source assets live in `src/assets/`, grouped by purpose such as `home/`, `icons/`, and `logos/`. Public files that must be served directly live in `public/`. Use descriptive filenames and keep image paths consistent with the existing `/images/...` references.

## Extension Rules

When adding a page, include the global stylesheet, page metadata, `Header` where appropriate, and `Footer` for full-page routes. When adding UI, match existing component patterns before introducing new abstractions. Keep behavior lightweight and local unless it is reused across pages.
