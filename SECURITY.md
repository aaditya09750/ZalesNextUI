### ZALES — SECURITY POLICY & AUDIT SPECIFICATIONS (Next.js)

![Security](https://img.shields.io/badge/Security-Policy-brightgreen?style=for-the-badge&logo=shield&logoColor=white)
![Vulnerabilities](https://img.shields.io/badge/Vulnerability-Reporting-orange?style=for-the-badge)
![Responsible Disclosure](https://img.shields.io/badge/Disclosure-Responsible-blue?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-16.3.8-000000?style=for-the-badge&logo=next.js&logoColor=white)

Security guidelines, vulnerability reporting protocols, and security surface specifications for the Zales Luxury Landing Page project ecosystem.

**Developer:** Aaditya Gunjal - Full Stack Developer

## Supported Versions

Only active stable branches and the latest semantic releases receive active security updates and patch advisories:

| Version | Supported          | Security Status                       |
| ------- | ------------------ | ------------------------------------- |
| 0.1.x   | :white_check_mark: | Active Support & Security Patches     |
| < 0.1.0 | :x:                | Unsupported / Deprecated Alpha Builds |

## Reporting a Vulnerability

We prioritize the security and integrity of this project and take all security vulnerabilities seriously. If you identify a potential security vulnerability within this repository, we appreciate your responsible and prompt disclosure.

**Please do NOT disclose vulnerabilities publicly in open GitHub issues, pull requests, or public discussions.**

### Vulnerability Reporting Procedure

1. **Email Directly:** Send a detailed report to **[aadigunjal0975@gmail.com](mailto:aadigunjal0975@gmail.com)** with the subject line `[SECURITY] Potential Vulnerability in ZalesNextUI`.
2. **Include Technical Context:**
   - Detailed description of the potential vulnerability or vector.
   - Specific commit hash, branch, or file locations affected.
   - Step-by-step reproduction instructions or Proof of Concept (PoC).
   - Any proposed remediation, mitigation, or patch.
3. **Response SLA:** You will receive an initial acknowledgment within **48 hours** with an initial assessment and timeline.
4. **Resolution & Release:** A patch will be authored, validated, and merged into the primary branch, followed by a public advisory crediting the researcher (if desired).

## Threat Model & Attack Surface Scope

The Zales landing page is an architectural React Server Component and client-interactive showcase designed with strict client/server boundaries.

### Architecture Scope

| Surface Area            | Risk Profile | Protective Safeguards & Mechanisms                                           |
| ----------------------- | ------------ | ---------------------------------------------------------------------------- |
| Static Landing UI       | Minimal      | Read-only client hydration without user-generated dynamic database rendering |
| External Image Assets   | Low          | Strict `next/image` host domain allowlisting (Pexels, Unsplash)              |
| Dynamic Component State | Negligible   | Local client-side memory state (carousel index, shape filter tabs)           |
| Dependencies & Packages | Medium       | Routine audit scans via `pnpm audit` and Dependabot tracking                 |
| Third-Party CDN Fonts   | Low          | Fontshare CDN CSS links scoped strictly to trusted providers                 |

### Attack Surface Mitigation

- **Zero User Injection / XSS:** The application accepts no arbitrary unescaped HTML or user markdown injection in runtime DOM trees.
- **External Asset Isolation:** Next.js remote patterns in `next.config.ts` restrict remote image optimization exclusively to verified hostnames (`images.pexels.com`, `images.unsplash.com`).
- **Dependency Hygiene:** Automated dependabot audits and pinned lockfiles ensure that supply chain vulnerabilities are minimized.
- **Client Sanitization:** Contact forms and interactive inputs sanitize client inputs to prevent malicious string execution.

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
