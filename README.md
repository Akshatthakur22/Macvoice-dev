# MacVoice Website

**The official product and purchase platform for MacVoice — the local-first voice keyboard for macOS.**

Built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4, and Stripe checkout integration.

---

## 1. Project Overview

MacVoice is an ultra-lightweight, on-device voice typing utility for Mac power users that streams words live to the cursor across VS Code, Slack, Obsidian, and every native macOS app.

This repository contains the complete production website, visual storytelling system, and secure one-time purchase ($9 USD) infrastructure that delivers the verified `MacVoice.dmg` release package.

### Key Highlights
- **Apple-grade Visual Hierarchy & Design System:** Tailored typography scale, graphite and surface neutrals, primary blue `#0A84FF` accents, and realistic interactive macOS window simulators.
- **Zero Cloud Architecture Disclosed Honestly:** 100% on-device speech processing using Apple's native `SpeechAnalyzer` framework, zero telemetry, zero accounts.
- **Functional $9 Purchase Infrastructure:** Stripe Checkout integration verifying server-side payments before issuing tamper-proof HMAC-SHA256 download tokens for `MacVoice.dmg`.
- **Chat-Aware Safety Moat:** Highlights MacVoice's intelligent Shift+Return behavior that prevents premature message sends in Slack, Teams, and WhatsApp.
- **Two Distinct Modes:** Full interactive side-by-side comparison of Verbatim Mode (raw speed) vs Polished Mode (instant filler removal in <0.1ms).

---

## 2. Project Structure

```
├── public/
│   ├── brand/                      # Official MacVoice SVG symbols, logos, and PNG icons
│   │   ├── macvoice-symbol.svg
│   │   ├── macvoice-logo-dark.svg
│   │   ├── macvoice-icon-dark-1024.png
│   │   └── macvoice-favicon-32.png
│   ├── releases/                   # Verified release package
│   │   └── MacVoice.dmg            # Official 737 KB DMG release binary
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── checkout/route.ts   # Stripe Checkout API ($9.00 USD one-time)
│   │   │   ├── webhook/route.ts    # Cryptographic Stripe webhook signature verification
│   │   │   └── download/route.ts   # Server-side authorized DMG streaming endpoint
│   │   ├── compatibility/page.tsx  # Documented destination compatibility matrix
│   │   ├── docs/page.tsx           # Setup guide, shortcut customization, permission troubleshooting
│   │   ├── pricing/page.tsx        # One-time $9 license breakdown & economics
│   │   ├── privacy/page.tsx        # Full Air-Gap Architecture & Privacy Constitution
│   │   ├── success/
│   │   │   ├── page.tsx            # Post-purchase download page with Suspense
│   │   │   └── SuccessContent.tsx  # Verified purchase token handler & DMG download CTA
│   │   ├── terms/page.tsx          # Terms of Sale, 5-Mac entitlement, refund terms
│   │   ├── globals.css             # Apple font stacks, CSS variables, Modern Web Guidance modals
│   │   ├── layout.tsx              # SEO metadata, OpenGraph tags, sticky navbar, and footer
│   │   └── page.tsx                # Homepage assembling all 10 core conversion sections
│   ├── components/
│   │   ├── home/
│   │   │   ├── Hero.tsx            # High-impact hero, pill badge, dual CTAs, trust metrics
│   │   │   ├── LiveDemo.tsx        # Interactive macOS simulator (VS Code & Slack streaming)
│   │   │   ├── MetricsBar.tsx      # 784 KB, ~60 MB RAM, <150ms latency, 0 Bytes cloud
│   │   │   ├── CorePillars.tsx     # The 3 pillars (Streaming, Swift Polisher, Chat-Safe)
│   │   │   ├── TwoModes.tsx        # Interactive Verbatim vs Polished mode showcase
│   │   │   ├── ComparisonTable.tsx # MacVoice vs Apple Dictation vs Wispr Flow vs Superwhisper
│   │   │   ├── PrivacyGuarantee.tsx# 4-part air-gap architecture and permission rationale
│   │   │   ├── OnboardingSteps.tsx # 3-step setup walkthrough
│   │   │   ├── PricingSection.tsx  # $9 One-Time card with feature checklist & Stripe trigger
│   │   │   ├── FAQSection.tsx      # Expandable accordion answering technical objections
│   │   │   └── FinalCTA.tsx        # Closing conversion card with system requirements
│   │   ├── layout/
│   │   │   ├── Navbar.tsx          # Sticky glass navbar with responsive navigation
│   │   │   └── Footer.tsx          # Technical footer with SHA-256 checksum and legal links
│   │   └── ui/
│   │       ├── Badge.tsx           # Apple-style pill badge
│   │       ├── Button.tsx          # Tactile Apple-grade buttons (Primary, Secondary, Outline)
│   │       ├── Container.tsx       # Standardized layout containers (narrow, default, wide)
│   │       ├── Dialog.tsx          # Accessible <dialog> modal (Modern Web Guidance compliant)
│   │       ├── MacOSWindow.tsx     # Realistic macOS window frame with traffic lights
│   │       ├── SectionHeader.tsx   # Consistent section headings with eyebrow and subtext
│   │       └── ShortcutBadge.tsx   # Native physical key styling (⌃⌥Space)
│   └── lib/
│       ├── downloadToken.ts        # HMAC-SHA256 token generator and validator
│       ├── stripe.ts               # Stripe client initialization and product constants
│       └── utils.ts                # Utility classes combining and currency formatters
├── .env.example                    # Documented configuration variables
├── package.json
└── tsconfig.json
```

