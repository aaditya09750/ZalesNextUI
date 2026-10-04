### ZALES — ENVIRONMENT SETUP & DEPLOYMENT GUIDE (Next.js)

![Next.js](https://img.shields.io/badge/Next.js-16.3.8-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19.2.6-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.17-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-22+-339933?style=for-the-badge&logo=node.js&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-12+-F69220?style=for-the-badge&logo=pnpm&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=for-the-badge&logo=docker&logoColor=white)

Comprehensive setup guide, prerequisites specification, verification workflows, and deployment procedures for the Zales Luxury Landing Page project.

**Developer:** Aaditya Gunjal - Full Stack Developer

## System Prerequisites

| Requirement       | Minimum Version | Recommended Method                                                                       |
| ----------------- | --------------- | ---------------------------------------------------------------------------------------- |
| **Node.js**       | `>= 22.0.0`     | Install via [nvm](https://github.com/nvm-sh/nvm) or [fnm](https://github.com/Schniz/fnm) |
| **pnpm**          | `>= 10.0.0`     | `corepack enable && corepack prepare pnpm@latest --activate`                             |
| **Git**           | `>= 2.30.0`     | Installed with SSH key configuration                                                     |
| **Docker Engine** | `>= 24.0.0`     | Required for containerized runtime environments                                          |

## Quick Start Installation

```bash
# Clone the repository using SSH
git clone git@github.com:aaditya09750/ZalesNextUI.git
cd ZalesNextUI

# Install exact dependencies
pnpm install

# Launch development environment with Turbopack
pnpm dev
```

The application will be live at `http://localhost:3000`.

## Build & Audit Commands

```bash
# Start Turbopack dev server
pnpm dev

# Build for production
pnpm build

# Preview production build locally
pnpm start

# Run ESLint validation
pnpm lint

# Auto-fix linting issues
pnpm lint:fix

# Format entire codebase with Prettier
pnpm format

# Verify formatting without modifying files
pnpm format:check

# Run strict TypeScript type check
pnpm typecheck

# Run Vitest unit tests
pnpm test

# Run full quality check suite
pnpm check
```

## Typography & External Media Configuration

### Custom Fonts via Fontshare CDN

The project integrates two luxury editorial typefaces loaded via `<link>` in `src/app/layout.tsx`:

- **Clash Display** (Weights: 400, 500, 600, 700) — Used for monumental headlines and luxury typography
- **Satoshi** (Weights: 400, 500, 700, 900) — Used for body copy, specs, and navigation controls

No manual font installation or local WOFF2 conversion is required.

### External Image Domain Whitelisting

Images are served from curated Pexels photography CDN endpoints. Allowed domains are configured in `next.config.ts`:

```ts
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};
```

## Docker Containerization

### Dockerfile Deployment

```bash
# Build the production Docker image
docker build -t zales-next-ui .

# Run container on port 3000
docker run -p 3000:3000 zales-next-ui

# Run detached container with custom name
docker run -d -p 3000:3000 --name zales-landing zales-next-ui
```

### Docker Compose

```yaml
version: "3.8"
services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: always
```

```bash
# Start container with Compose
docker compose up -d --build

# Stop container
docker compose down
```

## Production Deployment on Vercel

1. Push your latest branch to GitHub:
   ```bash
   git push origin main
   ```
2. Navigate to [vercel.com](https://vercel.com) and click **Add New Project**.
3. Import `ZalesNextUI` from your GitHub repository list.
4. Vercel automatically detects Next.js with zero manual build configuration.
5. Click **Deploy**. Production deployments will be served worldwide via Vercel Edge Network.

## Common Troubleshooting

### 1. Font rendering fallback

- **Cause**: CDN connectivity issue during offline development.
- **Solution**: The CSS font stack automatically falls back to system sans-serif (`sans-serif`, `system-ui`). Check internet connectivity to re-enable Fontshare web fonts.

### 2. Node.js version warnings

- **Cause**: Running Node.js versions below 22.
- **Solution**: Switch to Node.js 22 LTS via `nvm use 22` or `fnm use 22`.

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
