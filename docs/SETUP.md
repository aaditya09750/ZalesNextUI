# Extended Setup Guide

## Prerequisites

- **Node.js 22+** — Install via [nvm](https://github.com/nvm-sh/nvm) or [fnm](https://github.com/Schniz/fnm)
- **pnpm 12+** — Install via `corepack enable && corepack prepare pnpm@latest --activate`

## Quick Start

```bash
git clone <repo-url>
cd zales-landing
pnpm install
pnpm dev
# Open http://localhost:3000
```

## Fonts

The project uses two fonts from [Fontshare](https://www.fontshare.com/):

- **Clash Display** (400, 500, 600, 700) — headings
- **Satoshi** (400, 500, 700, 900) — body text

These are loaded via a `<link>` tag in `src/app/layout.tsx`. No local font files are needed.

## Images

- **Local images** are in `public/images/` (marble-hand.jpg, sunset-necklace.jpg)
- **External images** are loaded from Pexels CDN — no API key required
- Pexels domain is allowlisted in `next.config.ts`

## Deployment (Vercel)

1. Push to GitHub
2. Import the repository on [vercel.com](https://vercel.com)
3. Vercel auto-detects Next.js — no configuration needed
4. Every push to `main` triggers a production deployment
5. Pull requests get preview deployments automatically

## Tailwind CSS 4

This project uses Tailwind CSS 4 with CSS-first configuration. There is no `tailwind.config.js`. All theme tokens are defined in `src/app/globals.css` using the `@theme` directive.

## Common Issues

### Fonts not loading

Ensure you have internet access. Fonts are loaded from `api.fontshare.com` at runtime.

### Images not showing

Check that Pexels URLs are accessible. Some corporate networks block external image CDNs.
