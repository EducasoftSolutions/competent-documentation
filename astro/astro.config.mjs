// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import path from 'path';
import { fileURLToPath } from 'url';
import rehypeBaseImages from './src/plugins/rehype-base-images.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

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
  markdown: {
    // Prefix /images/* → base-prefixed (subpath deploy parity s MkDocs).
    rehypePlugins: [rehypeBaseImages],
  },
  vite: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  },
});
