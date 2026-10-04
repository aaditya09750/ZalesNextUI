### ZALES — PROJECT CHANGELOG & RELEASE HISTORY (Next.js)

![Changelog](https://img.shields.io/badge/Changelog-Keep_a_Changelog-blue?style=for-the-badge&logo=git&logoColor=white)
![SemVer](https://img.shields.io/badge/SemVer-2.0.0-green?style=for-the-badge&logo=semver&logoColor=white)
![Conventional Commits](https://img.shields.io/badge/Conventional_Commits-1.0.0-FE5196?style=for-the-badge&logo=conventionalcommits&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-16.3.8-000000?style=for-the-badge&logo=next.js&logoColor=white)

All notable changes, architectural milestones, and component updates to the Zales Luxury Landing Page project ecosystem are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

**Developer:** Aaditya Gunjal - Full Stack Developer

## [0.1.0] — 2026-10-03

### Architectural Refactor & Performance Enhancement

- **Edge-to-Edge Dark Aesthetic Migration:** Converted all sections from restricted container wrappers to 100% full-width immersive dark panoramic views (`bg-ink`) across mobile, tablet, desktop, and ultra-wide viewports.
- **Lenis Smooth Scrolling:** Integrated hardware-accelerated smooth scrolling using `@studio-freight/lenis` / `lenis` wrapped in a custom client provider with RAF loop synchronization, anchor tag support, and reduced-motion safety.
- **Persistent Floating Glassmorphic Navbar:** Redesigned navigation into a floating sticky header with deep blur (`backdrop-blur-xl`), smooth offset transitions, protective gradient shroud, and mobile responsive sheet menu.
- **Shop by Shape & Cut Console Overhaul:**
  - Added tactile jewelry bezels with specular glass arcs, pulsing sparkle glints, and active gold tracking pips.
  - Implemented interactive previous/next arrow rail navigation for diamond shape selection.
  - Built an integrated glassmorphic Diamond Cut Console featuring 4 precision spec pillars (Facet Geometry, Optical Fire, Proportions, Signature Mount) with active shape indicators.
- **Curated Category Carousel Clearance:** Optimized vertical layout clearance between section header titles and 3D card carousel, eliminating all visual overlap and text-clipping bugs.
- **Comprehensive Documentation Suite:** Standardized all markdown documentation files (`README.md`, `ARCHITECTURE.md`, `docs/SETUP.md`, `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, `SECURITY.md`, `CHANGELOG.md`, `AGENTS.md`, and Architecture Decision Records) to unified luxury developer portfolio format.

### Added

- **Next.js 16 App Router Setup:** Initialized Next.js 16 project structure with Turbopack, React 19, and TypeScript 5.9.
- **Tailwind CSS 4 Integration:** Configured CSS-first theme system via `@theme` directives in `src/app/globals.css`.
- **Atomic Design Component System:** Deployed component hierarchy across atoms (`button`, `badge`, `heading`, `text`, `shape-icon`), molecules (`nav-links`, `product-card`, `testimonial-card`), and organisms (`header`, `hero`, `shop-by-shape`, `category-carousel`, `our-works`, `new-collection`, `virtual-try-on`, `testimonials`, `newsletter`, `footer`).
- **Typography & Font Preloads:** Integrated Fontshare CDN for Clash Display (editorial luxury serif) and Satoshi (clean geometric sans-serif).
- **Responsive Layout Engine:** Mobile-first fluid typography, responsive flex/grid layouts, and zero-shift layout stability.
- **Docker Multi-Stage Build:** Production-optimized standalone Dockerfile and docker-compose configurations.

### Changed

- Migrated legacy static Vite landing page to Next.js 16 App Router.
- Upgraded ESLint to version 9 flat configuration with `@typescript-eslint`.
- Replaced monolithic component files with modular atomic components adhering to strict `kebab-case` naming conventions.

### Fixed

- Resolved category carousel title overlap and z-index occlusion on medium screens.
- Fixed sticky header offset anchoring on in-page navigation links (`#shapes`, `#collections`, `#crafts`, `#try-on`, `#reviews`).
- Eliminated container shadow clipping and horizontal overflow across responsive viewports.

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
