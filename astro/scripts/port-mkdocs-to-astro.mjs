#!/usr/bin/env node
/**
 * port-mkdocs-to-astro.mjs — PHASE 2 codemod: docs/pro-administratory/*.md → astro/src/content/docs/…
 *
 * Co dělá (per file):
 *  1. Přeskočí HIDDEN stránky (seznam níže) a how-to/kvalifikace/*.
 *  2. Frontmatter: title (z mkdocs nav display name), description
 *     (první prozaická věta), section enum (how-to/reference/concepts),
 *     category (howto/reference/concepts), order (pořadí v nav).
 *  3. `!!! note|warning|tip|danger "Titulek"` → `<Admonition kind title>`
 *     (import na začátek, jen když je potřeba). Holé `!!! note` (bez
 *     titulku) → `<Admonition kind>` bez title.
 *  4. Relativní `.md` linky (`../../concepts/x.md`, `x.md`, `x.md#kotva`)
 *     → absolutní routy (`/pro-administratory/concepts/x/` + `#kotva`).
 *     Linky na HIDDEN stránky a mimo korpus (slovnik, pro-studenty)
 *     se nechají a jen se nahlásí do reportu.
 *  5. Relativní `_media/` obrázky → zkopíruje do
 *     `astro/public/images/docs/<page-slug>/` + přepíše na absolutní
 *     `/images/docs/<page-slug>/file`. GIFy se kopírují beze změny.
 *  6. Nechráněné `{ident}` / `${ident}` mimo backticky → obalí do backticků
 *     (MDX by je jinak parsoval jako JSX výrazy).
 *
 * Rerunnable: výstupy přepisuje, public/images/docs/<slug>/ před kopírováním
 * maže. Nikdy nesahá na docs/ ani mkdocs.yml.
 *
 * Použití:
 *   node scripts/port-mkdocs-to-astro.mjs [--dry-run] [--page=obrazovka-aktivity]
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync, cpSync, rmSync, readdirSync } from 'node:fs';
import { join, dirname, basename, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ASTRO_DIR = resolve(__dirname, '..');
const REPO_DIR = resolve(ASTRO_DIR, '..');
const SRC_DIR = join(REPO_DIR, 'docs', 'pro-administratory');
const OUT_DIR = join(ASTRO_DIR, 'src', 'content', 'docs', 'pro-administratory');
const IMG_DIR = join(ASTRO_DIR, 'public', 'images', 'docs');

const DRY_RUN = process.argv.includes('--dry-run');
const PAGE_FILTER = (process.argv.find((a) => a.startsWith('--page=')) ?? '').slice(7) || null;

// ---------------------------------------------------------------------------
// 1. Nav — jediný zdroj pravdy pro title + order + section.
//    Zrcadlí mkdocs.yml `nav:` (bez HIDDEN stránek).
// ---------------------------------------------------------------------------

/** [relPath, title] v pořadí mkdocs nav. */
const NAV = [
  // how-to — Aktivity
  ['how-to/aktivity/vytvoreni-noveho-objektu.md', 'Vytvoření nového objektu'],
  ['how-to/aktivity/presun-objektu.md', 'Přesun objektu'],
  ['how-to/aktivity/vytvoreni-scorm-aktivity.md', 'Nastavení typu spuštění SCORM'],
  ['how-to/aktivity/vyhledavani-v-aktivitach.md', 'Vyhledávání v aktivitách'],
  ['how-to/aktivity/prirazovani-stitku.md', 'Přiřazování štítků'],
  ['how-to/aktivity/sdileni-aktivity.md', 'Sdílení aktivity'],
  ['how-to/aktivity/nastaveni-prav-k-aktivite.md', 'Nastavení práv k aktivitě'],
  ['how-to/aktivity/prirazeni-uzivatelu-k-aktivite.md', 'Přiřazení uživatelů k aktivitě'],
  ['how-to/aktivity/podminky-pristupu.md', 'Nastavení podmínek přístupu'],
  ['how-to/aktivity/dokumenty-v-aktivite.md', 'Přidání dokumentu k aktivitě'],
  ['how-to/aktivity/pokusy-uzivatele.md', 'Pokusy uživatele'],
  ['how-to/aktivity/nastaveni-notifikaci-aktivity.md', 'Nastavení notifikací aktivity'],
  ['how-to/aktivity/terminy-aktivity.md', 'Přidání termínu k aktivitě'],
  ['how-to/aktivity/prirazeni-uzivatele-terminove-aktivite.md', 'Přiřazení uživatele k termínové aktivitě'],
  // how-to — Lidé
  ['how-to/lide/vytvoreni-uzivatele.md', 'Vytvoření uživatele'],
  ['how-to/lide/vytvoreni-uzivatelske-skupiny.md', 'Vytvoření uživatelské skupiny'],
  ['how-to/lide/vyhledavani-a-razeni-uzivatelu.md', 'Vyhledávání a řazení uživatelů'],
  ['how-to/lide/prirazeni-uzivatele-do-skupiny.md', 'Přiřazení uživatele do skupiny'],
  ['how-to/lide/import-uzivatelu.md', 'Import uživatelů'],
  ['how-to/lide/prirazeni-role-uzivateli.md', 'Přiřazení role uživateli'],
  ['how-to/lide/vytvoreni-vlastni-role.md', 'Vytvoření vlastní role'],
  // how-to — Nastavení, Reporty, Certifikáty
  ['how-to/nastaveni/stitky.md', 'Vytvoření a správa štítků'],
  ['how-to/nastaveni/uprava-sablony-emailu.md', 'Úprava šablony e-mailu'],
  ['how-to/reporty/export-reportu.md', 'Export reportu'],
  ['how-to/certifikaty/nastaveni-sablony-certifikatu.md', 'Nastavení šablony certifikátu'],
  // Slovník pojmů (reference)
  ['reference/obrazovka-aktivity.md', 'Obrazovka Aktivity'],
  ['reference/detail-aktivity.md', 'Detail aktivity'],
  ['reference/detail-sady.md', 'Detail sady'],
  ['reference/obrazovka-hodnoceni.md', 'Obrazovka Hodnocení'],
  ['reference/obrazovka-zpravy.md', 'Obrazovka Zprávy'],
  ['reference/detail-hodnoceni.md', 'Detail hodnocení'],
  ['reference/obrazovka-lide.md', 'Obrazovka Lidé'],
  ['reference/detail-uzivatele.md', 'Detail uživatele'],
  ['reference/periodicke-nastaveni.md', 'Periodické nastavení'],
  ['reference/detail-skupiny.md', 'Detail skupiny'],
  ['reference/obrazovka-nastaveni.md', 'Obrazovka Nastavení'],
  ['reference/tab-mista.md', 'Tab Místa'],
  ['reference/tab-stitky.md', 'Tab Štítky'],
  ['reference/tab-prirazeni-dle-skupin.md', 'Tab Přiřazení dle skupin'],
  ['reference/tab-notifikace.md', 'Tab Notifikace'],
  ['reference/tab-kos.md', 'Tab Koš'],
  ['reference/obrazovka-sablony-emailu.md', 'Obrazovka Šablony e-mailů'],
  ['reference/prehled-notifikacnich-udalosti.md', 'Přehled notifikačních událostí'],
  ['reference/obrazovka-reporty.md', 'Obrazovka Reporty'],
  ['reference/prehled-roli-a-opravneni.md', 'Přehled rolí a oprávnění'],
  ['reference/obrazovka-soubory.md', 'Obrazovka Soubory'],
  ['reference/chybove-zpravy.md', 'Chybové zprávy'],
  // Koncepty
  ['concepts/aktivita.md', 'Aktivita'],
  ['concepts/stavy-aktivity.md', 'Stavy aktivity'],
  ['concepts/schemata-aktivity.md', 'Schémata aktivity'],
  ['concepts/pokusy-uzivatele.md', 'Pokusy uživatele'],
  ['concepts/prirazeni-aktivity-uzivateli-pristup.md', 'Přiřazení aktivity uživateli (přístup)'],
  ['concepts/periodicke-nastaveni.md', 'Periodické nastavení'],
  ['concepts/podminky-pristupu.md', 'Podmínky přístupu'],
  ['concepts/dokumenty-v-aktivite.md', 'Dokumenty v aktivitě'],
  ['concepts/certifikat.md', 'Certifikát'],
  ['concepts/kvalifikace.md', 'Kvalifikace'],
  ['concepts/sada.md', 'Sada'],
  ['concepts/terminova-sada.md', 'Termínová sada'],
  ['concepts/hodnoceni.md', 'Hodnocení'],
  ['concepts/zpravy.md', 'Zprávy'],
  ['concepts/slozky-aktivit.md', 'Složky aktivit'],
  ['concepts/sdilene-aktivity.md', 'Sdílené aktivity'],
  ['concepts/subtypy-aktivit.md', 'Subtypy aktivit'],
  ['concepts/role.md', 'Role a oprávnění'],
  ['concepts/stitky.md', 'Štítek'],
  ['concepts/uzivatel.md', 'Uživatel'],
  ['concepts/skupina.md', 'Uživatelská skupina'],
  ['concepts/prirazeni-dle-skupin.md', 'Přiřazení dle skupin'],
  ['concepts/emailove-notifikace.md', 'E-mailové notifikace'],
  ['concepts/workflow-aktivity.md', 'Workflow'],
  ['concepts/jazykova-podpora.md', 'Jazyková podpora'],
];

