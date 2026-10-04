### ZALES — AI AGENT ONBOARDING & ARCHITECTURE PROTOCOLS (Next.js)

![AI Assistant](https://img.shields.io/badge/AI_Agent-Onboarding_Guide-blueviolet?style=for-the-badge&logo=openai&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-16.3.8-000000?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.17-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Architecture](https://img.shields.io/badge/Architecture-Atomic_Design-FF6F61?style=for-the-badge)

Comprehensive onboarding guide, operational conventions, strict file structure protocols, and engineering standards for autonomous AI agents collaborating on the Zales Luxury Landing Page project ecosystem.

**Developer:** Aaditya Gunjal - Full Stack Developer

## Project Map & Directory Architecture

| Directory                   | Architecture Level     | Purpose & Containment Rules                                                       |
| --------------------------- | ---------------------- | --------------------------------------------------------------------------------- |
| `src/app/`                  | Next.js 16 App Router  | Page routing, layout definitions, metadata, and global stylesheet (`globals.css`) |
| `src/components/atoms/`     | Atomic Design: Level 1 | Pure, single-responsibility UI primitives (buttons, badges, icons, typography)    |
| `src/components/molecules/` | Atomic Design: Level 2 | Composed clusters combining multiple atoms (nav links, product cards, cards)      |
| `src/components/organisms/` | Atomic Design: Level 3 | Full-width self-contained page sections (header, hero, carousel, footer)          |
| `src/constants/`            | Immutable Data         | Centralized static constants, navigation links, diamond specs, category data      |
| `src/types/`                | Shared Types           | Strict TypeScript type contracts, interfaces, and component prop definitions      |
| `src/hooks/`                | Custom React Hooks     | Encapsulated client behaviors (`useLenis`, responsive media queries)              |
| `src/utils/`                | Pure Utility Functions | Class name merging (`cn`), formatters, and animation helpers                      |
| `docs/`                     | Documentation Suite    | Architecture decision records (ADRs), setup guides, and system designs            |

## Operational Conventions & Standards

1. **File & Directory Naming:** All files and folders MUST strictly adhere to `kebab-case` (e.g., `shape-icon.tsx`, `use-lenis.ts`). Never create camelCase or PascalCase files.
2. **Component Exports:** Component functional exports MUST use `PascalCase` (e.g., `export function ProductCard()`).
3. **Constants Naming:** All static arrays and data configurations MUST use `SCREAMING_SNAKE_CASE` (e.g., `DIAMOND_SHAPES`).
4. **Barrel Exports:** Every subfolder within `components/`, `types/`, and `constants/` MUST contain an `index.ts` barrel file exporting its modules.
5. **Path Aliasing:** Use the `@/*` alias (mapping to `src/*`) for all internal imports. Do not use relative parent traversals (`../../`).
6. **Client Directives:** Mark components with `"use client"` ONLY when state (`useState`), effects (`useEffect`), event handlers, or browser APIs are required. Server Components are the default.
7. **Conventional Commits:** All git commits MUST use the format `<type>[<scope>]: <description>` (e.g., `feat[hero]: add floating diamond badge`).

## Key Development Commands

```bash
# Start Turbopack development server (port 3000)
pnpm dev

# Build production bundle with Next.js compiler
pnpm build

# ESLint flat configuration linting audit
pnpm lint

# Prettier code formatting
pnpm format

# TypeScript strict type checking (no emit)
pnpm typecheck
```

> [!WARNING]
> **Automated Test Constraint:** Do not run automated unit or integration tests (`pnpm test`, `pnpm check`, `vitest`) unless explicitly instructed by the user.

## Engineering Guardrails & Things to Avoid

- **No State in Server Components:** Never use hooks (`useState`, `useEffect`, `useContext`) in Server Components.
- **No `any` Types:** Always declare strict TypeScript types or generics. Avoid `any` without documented architectural rationale.
- **No Hardcoded Arrays in Components:** Never embed data arrays or mock objects inside component JSX files; place them in `src/constants/`.
- **File Length Ceiling:** Components and utility files should not exceed ~300 lines of code. Split complex components into atomic sub-elements.
- **No Incomplete Stubs:** Do not leave `TODO: implement` or non-functional placeholders. All authored features must be functional and validated.

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

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
