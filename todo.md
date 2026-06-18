# About Page Rebuild Todo

## Goal

Fully rebuild the Rokk Lab about page so it matches the provided visual direction, stays aligned with the project design docs, and uses the supplied stroke SVG icons with the existing GSAP DrawSVG scroll animation pattern.

## Progress Snapshot

- [x] Created this implementation checklist.
- [x] Rebuilt `src/pages/about/index.astro` into a full editorial about page.
- [x] Added hero, story, values, craft/process, experience, and final booking CTA sections.
- [x] Used the supplied Precision, Expert colour, Quality care, and Personalised SVG icons.
- [x] Added `data-draw-icon` to the supplied inline SVG icons.
- [x] Added `data-stagger-parent` and `data-stagger-card` hooks for the values grid.
- [x] Imported and called `initAnimations()` on the about page.
- [x] Preserved the existing Client Diary booking URL.
- [x] Used existing source-controlled Rokk Lab imagery.
- [x] Ran `bun run build` successfully after implementation.
- [x] Captured desktop and mobile `/about/` screenshots from the local dev server.

## Source Of Truth

- [ ] Keep the page route at `src/pages/about/index.astro`.
- [ ] Preserve the existing Astro + Tailwind + Bun stack.
- [ ] Follow `design/design.md` for project architecture.
- [ ] Follow `design/spec.md` for page purpose, booking behavior, accessibility, and build expectations.
- [ ] Follow `design/style.md` for brand feel, palette, typography, layout, imagery, components, motion, and responsiveness.
- [ ] Use `src/scripts/animations.ts` as the animation entrypoint.
- [ ] Use the installed `draw-icon-animation` project skill pattern for icon draw-in behavior.
- [ ] Keep the visual tone modern, precise, editorial, confident, and approachable.
- [ ] Keep the palette mostly black, white, and neutral grays.
- [ ] Use orange accents sparingly for labels, dividers, icons, active states, and CTAs.
- [ ] Avoid unrelated accent colors.
- [ ] Avoid decorative card-heavy page structure.
- [ ] Use cards only for repeated value/service/team-style items where framing helps scanning.
- [ ] Keep sections full-width with constrained inner content.
- [ ] Keep typography uppercase, heavy, and tightly composed for headings.
- [ ] Keep body copy compact, readable, and polished.

## Initial Audit

- [ ] Review the current about page structure in `src/pages/about/index.astro`.
- [ ] Review the current home page structure in `src/pages/index.astro`.
- [ ] Review existing landing components for reusable patterns.
- [ ] Review `src/components/global/header.astro` for header styling and spacing assumptions.
- [ ] Review `src/components/global/footer.astro` for footer spacing and page background assumptions.
- [ ] Review `src/components/landing/button.astro` for CTA style reuse.
- [ ] Review `src/components/landing/booking-cta.astro` for booking CTA language and URL handling.
- [ ] Review `src/components/landing/about.astro` for any existing about copy that should remain consistent.
- [ ] Review `src/components/landing/featured-looks.astro` for editorial image grid patterns.
- [ ] Review all current images in `src/assets/home/`.
- [ ] Identify whether `salon.png`, `hero-copper-hair.png`, or `bottom.png` best supports the about hero.
- [ ] Identify whether any featured look images can support secondary editorial sections.
- [ ] Confirm no new dependency is needed for the about page.
- [ ] Confirm `gsap`, `ScrollTrigger`, and `DrawSVGPlugin` are already installed and imported.
- [ ] Confirm `initAnimations()` is imported and called on the about page after implementation.
- [ ] Confirm the current about page currently lacks the animation script.
- [ ] Confirm the current about page has no value icon grid yet.
- [ ] Confirm the provided target design has enough available detail; if not, leave clearly labeled todo placeholders for matching the visual reference.

## Page Architecture

