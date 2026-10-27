/**
 * Competent Docs — navigation tree (Diataxis).
 *
 * DOCS_NAV drives the left sidebar (sections + items + routes).
 * DOC_ORDER is a flat route list (sidebar order) for prev/next paging
 * (wired in a later phase).
 *
 * PHASE 1: EMPTY order — no real pages migrated yet. Sections mirror
 * the MkDocs nav buckets (tutorials / how-to / reference / concepts)
 * so the sidebar skeleton is ready for phase 2 content migration.
 */

export type DocCategory = 'tutorial' | 'howto' | 'reference' | 'concepts';

export interface DocNavItem {
  label: string;
  route: string;
  category?: DocCategory;
}

export interface DocNavSection {
  section: string;
  items: DocNavItem[];
}

// TODO(phase-2): fill with migrated pages, one entry per MDX file.
export const DOCS_NAV: DocNavSection[] = [
  {
    section: 'Návody',
    items: [],
  },
  {
    section: 'Postupy',
    items: [],
  },
  {
    section: 'Reference',
    items: [],
  },
  {
    section: 'Koncepty',
    items: [],
  },
];

export interface DocCategoryMeta {
  label: string;
  color: string;
  desc: string;
}

export const DOC_CATEGORIES: Record<DocCategory, DocCategoryMeta> = {
  tutorial: {
    label: 'Návod',
    color: 'var(--amber)',
    desc: 'Learning-oriented — provede vás krok za krokem',
  },
  howto: {
    label: 'Postup',
    color: 'var(--green)',
    desc: 'Problem-oriented — řeší konkrétní úkol',
  },
  reference: {
    label: 'Reference',
    color: 'var(--indigo)',
    desc: 'Information-oriented — popis a fakta',
  },
  concepts: {
    label: 'Koncept',
    color: 'var(--rose)',
    desc: 'Understanding-oriented — vysvětluje principy',
  },
};

// TODO(phase-2): flat route list in sidebar order for PrevNext.
export const DOC_ORDER: string[] = [];

export function categoryColorForRoute(_route: string): string {
  return 'var(--amber)';
}
