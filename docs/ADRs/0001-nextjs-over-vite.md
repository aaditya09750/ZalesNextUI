# ADR 0001: Next.js 16 over Vite

**Status:** Accepted
**Date:** 2024-10-02

## Context

The project was originally built as a React SPA using Vite. While functional, this approach lacks SSR/SSG, image optimization, font optimization, and SEO capabilities.

## Decision

Migrate to Next.js 16 App Router with Turbopack.

## Consequences

- **Positive:** Server Components by default, automatic image optimization, built-in font optimization, SEO metadata API, file-based routing, deployment on Vercel with zero config
- **Negative:** Requires understanding Server vs Client Components, slightly more complex mental model