- [ ] Replace the current two-section about page with a richer full-page editorial layout.
- [ ] Keep `<Header />` at the top of the page.
- [ ] Keep `<Footer />` at the bottom of the page.
- [ ] Keep the page-level stylesheet import `../../styles/global.css`.
- [ ] Keep metadata in the `<head>`.
- [ ] Update the page title if needed to `About Rokk Lab | Rokk Lab`.
- [ ] Add a clear page hero section.
- [ ] Add a salon story section.
- [ ] Add a values section using the four supplied icons.
- [ ] Add a technical approach or craft section.
- [ ] Add an experience section that describes consultation, service, and finish.
- [ ] Add an image-led editorial break if the target visual requires it.
- [ ] Add a final booking CTA section.
- [ ] Ensure every section has a reason to exist and supports about-page intent.
- [ ] Keep page flow scannable on mobile.
- [ ] Keep page flow visually strong on desktop.
- [ ] Avoid repeating the same copy from the home page unless it reinforces the brand.
- [ ] Keep all copy accurate to Rokk Lab as a modern Applecross hair salon.

## Hero Section

- [ ] Preserve the light editorial hero feel if it matches the target.
- [ ] Decide whether the hero should use a light background, dark background, or split editorial treatment based on the supplied reference.
- [ ] Keep the first viewport immediately recognizable as Rokk Lab.
- [ ] Include an uppercase eyebrow such as `About Rokk Lab`.
- [ ] Include a strong uppercase headline.
- [ ] Consider headline direction: `Beauty with precision.`.
- [ ] Consider alternate headline direction if target demands it: `Designed around you.`.
- [ ] Include concise supporting copy about consultation, colour, cutting, styling, and care.
- [ ] Use a salon or hair image that communicates the brand directly.
- [ ] Add meaningful `alt` text for the hero image.
- [ ] Keep hero image grayscale if aligned with style guide and target visual.
- [ ] Avoid dark, blurred, cropped, or generic imagery where visitors need to understand the salon.
- [ ] Add `data-hero-scroll-section` to the hero if using the existing scroll image animation.
- [ ] Add `data-hero-scroll-image` to the hero image if using parallax.
- [ ] Confirm hero image parallax only runs on desktop due to existing media query.
- [ ] Make hero height responsive without trapping mobile users in an oversized first screen.
- [ ] Leave a hint of the next section visible on desktop if the target is landing-page-like.
- [ ] Ensure hero copy does not overlap the image on small screens.
- [ ] Ensure hero content has enough top padding under the header.
- [ ] Ensure hero has enough bottom padding on mobile and desktop.
- [ ] Keep hero CTA optional unless the reference includes one.
- [ ] If adding hero CTA, use existing booking URL and existing button style patterns.

## Story Section

- [ ] Add an editorial section explaining who Rokk Lab is.
- [ ] Include the existing factual copy: `Rokk Lab is a Hair and Beauty salon located in Applecross, WA.`
- [ ] Include copy about catering to all hair types and textures.
- [ ] Mention colour, foils, haircutting, and styling.
- [ ] Mention a down-to-earth salon environment.
- [ ] Mention personalised service.
- [ ] Keep copy concise and premium rather than overly salesy.
- [ ] Use a two-column desktop layout with a strong heading and body copy.
- [ ] Stack cleanly on mobile.
- [ ] Add an orange eyebrow or divider if aligned with target.
- [ ] Keep section background consistent with page rhythm.
- [ ] Ensure text contrast passes on dark or light backgrounds.
- [ ] Avoid placing long paragraphs inside cramped cards.

## Values Section

- [ ] Build a values grid with four repeated items.
- [ ] Use the exact supplied value labels unless the target requires minor casing changes.
- [ ] Include value item: `Precision`.
- [ ] Include value item: `Expert colour`.
- [ ] Include value item: `Quality care`.
- [ ] Include value item: `Personalised`.
- [ ] Use the supplied scissors SVG for `Precision`.
- [ ] Use the supplied paintbrush vertical SVG for `Expert colour`.
- [ ] Use the supplied heart SVG for `Quality care`.
- [ ] Use the supplied flame SVG for `Personalised`.
- [ ] Keep each SVG inline in the Astro page or a local component.
- [ ] Add `data-draw-icon` to each custom inline SVG.
- [ ] Keep SVG `fill="none"`.
- [ ] Keep SVG `stroke="currentColor"`.
- [ ] Keep SVG `stroke-width="2"`.
- [ ] Keep SVG `stroke-linecap="round"`.
- [ ] Keep SVG `stroke-linejoin="round"`.
- [ ] Keep SVG `viewBox="0 0 24 24"`.
- [ ] Set icons decorative with `aria-hidden="true"` unless each value item needs accessible SVG labels.
- [ ] Ensure visible text labels carry the accessible meaning.
- [ ] Size icons consistently, likely `h-10 w-10` or similar.
- [ ] Use orange or neutral icon color according to target visual.
- [ ] Ensure icon strokes remain visible before and after animation.
- [ ] Wrap the values grid in `data-stagger-parent`.
- [ ] Add `data-stagger-card` to each value item.
- [ ] Confirm the card stagger hides strokes before entry to prevent flashing.
- [ ] Confirm the card stagger animates each icon when its value item enters.
- [ ] Keep value item layout stable with fixed or responsive dimensions.
- [ ] Ensure repeated value items do not become overly decorative cards if target is editorial.
- [ ] Add concise supporting copy for each value.
- [ ] Keep supporting copy short enough to scan on mobile.
- [ ] Align all value item headings consistently.
- [ ] Use uppercase headings if aligned with style guide.
- [ ] Ensure the values grid uses 1 column on mobile.
- [ ] Ensure the values grid uses 2 columns on tablet if appropriate.
- [ ] Ensure the values grid uses 4 columns or a strong 2x2 grid on desktop depending on target visual.

