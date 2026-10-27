/**
 * rehype-base-images — prefixuje interní absolutní `/…` href/src v <a>/<img>
 * hodnotou Astro `base` (/competent-documentation).
 *
 * MDX `[text](/pro-administratory/…)` a `![alt](/images/…)` Astro nechává
 * tak jak je — na subpath deployi (GitHub Pages project site) by se linky
 * i obrázky rozbily. Tento plugin přepíše na
 * `/competent-documentation/…` při buildu. Externí URL (http/https/mailto/#)
 * a už prefixované cesty nechává.
 */

import { visit } from 'unist-util-visit';

const BASE = '/competent-documentation';

export default function rehypeBaseImages() {
  return (tree) => {
    visit(tree, 'element', (node) => {
      const props = node.properties ?? {};
      if (node.tagName === 'img') {
        const src = props.src;
        if (typeof src !== 'string') return;
        if (!src.startsWith('/images/')) return;
        if (src.startsWith(`${BASE}/`)) return;
        props.src = `${BASE}${src}`;
        node.properties = props;
        return;
      }
      if (node.tagName === 'a') {
        const href = props.href;
        if (typeof href !== 'string') return;
        // Jen interní absolutní cesty; anchor-only, externí, mailto → skip.
        if (!href.startsWith('/')) return;
        if (/^\/\//.test(href)) return;
        if (href.startsWith(`${BASE}/`) || href === BASE) return;
        const hashIdx = href.indexOf('#');
        const path = hashIdx >= 0 ? href.slice(0, hashIdx) : href;
        const hash = hashIdx >= 0 ? href.slice(hashIdx) : '';
        // KEEP-linky z codemodu (relativní .md) sem nespadnou — začínají jinak.
        if (!path.startsWith('/pro-administratory')) return;
        props.href = `${BASE}${path}${hash}`;
        node.properties = props;
      }
    });
  };
}
