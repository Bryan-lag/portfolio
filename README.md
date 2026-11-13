# Bryan Argueta — Portfolio

Personal portfolio of a full-stack developer based in Guatemala.

**Live:** https://portfolio-two-roan-30.vercel.app

## Stack

- [Astro](https://astro.build): static site, no client-side JavaScript
- Plain CSS: scoped component styles plus design tokens (CSS variables)
- [Fontsource](https://fontsource.org): self-hosted fonts (Source Serif 4 and IBM Plex Sans)
- Vercel for hosting

## Run locally

Requires Node.js 22.23.4 or newer.

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # production build in dist/
npm run preview   # serve the production build
```

## Structure

```
src/
├── assets/       # images processed by Astro (WebP, responsive sizes)
├── components/   # Navbar, Hero, Projects, About, Skills, Contact, Footer
├── layouts/      # Layout.astro: fonts, SEO and social meta tags
├── pages/        # index.astro
└── styles/       # global.css: tokens, minimal reset and shared styles
public/           # static files: favicon, CV, profile photo, og.png
```

## Design decisions

- **No client-side JavaScript.** The page is static HTML and CSS, so it loads fast and has little to break.
- **Design tokens.** Colors, fonts and spacing live as CSS variables in `global.css`; components don't hard-code them.
- **Self-hosted fonts.** No third-party requests, and no layout flash from font swaps.
- **Optimized images.** Project screenshots go through `astro:assets`, which serves WebP in several sizes.
- **Accessibility.** Semantic landmarks, visible keyboard focus, `prefers-reduced-motion` support and checked color contrast.
- **Social preview.** Open Graph and Twitter tags with a 1200 × 630 image.