---

## 3. Design System & Component Documentation

| Token Name | Hex Value | Semantic Usage |
| :--- | :--- | :--- |
| **Canvas Background** | `#090E17` | Apple-inspired deep canvas dark aesthetic |
| **Surface Elevated** | `#111724` | Cards, feature blocks, and macOS window bodies |
| **Surface Highlight** | `#161E31` | Hover states and table header backgrounds |
| **Primary Blue** | `#0A84FF` | Primary action buttons, active recording indicators, key brand accents |
| **Light Blue** | `#64D2FF` | Waveform highlights, gradient text endings, badge borders |
| **Text Primary** | `#F8FAFC` | Headings, active values, high-contrast readable text |
| **Text Secondary** | `#94A3B8` | Body copy, explanatory descriptions, table text |
| **Text Muted** | `#64748B` | Footers, timestamps, legal microcopy |

### Accessible Modal & Scroll Behavior
Compliant with `modern-web-guidance`:
- Native HTML `<dialog>` element handles focus trapping and Esc dismissal natively without custom ARIA role overrides.
- Background page scrolling is contained via CSS `overscroll-behavior: contain` on `dialog:modal` and `dialog::backdrop` without layout-shifting `overflow: hidden` hacks on the body.

---

## 4. Environment Variables

Create a `.env.local` file with the following keys:

```bash
# Stripe Secret Key (from Stripe Dashboard > Developers > API keys)
STRIPE_SECRET_KEY=sk_live_... (or sk_test_... for sandbox testing)

# Stripe Webhook Secret (from Stripe Dashboard > Developers > Webhooks)
STRIPE_WEBHOOK_SECRET=whsec_...

# Download Token Signing Key (64-character random string)
DOWNLOAD_SIGNING_SECRET=your_tamper_proof_secret_signing_key_here

# Release Package Path Override (optional, defaults to public/releases/MacVoice.dmg)
# DMG_FILE_PATH=/absolute/path/to/MacVoice.dmg
```

---

## 5. Payment Provider Setup Instructions (Stripe)

