### ZALES — ADR 0004: TAILWIND CSS 4 WITH CSS-FIRST ARCHITECTURE (Next.js)

![Status](https://img.shields.io/badge/Status-Accepted-brightgreen?style=for-the-badge)
![Date](https://img.shields.io/badge/Date-2024--10--02-blue?style=for-the-badge)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.17-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![CSS-First](https://img.shields.io/badge/Architecture-CSS--First-blue?style=for-the-badge&logo=css3&logoColor=white)

Architectural Decision Record adopting Tailwind CSS v4's CSS-first `@theme` configuration engine over legacy JavaScript configuration files for the Zales Luxury Landing Page project ecosystem.

**Developer:** Aaditya Gunjal - Full Stack Developer

## Context & Problem Statement

In Tailwind CSS v3, developers configured themes, custom colors, animations, and container dimensions through a JavaScript configuration file (`tailwind.config.js` or `tailwind.config.ts`). In large Next.js projects, this architecture posed distinct hurdles:

1. **Dual Build-Time Pipeline:** The bundler had to interpret JavaScript configuration objects before compiling CSS rules, introducing compilation latency and bundle bloat.
2. **Disconnected Theme Tokens:** Design variables were disconnected from native CSS custom properties (`var(--my-color)`), making dynamic runtime theme manipulation and CSS-native keyframe bindings cumbersome.
3. **Complex Content Scanning:** Explicit `content: [...]` glob patterns had to be manually maintained in JavaScript, leading to occasional missing class purge bugs during refactors.

## Decision

Adopt **Tailwind CSS 4** featuring native **CSS-first configuration** with the `@tailwindcss/postcss` engine.

### Implementation Blueprint

- **Zero JavaScript Config:** Deprecate and remove `tailwind.config.js` and `tailwind.config.ts`.
- **CSS-First Theme Declarations:** Define all luxury brand colors, typography variables, box shadows, and keyframe animations directly inside `src/app/globals.css` using the `@theme` directive:

```css
@import "tailwindcss";

@theme {
  /* Editorial Luxury Color Palette */
  --color-ink: #0b0c0e;
  --color-ink-deep: #070809;
  --color-ink-surface: #121417;
  --color-champagne: #e8d8be;
  --color-gold: #c9a96e;
  --color-silver: #a8b0ba;

  /* Typography Families */
  --font-serif: var(--font-clash-display), "Clash Display", Georgia, serif;
  --font-sans: var(--font-satoshi), "Satoshi", sans-serif;
}
```

- **Automatic Content Discovery:** Tailwind 4 automatically discovers template files across `src/app/` and `src/components/` without manual glob patterns.

## Evaluation & Comparison

| Feature                   | Tailwind CSS v3 (Legacy)   | Tailwind CSS v4 (Adopted)      |
| ------------------------- | -------------------------- | ------------------------------ |
| Configuration Source      | `tailwind.config.js`       | `src/app/globals.css` (@theme) |
| Compilation Engine        | JavaScript PostCSS runtime | High-speed Rust Lightning CSS  |
| Content Discovery         | Manual array of globs      | Native automatic scanning      |
| CSS Variables Integration | Manual `extend` bridging   | 100% Native CSS Custom Props   |
| Build Performance         | Standard                   | Up to 10x faster HMR cycles    |

## Consequences

### Positive

- **Streamlined Configuration:** Single source of truth in CSS, eliminating configuration drift between JS and styles.
- **Lightning-Fast HMR:** Drastically accelerated Turbopack rebuild cycles powered by Rust-backed CSS processing.
- **Native CSS Variable Interoperability:** Colors and tokens declared in `@theme` are directly usable both in Tailwind utility classes (e.g., `bg-ink`, `text-champagne`) and in custom inline CSS styles.
- **Future-Proof:** Fully aligned with the future trajectory of the Tailwind and web standards ecosystem.

### Negative / Mitigations

- **Bleeding-Edge Syntax:** Some older code editor plugins might flag `@theme` as unknown CSS rules.
  - _Mitigation:_ Documented and validated in `globals.css` with PostCSS configuration.

---

## Contact & Support

![Email](https://img.shields.io/badge/Email-aadigunjal0975%40gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white)
![LinkedIn](https://img.shields.io/badge/LinkedIn-aadityagunjal0975-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)
![WhatsApp](https://img.shields.io/badge/WhatsApp-Contact-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)

- **Email:** [aadigunjal0975@gmail.com](mailto:aadigunjal0975@gmail.com)
- **LinkedIn:** [aadityagunjal0975](https://www.linkedin.com/in/aadityagunjal0975/)
- **Developer:** Aaditya Gunjal - Full Stack Developer

## License

![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge&logo=opensourceinitiative&logoColor=white)

Copyright (c) 2026 Aaditya Gunjal. Released under the MIT License.
