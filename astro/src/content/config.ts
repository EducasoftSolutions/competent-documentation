/**
 * Content collection schema -- the `docs` collection.
 *
 * Forked from talkide-docs (Astro 4.16). Every migrated MkDocs page will
 * live in src/content/docs/**.mdx and is validated against this zod
 * schema at build time.
 *
 * - title:       sidebar / breadcrumb / H1 / <title> — MANDATORY
 * - description: meta description + future llms.txt summary — MANDATORY
 * - section:     which Diataxis bucket the page belongs to (Competent:
 *                tutorials / how-to / reference / concepts).
 * - category:    optional Diataxis card category (drives eyebrow hue).
 * - hideToc:     suppress the right-hand "On this page" rail.
 * - hideEyebrow: suppress the mono uppercase eyebrow above the H1.
 * - order:       optional manual ordering hint (sidebar order is the
 *                source of truth; this is a tie-breaker only).
 * - sourcePath:  cesta k původnímu .md v docs/ (pro "Upravit na GitHubu",
 *                mapuje mdx slug → zdrojový soubor).
 */

import { defineCollection, z } from 'astro:content';

const docs = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    section: z.enum([
      'tutorials',
      'how-to',
      'reference',
      'concepts',
    ]),
    category: z
      .enum(['tutorial', 'howto', 'reference', 'concepts'])
      .optional(),
    hideToc: z.boolean().default(false),
    hideEyebrow: z.boolean().default(false),
    order: z.number().optional(),
    sourcePath: z.string().optional(),
  }),
});

export const collections = { docs };
