### ZALES — ADR 0001: NEXT.JS 16 APP ROUTER OVER VITE SPA (Next.js)

![Status](https://img.shields.io/badge/Status-Accepted-brightgreen?style=for-the-badge)
![Date](https://img.shields.io/badge/Date-2024--10--02-blue?style=for-the-badge)
![Framework](https://img.shields.io/badge/Framework-Next.js_16-000000?style=for-the-badge&logo=next.js&logoColor=white)
![Turbopack](https://img.shields.io/badge/Bundler-Turbopack-0070F3?style=for-the-badge&logo=vercel&logoColor=white)

Architectural Decision Record evaluating the migration from a client-only Vite Single Page Application (SPA) to Next.js 16 App Router with Turbopack for the Zales Luxury Landing Page project ecosystem.

**Developer:** Aaditya Gunjal - Full Stack Developer

## Context & Problem Statement

The initial prototype of the Zales landing page was constructed as a client-side React Single Page Application (SPA) powered by Vite. While Vite provided fast local Hot Module Replacement (HMR), the luxury retail domain introduces stringent architectural requirements that client-side SPAs struggle to fulfill:

1. **Search Engine Optimization (SEO) & OpenGraph:** Luxury jewelry customers demand instant indexing of editorial collections, high-definition diamond specifications, and rich OpenGraph social previews. Client-only SPAs render blank HTML shells (`<div id="root"></div>`), severely impairing search engine discoverability.
2. **First Contentful Paint (FCP) & Largest Contentful Paint (LCP):** Heavy high-resolution imagery and client hydration scripts delayed the initial visual paint on mobile networks.
3. **Image & Asset Optimization:** Vite lacks an automated server-side image optimization pipeline for responsive srcset generation, WebP/AVIF transcoding, and layout shift prevention.
4. **Font Optimization:** Editorial typography (Clash Display, Satoshi) required manual stylesheet embedding without zero-cumulative-layout-shift font preloading.

## Decision

Migrate the application to **Next.js 16 App Router** with Turbopack and React 19 Server Components.

### Architectural Blueprint

- **Server-First by Default:** All non-interactive presentation sections (Hero background, Crafts gallery, Collection displays, Footer) execute as React Server Components, delivering zero-JavaScript static HTML.
- **Selective Client Islands:** Interactive components (Diamond silhouette dock, 3D category carousel, virtual try-on previews, mobile drawer menu) are isolated as client components using the `"use client"` directive.
- **Built-in Asset Pipeline:** Utilize `next/image` for automated multi-format image optimization, blur placeholders, and responsive viewport sizing.
- **Next.js Metadata API:** Implement declarative static and dynamic metadata for OpenGraph, Twitter cards, and structured schema markup.

## Evaluation & Trade-offs

| Criterion                   | Vite React SPA              | Next.js 16 App Router (Adopted) |
| --------------------------- | --------------------------- | ------------------------------- |
| Initial HTML Shell          | Empty (`<div id="root">`)   | Fully prerendered semantic HTML |
| Core Web Vitals (LCP / CLS) | Sub-optimal without SSR     | Optimized with SSR & Streaming  |
| Bundle Size Sent to Client  | Entire application bundle   | Only interactive client islands |
| Image Optimization Pipeline | Manual build plugins needed | Native `next/image` runtime     |
| Development Bundler         | Vite (esbuild/Rollup)       | Next.js Turbopack (Rust-based)  |

## Consequences

### Positive

- **Instant FCP & LCP:** Initial DOM arrives fully styled and populated from the server, eliminating white-screen delays.
- **Drastically Reduced Client Bundle:** Server Components ship 0 KB of client runtime JavaScript for purely presentational sections.
- **Automated Image Transcoding:** Remote photography from Pexels/Unsplash is dynamically scaled, cached, and converted to modern AVIF/WebP formats.
- **Production Deployment:** Native optimization for Vercel, Docker containers, and edge deployment targets.

### Negative / Mitigations

- **Learning Curve:** Requires rigorous understanding of Server Component vs. Client Component boundaries.
  - _Mitigation:_ Documented architectural boundaries in `AGENTS.md` and `ARCHITECTURE.md`.
- **Node.js Environment Requirement:** Requires a Node.js runtime or standalone Docker container for deployment rather than static S3 buckets.
  - _Mitigation:_ Multi-stage Dockerfile provided for zero-overhead containerized distribution.

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
