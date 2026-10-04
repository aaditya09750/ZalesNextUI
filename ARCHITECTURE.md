### ZALES — SYSTEM ARCHITECTURE SPECIFICATION (Next.js)

![Next.js](https://img.shields.io/badge/Next.js-16.3.8-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19.2.6-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.17-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Atomic Design](https://img.shields.io/badge/Architecture-Atomic_Design-FF6F61?style=for-the-badge&logo=diagramsdotnet&logoColor=white)
![Lenis](https://img.shields.io/badge/Lenis-1.3.26-000000?style=for-the-badge&logo=javascript&logoColor=white)

Comprehensive architectural design document outlining the technical structure, component taxonomy, data flow, rendering strategy, and design systems for the Zales Luxury Landing Page web application.

**Developer:** Aaditya Gunjal - Full Stack Developer

## Core Architectural Principles

**Server-First Rendering Architecture** - Root layout and initial page structures render as React Server Components, delivering pre-rendered semantic HTML to the client for lightning-fast First Contentful Paint (FCP) and optimal search engine discoverability.

**Atomic Design Methodology** - Strict component modularity separating UI primitives into Atoms (foundational triggers and observers), Icons (custom SVG geometry), Molecules (composed cards and interactive toggles), and Organisms (standalone page sections).

**CSS-First Token System** - Zero-configuration Tailwind CSS 4 utilizing `@theme` directives directly in `globals.css`, eliminating redundant config files while providing compile-time type-safety for luxury design tokens.

**Smooth Scroll Integration** - Unified Lenis smooth scroll provider mounted at the application boundary, orchestrating the requestAnimationFrame cycle while preventing conflicts with sticky navigation elements and keyboard navigation.

## System Context Diagram

```mermaid
graph LR
    User[Client Browser] --> NextApp[Next.js 16 App Router]
    NextApp --> ServerRender[React Server Components]
    NextApp --> ClientHooks[Interactive Client Islands]
    NextApp --> Fontshare[Fontshare CDN - Clash Display & Satoshi]
    NextApp --> ImageAssets[Public Static Assets & Pexels CDN]
    NextApp --> LenisEngine[Lenis Smooth Scroll Engine]
```

## Component Hierarchy & Taxonomy

```mermaid
graph TD
    subgraph Organisms ["Organisms (Complete Page Sections)"]
        Navbar
        Hero
        InfoCards
        ShopByShape
        CategoryCarousel
        OurWorks
        NewCollection
        TryOn
        QuoteLogos
        Testimonials
        CustomCTA
        Newsletter
    end

    subgraph Molecules ["Molecules (Composed Units)"]
        NavLink
        ShapeButton
        WorkCard
        TestimonialCard
        MarqueeRow
    end

    subgraph Atoms ["Atoms (Primitives)"]
        Reveal
        ArrowCircle
        SmoothScroll
    end

    subgraph Icons ["Icons (SVG Jewelry Components)"]
        Sparkle
        HalfDisc
        Sunburst
        DiamondRound
        DiamondOval
        DiamondCushion
        DiamondPrincess
        DiamondPear
    end

    Navbar --> NavLink
    Hero --> Reveal & ArrowCircle & Sunburst
    ShopByShape --> Reveal & ArrowCircle & Sparkle & DiamondRound & DiamondOval & DiamondCushion & DiamondPrincess & DiamondPear
    CategoryCarousel --> Reveal & HalfDisc
    OurWorks --> Reveal & WorkCard & ArrowCircle
    Testimonials --> Reveal & MarqueeRow --> TestimonialCard
```

## Directory Architecture

```
src/
├── app/
│   ├── globals.css             # Theme definitions, keyframes, scroll utilities
│   ├── layout.tsx              # Root HTML shell, fonts, smooth scroll provider
│   ├── page.tsx                # Single-page layout composition
│   └── robots.ts               # Crawler routing configuration
├── components/
│   ├── atoms/                  # Foundation primitives (Reveal, ArrowCircle, SmoothScroll)
│   ├── icons/                  # Custom luxury SVG icons (Diamonds, Sunburst, Sparkle)
│   ├── molecules/              # Interactive composite controls (Cards, Marquees)
│   └── organisms/              # 12 full-width responsive landing sections
├── constants/                  # Single source of truth for static datasets
├── hooks/                      # Custom React hooks (useCarousel, useIntersectionObserver)
├── types/                      # Comprehensive TypeScript interface definitions
└── utils/                      # Pure helper utilities (cn helper, tests)
```

## Data Flow & State Management

```mermaid
sequenceDiagram
    autonumber
    actor User
    participant Browser as Client Browser
    participant Nav as Sticky Navbar
    participant Dock as Silhouette Dock
    participant Store as Central Constants

    User->>Browser: Enters page / scrolls viewport
    Browser->>Nav: Scroll event captured
    Nav->>Nav: Dynamic opacity & backdrop-blur applied
    User->>Dock: Clicks "Princess Cut" shape button
    Dock->>Store: Retrieves cut specs & facet data
    Store-->>Dock: Returns specs {facets: 76, fire: "Geometric Radiance"}
    Dock->>Dock: Updates active bezel glow & inspection console smoothly
```

## Technology Stack

| Technology    | Version | Purpose                                           |
| ------------- | ------- | ------------------------------------------------- |
| Next.js       | 16.3.8  | App Router, Server Components, Turbopack bundling |
| React         | 19.2.6  | Modern component framework with client hooks      |
| TypeScript    | 5.9.3   | Strict compile-time type verification             |
| Tailwind CSS  | 4.1.17  | Modern utility-first CSS styling engine           |
| Lenis         | 1.3.26  | Hardware-accelerated smooth scrolling             |
| Lucide React  | 1.49.0  | Clean UI utility iconography                      |
| Clash Display | CDN     | Display typography for headings via Fontshare     |
| Satoshi       | CDN     | Modern sans-serif body typography via Fontshare   |
| Vitest        | 3.0.0   | Fast unit testing for utility algorithms          |

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