## Exact Icons To Use

- [ ] Precision icon:

```html
<svg data-draw-icon xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-scissors-icon lucide-scissors" aria-hidden="true"><circle cx="6" cy="6" r="3"/><path d="M8.12 8.12 12 12"/><path d="M20 4 8.12 15.88"/><circle cx="6" cy="18" r="3"/><path d="M14.8 14.8 20 20"/></svg>
```

- [ ] Expert colour icon:

```html
<svg data-draw-icon xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-paintbrush-vertical-icon lucide-paintbrush-vertical" aria-hidden="true"><path d="M10 2v2"/><path d="M14 2v4"/><path d="M17 2a1 1 0 0 1 1 1v9H6V3a1 1 0 0 1 1-1z"/><path d="M6 12a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2h2a1 1 0 0 1 1 1v2.9a2 2 0 1 0 4 0V17a1 1 0 0 1 1-1h2a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1"/></svg>
```

- [ ] Quality care icon:

```html
<svg data-draw-icon xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart-icon lucide-heart" aria-hidden="true"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/></svg>
```

- [ ] Personalised icon:

```html
<svg data-draw-icon xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-flame-icon lucide-flame" aria-hidden="true"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"/></svg>
```

## Draw-In Animation

- [ ] Confirm `src/scripts/animations.ts` imports `gsap`.
- [ ] Confirm `src/scripts/animations.ts` imports `DrawSVGPlugin`.
- [ ] Confirm `src/scripts/animations.ts` imports `ScrollTrigger`.
- [ ] Confirm `gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin)` is present once.
- [ ] Confirm `DRAW_SVG_SEL` includes `[data-draw-icon]`.
- [ ] Confirm `DRAW_SVG_SEL` includes `svg.lucide:not([data-static-icon])`.
- [ ] Confirm `STROKE_CHILDREN` includes `path`.
- [ ] Confirm `STROKE_CHILDREN` includes `circle`.
- [ ] Confirm `STROKE_CHILDREN` includes `polyline`.
- [ ] Confirm `STROKE_CHILDREN` includes `line`.
- [ ] Confirm `STROKE_CHILDREN` includes `rect`.
- [ ] Confirm `STROKE_CHILDREN` includes `ellipse`.
- [ ] Confirm `initCardStagger()` exists.
- [ ] Confirm `initDrawIcons()` exists.
- [ ] Confirm `initAnimations()` wraps icon motion in `prefers-reduced-motion: no-preference`.
- [ ] Confirm about page imports `initAnimations` from `../../scripts/animations`.
- [ ] Confirm about page calls `initAnimations()` once.
- [ ] Confirm no duplicate animation script runs on the about page.
- [ ] Confirm the value cards use `data-stagger-parent` and `data-stagger-card`.
- [ ] Confirm any standalone icons use `data-draw-icon`.
- [ ] Add `data-static-icon` only to any icons that should not draw in.
- [ ] Verify no inline SVG strokes visibly flash before scroll animation.
- [ ] Verify reduced-motion users still see icons without distracting animation.
- [ ] Verify draw animation triggers at the intended scroll position.
- [ ] Verify draw animation plays once for value cards.
- [ ] Verify icons do not redraw repeatedly while scrolling.

## Craft / Expertise Section

