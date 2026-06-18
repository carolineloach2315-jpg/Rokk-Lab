# Repository Guidelines

## Project Structure & Module Organization

This is an Astro site using Bun, Tailwind CSS, and strict TypeScript settings. Route files live in `src/pages/`; each folder with an `index.astro` becomes a route, such as `src/pages/contact/index.astro`. Reusable UI belongs in `src/components/`, with landing-page components grouped under `src/components/landing/`. Global styles live in `src/styles/global.css`. Source-controlled images and icons are in `src/assets/`, while static public files such as favicons live in `public/`.

## Build, Test, and Development Commands

Run commands from the repository root:

- `bun install` installs dependencies from `bun.lock`.
- `bun dev` starts the local Astro development server, usually at `localhost:4321`.
- `bun build` creates the production build in `dist/`.
- `bun preview` serves the built site locally for final checks.
- `bun astro ...` runs Astro CLI commands, such as `bun astro check` when type checking is needed.

## Coding Style & Naming Conventions

Use `.astro` components for page and UI markup. Follow the existing two-space indentation style in Astro, CSS, and config files. Prefer lowercase route folders such as `about` and `services`; avoid spaces or mixed casing for new routes. Name reusable components with descriptive kebab-case filenames, for example `booking-cta.astro`. Keep shared styling in Tailwind utility classes where practical, and reserve `src/styles/global.css` for global behavior, base rules, and animations.

## Testing Guidelines

No dedicated test runner is currently configured. For every change, run `bun build` before opening a PR to catch Astro, TypeScript, and bundling issues. For visual or layout changes, also run `bun dev` or `bun preview` and check the affected routes in a browser. If tests are added later, place them near the feature they cover or under a clear `tests/` directory, and document the new command in `package.json`.

## Agent-Specific Design Instructions

Before changing UI, page content structure, styling, imagery, or frontend behavior, read `design/design.md`, `design/spec.md`, and `design/style.md`. Treat these files as the source of truth for the site architecture, intended behavior, and visual direction. If a project design skill is installed and exposed in the current environment, use it before making design or frontend implementation decisions. Keep new work aligned with the existing Astro component patterns, Tailwind styling approach, and Rokk Lab brand direction.

## Commit & Pull Request Guidelines

Recent history uses short, imperative commits, often with a `chore:` prefix, for example `chore: update file structure`. Keep commit subjects concise and focused on one change. Pull requests should include a brief summary, the routes or components changed, verification steps such as `bun build`, and screenshots for visible UI updates. Link related issues or project tasks when available.

## Security & Configuration Tips

Do not commit secrets, local environment files, or generated `dist/` output. Keep dependency changes intentional and commit the updated `bun.lock` when packages change. Use `public/` only for files that are safe to serve directly.
