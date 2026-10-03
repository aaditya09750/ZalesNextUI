# Architecture

## System Context

This is a static landing page. There is no backend, database, or external API integration. All content is hardcoded in TypeScript constant files.

```mermaid
graph LR
    User[Browser] --> NextJS[Next.js App]
    NextJS --> Vercel[Vercel CDN]
    NextJS --> Pexels[Pexels CDN - Images]
    NextJS --> Fontshare[Fontshare CDN - Fonts]
```

## Component Hierarchy

The project follows Atomic Design with three layers:

```mermaid
graph TD
    subgraph Organisms ["Organisms (Page Sections)"]
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
    end

    subgraph Icons ["Icons (SVG Components)"]
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
    Hero --> Reveal & ArrowCircle
    ShopByShape --> ShapeButton & DiamondRound & DiamondOval & DiamondCushion & DiamondPrincess & DiamondPear
    OurWorks --> WorkCard & ArrowCircle
    Testimonials --> MarqueeRow --> TestimonialCard
    Newsletter --> HalfDisc & Reveal
```

## Rendering Strategy

| Component        | Type   | Reason                                          |
| ---------------- | ------ | ----------------------------------------------- |
| `layout.tsx`     | Server | Static shell, no interactivity                  |
| `page.tsx`       | Server | Composes organisms, no state                    |
| Navbar           | Client | `useState` for mobile menu                      |
| Hero             | Client | `useState` for slide index                      |
| InfoCards        | Server | Pure display                                    |
| ShopByShape      | Client | `useState` for active shape                     |
| CategoryCarousel | Client | `useState` for carousel index                   |
| OurWorks         | Client | `useState` for featured index                   |
| NewCollection    | Client | `useState` for active tag                       |
| TryOn            | Server | Pure display                                    |
| QuoteLogos       | Server | Pure display                                    |
| Testimonials     | Server | Pure display (CSS animations)                   |
| CustomCTA        | Server | Pure display                                    |
| Newsletter       | Client | `useState` for form                             |
| Reveal           | Client | `useRef` + `useEffect` for IntersectionObserver |

**Total: 7 Client Components, 8 Server Components**

## Data Flow

There is no data flow. All content lives in `src/constants/` as typed TypeScript arrays. Components import constants directly.

```mermaid
sequenceDiagram
    participant U as User
    participant B as Browser
    participant N as Next.js Server

    U->>B: Visit /
    B->>N: GET /
    N->>B: HTML (Server-rendered)
    B->>B: Hydrate Client Components
    B->>B: Load fonts from Fontshare
    B->>B: Load images from Pexels CDN
    U->>B: Scroll
    B->>B: IntersectionObserver triggers reveal animations
    U->>B: Click diamond shape
    B->>B: useState updates active shape (client-side)
    U->>B: Submit newsletter
    B->>B: useState shows "thank you" (no backend call)
```

## Known Limitations

- Newsletter form is UI-only — no backend processing
- No image optimization for external Pexels URLs (kept as `<img>`)
- Fonts loaded from external CDN (Fontshare) — not self-hosted
- No analytics or tracking

## Evolution Paths

1. **CMS integration**: Replace `constants/` with headless CMS (Sanity, Contentful)
2. **E-commerce**: Add product pages with dynamic routes (`app/products/[slug]/page.tsx`)
3. **Auth**: Add Clerk or Auth.js for user accounts
4. **i18n**: Use `next-intl` for multi-language support
