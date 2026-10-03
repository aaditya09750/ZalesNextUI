# Contributing to Zales Landing Page

Thank you for your interest in contributing. This document provides guidelines to help you get started.

## Development Setup

```bash
# Prerequisites: Node.js 22+, pnpm 12+
git clone <repo-url>
cd zales-landing
pnpm install
pnpm dev
```

## Branch Naming

- `feat/<short-description>` — new feature
- `fix/<short-description>` — bug fix
- `docs/<short-description>` — documentation only
- `refactor/<short-description>` — code refactor
- `chore/<short-description>` — tooling, deps, CI

## Commit Messages

We use [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add diamond shape selector animation
fix: resolve mobile menu z-index issue
docs: update setup instructions for pnpm 12
refactor: extract testimonial card to molecule
chore: update eslint to flat config
```

## Pull Request Checklist

- [ ] `pnpm check` passes (lint, format, typecheck, test)
- [ ] No new warnings introduced
- [ ] Component follows atomic design hierarchy
- [ ] Files use `kebab-case` naming
- [ ] Client components have `"use client"` directive
- [ ] PR description explains what and why

## Code Style

- **Files & folders:** `kebab-case`
- **Components:** `PascalCase` exports
- **Hooks:** `camelCase` with `use` prefix
- **Constants:** `SCREAMING_SNAKE_CASE`
- **Types:** `PascalCase`
- **No `any`** without inline justification
- **No `TODO: implement`** in submitted code

## Architecture

See [ARCHITECTURE.md](./ARCHITECTURE.md) for system design and component hierarchy.