- [ ] Add a section that explains technical cutting, colour, and finishing.
- [ ] Keep copy grounded in salon services offered on the site.
- [ ] Reference precision cutting.
- [ ] Reference expert colour or colour planning.
- [ ] Reference care, treatment, and hair health.
- [ ] Reference personalised consultations.
- [ ] Consider a structured 3-step or 4-step process if it matches the target.
- [ ] Avoid adding claims that are not supported by site content.
- [ ] Avoid making clinical or medical claims.
- [ ] Use strong editorial alignment on desktop.
- [ ] Use comfortable stacking on mobile.
- [ ] Add a visual divider or numbered treatment only if target supports it.

## Client Experience Section

- [ ] Add a section describing what clients can expect.
- [ ] Include consultation before service.
- [ ] Include tailored recommendations.
- [ ] Include relaxed, down-to-earth environment.
- [ ] Include polished finishing.
- [ ] Keep copy concise.
- [ ] Keep the section visually distinct from the values grid.
- [ ] Consider pairing copy with image if visual reference uses image-led storytelling.
- [ ] Ensure image `alt` text is meaningful.
- [ ] Avoid overloading the page with too many images.

## Final CTA

- [ ] Add a final booking call to action.
- [ ] Use the existing Client Diary booking URL already used in the site.
- [ ] Do not change the booking destination without confirmation.
- [ ] Use concise CTA copy such as `Ready for your next appointment?`.
- [ ] Include a primary booking link.
- [ ] Consider a secondary contact link only if it does not dilute the booking goal.
- [ ] Reuse existing button patterns where practical.
- [ ] Keep CTA high contrast.
- [ ] Keep CTA accessible and keyboard focusable.
- [ ] Ensure CTA spacing works above the footer.

## Copywriting

- [ ] Keep tone polished but warm.
- [ ] Avoid generic filler copy.
- [ ] Avoid long blocks of text.
- [ ] Avoid repeating identical phrasing across sections.
- [ ] Keep headings short and bold.
- [ ] Keep eyebrows uppercase with generous tracking.
- [ ] Use `colour` spelling where the user supplied it.
- [ ] Keep service terminology consistent with the services page.
- [ ] Confirm `Applecross, WA` appears where location context matters.
- [ ] Confirm the page clearly says what Rokk Lab does.
- [ ] Confirm the page clearly says how the salon feels.
- [ ] Confirm the page clearly drives booking.
- [ ] Proofread all visible copy.
- [ ] Check apostrophes, punctuation, and casing.

## Styling

- [ ] Use Tailwind utilities for most layout and style.
- [ ] Avoid adding page-specific CSS unless Tailwind cannot express the target cleanly.
- [ ] Preserve two-space indentation in Astro markup.
- [ ] Use existing max-width patterns such as `max-w-7xl`.
- [ ] Use generous but controlled section padding.
- [ ] Use strong alignment and editorial whitespace.
- [ ] Keep border radii at 8px or less if cards are used.
- [ ] Avoid nested cards.
- [ ] Avoid gradient orbs, bokeh blobs, or purely decorative background blobs.
- [ ] Avoid a one-note dark slate or beige palette.
- [ ] Use orange accents sparingly.
- [ ] Ensure all text has readable contrast.
- [ ] Ensure buttons are high contrast and visually direct.
- [ ] Ensure no text uses negative letter spacing.
- [ ] Ensure no font sizes are scaled with viewport width.
- [ ] Ensure compact panels do not use hero-scale text.
- [ ] Ensure dynamic content does not resize controls unexpectedly.
- [ ] Ensure hover transforms do not break layout.

## Responsive Layout

- [ ] Test the about page at mobile width around 375px.
- [ ] Test the about page at mobile width around 390px.
- [ ] Test the about page at tablet width around 768px.
- [ ] Test the about page at desktop width around 1280px.
- [ ] Test the about page at wide desktop width around 1440px.
- [ ] Ensure header does not overlap hero content.
- [ ] Ensure hero text wraps cleanly on mobile.
- [ ] Ensure long words do not overflow.
- [ ] Ensure value cards stack cleanly.
- [ ] Ensure icons remain centered or aligned intentionally.
- [ ] Ensure images maintain aspect ratio.
- [ ] Ensure no image creates horizontal scrolling.
- [ ] Ensure section padding is not excessive on mobile.
- [ ] Ensure CTA buttons remain touch-friendly.
- [ ] Ensure footer spacing feels connected to the page.
- [ ] Ensure there is no horizontal scrollbar.

