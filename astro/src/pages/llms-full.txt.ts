/**
 * llms-full.txt -- full-textový dump dokumentace Competent pro LLM.
 * Spec: https://llmstxt.org/
 *
 * Format:
 *   # Title
 *   (blank)
 *   Description paragraph
 *   (blank)
 *   ## {page title}
 *   {raw markdown body}
 *   (blank)
 *
 * Pages in DOC_ORDER (sidebar order).
 * All content pulled from vetted collection entries (frontmatter + body).
 */

import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { DOC_ORDER } from '../data/docNav';

export const GET: APIRoute = async () => {
  const entries = await getCollection('docs');

  // Build route -> entry map
  const byRoute = new Map<string, { title: string; description: string; body: string }>();
  for (const entry of entries) {
    const rawRoute = '/' + entry.slug.replace(/\/index$/, '').replace(/^index$/, '') + '/';
    const normalized = rawRoute === '//' ? '/' : rawRoute.replace('//', '/');
    byRoute.set(normalized, {
      title: entry.data.title,
      description: entry.data.description,
      body: entry.body,
    });
  }

  const lines: string[] = [];
  lines.push('# Competent — Uživatelská příručka');
  lines.push('');
  lines.push(
    'Oficiální dokumentace LMS Competent od Educasoftu. ' +
    'Tento soubor obsahuje plný text každé stránky dokumentace, ' +
    'seřazený podle navigace v postranním panelu.',
  );
  lines.push('');

  for (const route of DOC_ORDER) {
    const page = byRoute.get(route);
    if (!page) continue;

    lines.push(`## ${page.title}`);
    lines.push('');
    lines.push(page.body.trim());
    lines.push('');
  }

  return new Response(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
