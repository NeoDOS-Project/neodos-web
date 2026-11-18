# NeoDOS website

Official website for [NeoDOS](https://github.com/NeoDOS-Project/NeoDOS), a modern
64-bit operating system written in Rust for x86-64.

Built with [Astro](https://astro.build/) and published to GitHub Pages at
<https://alexis900.github.io/neodos-web/>.

## Features

- Bilingual: English and Spanish under `/en/` and `/es/`.
- Dark terminal-inspired design with a responsive layout.
- Static output, self-hosted fonts and no client-side framework.
- Pages: home, architecture, getting started, roadmap, what's new and resources.
- SEO metadata, canonical URLs, `hreflang` alternates and Open Graph image.

## Development

Requires Node.js 22 or newer.

```bash
npm install
npm run dev      # local dev server
npm run build    # static build in dist/
npm run preview  # preview the production build
```

## Structure

```text
src/
  components/   reusable Astro components
  i18n/         locale config, dictionaries and URL helpers
  layouts/      BaseLayout
  pages/        routes ([lang]/ for localized pages)
  styles/       global CSS design system
public/         favicon, Open Graph image and static assets
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site
with `withastro/action` and publishes `dist/` to GitHub Pages.

The site is configured with `site: 'https://alexis900.github.io'` and
`base: '/neodos-web'` in `astro.config.mjs`.

## Credits

- NeoDOS is MIT-licensed; see the
  [main repository](https://github.com/NeoDOS-Project/NeoDOS).
- Icons by [IconMCP](https://iconmcp.com/), MIT licence.
- Fonts: Inter and JetBrains Mono via Fontsource.
