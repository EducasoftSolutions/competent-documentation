/**
 * Competent Docs — navigation tree (Diataxis).
 *
 * DOCS_NAV drives the left sidebar (sections + items + routes).
 * DOC_ORDER is a flat route list (sidebar order) for prev/next paging.
 *
 * PHASE 2: naplněno portem z mkdocs nav (scripts/port-mkdocs-to-astro.mjs).
 * Pořadí = pořadí v mkdocs.yml. HIDDEN stránky (kvalifikace how-to ×2,
 * obrazovka-kvalifikace, detail-kvalifikace, tab-parametry, tab-subtypy)
 * nejsou portovány → nejsou v nav.
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

const R = (label: string, route: string, category: DocCategory): DocNavItem => ({
  label,
  route,
  category,
});

export const DOCS_NAV: DocNavSection[] = [
  {
    section: 'Návody — Aktivity',
    items: [
      R('Vytvoření nového objektu', '/pro-administratory/how-to/aktivity/vytvoreni-noveho-objektu/', 'howto'),
      R('Přesun objektu', '/pro-administratory/how-to/aktivity/presun-objektu/', 'howto'),
      R('Nastavení typu spuštění SCORM', '/pro-administratory/how-to/aktivity/vytvoreni-scorm-aktivity/', 'howto'),
      R('Vyhledávání v aktivitách', '/pro-administratory/how-to/aktivity/vyhledavani-v-aktivitach/', 'howto'),
      R('Přiřazování štítků', '/pro-administratory/how-to/aktivity/prirazovani-stitku/', 'howto'),
      R('Sdílení aktivity', '/pro-administratory/how-to/aktivity/sdileni-aktivity/', 'howto'),
      R('Nastavení práv k aktivitě', '/pro-administratory/how-to/aktivity/nastaveni-prav-k-aktivite/', 'howto'),
      R('Přiřazení uživatelů k aktivitě', '/pro-administratory/how-to/aktivity/prirazeni-uzivatelu-k-aktivite/', 'howto'),
      R('Nastavení podmínek přístupu', '/pro-administratory/how-to/aktivity/podminky-pristupu/', 'howto'),
      R('Přidání dokumentu k aktivitě', '/pro-administratory/how-to/aktivity/dokumenty-v-aktivite/', 'howto'),
      R('Pokusy uživatele', '/pro-administratory/how-to/aktivity/pokusy-uzivatele/', 'howto'),
      R('Nastavení notifikací aktivity', '/pro-administratory/how-to/aktivity/nastaveni-notifikaci-aktivity/', 'howto'),
      R('Přidání termínu k aktivitě', '/pro-administratory/how-to/aktivity/terminy-aktivity/', 'howto'),
      R('Přiřazení uživatele k termínové aktivitě', '/pro-administratory/how-to/aktivity/prirazeni-uzivatele-terminove-aktivite/', 'howto'),
    ],
  },
  {
    section: 'Návody — Lidé',
    items: [
      R('Vytvoření uživatele', '/pro-administratory/how-to/lide/vytvoreni-uzivatele/', 'howto'),
      R('Vytvoření uživatelské skupiny', '/pro-administratory/how-to/lide/vytvoreni-uzivatelske-skupiny/', 'howto'),
      R('Vyhledávání a řazení uživatelů', '/pro-administratory/how-to/lide/vyhledavani-a-razeni-uzivatelu/', 'howto'),
      R('Přiřazení uživatele do skupiny', '/pro-administratory/how-to/lide/prirazeni-uzivatele-do-skupiny/', 'howto'),
      R('Import uživatelů', '/pro-administratory/how-to/lide/import-uzivatelu/', 'howto'),
      R('Přiřazení role uživateli', '/pro-administratory/how-to/lide/prirazeni-role-uzivateli/', 'howto'),
      R('Vytvoření vlastní role', '/pro-administratory/how-to/lide/vytvoreni-vlastni-role/', 'howto'),
    ],
  },
  {
    section: 'Návody — Nastavení, Reporty, Certifikáty',
    items: [
      R('Vytvoření a správa štítků', '/pro-administratory/how-to/nastaveni/stitky/', 'howto'),
      R('Úprava šablony e-mailu', '/pro-administratory/how-to/nastaveni/uprava-sablony-emailu/', 'howto'),
      R('Export reportu', '/pro-administratory/how-to/reporty/export-reportu/', 'howto'),
      R('Nastavení šablony certifikátu', '/pro-administratory/how-to/certifikaty/nastaveni-sablony-certifikatu/', 'howto'),
    ],
  },
  {
    section: 'Slovník pojmů',
    items: [
      R('Obrazovka Aktivity', '/pro-administratory/reference/obrazovka-aktivity/', 'reference'),
      R('Detail aktivity', '/pro-administratory/reference/detail-aktivity/', 'reference'),
      R('Detail sady', '/pro-administratory/reference/detail-sady/', 'reference'),
      R('Obrazovka Hodnocení', '/pro-administratory/reference/obrazovka-hodnoceni/', 'reference'),
      R('Obrazovka Zprávy', '/pro-administratory/reference/obrazovka-zpravy/', 'reference'),
      R('Detail hodnocení', '/pro-administratory/reference/detail-hodnoceni/', 'reference'),
      R('Obrazovka Lidé', '/pro-administratory/reference/obrazovka-lide/', 'reference'),
      R('Detail uživatele', '/pro-administratory/reference/detail-uzivatele/', 'reference'),
      R('Periodické nastavení', '/pro-administratory/reference/periodicke-nastaveni/', 'reference'),
      R('Detail skupiny', '/pro-administratory/reference/detail-skupiny/', 'reference'),
      R('Obrazovka Nastavení', '/pro-administratory/reference/obrazovka-nastaveni/', 'reference'),
    ],
  },
  {
    section: 'Slovník pojmů — Záložky Nastavení',
    items: [
      R('Tab Místa', '/pro-administratory/reference/tab-mista/', 'reference'),
      R('Tab Štítky', '/pro-administratory/reference/tab-stitky/', 'reference'),
      R('Tab Přiřazení dle skupin', '/pro-administratory/reference/tab-prirazeni-dle-skupin/', 'reference'),
      R('Tab Notifikace', '/pro-administratory/reference/tab-notifikace/', 'reference'),
      R('Tab Koš', '/pro-administratory/reference/tab-kos/', 'reference'),
      R('Obrazovka Šablony e-mailů', '/pro-administratory/reference/obrazovka-sablony-emailu/', 'reference'),
      R('Přehled notifikačních událostí', '/pro-administratory/reference/prehled-notifikacnich-udalosti/', 'reference'),
      R('Obrazovka Reporty', '/pro-administratory/reference/obrazovka-reporty/', 'reference'),
      R('Přehled rolí a oprávnění', '/pro-administratory/reference/prehled-roli-a-opravneni/', 'reference'),
      R('Obrazovka Soubory', '/pro-administratory/reference/obrazovka-soubory/', 'reference'),
      R('Chybové zprávy', '/pro-administratory/reference/chybove-zpravy/', 'reference'),
    ],
  },
  {
    section: 'Koncepty',
    items: [
      R('Aktivita', '/pro-administratory/concepts/aktivita/', 'concepts'),
      R('Stavy aktivity', '/pro-administratory/concepts/stavy-aktivity/', 'concepts'),
      R('Schémata aktivity', '/pro-administratory/concepts/schemata-aktivity/', 'concepts'),
      R('Pokusy uživatele', '/pro-administratory/concepts/pokusy-uzivatele/', 'concepts'),
      R('Přiřazení aktivity uživateli (přístup)', '/pro-administratory/concepts/prirazeni-aktivity-uzivateli-pristup/', 'concepts'),
      R('Periodické nastavení', '/pro-administratory/concepts/periodicke-nastaveni/', 'concepts'),
      R('Podmínky přístupu', '/pro-administratory/concepts/podminky-pristupu/', 'concepts'),
      R('Dokumenty v aktivitě', '/pro-administratory/concepts/dokumenty-v-aktivite/', 'concepts'),
      R('Certifikát', '/pro-administratory/concepts/certifikat/', 'concepts'),
      R('Kvalifikace', '/pro-administratory/concepts/kvalifikace/', 'concepts'),
      R('Sada', '/pro-administratory/concepts/sada/', 'concepts'),
      R('Termínová sada', '/pro-administratory/concepts/terminova-sada/', 'concepts'),
      R('Hodnocení', '/pro-administratory/concepts/hodnoceni/', 'concepts'),
      R('Zprávy', '/pro-administratory/concepts/zpravy/', 'concepts'),
      R('Složky aktivit', '/pro-administratory/concepts/slozky-aktivit/', 'concepts'),
      R('Sdílené aktivity', '/pro-administratory/concepts/sdilene-aktivity/', 'concepts'),
      R('Subtypy aktivit', '/pro-administratory/concepts/subtypy-aktivit/', 'concepts'),
      R('Role a oprávnění', '/pro-administratory/concepts/role/', 'concepts'),
      R('Štítek', '/pro-administratory/concepts/stitky/', 'concepts'),
      R('Uživatel', '/pro-administratory/concepts/uzivatel/', 'concepts'),
      R('Uživatelská skupina', '/pro-administratory/concepts/skupina/', 'concepts'),
      R('Přiřazení dle skupin', '/pro-administratory/concepts/prirazeni-dle-skupin/', 'concepts'),
      R('E-mailové notifikace', '/pro-administratory/concepts/emailove-notifikace/', 'concepts'),
      R('Workflow', '/pro-administratory/concepts/workflow-aktivity/', 'concepts'),
      R('Jazyková podpora', '/pro-administratory/concepts/jazykova-podpora/', 'concepts'),
    ],
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

/** Flat route list v pořadí sidebaru — PrevNext pager. */
export const DOC_ORDER: string[] = DOCS_NAV.flatMap((s) => s.items.map((i) => i.route));

export function categoryColorForRoute(route: string): string {
  for (const section of DOCS_NAV) {
    for (const item of section.items) {
      if (item.route === route && item.category) {
        return DOC_CATEGORIES[item.category].color;
      }
    }
  }
  return 'var(--amber)';
}
