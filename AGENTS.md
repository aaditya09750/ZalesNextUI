# AI Agent Onboarding — Zales Landing Page

## Project Map

- **Framework:** Next.js 16 App Router (src/app/)
- **Styling:** Tailwind CSS 4 (CSS-first config in src/app/globals.css)
- **Components:** Atomic Design in src/components/ (atoms → molecules → organisms)
- **Data:** Static constants in src/constants/
- **Types:** Shared TypeScript types in src/types/
- **Hooks:** Custom hooks in src/hooks/
- **Utils:** Utility functions in src/utils/

## Conventions

- All files and folders use `kebab-case`
- Component exports use `PascalCase`
- Constants use `SCREAMING_SNAKE_CASE`
- Every folder has an `index.ts` barrel export
- Path alias: `@/*` maps to `src/*`
- Client components require `"use client"` directive

## Key Commands

```bash
pnpm dev           # Start dev server (Turbopack)
pnpm build         # Production build
pnpm lint          # ESLint check
pnpm format        # Prettier format
pnpm typecheck     # TypeScript check
pnpm test          # Run tests
pnpm check         # All checks combined
```

## Things to Avoid

- Do not put state/effects in Server Components
- Do not use `any` without justification
- Do not create files with PascalCase or camelCase names
- Do not put data arrays inside component files (use constants/)
- Do not exceed ~300 lines per file
- Do not add `TODO: implement` stubs

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