const HIDDEN = new Set([
  'how-to/kvalifikace/vytvoreni-kvalifikace.md',
  'how-to/kvalifikace/prirazeni-kvalifikace.md',
  'reference/obrazovka-kvalifikace.md',
  'reference/detail-kvalifikace.md',
  'reference/tab-parametry.md',
  'reference/tab-subtypy.md',
]);

const SECTION_OF = { 'how-to': 'how-to', reference: 'reference', concepts: 'concepts' };
const CATEGORY_OF = { 'how-to': 'howto', reference: 'reference', concepts: 'concepts' };

// relPath (bez .md) → route. Vše portované žije pod /pro-administratory/….
const ROUTES = new Map(NAV.map(([p]) => [p.replace(/\.md$/, ''), `/pro-administratory/${p.replace(/\.md$/, '')}/`]));
// basename → routes (pro překlad `x.md` relativních linků).
const BY_BASENAME = new Map();
for (const [p] of NAV) {
  const b = basename(p);
  if (!BY_BASENAME.has(b)) BY_BASENAME.set(b, []);
  BY_BASENAME.get(b).push(`/pro-administratory/${p.replace(/\.md$/, '')}/`);
}

// ---------------------------------------------------------------------------
// 2. Helpers
// ---------------------------------------------------------------------------