## Accessibility

- [ ] Use semantic section structure.
- [ ] Keep a single `<h1>`.
- [ ] Use heading levels in order.
- [ ] Add descriptive `alt` text for content images.
- [ ] Use empty `alt=""` only for decorative images.
- [ ] Mark decorative SVG icons with `aria-hidden="true"`.
- [ ] Ensure icon meaning is represented by visible text.
- [ ] Ensure links have clear accessible names.
- [ ] Ensure keyboard focus states remain visible.
- [ ] Ensure color is not the only way to understand important content.
- [ ] Confirm reduced-motion preferences are respected.
- [ ] Confirm text contrast is adequate on all backgrounds.
- [ ] Confirm CTA hit areas are comfortable.

## Assets

- [ ] Use existing source-controlled assets where possible.
- [ ] Prefer salon-specific or hair-specific imagery.
- [ ] Use `src/assets/home/salon.png` if the hero needs salon interior context.
- [ ] Use `src/assets/home/hero-copper-hair.png` if the hero needs hair-first editorial impact.
- [ ] Use `src/assets/home/bottom.png` if it supports a lower editorial break.
- [ ] Use featured look images only if they fit the about page story.
- [ ] Do not add stock-like imagery.
- [ ] Do not add generated imagery unless a missing visual asset blocks matching the target.
- [ ] Optimize any new assets before committing.
- [ ] Use descriptive asset filenames if new files are added.
- [ ] Keep new source images in `src/assets/`.
- [ ] Keep public-only assets in `public/` only when they need direct serving.

## Code Organization

- [ ] Decide whether values should be inline in `src/pages/about/index.astro` or extracted into a component.
- [ ] Keep page-only arrays near the page if not reused.
- [ ] Extract repeated value card markup only if it improves readability.
- [ ] Avoid broad component refactors unrelated to the about page.
- [ ] Avoid changing global header/footer unless required by the target.
- [ ] Avoid changing global CSS unless required for shared behavior.
- [ ] Keep changes scoped to the about page and animation usage.
- [ ] Preserve Astro frontmatter import style.
- [ ] Preserve two-space indentation.
- [ ] Keep inline SVG markup readable.
- [ ] Avoid comments unless a short comment clarifies a non-obvious block.

## Verification Commands

- [ ] Run `bun run build`.
- [ ] If available or needed, run `bun astro check`.
- [ ] If a dev server is needed for visual verification, run `bun run dev`.
- [ ] Open `/about/` in the browser.
- [ ] Verify the page renders without console errors.
- [ ] Verify images load correctly.
- [ ] Verify the supplied icons render correctly.
- [ ] Verify icons draw in on scroll.
- [ ] Verify the values grid animation does not flash.
- [ ] Verify reduced-motion behavior if possible.
- [ ] Verify the booking CTA link works.
- [ ] Verify no broken internal links were introduced.
- [ ] Verify production build completes.

## Visual QA

- [ ] Compare the implemented about page against the target reference.
- [ ] Check hero composition against the target.
- [ ] Check section order against the target.
- [ ] Check typography scale against the target.
- [ ] Check image placement against the target.
- [ ] Check values icon styling against the target.
- [ ] Check spacing between sections.
- [ ] Check alignment of section headings and body copy.
- [ ] Check orange accent usage.
- [ ] Check whether page feels too dark, too beige, or too monochrome.
- [ ] Check mobile screenshot.
- [ ] Check desktop screenshot.
- [ ] Fix any overlapping text.
- [ ] Fix any clipped images.
- [ ] Fix any inconsistent card heights.
- [ ] Fix any cramped button text.
- [ ] Fix any visual mismatch introduced by hover transitions.

## Final Review

- [ ] Run `git diff -- src/pages/about/index.astro src/scripts/animations.ts src/styles/global.css`.
- [ ] Confirm only intentional files changed.
- [ ] Confirm `todo.md` is updated with completed items as work progresses.
- [ ] Confirm no generated `dist/` output is committed.
- [ ] Confirm no secrets or local env files were touched.
- [ ] Prepare a concise summary of changes.
- [ ] Include verification steps in the final handoff.
- [ ] Include any visual QA limitations if screenshots could not be taken.
