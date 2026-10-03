# ADR 0003: kebab-case File Naming

**Status:** Accepted
**Date:** 2024-10-02

## Context

React historically used PascalCase for component files. Next.js App Router enforces kebab-case for route folders. Mixed conventions cause confusion.

## Decision

Use `kebab-case` for all files and folders. Component exports remain `PascalCase`.

## Consequences

- **Positive:** Consistent with Next.js conventions, eliminates case-sensitivity bugs on Windows/macOS, URL-friendly, matches modern ecosystem (shadcn/ui, Remix, Astro)
- **Negative:** Departure from legacy React convention, requires team alignment
