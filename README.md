### ZALES — RESPONSIVE LUXURY E-COMMERCE LANDING (Next.js)

![Next.js](https://img.shields.io/badge/Next.js-16.3.8-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19.2.6-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.17-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Lenis](https://img.shields.io/badge/Lenis-1.3.26-000000?style=for-the-badge&logo=javascript&logoColor=white)
![Responsive](https://img.shields.io/badge/Responsive-Design-00D4FF?style=for-the-badge&logo=css3&logoColor=white)
![Lucide](https://img.shields.io/badge/Lucide_Icons-1.49.0-F56565?style=for-the-badge&logo=lucide&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=for-the-badge&logo=docker&logoColor=white)

A modern, elegant, and fully responsive luxury jewelry e-commerce landing experience built with Next.js 16 (App Router), React 19, TypeScript 5.9, and Tailwind CSS v4. Features an edge-to-edge dark luxury aesthetic (`bg-ink`), Lenis smooth scrolling, persistent floating sticky glassmorphic navigation, interactive diamond silhouette selector with tactile jewelry bezels and cut console, dynamic curated category carousel with zero-collision vertical clearance, and animated customer review marquee.

**Developer:** Aaditya Gunjal - Full Stack Developer

## Core Features

**Persistent Floating Glassmorphic Navbar** - A top-anchored, persistent glassmorphic navigation bar wrapped in a protective gradient shroud that remains accessible across the entire page scroll. Features deep backdrop blur (`backdrop-blur-xl`), pill-style active states, mobile drawer menu, and offset anchor scrolling (`scroll-mt-28 sm:scroll-mt-36`).

**Hero Section with Marble Sculpture & Floating Jewelry Badges** - Bold editorial showcase featuring an iconic marble hand sculpture adorned with fine jewelry, watermarked background branding typography, call-to-action buttons, and floating perspective preview cards with rotation styling.

**Interactive Silhouette Dock (Shop by Shape)** - Luxury diamond cut selector featuring Round, Oval, Cushion, Princess, and Pear shapes. Equipped with dual-layered metallic rails, interactive previous/next arrow controls, tactile chamfered bezels with specular glass arcs, pulsing sparkle glints, and active gold tracking pips.

**Dynamic Cut Inspection Console** - Integrated glassmorphic console that updates smoothly when selecting diamond shapes, displaying editorial cut names, silhouette counters, 4 precision spec pillars (Facet Geometry, Optical Fire, Proportions, Signature Mount), and direct jewelry exploration links.

**Curated Category Carousel with Clearance** - Interactive 3D card carousel with central active spotlight and side rotation peeks, controlled via interactive category selector tabs with full vertical clearance and zero title overlap across all viewports.

**Master Crafts Signature Showcase (Our Works)** - Asymmetric luxury jewelry gallery with featured masterwork spotlight card, collection badges, and curated craftsmanship stories.

**New Collection Split Presentation** - High-contrast editorial showcase contrasting timeless diamond necklaces and rings with refined purchase CTAs.

**Interactive Virtual Try-On Studio** - Engagement prompt with split preview imagery, offering customers augmented reality ring and pendant fitting previews.

**Infinite Customer Testimonials Marquee** - Dual-directional continuous marquee showcasing client reviews, luxury ratings, and customer portraits without layout shifts.

**Lenis Hardware-Accelerated Smooth Scrolling** - Butter-smooth scrolling wired through a root layout provider, syncing with native browser wheel events and respecting `prefers-reduced-motion`.

**100% Full-Width Responsive Architecture** - Edge-to-edge dark aesthetic (`bg-ink`) removing restrictive container shells for modern panoramic viewport immersion.

**Atomic Design Component Structure** - Strictly organized component library divided into atoms, molecules, organisms, and custom SVG icon primitives for maximum reusability.

## Technology Stack

| Technology    | Version | Purpose                                                                         |
| ------------- | ------- | ------------------------------------------------------------------------------- |
| Next.js       | 16.3.8  | App Router framework with Turbopack, SSR/SSG, and metadata API                  |
| React         | 19.2.6  | Modern component-driven UI with Server Components and client hooks              |
| TypeScript    | 5.9.3   | Static typing with strict mode for type-safe development                        |
| Tailwind CSS  | 4.1.17  | CSS-first utility styling with custom `@theme` tokens                           |
| Lenis         | 1.3.26  | Hardware-accelerated smooth scrolling with RAF loop                             |
| Lucide React  | 1.49.0  | Crisp SVG icons for interactive interface controls                              |
| Clash Display | CDN     | Modern editorial serif display typography via Fontshare                         |
| Satoshi       | CDN     | Clean contemporary sans-serif body typography via Fontshare                     |
| Vitest        | 3.0.0   | Fast unit testing for utility functions and component logic                     |
| ESLint        | 9.0.0   | Code linting with Next.js flat configuration                                    |
| Prettier      | 3.5.0   | Consistent code formatting with Tailwind CSS plugin                             |
| PostCSS       | 8.5.0   | CSS post-processing with `@tailwindcss/postcss`                                 |
| pnpm          | 12.x    | Package manager pinned via the `packageManager` field for reproducible installs |

## Quick Start

### Installation

```bash
# Clone the repository
git clone git@github.com:aaditya09750/ZalesNextUI.git
cd ZalesNextUI

# Install dependencies
pnpm install

# Start development server with Turbopack
pnpm dev
```

### Build & Audit Commands

```bash
# Verify typecheck and linting in one command
pnpm check

# Complete verification (format, lint, typecheck, build)
pnpm verify

# TypeScript strict type checking
pnpm typecheck

# ESLint flat config audit
pnpm lint

# Build for production
pnpm build

# Start production server preview
pnpm start
```

### Deployment

```bash
# Deploy to any Next.js-compatible hosting service
# Compatible with: Vercel, Netlify, AWS Amplify, Railway, Docker

# For Vercel (recommended for Next.js)
# Connect your repository and deploy automatically
```

### Docker

```bash
# Build the Docker image
docker build -t zales-next-ui .

# Run the container
docker run -p 3000:3000 zales-next-ui

# Or use Docker Compose (recommended)
docker compose up --build

# Run in background
docker compose up -d --build

# Stop the container
docker compose down
```

Visit `http://localhost:3000` after starting the container.

## Project Structure

```
src/
├── app/                                # Next.js App Router root
│   ├── globals.css                     # Tailwind CSS 4 theme tokens & animations
│   ├── layout.tsx                      # Root HTML shell, fonts, smooth scroll provider
│   ├── not-found.tsx                   # 404 error experience
│   ├── page.tsx                        # Home page composing all sections
│   └── robots.ts                       # Search engine crawler instructions
├── components/
│   ├── atoms/                          # Atomic UI primitives
│   │   ├── arrow-circle/               # Circular interactive arrow trigger
│   │   ├── reveal/                     # Intersection observer scroll reveal wrapper
│   │   ├── smooth-scroll/              # Lenis smooth scroll provider
│   │   └── index.ts
│   ├── icons/                          # Bespoke vector jewelry icons
│   │   ├── diamonds/                   # Round, Oval, Cushion, Princess, Pear SVG cuts
│   │   ├── half-disc.tsx               # Editorial crescent divider
│   │   ├── sparkle.tsx                 # 4-point diamond sparkle star
│   │   ├── sunburst.tsx                # Radiant sunburst insignia
│   │   └── index.ts
│   ├── molecules/                      # Composite components
│   │   ├── marquee-row/                # Infinite dual-row marquee
│   │   ├── nav-link/                   # Navigation item with hover states
│   │   ├── shape-button/               # Diamond shape toggle node
│   │   ├── testimonial-card/           # Customer rating & portrait card
│   │   ├── work-card/                  # Signature work preview card
│   │   └── index.ts
│   └── organisms/                      # Full-page editorial sections
│       ├── category-carousel/          # 3D category card carousel
│       ├── custom-cta/                 # Tailored jewelry builder banner
│       ├── hero/                       # Hero banner with sculpture & badges
│       ├── info-cards/                 # 4-step craft & community stats
│       ├── navbar/                     # Persistent glassmorphic navbar
│       ├── new-collection/             # High-contrast dual collection banner
│       ├── newsletter/                 # Newsletter subscription form
│       ├── our-works/                  # Master crafts gallery
│       ├── quote-logos/                # Brand press quote & partner banner
│       ├── shop-by-shape/              # Interactive diamond silhouette dock
│       ├── testimonials/               # Client review marquee section
│       ├── try-on/                     # Virtual try-on studio prompt
│       └── index.ts
├── constants/                          # Centralized data stores
│   ├── community.ts                    # Testimonials & social links
│   ├── hero.ts                         # Hero assets & statistics
│   ├── navigation.ts                   # Header navigation links
│   ├── shop.ts                         # Diamond shapes metadata & categories
│   ├── showcase.ts                     # Portfolio works & gallery images
│   └── index.ts
├── hooks/                              # Custom React hooks
│   ├── use-carousel.ts                 # Carousel index cycling & swipe hook
│   ├── use-intersection-observer.ts    # Viewport reveal observer hook
│   └── index.ts
├── types/                              # TypeScript interfaces & definitions
│   ├── common.ts                       # Shared utility types
│   ├── community.ts                    # Testimonial & social types
│   ├── navigation.ts                   # Link & menu item types
│   ├── shop.ts                         # Diamond cut specs & category types
│   ├── showcase.ts                     # Gallery item types
│   └── index.ts
└── utils/                              # Helper functions
    ├── cn.ts                           # Tailwind class merger (clsx + twMerge)
    ├── cn.test.ts                      # Unit tests for class merging
    └── index.ts
```

## Design System

### Color Palette

| Color Variable  | Hex / Value                 | Usage                                     |
| --------------- | --------------------------- | ----------------------------------------- |
| `--color-ink`   | `#16110d`                   | Primary page background (deep velvet)     |
| `--color-ink-2` | `#1e1712`                   | Elevated card surfaces, glass docks       |
| `--color-ink-3` | `#292019`                   | High-elevation interactive controls       |
| `--color-shell` | `#a5826b`                   | Warm bronze accent tones                  |
| `--color-tan`   | `#b78c6c`                   | Champagne-gold highlights, badges, pips   |
| `--color-tan-2` | `#c9a184`                   | Secondary warm gold text & borders        |
| `--color-cream` | `#f3ece3`                   | Primary text, light headings, accents     |
| `--color-mute`  | `#8f7e70`                   | Subtext, secondary labels, metadata       |
| `--color-line`  | `rgba(243, 236, 227, 0.12)` | Subtle hair-thin borders & dividing rails |

### Tailwind Theme Extensions

```css
/* src/app/globals.css CSS-first theme configuration */
@theme {
  --font-display: "Clash Display", "Satoshi", sans-serif;
  --font-body: "Satoshi", "Clash Display", sans-serif;

  --color-shell: #a5826b;
  --color-ink: #16110d;
  --color-ink-2: #1e1712;
  --color-ink-3: #292019;
  --color-cream: #f3ece3;
  --color-tan: #b78c6c;
  --color-tan-2: #c9a184;
  --color-mute: #8f7e70;
  --color-line: rgba(243, 236, 227, 0.12);
}
```

### Typography Scale

```css
--fontSize-display-hero: clamp(2.5rem, 8vw, 6rem); /* Hero headlines */
--fontSize-display-section: clamp(2rem, 5vw, 4.5rem); /* Section titles */
--fontSize-display-h2: clamp(1.75rem, 4vw, 3rem); /* Subsection titles */
--fontSize-card-title: 1.5rem; /* Card titles */
--fontSize-navigation: 0.8125rem; /* Navigation links */
--fontSize-body: 0.875rem; /* Body text */
--fontSize-caption: 0.75rem; /* Metadata & badges */
--fontSize-micro: 0.625rem; /* Facet tags & counters */
```

### Font Families

**Clash Display** - High-contrast editorial display typography for headlines and luxury titles (Fontshare CDN)
**Satoshi** - Crisp, modern geometric sans-serif for body copy, labels, and specs (Fontshare CDN)

## Website Sections

### Header & Navigation

- Fixed position header with top gradient backdrop shroud
- Glassmorphic rounded pill navigation bar with deep backdrop blur
- Navigation links with active indicators and smooth anchor scroll offsets
- Search trigger, quick Shop jump, and Login action buttons
- Mobile slide-out drawer menu with smooth transition

### Hero Section

- Monumental brand headline with ambient background typography
- Classical marble hand sculpture displaying fine diamond jewelry
- Floating preview cards with rotation styling and subtle hover elevation
- Primary and secondary exploration call-to-action triggers

### Info Cards

- 4-step custom ring creation workflow summary
- Animated rotating sunburst insignia with preview imagery
- Active community statistics counter (4.8K+ members) with avatar stack

### Shop by Shape (Diamond Silhouette Dock)

- Left/right aligned editorial headlines ("Shop Diamond" / "by Shape")
- Clickable `<` and `>` arrow discs cycling through diamond cuts
- Dual-layered metallic track with centered alignment
- 5 tactile diamond bezels: Round, Oval, Cushion, Princess, Pear
- Dynamic Cut Inspection Console with 4-cell precision cut specs matrix

### Category Carousel

- 3D perspective category card presentation (Earrings, Necklaces, Wedding)
- Rotated side cards with central spotlight card
- Editorial "Curated Gallery" pill badge with crescent disc divider
- Interactive category selection buttons with instant card transitions
- Zero-collision vertical clearance protecting headline typography

### Our Works (Master Crafts)

- Curated showcase of signature diamond and gold jewelry pieces
- Featured spotlight card with luxury collection badges
- Interactive work gallery cards with image zoom on hover
- Direct action link to custom commission consultations

### New Collection

- Split high-contrast presentation for seasonal jewelry launches
- Curated feature imagery highlighting diamond necklaces and rings
- Bold typography with bespoke purchase buttons

### Virtual Try-On Studio

- Interactive engagement prompt for virtual jewelry fitting
- Split model preview showcasing ring and necklace try-on simulations
- Instant camera/AR launch call-to-action

### Press & Partner Quote Logos

- Clean luxury quote lockup reinforcing brand heritage
- Monochromatic partner logo strip celebrating craftsmanship recognition

### Testimonials Section

- Infinite double-row marquee of authentic client reviews
- Verified buyer tags, 5-star ratings, and customer portraits
- Pause-on-hover interaction for comfortable reading

### Custom CTA Banner

- High-impact closing banner inviting bespoke jewelry commissions
- Personalized design consultation button with arrow trigger

### Newsletter & Footer

- Clean email subscription form with validation feedback
- Brand copyright information, site index links, and back-to-top trigger

## Responsive Breakpoints

| Breakpoint | Target Devices          | Key Layout Adaptations                                    |
| ---------- | ----------------------- | --------------------------------------------------------- |
| < 640px    | Mobile phones           | Single column, horizontal scroll docks, compact nav       |
| ≥ 640px    | Large phones & phablets | 2-column info cards, expanded hero badges                 |
| ≥ 768px    | Tablets & iPads         | 2-column grids, unconstrained dock overflow, full nav bar |
| ≥ 1024px   | Small laptops           | Desktop navigation links, 3D carousel peek rotations      |
| ≥ 1280px   | Desktops                | Enhanced spacing, maximum typography clamp scaling        |
| ≥ 1536px   | Ultrawide monitors      | 1600px max-width container, edge-to-edge backdrop         |

## Animation Library

### CSS Animations

**Card Intro Transition**

```css
@keyframes cardin {
  from {
    opacity: 0;
    transform: translate(-50%, -46%) scale(0.94);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}
```

**Floating Parallax Motion**

```css
@keyframes floaty {
  0%,
  100% {
    transform: translateY(0) rotate(var(--rot, 0deg));
  }
  50% {
    transform: translateY(-14px) rotate(var(--rot, 0deg));
  }
}
```

**Infinite Marquee**

```css
@keyframes marquee {
  to {
    transform: translateX(-50%);
  }
}
```

**Gentle Shimmer & Sunburst Spin**

```css
@keyframes shimmer {
  0%,
  100% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
}
@keyframes spin-slow {
  to {
    transform: rotate(360deg);
  }
}
```

### CSS Transitions

```css
--transition-smooth: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
--transition-bezel: all 0.5s cubic-bezier(0.22, 1, 0.36, 1);
```

### Lenis Smooth Scrolling

- Mounted globally in `src/app/layout.tsx` via `SmoothScroll` provider
- Hardware-accelerated smooth scrolling with requestAnimationFrame synchronization
- Respects `prefers-reduced-motion: reduce` for accessibility compliance
- Seamlessly coexists with CSS sticky header and scroll reveal triggers

### Viewport Reveal Triggers

- Lightweight `IntersectionObserver` hook triggering `.reveal.in` state
- Staggered delay controls (`delay={150}`) for progressive entrance
- Zero external animation library overhead for rapid initial paint

## Customization Guide

### Updating Diamond Shapes & Categories

1. **Edit `src/constants/shop.ts`** - Update diamond shape labels, cut specs, facet counts, and category items
2. **Edit `src/constants/showcase.ts`** - Update master works gallery and showcase photography
3. **Edit `src/constants/community.ts`** - Update customer reviews, names, and ratings
4. **Edit `src/constants/navigation.ts`** - Update header links and anchor references

### Styling Modifications

```css
/* Modify theme custom properties in src/app/globals.css */
@theme {
  --color-ink: /* primary background */;
  --color-tan: /* gold accent color */;
  --color-cream: /* typography color */;
  --font-display: /* custom heading font */;
}
```

### Adding New Sections

1. Create section organism in `src/components/organisms/<section-name>/`
2. Export component from `src/components/organisms/index.ts`
3. Add section to `src/app/page.tsx` with appropriate `scroll-mt` attribute

## Browser Compatibility

![Chrome](https://img.shields.io/badge/Chrome-90+-4285F4?style=flat-square&logo=googlechrome&logoColor=white)
![Firefox](https://img.shields.io/badge/Firefox-88+-FF7139?style=flat-square&logo=firefox&logoColor=white)
![Safari](https://img.shields.io/badge/Safari-14+-000000?style=flat-square&logo=safari&logoColor=white)
![Edge](https://img.shields.io/badge/Edge-90+-0078D7?style=flat-square&logo=microsoftedge&logoColor=white)

**Full Support** - Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
**Lenis Smooth Scroll** - Modern browsers with RAF support
**Glassmorphism Filters** - Browsers supporting `backdrop-filter`
**Progressive Enhancement** - Graceful fallback to native scrolling and solid surfaces

## Performance Features

**Next.js Optimizations**

- React 19 Server Components for minimal client hydration bundle
- Built-in font optimization via Fontshare CDN preconnect
- Fast development builds powered by Turbopack
- Automatic code splitting across dynamic client components

**Optimized Loading & Assets**

- Preconnected font origins for zero FOIT/FOUT
- Native lazy loading and decoding on gallery imagery
- Hardware-accelerated CSS transforms (`translate3d`, `scale`)
- Zero bulky external CSS or JS frameworks

**Type-Safe Architecture**

- 100% strict TypeScript typing across all components, props, and constants
- No implicit `any` throughout the codebase
- Clean path aliases (`@/*`) mapping to `src/*`
- Automated Prettier and ESLint code quality standards

## Contact & Support

![Email](https://img.shields.io/badge/Email-aadigunjal0975%40gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white)
![LinkedIn](https://img.shields.io/badge/LinkedIn-aadityagunjal0975-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)
![WhatsApp](https://img.shields.io/badge/WhatsApp-Contact-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)

**Get In Touch**

- **Email:** [aadigunjal0975@gmail.com](mailto:aadigunjal0975@gmail.com)
- **Phone:** +91 84335 09521
- **LinkedIn:** [aadityagunjal0975](https://www.linkedin.com/in/aadityagunjal0975/)
- **Location:** Dombivli, Maharashtra, India

**Professional Inquiries Welcome** - Open to freelance projects, collaboration opportunities, and full-time engineering roles.

## License

![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge&logo=opensourceinitiative&logoColor=white)

```
MIT License

Copyright (c) 2026 Aaditya Gunjal

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

**Zales Luxury Jewelry Landing Page (Next.js)** - A luxury e-commerce experience showcasing modern Next.js 16 App Router architecture, React 19 Server Components, Tailwind CSS v4, Lenis smooth scrolling, and atomic design.

**Star this repository** if you found it helpful!
