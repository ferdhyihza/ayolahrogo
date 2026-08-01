# Repository Guidelines

## Project Structure & Module Organization

This repository contains a single-page static marketing site. `index.html` holds the page markup, inline JavaScript, metadata, and Tailwind utility classes. Tailwind's source stylesheet is `src/input.css`; `dist/output.css` is the generated, minified stylesheet loaded by the page and must stay in sync with source and markup changes. Store repository-owned logos and social images in `img/`. Tailwind theme extensions and content scanning paths belong in `tailwind.config.js`.

## Build, Test, and Development Commands

- `npm ci` installs the exact dependencies recorded in `package-lock.json`.
- `npm run dev` watches `index.html` and source files, rebuilding `dist/output.css` during development.
- `npm run build` creates the minified production stylesheet. Run it before committing any HTML, CSS, or Tailwind configuration change.
- `python3 -m http.server 8000` serves the repository for a browser check at `http://localhost:8000`.

`npm test` is currently a placeholder that exits with an error; do not treat it as a validation command.

## Coding Style & Naming Conventions

Use four-space indentation in HTML, CSS, and inline JavaScript, matching the existing files. Prefer semantic HTML sections with lowercase, descriptive IDs such as `#pricelist` and `#testimonies`. Use kebab-case for CSS classes, element IDs, and image filenames. Keep custom CSS small and reusable in `src/input.css`; prefer Tailwind utilities for component styling. JavaScript variables use camelCase and should remain dependency-free. Preserve Indonesian (`lang="id"`) copy and provide useful `alt` text for images.

## Testing Guidelines

There is no automated test suite or coverage requirement yet. After each change, run `npm run build` and inspect the page at mobile and desktop widths. Verify navigation anchors, the mobile-menu toggle, image loading, horizontal overflow, and external links. Check the browser console for errors. If automated tests are introduced, place them under `tests/` and add a real `npm test` script in the same change.

## Commit & Pull Request Guidelines

Recent history uses short, lowercase, imperative subjects such as `fix overflow x`, `remove scroll bar`, and `add opengraph`. Follow that pattern, keep each commit focused, and include the regenerated `dist/output.css` when applicable. Pull requests should summarize the user-visible change, list validation performed, link any related issue, and include before/after screenshots for layout or responsive changes. Do not commit secrets, local editor files, or unrelated generated artifacts.
