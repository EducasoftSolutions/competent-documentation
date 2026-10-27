// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
//
// Subpath parity with MkDocs: mkdocs.yml `site_url` is
// https://educasoftsolutions.github.io/competent-documentation/
// so Astro `site` + `base` must resolve to the same public URL.
export default defineConfig({
  site: 'https://educasoftsolutions.github.io',
  base: '/competent-documentation/',
  outDir: 'dist',
  integrations: [mdx(), sitemap()],
});
