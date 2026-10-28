/**
 * llms.txt -- strojově čitelný index dokumentace Competent.
 * Spec: https://llmstxt.org/
 *
 * Format:
 *   # Title
 *   (blank)
 *   Description paragraph
 *   (blank)
 *   ## Section
 *   - [Page title](https://educasoftsolutions.github.io/competent-documentation/route/): description
 *
 * Pages ordered by DOC_ORDER (sidebar order).
 * All content pulled from vetted frontmatter (title, description).
 */

import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { DOCS_NAV, DOC_ORDER } from '../data/docNav';

const SITE = 'https://educasoftsolutions.github.io/competent-documentation';

export const GET: APIRoute = async () => {
  const entries = await getCollection('docs');

  // Build slug -> entry map. The `index` slug maps to route `/`.
  const byRoute = new Map<string, { title: string; description: string }>();
  for (const entry of entries) {
    const route = '/' + entry.slug.replace(/\/index$/, '').replace(/^index$/, '') + '/';
    // Handle the root index: slug is 'index', route must be '/'
    const normalized = route === '//' ? '/' : route.replace('//', '/');
    byRoute.set(normalized, {
      title: entry.data.title,
      description: entry.data.description,
    });
  }

  const lines: string[] = [];
  lines.push('# Competent — Uživatelská příručka');
  lines.push('');
  lines.push(
    'Oficiální dokumentace LMS Competent od Educasoftu. ' +
    'Návody pro administrátory krok za krokem, slovník pojmů ' +
    '(referenční přehledy obrazovek a záložek) a koncepty vysvětlující ' +
    'principy, na nichž systém stojí.',
  );
  lines.push('');

  for (const section of DOCS_NAV) {
    lines.push(`## ${section.section}`);
    lines.push('');

    // Emit items in DOC_ORDER within this section
    const sectionRoutes = section.items.map((i) => i.route);
    const orderedRoutes = DOC_ORDER.filter((r) => sectionRoutes.includes(r));

    for (const route of orderedRoutes) {
      const page = byRoute.get(route);
      const label = section.items.find((i) => i.route === route)?.label ?? route;
      if (page) {
        const url = route === '/' ? SITE + '/' : SITE + route;
        lines.push(`- [${label}](${url}): ${page.description}`);
      }
    }
    lines.push('');
  }

  return new Response(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
