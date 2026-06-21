# Schémata aktivity: beztermínová a termínová aktivita

Schéma aktivity vyjadřuje časový charakter aktivity – určuje, zda probíhá volně, bez vázání na konkrétní datum a místo konání, nebo v předem stanovených termínech. Tato stránka vysvětluje, co obě varianty znamenají, jak ovlivňují přiřazování uživatelů a jak se schéma nastavuje. Je určena administrátorům, kteří chtějí pochopit model aktivit před jejich konfigurací nebo přiřazováním.

______________________________________________________________________

## Co je schéma aktivity

Každá aktivita v systému Competent má nastavenu hodnotu pole **Schéma** (viditelné v záložce **Detaily**). Tato hodnota určuje, zda aktivita probíhá bez termínů – kdy uživatel plnění organizuje individuálně – nebo s termíny, kdy se uživatelé přihlašují na konkrétní termíny s daným datem, místem a kapacitou.

Schéma je nezávislé na **typu aktivity** (Aktivita, Sada, Termínová sada, Hodnocení) i na **stavu aktivity**. Typ popisuje strukturální roli objektu v hierarchii obsahu; schéma popisuje jeho časový charakter; stav popisuje fázi životního cyklu. Tyto tři vlastnosti se vzájemně nekryjí a lze je nastavovat nezávisle.

V uživatelském rozhraní jsou k dispozici dvě hodnoty schématu:

| Hodnota v UI    | Název aktivity        | Typické příklady                                   |
| --------------- | --------------------- | -------------------------------------------------- |
| **Bez termínu** | beztermínová aktivita | online kurzy, e-learningová školení, testy         |
| **S termíny**   | termínová aktivita    | prezenční školení, zkoušky, akce s fyzickou účastí |

Hodnocení je vždy beztermínové

Aktivitě typu **Hodnocení** nelze nastavit termínové schéma. Hodnocení je vždy beztermínová aktivita.

______________________________________________________________________

## Beztermínová aktivita

Beztermínová aktivita je vhodná pro aktivity, které uživatel plní samostatně a které nejsou závislé na organizačních podmínkách, jako jsou konkrétní data a místa konání. Typickými příklady jsou online kurzy, periodická školení nebo testy.

Při **přiřazení uživatele** k beztermínové aktivitě se nastavují individuální termíny zpřístupnění a splnění – každý přiřazený uživatel tak může mít odlišné datum zahájení i požadovaný termín dokončení.

Pro beztermínovou aktivitu jsou dostupné všechny stavy životního cyklu. Podrobnosti o přechodech mezi stavy najdete na stránce [Stavy aktivity](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/stavy-aktivity/index.md).

______________________________________________________________________

## Termínová aktivita

Termínová aktivita je určena pro aktivity, na které se uživatelé musí fyzicky dostavit v konkrétní čas a na konkrétní místo. Typicky jde o prezenční školení, zkoušky a podobné akce. Aktivita sama o sobě vzdělávací obsah obvykle neobsahuje; náplň bývá zachycena v popisu aktivity.

Termínová aktivita není Termínová sada

**Termínová aktivita** a **Termínová sada** jsou dva různé pojmy, jejichž záměna může vést k nepřesnostem:

- **Termínová aktivita** – aktivita s termínovým schématem (pole Schéma: „S termíny"), jejíž uživatelé se přihlašují na konkrétní termíny.
- **Termínová sada** – samostatný typ objektu v hierarchii obsahu, sloužící ke scénářům s omezenou kapacitou (viz [Termínová sada](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/terminova-sada/index.md)).

V dokumentaci jsou oba pojmy vždy psány v plném znění.

### Termíny

Termínová aktivita může mít libovolný počet **termínů**. Termín je konkrétní datum (a místo) konání aktivity. Každý termín nese základní parametry: datum a čas konání (jediný povinný parametr), název, popis, místo, kapacitu a realizační tým (lektoři, zkoušející apod.).

**Kapacita** je definována na úrovni termínu – každý termín má vlastní maximální počet účastníků. Kapacita celé aktivity jako takové v systému implementována není.

Pokud termín probíhá ve více etapách nebo na více místech, lze jej rozdělit do **fází**. Každá fáze má vlastní datum, čas a místo konání.

Záložka **Termíny** v detailu aktivity se zobrazuje pouze u termínové aktivity a třídí termíny do tří skupin: minulé, probíhající a budoucí.

### Přiřazování uživatelů

U termínové aktivity se uživatelé přiřazují ke **konkrétnímu termínu**, nikoliv k aktivitě obecně. Při přiřazení administrátor vybírá ze seznamu dostupných termínů dané aktivity.

### Stavový cyklus termínové aktivity

Termínová aktivita prochází na úrovni objektu hrubšími stavovými přechody: Skryto → Viditelné → Ukončeno → Archivováno. Detailní stavy registrace a spuštění jsou řízeny na úrovni jednotlivých termínů. Podrobnosti viz [Stavy aktivity](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/stavy-aktivity/index.md).

______________________________________________________________________

## Jak se schéma nastavuje

Schéma aktivity se nastavuje prostřednictvím **subtypu** při vytváření aktivity. Každý subtyp má v konfiguraci přednastavenu hodnotu schématu – buď beztermínová, nebo termínová. Tato hodnota se při vytvoření aktivity automaticky použije; dialog **Vytvořit novou položku** výběr schématu explicitně neobsahuje.

O dostupných subtypech a jejich konfiguracích podrobněji pojednává stránka [Subtypy aktivit](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/subtypy-aktivit/index.md).

Schéma se nastavuje při vytváření aktivity a pozdější změna schématu může způsobit nekonzistenci dat. Zpravidla proto není součástí běžného provozu.

______________________________________________________________________

## Související stránky

- [Aktivita: model a životní cyklus](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/aktivita/index.md)
- [Stavy aktivity](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/stavy-aktivity/index.md)
- [Subtypy aktivit](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/subtypy-aktivit/index.md)
- [Termínová sada](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/terminova-sada/index.md)
- [Detail aktivity](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/reference/detail-aktivity/index.md)
- [Obrazovka Aktivity](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/reference/obrazovka-aktivity/index.md)
- [Přidání termínu k aktivitě](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/how-to/aktivity/terminy-aktivity/index.md)