1. **Create Stripe Account:** Sign up at [stripe.com](https://stripe.com).
2. **Retrieve API Keys:** Go to **Developers > API Keys** and copy the Secret Key (`sk_test_...` or `sk_live_...`). Add it as `STRIPE_SECRET_KEY`.
3. **Configure Webhook Endpoint:**
   - In Stripe Dashboard, go to **Developers > Webhooks** and click **Add Endpoint**.
   - URL: `https://your-domain.com/api/webhook`
   - Select events to listen to: `checkout.session.completed`.
   - Copy the **Signing Secret** (`whsec_...`) and set it as `STRIPE_WEBHOOK_SECRET`.
4. **Local Webhook Testing:**
   ```bash
   stripe listen --forward-to localhost:3000/api/webhook
   ```
5. **Production Behavior:**
   - In production (`NODE_ENV=production`), if `STRIPE_SECRET_KEY` is omitted, `/api/checkout` returns HTTP 503 instead of simulating fake payment, preserving financial security.

---

## 6. DMG Upload & Release Instructions

1. **Compile & Notarize Binary:**
   - The native Swift binary is built from the `Typer` repository using `scripts/create_dmg.sh`.
   - Codesign with your Apple Developer ID:
     ```bash
     codesign --deep --force --verify --verbose --sign "Developer ID Application: Your Name (TEAM_ID)" MacVoice.app
     ```
   - Package into DMG and submit to Apple Notary Service:
     ```bash
     xcrun notarytool submit MacVoice.dmg --keychain-profile "macvoice-notary" --wait
     xcrun stapler staple MacVoice.dmg
     ```
2. **Place in Website Repository:**
   - Copy the stapled DMG to `public/releases/MacVoice.dmg`.
   - Verify SHA-256 hash:
     ```bash
     shasum -a 256 public/releases/MacVoice.dmg
     ```
   - The verified checksum (`c65640421934f518328b17a75a518e2ba36b7bb3dedd15ffeff4c30d8d1c7515`) is displayed on the website footer and success confirmation page.

---

## 7. Vercel Deployment Instructions

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "feat: complete MacVoice website and payment delivery platform"
   git push origin main
   ```
2. **Import into Vercel:**
   - Connect your GitHub repository to [vercel.com](https://vercel.com).
   - Framework Preset: **Next.js**.
   - Build Command: `pnpm build` (or `next build`).
   - Output Directory: `.next`.
3. **Configure Environment Variables in Vercel:**
   - `STRIPE_SECRET_KEY`
   - `STRIPE_WEBHOOK_SECRET`
   - `DOWNLOAD_SIGNING_SECRET`
4. **Assign Custom Domain:** Add `macvoice.app` under Project Settings > Domains.

---

## 8. SEO & Performance Checklist

- [x] Standard OpenGraph tags (`og:title`, `og:description`, `og:image`, `og:url`).
- [x] Twitter Card summary large image metadata.
- [x] Semantic HTML5 document outline (`<header>`, `<main>`, `<section>`, `<footer>`, `<table>`).
- [x] High-resolution SVG favicon & Apple Touch Icon (`macvoice-icon-dark-1024.png`).
- [x] High-contrast text exceeding WCAG AAA standards.
- [x] Zero external heavy fonts — uses native Apple System font stack (`-apple-system, SF Pro Display`).
- [x] Zero client-side tracking or external telemetry scripts.

---

## 9. Testing & Quality Verification

| Test Suite | Command | Result |
| :--- | :--- | :--- |
| **Production Build** | `pnpm build` | **PASSED** (14 static & dynamic routes compiled) |
| **TypeScript Compilation** | `pnpm tsc` | **PASSED** (0 type errors) |
| **ESLint Quality Gate** | `pnpm lint` | **PASSED** (0 errors, 0 warnings) |
| **Direct Unauthorized Download** | `curl -i http://localhost:3005/api/download` | **HTTP 403 Forbidden** (Correctly blocked) |
| **Tampered Token Download** | `curl -i http://localhost:3005/api/download?token=fake` | **HTTP 403 Forbidden** (Cryptographically rejected) |
| **Signed Token Authorized Download** | `curl -s "http://localhost:3005/api/download?token=..."` | **HTTP 200 OK** (Exact SHA-256 match verified) |
| **Production Checkout Guard** | `curl -X POST http://localhost:3005/api/checkout` | **HTTP 503** (Refuses fake simulation in production) |

---

## 10. Remaining Blockers & Human Decisions

1. **Stripe Account Activation:**
   - Founder must create an active Stripe account and input real production keys (`STRIPE_SECRET_KEY` and `STRIPE_WEBHOOK_SECRET`).
2. **Apple Developer ID Certificate & Notarization:**
   - The app must be signed with a valid Apple Developer ID Certificate ($99/year Apple Developer Program) and notarized via `xcrun notarytool` before public launch to avoid Gatekeeper warnings on user Macs.
3. **Domain DNS Mapping:**
   - Point your DNS records for `macvoice.app` to Vercel CNAME `cname.vercel-dns.com`.
