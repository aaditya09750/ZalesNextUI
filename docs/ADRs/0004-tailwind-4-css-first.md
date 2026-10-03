# ADR 0004: Tailwind CSS 4 with CSS-First Configuration

**Status:** Accepted
**Date:** 2024-10-02

## Context

Tailwind CSS 4 introduces a CSS-first configuration model, replacing `tailwind.config.js` with `@theme` directives in CSS files.

## Decision

Use Tailwind 4 with `@tailwindcss/postcss` plugin. Define all theme tokens (colors, fonts) in `src/app/globals.css` using `@theme {}`. No JavaScript config file.

## Consequences

- **Positive:** Simpler setup, no JS config file, automatic content detection, theme tokens co-located with styles
- **Negative:** Newer approach, some IDE extensions may need updates for full `@theme` support
