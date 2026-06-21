# Workflow: automatizace přiřazení aktivit

Competent obsahuje subsystém **Workflow**, který umožňuje definovat pravidla ve formátu „KDYŽ nastane událost → SPUSŤ akci". Namísto ručního přiřazování aktivit uživatelům lze tuto rutinu svěřit systému. Tato stránka vysvětluje, **co Workflow je a jak funguje** – tedy principy mechanismu, nikoliv krok za krokem, jak pravidlo nastavit.

Workflow je dostupné jako součást jádra systému pro všechny instalace Competentu. Panel pro správu Workflow vidí pouze uživatelé s přístupem systémového správce.

______________________________________________________________________

## Co je Workflow a co není

Workflow v Competentu je **automatizační engine** – sada pravidel, která systém sleduje a při splnění podmínek vykoná předem definovanou akci. Každé pravidlo říká: při jaké události a na jakém objektu se má co provést.

Workflow **není**:

- **stavový automat aktivity** – přechody mezi stavy aktivity (Skryto, Spuštěno, Ukončeno apod.) řídí administrátor ručně nebo prostřednictvím akčních tlačítek. Workflow s těmito přechody nijak nesouvisí.
- **schvalovací tok** – Workflow neschvaluje požadavky ani nečeká na souhlas. Pravidlo se vykoná automaticky bez potvrzení.

Oba odlišné systémy – stavové přechody aktivity i Workflow – existují v Competentu paralelně a nezávisle na sobě.

______________________________________________________________________

## Struktura pravidla Workflow

Každé pravidlo Workflow je svázáno s jedním objektem (například aktivitou nebo skupinou) a obsahuje tři části:

| Část pravidla        | Popis                                                                         |
| -------------------- | ----------------------------------------------------------------------------- |
| **Spouštěcí akce**   | Událost, která pravidlo spustí: vytvoření, úprava nebo smazání objektu        |
| **Akce**             | Co systém po spuštění provede – například přiřadí aktivitu uživatelům skupiny |
| **Konfigurace akce** | Parametry provedení – například délka přístupu k aktivitě                     |

```
flowchart LR
    O["Objekt\n(aktivita / skupina)"] --> T["Spouštěcí akce\n(vytvoření / úprava / smazání)"]
    T --> A["Akce\n(co se provede)"]
    A --> K["Konfigurace\n(parametry provedení)"]
```

______________________________________________________________________

## Primární využití: automatické přiřazení aktivity skupině

Nejčastěji používanou akcí Workflow je **automatické přiřazení aktivity** uživatelům na základě jejich členství ve skupině. Pravidlo funguje takto: jakmile je uživatel přidán do skupiny, systém mu automaticky zpřístupní vybranou aktivitu.

Díky tomu není nutné přiřazovat přístup k aktivitě každému uživateli zvlášť – stačí jej zařadit do příslušné skupiny a Workflow zbytek vyřídí samo.

### Nastavení délky přístupu

Při definování pravidla automatického přiřazení aktivity se volí délka přístupu uživatele k aktivitě. Systém nabízí tři způsoby:

| Způsob             | Popis                                                            |
| ------------------ | ---------------------------------------------------------------- |
| **Datumy**         | Přístup je vymezen pevným datem od a do                          |
| **Počtem dní**     | Přístup trvá stanovený počet dní od okamžiku přidělení           |
| **Podle aktivity** | Délka přístupu se řídí nastavením aktivity nebo jejím opakováním |

### Jedinečnost pravidla

Každá kombinace aktivity a skupiny může být v Workflow použita nejvýše jednou. Systém neumožní vytvořit dvě pravidla pro tutéž dvojici aktivita–skupina.

### Smazání pravidla

Při smazání pravidla automatického přiřazení systém nabídne dvě možnosti:

- **Smazat jen pravidlo** – pravidlo se odstraní, ale přístupy, které pravidlo dříve vytvořilo, zůstanou uživatelům zachovány.
- **Smazat pravidlo včetně přístupů** – pravidlo se odstraní a zároveň se zruší všechny přístupy uživatelů, které toto pravidlo vytvořilo.

______________________________________________________________________

## Další automatizační akce

Systém může v závislosti na konfiguraci konkrétní instalace obsahovat i další automatizační akce, například automatické zařazení uživatele do skupiny nebo sloučení podskupin. Dostupnost těchto akcí závisí na nastavení instalace.

Pro nastavení Workflow doporučujeme konzultaci s dodavatelem Educasoft.

______________________________________________________________________

## Kde Workflow najít

Sekce **Workflow** se nachází v **Detailu aktivity**, na tabu **Detaily**. Kliknutím na ikonu úprav v sekci se otevře přehled stávajících pravidel a formulář pro přidání nového pravidla.

Přístup k panelu Workflow

Panel Workflow je dostupný pouze uživatelům s přístupem systémového správce. Pokud panel v Detailu aktivity nevidíte, obraťte se na dodavatele Educasoft.

______________________________________________________________________

## Workflow vs. e-mailové notifikace

Workflow a e-mailové notifikace jsou dva oddělené systémy. Přestože některé akce Workflow mohou volitelně spustit odeslání zprávy, řídí se doručování e-mailů vlastní konfigurací notifikačních pravidel – nezávisle na Workflow. Princip notifikací popisuje stránka [E-mailové notifikace: jak funguje doručování zpráv](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/emailove-notifikace/index.md).

______________________________________________________________________

## Související stránky

- [Detail aktivity](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/reference/detail-aktivity/index.md) – popis záložky Detaily, kde sekce Workflow sídlí
- [Uživatelská skupina: model a principy](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/skupina/index.md) – jak fungují skupiny uživatelů, se kterými Workflow pracuje
- [Stavy aktivity: přechody a životní cyklus](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/stavy-aktivity/index.md) – stavový automat aktivity, odlišný systém od Workflow
- [Přehled notifikačních událostí](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/reference/prehled-notifikacnich-udalosti/index.md) – notifikační systém, který Workflow doplňuje
