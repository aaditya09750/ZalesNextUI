### ZALES — ADR 0002: ATOMIC DESIGN COMPONENT ARCHITECTURE (Next.js)

![Status](https://img.shields.io/badge/Status-Accepted-brightgreen?style=for-the-badge)
![Date](https://img.shields.io/badge/Date-2024--10--02-blue?style=for-the-badge)
![Methodology](https://img.shields.io/badge/Methodology-Atomic_Design-FF6F61?style=for-the-badge)
![Architecture](https://img.shields.io/badge/Architecture-Modular_React-61DAFB?style=for-the-badge&logo=react&logoColor=black)

Architectural Decision Record establishing Brad Frost's Atomic Design component hierarchy across the UI component layer of the Zales Luxury Landing Page project ecosystem.

**Developer:** Aaditya Gunjal - Full Stack Developer

## Context & Problem Statement

Prior to architectural refactoring, the project UI components suffered from monolithic aggregation:

1. **Monolithic Primitive Bloat:** A single legacy `ui.tsx` file spanned over 248 lines, packaging 13 disparate component exports ranging from buttons and pills to diamond geometry icons and badges.
2. **Coupled Presentation Sections:** Landing sections were bundled into 3 multi-thousand-line mega-files, combining layout rendering, data structures, and stateful hooks into single files.
3. **Impaired Reusability & Testability:** Isolating a single button or badge for independent styling or unit testing required importing massive parent modules, leading to high circular dependency risk and cognitive friction for new engineers.

## Decision

Adopt Brad Frost's **Atomic Design Methodology** categorized into three strict modular layers within `src/components/`:

### The 3-Tier Atomic Hierarchy

```
src/components/
├── atoms/                  # Layer 1: Indivisible UI Building Blocks
│   ├── button.tsx          # Pure button with variant styling
│   ├── badge.tsx           # Pill-style status & editorial badges
│   ├── heading.tsx         # Responsive typography primitives (h1-h6)
│   ├── text.tsx            # Body typography primitives (p, span)
│   ├── shape-icon.tsx      # Procedural SVG diamond cut silhouettes
│   └── index.ts            # Atom barrel export
│
├── molecules/              # Layer 2: Composed Functional UI Elements
│   ├── nav-links.tsx       # Anchor link groups with active styling
│   ├── product-card.tsx    # Jewelry product card with imagery & price
│   ├── testimonial-card.tsx# Client review bubble with stars & avatar
│   └── index.ts            # Molecule barrel export
│
└── organisms/              # Layer 3: Complete Self-Contained Page Sections
    ├── header.tsx          # Persistent glassmorphic navigation bar
    ├── hero.tsx            # Editorial hero with marble sculpture
    ├── shop-by-shape.tsx   # Interactive diamond dock & cut console
    ├── category-carousel.tsx# Curated 3D carousel with clearance
    ├── our-works.tsx       # Master crafts asymmetric showcase
    ├── new-collection.tsx  # Editorial luxury jewelry collection
    ├── virtual-try-on.tsx  # Augmented reality preview studio
    ├── testimonials.tsx    # Continuous marquee review slider
    ├── newsletter.tsx      # VIP concierge subscription form
    ├── footer.tsx          # Comprehensive luxury site footer
    └── index.ts            # Organism barrel export
```

## Rules of Component Containment

1. **Atoms** may NEVER import other atoms, molecules, or organisms. They are pure, self-contained primitives.
2. **Molecules** compose two or more atoms. They may NEVER import organisms.
3. **Organisms** compose molecules and atoms to form complete layout features.
4. **Data Isolation:** No static arrays may reside inside component files; all collections reside strictly in `src/constants/`.

## Consequences

### Positive

- **Single Responsibility Principle (SRP):** Every component file performs exactly one duty and rarely exceeds 150 lines.
- **Isolated Testing & Styling:** Atoms can be visually verified and styled independently without bootstrapping full page layouts.
- **Accelerated Onboarding:** New engineers immediately comprehend component boundaries via directory taxonomy.
- **Zero Circular Dependencies:** Strict directional hierarchy prevents cyclical import graphs.

### Negative / Mitigations

- **Increased File Count:** Decomposing monolithic files creates more granular files and directory folders.
  - _Mitigation:_ Comprehensive `index.ts` barrel exports in every folder ensure clean, one-line external imports.

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
