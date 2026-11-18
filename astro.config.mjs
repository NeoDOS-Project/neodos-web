// @ts-check
import { defineConfig } from 'astro/config';

// The site is published on GitHub Pages:
// https://neodos-project.github.io/neodos-web/
export default defineConfig({
  site: 'https://neodos-project.github.io',
  base: '/neodos-web',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
});
