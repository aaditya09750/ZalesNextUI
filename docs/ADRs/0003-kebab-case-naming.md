### ZALES — ADR 0003: KEBAB-CASE FILE & DIRECTORY CONVENTION (Next.js)

![Status](https://img.shields.io/badge/Status-Accepted-brightgreen?style=for-the-badge)
![Date](https://img.shields.io/badge/Date-2024--10--02-blue?style=for-the-badge)
![Conventions](https://img.shields.io/badge/Conventions-kebab--case-orange?style=for-the-badge)
![Code Quality](https://img.shields.io/badge/Code_Quality-Strict_Consistency-brightgreen?style=for-the-badge)

Architectural Decision Record mandating uniform `kebab-case` naming conventions across all files, directories, and assets in the Zales Luxury Landing Page project ecosystem.

**Developer:** Aaditya Gunjal - Full Stack Developer

## Context & Problem Statement

Historically, React codebases adopted mixed naming standards:

1. **PascalCase File Proliferation:** Component files were commonly named after their primary export (e.g., `ProductCard.tsx`, `ShopByShape.tsx`), while utilities used `camelCase` (e.g., `formatCurrency.ts`).
2. **Next.js App Router Incompatibility:** Next.js App Router enforces `kebab-case` route segment directories (e.g., `app/shop-by-shape/page.tsx`), creating an awkward mismatch when nested alongside PascalCase component folders.
3. **Cross-Platform Git Case Sensitivity Conflicts:** Windows and macOS filesystems are case-insensitive by default, whereas Linux production CI/CD runners (GitHub Actions, Docker, Vercel) are strictly case-sensitive. Renaming `header.tsx` to `Header.tsx` frequently caused phantom Git diffs, missing module errors, and broken production builds.

## Decision

Enforce a strict, project-wide naming policy:

1. **Files & Folders:** Every file and folder in the repository MUST use `kebab-case` (e.g., `product-card.tsx`, `category-carousel.tsx`, `use-lenis.ts`).
2. **Component Exports:** Functional React component exports MUST retain standard `PascalCase` (e.g., `export function CategoryCarousel()`).
3. **Constants & Data:** Centralized constant identifiers use `SCREAMING_SNAKE_CASE` (e.g., `NAV_LINKS`, `HERO_CONTENT`).
4. **Barrel Files:** Module grouping folders terminate in `index.ts` using unified export patterns.

### Syntax Harmonization Matrix

| Element Type              | Convention             | Concrete Example                             |
| ------------------------- | ---------------------- | -------------------------------------------- |
| Component File Name       | `kebab-case.tsx`       | `src/components/organisms/shop-by-shape.tsx` |
| Component Function Export | `PascalCase`           | `export function ShopByShape()`              |
| Custom Hook File Name     | `kebab-case.ts`        | `src/hooks/use-lenis.ts`                     |
| Custom Hook Function      | `camelCase`            | `export function useLenis()`                 |
| Utility File Name         | `kebab-case.ts`        | `src/utils/cn.ts`                            |
| Static Constant Variable  | `SCREAMING_SNAKE_CASE` | `export const LUXURY_DIAMOND_DATA = [...]`   |
| Documentation Files       | `UPPERCASE.md` / kebab | `README.md`, `0001-nextjs-over-vite.md`      |

## Consequences

### Positive

- **Cross-Platform CI/CD Immunity:** Completely eliminates OS-level case-sensitivity compilation failures between Windows development environments and Linux Docker/Vercel runners.
- **Ecosystem Alignment:** Perfectly harmonizes with modern web frameworks and design systems including Next.js 16 App Router, Tailwind CSS, shadcn/ui, and Remix.
- **URL & Route Consistency:** Direct alignment between file system paths and browser routing segments.

### Negative / Mitigations

- **Departure from Legacy React Habits:** Engineers accustomed to PascalCase files must adapt their workflows.
  - _Mitigation:_ Documented in `AGENTS.md` and enforced via project onboarding rules and pull request review templates.

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
