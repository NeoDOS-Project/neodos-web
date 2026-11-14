// @ts-check
import { defineConfig } from 'astro/config';

// The site is published on GitHub Pages:
// https://alexis900.github.io/neodos-web/
export default defineConfig({
  site: 'https://alexis900.github.io',
  base: '/neodos-web',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
});
