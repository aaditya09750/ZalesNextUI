### ZALES — CONTRIBUTION & ENGINEERING GUIDELINES (Next.js)

![Next.js](https://img.shields.io/badge/Next.js-16.3.8-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19.2.6-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Conventional Commits](https://img.shields.io/badge/Conventional_Commits-1.0.0-FE5196?style=for-the-badge&logo=conventionalcommits&logoColor=white)
![Atomic Design](https://img.shields.io/badge/Architecture-Atomic_Design-FF6F61?style=for-the-badge&logo=diagramsdotnet&logoColor=white)

Contribution guidelines and code standards for engineers and collaborators maintaining the Zales Luxury Landing Page repository.

**Developer:** Aaditya Gunjal - Full Stack Developer

## Development Workflow

1. Clone the repository:
   ```bash
   git clone git@github.com:aaditya09750/ZalesNextUI.git
   cd ZalesNextUI
   ```
2. Create a dedicated feature branch from `main`:
   ```bash
   git checkout -b feat/your-feature-name
   ```
3. Install dependencies and start Turbopack:
   ```bash
   pnpm install
   pnpm dev
   ```

## Branch Naming Conventions

All branches must adhere to standard prefixed identifiers:

| Prefix      | Description                                        | Example                               |
| ----------- | -------------------------------------------------- | ------------------------------------- |
| `feat/`     | New feature or UI capability                       | `feat/interactive-shape-dock`         |
| `fix/`      | Bug fix or visual correction                       | `fix/navbar-scroll-overlap`           |
| `docs/`     | Documentation updates or additions                 | `docs/update-architecture-spec`       |
| `refactor/` | Code reorganization without behavioral alterations | `refactor/extract-shape-constants`    |
| `perf/`     | Performance or rendering optimizations             | `perf/optimize-marquee-animation`     |
| `chore/`    | Dependency bumps, tooling changes, or CI updates   | `chore/upgrade-tailwind-dependencies` |

## Conventional Commit Messages

Commits are validated using `@commitlint` following the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>[<scope>]: <description>
```

**Examples:**

- `feat[shop/shape-selector]: enhance diamond shape selector with interactive dock, luxury bezels, and cut console`
- `fix[ui/navigation]: resolve sticky navbar text overlap with header shroud and scroll margins`
- `refactor[constants/shop]: extract diamond shapes into dedicated shop constants file`
- `docs[readme]: update project documentation with comprehensive component breakdown`

## Pull Request Checklist

Before submitting a Pull Request for review:

- [ ] Code formatted via `pnpm format`
- [ ] TypeScript strict validation passes with `pnpm typecheck`
- [ ] ESLint check passes with zero warnings via `pnpm lint`
- [ ] No `any` type annotations without documented justification
- [ ] File names follow strict `kebab-case.tsx` convention
- [ ] Component exports follow `PascalCase` convention
- [ ] Constants use `SCREAMING_SNAKE_CASE` in `src/constants/`
- [ ] New UI sections implement Atomic Design placement (`src/components/organisms/`)
- [ ] Pull Request includes clear before/after context

## Code Style Principles

- **Atomic Design:** Primitives live in `atoms/`, icons in `icons/`, composite widgets in `molecules/`, and full sections in `organisms/`.
- **Server-First:** Only include `"use client"` when state or browser event listeners are strictly necessary.
- **Max File Length:** Strive to keep files under ~300 lines for high cohesion and readability.
- **No Stubs:** Never commit empty placeholder functions or `TODO: implement` stubs.

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