const report = { pages: 0, admonitions: 0, linksRewritten: 0, linksKept: [], imagesCopied: 0, bracesEscaped: 0 };

function firstProseSentence(md) {
  for (const line of md.split('\n')) {
    const t = line.trim();
    if (!t || t.startsWith('#') || t.startsWith('!') || t.startsWith('|') || t.startsWith('-') || t.startsWith('!!!') || t.startsWith('```')) continue;
    const m = t.match(/^(.+?[.!?])(\s|$)/);
    let s = (m ? m[1] : t.slice(0, 160)).trim();
    // frontmatter description musí být prostý text (žádné **tučné**, `kód`, [linky](…))
    s = s.replace(/\[([^\]]*)\]\([^)]*\)/g, '$1').replace(/(\*\*|__)(.*?)\1/g, '$2').replace(/(`+)(.*?)\1/g, '$2').replace(/\s+/g, ' ').trim();
    return s.length > 200 ? s.slice(0, 197) + '…' : s;
  }
  return '';
}

function escYaml(s) {
  return JSON.stringify(s);
}

/** Rozdělí text na segmenty [isCode, text] — chrání ``` bloky a `inline` před transformacemi. */
function splitCodeSegments(text) {
  const parts = text.split(/(```[\s\S]*?```)/g);
  return parts.flatMap((p) => {
    if (p.startsWith('```')) return [[true, p]];
    return p.split(/(`[^`\n]+`)/g).map((q) => [q.startsWith('`') && q.endsWith('`') && q.length > 1, q]);
  });
}

// --- Admonitions: !!! kind ["title"] + 4-space indented body → <Admonition> ---
function convertAdmonitions(body) {
  const lines = body.split('\n');
  const out = [];
  let i = 0;
  let used = false;
  while (i < lines.length) {
    const m = lines[i].match(/^!!!\s+(note|warning|tip|danger)(?:\s+"([^"]*)")?\s*$/);
    if (!m) { out.push(lines[i]); i++; continue; }
    const [, kind, title] = m;
    i++;
    const content = [];
    while (i < lines.length && (lines[i].startsWith('    ') || lines[i].trim() === '')) {
      content.push(lines[i].startsWith('    ') ? lines[i].slice(4) : lines[i]);
      i++;
    }
    while (content.length && content[content.length - 1].trim() === '') content.pop();
    used = true;
    report.admonitions++;
    out.push(`<Admonition kind="${kind}"${title ? ` title=${escYaml(title)}` : ''}>`);
    out.push('');
    out.push(...content);
    out.push('');
    out.push('</Admonition>');
  }
  return { body: out.join('\n'), used };
}

// --- Linky: [text](rel.md[#anchor]) → [text](/pro-administratory/…/#anchor) ---
function rewriteLinks(text, srcRel) {
  const segs = splitCodeSegments(text);
  return segs.map(([isCode, chunk]) => {
    if (isCode) return chunk;
    return chunk.replace(/(\[[^\]]*\]\()([^)\s]+\.md)(#[^)\s]*)?(\))/g, (full, pre, target, anchor, post) => {
      if (/^(https?:)?\/\//.test(target)) return full;
      let abs;
      if (target.startsWith('../') || target.startsWith('./')) {
        const dir = dirname(srcRel);
        const parts = dir.split('/');
        for (const seg of target.split('/')) {
          if (seg === '..') parts.pop();
          else if (seg !== '.' && seg !== '') parts.push(seg);
        }
        abs = parts.join('/').replace(/\.md$/, '');
      } else {
        abs = `${dirname(srcRel)}/${target}`.replace(/\.md$/, '');
      }
      const route = ROUTES.get(abs);
      if (route) {
        report.linksRewritten++;
        return `${pre}${route}${anchor ?? ''}${post}`;
      }
      // Cíl mimo portovaný korpus:
      //  - HIDDEN stránka (existuje v docs/, není portovaná) → nech .md link
      //    (KOMPATIBILITA s MkDocs: relativní .md zůstane funkční i v Astro
      //    po budoucím portu; do té doby vede na 404 — nahlášeno v reportu).
      //  - slovnik / pro-studenty (jiný korpus) → nech, nahlásit.
      report.linksKept.push(`${srcRel} → ${target}${anchor ?? ''}`);
      return full;
    });
  }).join('');
}

// --- Obrázky: ![alt](_media/…) → copy + ![alt](/images/docs/<slug>/…) ---
function rewriteImages(text, srcRel, srcFile) {
  const slug = basename(srcRel, '.md');
  const segs = splitCodeSegments(text);
  let copied = 0;
  const out = segs.map(([isCode, chunk]) => {
    if (isCode) return chunk;
    return chunk.replace(/(!\[[^\]]*\]\()([^)\s]+)(\))/g, (full, pre, target, post) => {
      if (/^(https?:)?\/\//.test(target) || target.startsWith('/')) return full;
      if (!target.includes('_media/')) return full;
      const absImg = resolve(dirname(srcFile), target);
      if (!existsSync(absImg)) {
        report.linksKept.push(`${srcRel} → CHYBÍ OBRÁZEK ${target}`);
        return full;
      }
      const destDir = join(IMG_DIR, slug);
      const dest = join(destDir, basename(absImg));
      if (!DRY_RUN) {
        mkdirSync(destDir, { recursive: true });
        cpSync(absImg, dest);
      }
      copied++;
      return `${pre}/images/docs/${slug}/${basename(absImg)}${post}`;
    });
  }).join('');
  report.imagesCopied += copied;
  return out;
}

// --- Složené závorky mimo kód → backticky (MDX JSX ochrana) ---
function escapeBraces(text) {
  const segs = splitCodeSegments(text);
  return segs.map(([isCode, chunk]) => {
    if (isCode) return chunk;
    // `${ident}` → `${ident}` v backtickách; `{ident}` → `{ident}` v backtickách.
    // Už obalené (sousedí s backtickem) přeskočit.
    let n = 0;
    let out = chunk.replace(/(?<!`)(\$\{[a-zA-Z_][a-zA-Z0-9_]*\})(?!`)/g, (_, m) => { n++; return `\`${m}\``; });
    out = out.replace(/(?<!`)(?<!\$)(\{[a-zA-Z_][a-zA-Z0-9_.]*\})(?!`)/g, (_, m) => { n++; return `\`${m}\``; });
    report.bracesEscaped += n;
    return out;
  }).join('');
}

// ---------------------------------------------------------------------------
// 3. Main
// ---------------------------------------------------------------------------

let order = 0;
for (const [rel, title] of NAV) {
  order++;
  if (PAGE_FILTER && basename(rel, '.md') !== PAGE_FILTER) continue;
  const srcFile = join(SRC_DIR, rel);
  if (!existsSync(srcFile)) {
    console.error(`CHYBÍ ZDROJ: ${rel}`);
    continue;
  }
  const section = SECTION_OF[rel.split('/')[0]];
  let body = readFileSync(srcFile, 'utf8');

  // H1 z titulku nav — zdrojové # nadpisy se liší; sjednotit na nav title.
  body = body.replace(/^# .+$/m, `# ${title}`);

  const description = firstProseSentence(body.replace(/^# .+$/m, ''));

  let { body: b1, used: admonUsed } = convertAdmonitions(body);
  let b2 = rewriteLinks(b1, rel);
  let b3 = rewriteImages(b2, rel, srcFile);
  let b4 = escapeBraces(b3);

  // Alias @ → astro/src (viz astro.config.mjs vite.resolve.alias) — hloubka
  // vnoření how-to vs concepts se liší, relativní ../ by bylo křehké.
  const importLine = admonUsed ? `import Admonition from '@/components/Admonition.astro';\n\n` : '';
  const fm = `---\ntitle: ${escYaml(title)}\ndescription: ${escYaml(description)}\nsection: ${escYaml(section)}\ncategory: ${escYaml(CATEGORY_OF[rel.split('/')[0]])}\norder: ${order}\n---\n\n`;
  const mdx = fm + importLine + b4.replace(/\s+$/, '') + '\n';

  const outFile = join(OUT_DIR, rel.replace(/\.md$/, '.mdx'));
  if (!DRY_RUN) {
    mkdirSync(dirname(outFile), { recursive: true });
    writeFileSync(outFile, mdx);
  }
  report.pages++;
  console.log(`${DRY_RUN ? '[dry] ' : ''}${rel} → ${outFile.replace(ASTRO_DIR + '/', '')}${admonUsed ? ' [+Admonition]' : ''}`);
}

console.log('\n── REPORT ──');
console.log(`pages: ${report.pages}, admonitions: ${report.admonitions}, links rewritten: ${report.linksRewritten}, images copied: ${report.imagesCopied}, braces escaped: ${report.bracesEscaped}`);
if (report.linksKept.length) {
  console.log(`kept links (out of scope / hidden / missing): ${report.linksKept.length}`);
  for (const l of [...new Set(report.linksKept)].sort()) console.log(`  KEEP ${l}`);
}
