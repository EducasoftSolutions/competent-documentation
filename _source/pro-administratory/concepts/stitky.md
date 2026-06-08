# Štítky: co jsou a jak fungují

Štítek je jednoduchá pojmenovaná značka, kterou administrátor přiřadí aktivitě
a tím ji volně označí libovolnou značkou – například „GDPR", „Onboarding"
nebo „Povinné". Stejnou aktivitu lze označit více štítky najednou, jeden štítek
zase může být přiřazen libovolnému počtu aktivit. Díky tomu se štítky hodí
všude tam, kde pevná hierarchie složek nestačí a potřebujete aktivity křížově
třídit podle více kritérií zároveň.

---

## Co je štítek

Štítek je **plochá pojmenovaná značka pro označení aktivit**. Jediným atributem
štítku je jeho **název** – bez barvy, ikony ani pořadí. Štítky nejsou vzájemně
zanořeny: neexistuje žádný nadřazený nebo podřazený štítek, každý štítek stojí
samostatně.

Správu štítků – jejich vytváření, přejmenování a smazání – provádí
administrátor v sekci **Nastavení**. Jak na to, popisuje průvodce
[Vytvoření a správa štítků](../how-to/nastaveni/stitky.md).

---

## Štítek, Sada a Složka: jak se liší

Competent nabízí tři různé způsoby, jak seskupovat nebo označovat aktivity.
Každý z nich slouží jinému účelu:

| Nástroj | Povaha | Vztah k aktivitě |
|---------|--------|------------------|
| **Štítek** | Plochá značka | Libovolný počet štítků na jednu aktivitu; jeden štítek na libovolný počet aktivit (M:N) |
| **Sada** | Kontejner aktivit, který lze přiřadit uživatelům | Aktivita může být součástí sady; sada se přiřazuje uživatelům jako celek |
| **Složka** | Hierarchický strom v administraci | Každá aktivita leží právě v jedné složce; složky tvoří navigační strom |

**Klíčový rozdíl:**

- Složka určuje, **kde aktivita fyzicky leží** – je to navigační hierarchie
  v administraci. Každá aktivita patří do přesně jedné složky.
- Sada je **přiřaditelný kontejner**: seskupuje aktivity do celku, který lze
  jako celek přiřadit uživatelům ke splnění.
- Štítek je **volná značka**: nijak nemění umístění aktivity ani k čemu
  slouží – jen přidává označení, podle kterého lze aktivitu filtrovat.

Více o sadách: [Sada (připravujeme)](#).
Více o složkách: [Složky aktivit (připravujeme)](#).

---

## Vztah štítku k aktivitě

Štítky a aktivity jsou ve vztahu **M:N** (mnoho k mnoha):

- Jedna aktivita může mít **nula až libovolně mnoho** štítků.
- Jeden štítek může označovat **nula až libovolně mnoho** aktivit.

Vazba mezi aktivitou a štítkem nevzniká v Nastavení, ale přímo v **detailu
aktivity**. Postup popisuje stránka
[Přiřazení štítku k aktivitě](../how-to/aktivity/prirazovani-stitku.md).

Štítek lze přiřadit pouze aktivitě – ne sadě ani složce.

---

## Co se stane při smazání štítku

Smazání štítku v sekci **Nastavení** má automatický dopad na všechny aktivity,
kterým byl tento štítek přiřazen: **všechny vazby mezi smazaným štítkem a
aktivitami zaniknou**. Aktivity samotné zůstávají beze změny obsahu – z jejich
detailu pouze zmizí daný štítek.

Toto chování je trvalé a automatické: jakmile je štítek smazán, nevzniká žádná
vazba, kterou by bylo možné zpětně obnovit.

!!! warning "Smazání štítku je nevratné"
    V Competent není dostupný způsob, jak smazaný štítek nebo jeho vazby
    na aktivity v uživatelském rozhraní obnovit. Pokud chcete štítek přestat
    používat, ale vazby na aktivity zachovat, doporučujeme štítek nepřiřazovat
    novým aktivitám nebo ho přejmenovat – ne smazat.

---

## Kde se štítky používají

Štítky jsou v Competent primárně nástrojem **filtrování**:

- **Filtrování v seznamu aktivit** – v administraci lze aktivovat filtr podle
  štítků a zobrazit tak jen aktivity s daným označením. Postup popisuje
  stránka [Filtrování aktivit podle štítků](../how-to/aktivity/vyhledavani-v-aktivitach.md).

---

## Pozor na

- **Smazání štítku odstraní jeho přiřazení ze všech aktivit najednou, bez
  upozornění.** Po smazání se nezobrazí přehled aktivit, kterých se operace
  dotkla. Doporučení: před smazáním ověřte, které aktivity štítek nesou,
  a zvažte přejmenování místo smazání.
- **V multi-jazyčných instalacích Competent může mít štítek lokalizovaný
  název.** Podrobnosti viz [Jazyková podpora (připravujeme)](#).

---

## Související stránky

- [Vytvoření a správa štítků](../how-to/nastaveni/stitky.md) – jak v sekci **Nastavení** štítek vytvořit, přejmenovat nebo smazat.
- [Přiřazení štítku k aktivitě](../how-to/aktivity/prirazovani-stitku.md) – jak štítek přiřadit konkrétní aktivitě nebo ho z aktivity odebrat.
- [Filtrování aktivit podle štítků](../how-to/aktivity/vyhledavani-v-aktivitach.md) – jak v seznamu aktivit využít štítky jako filtr.
- [Sada (připravujeme)](#) – seskupení aktivit přiřaditelné uživatelům.
- [Složky aktivit (připravujeme)](#) – hierarchická navigace aktivit v administraci.
