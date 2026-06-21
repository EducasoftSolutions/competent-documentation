# Záložka Přiřazení dle Skupin

Záložka **Přiřazení dle Skupin** je součástí obrazovky **Nastavení** v administraci Competent. Umožňuje prohlížet a spravovat pravidla přiřazení, která automaticky přidělují aktivity uživatelům na základě jejich členství ve skupinách. Tato stránka popisuje sloupce, tlačítka a pole formuláře záložky.

Popis toho, jak mechanismus přiřazení dle skupin funguje, naleznete na stránce [Přiřazení dle skupin: mechanismus a principy](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/prirazeni-dle-skupin/index.md).

______________________________________________________________________

## Přístup do záložky

Záložka se nachází na obrazovce **Nastavení** v administrátorské navigaci. Záložka **Přiřazení dle Skupin** je dostupná uživatelům s oprávněním zobrazovat nebo spravovat pravidla přiřazení dle skupin. Celá sekce Nastavení je určena proškoleným administrátorům – nesprávná manipulace s pravidly přiřazení může ovlivnit přístupy uživatelů.

______________________________________________________________________

## Přehled záložky

Záložka obsahuje dva subtaby pro přepínání pohledu:

| Subtab                  | Obsah                                                                                                   |
| ----------------------- | ------------------------------------------------------------------------------------------------------- |
| **Uživatelské skupiny** | Seznam uživatelských skupin a jejich přiřazených aktivit, sad nebo složek.                              |
| **Objekty stromu**      | Seznam objektů (aktivit, sad, složek) a skupin, jimž jsou přiřazeny prostřednictvím pravidel přiřazení. |

Záložka zobrazuje seznam existujících pravidel přiřazení; v demo prostředí může být seznam prázdný.

### Prvky záložky

| Prvek                          | Popis                                                                                     |
| ------------------------------ | ----------------------------------------------------------------------------------------- |
| Tlačítko **Nové přiřazení**    | Otevře modál [Přiřadit](#modal-priradit) pro vytvoření nového pravidla přiřazení.         |
| Checkbox **Zobrazit ukončené** | Přepíná viditelnost ukončených pravidel přiřazení; ukončená pravidla se zobrazují šedivě. |

______________________________________________________________________

## Subtab Uživatelské skupiny

Pohled **Uživatelské skupiny** zobrazuje seznam skupin se sloupci:

| Sloupec                            | Popis                                                                                  |
| ---------------------------------- | -------------------------------------------------------------------------------------- |
| **Název skupiny**                  | Název uživatelské skupiny.                                                             |
| **Popis skupiny**                  | Textový popis skupiny.                                                                 |
| **Přiřazené Aktivity/Sady/Složky** | Výčet aktivit, sad nebo složek přiřazených skupině prostřednictvím pravidel přiřazení. |

### Detail skupiny

Kliknutím na řádek skupiny se rozbalí detail s tabulkou přiřazených objektů. Rozbalený detail obsahuje sloupce:

| Sloupec                        | Popis                                                                                           |
| ------------------------------ | ----------------------------------------------------------------------------------------------- |
| **Název Aktivity/Sady/Složky** | Název přiřazeného objektu.                                                                      |
| **Popis**                      | Popis objektu.                                                                                  |
| **Typ**                        | Typ objektu (aktivita, sada nebo složka).                                                       |
| **Nastavení přístupu**         | Parametry přístupu nastavené v daném pravidle přiřazení (začátek přístupu, vyžadované splnění). |

______________________________________________________________________

## Subtab Objekty stromu

Pohled **Objekty stromu** zobrazuje seznam objektů se sloupci:

| Sloupec                        | Popis                                                                |
| ------------------------------ | -------------------------------------------------------------------- |
| **Název Aktivity/Sady/Složky** | Název objektu.                                                       |
| **Popis**                      | Popis objektu.                                                       |
| **Typ**                        | Typ objektu (aktivita, sada nebo složka).                            |
| **Přiřazené skupiny**          | Skupiny, jimž je objekt přiřazen prostřednictvím pravidel přiřazení. |

______________________________________________________________________

## Modál Přiřadit

Modál **Přiřadit** se otevírá tlačítkem **Nové přiřazení** (vytvoření pravidla) nebo akcí **Upravit** na existujícím pravidle.

### Pole Skupina

Výběr uživatelské skupiny, pro níž se pravidlo přiřazení vytváří.

### Pole Aktivita/Složka

Výběr cíle pravidla přiřazení. Pravidlo lze cílit na:

- **aktivitu nebo sadu** – tlačítkem **Zvolit Aktivitu**,
- **složku** – tlačítkem **Zvolit Složku**; pravidlo se rozpadne na dílčí pravidla pro každý objekt uvnitř složky.

### Pole Začátek přístupu

Určuje, od kdy začíná přístup uživatele k přiřazenému objektu.

| Možnost                     | Chování                                                                                                                                   |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| **Datum**                   | Přístup začíná pevným datem nastaveným administrátorem. Tlačítko **Nenastavovat** použije jako začátek datum vstupu uživatele do skupiny. |
| **Dle členství ve skupině** | Přístup začíná datem vstupu uživatele do skupiny nebo datem vytvoření pravidla – co nastane dříve.                                        |
| **Dle parametru**           | Začátek přístupu určuje parametr aktivity.                                                                                                |

### Pole Vyžadované splnění

Určuje délku nebo podmínku ukončení přístupu.

| Možnost                     | Chování                                                                  |
| --------------------------- | ------------------------------------------------------------------------ |
| **Datumy**                  | Přístup trvá do pevného data nastaveného administrátorem.                |
| **Počtem dní**              | Přístup trvá zadaný počet dní od začátku (hodnota musí být větší než 0). |
| **Podle aktivity**          | Délka přístupu se přebírá z parametru „Počet dnů přístupu" na aktivitě.  |
| **Nemá vyžadované splnění** | Přístup nemá časové omezení.                                             |
| **Dle parametru**           | Délka přístupu je určena parametrem.                                     |

### Checkbox Znovu nastavit i aktuálně splněné přístupy

Dostupný při vytváření nového pravidla.

| Stav checkboxu | Chování                                                                        |
| -------------- | ------------------------------------------------------------------------------ |
| Zaškrtnuto     | Pravidlo se aplikuje i na uživatele, kteří aktivitu již mají splněnou.         |
| Nezaškrtnuto   | Pravidlo se aplikuje pouze na uživatele bez aktivního nebo splněného přístupu. |

______________________________________________________________________

## Ukončení a smazání pravidla

### Ukončit pravidlo

Tlačítko **Ukončit** ukončí aktivní pravidlo přiřazení. Po ukončení:

- všechny přístupy vytvořené tímto pravidlem přejdou do stavu **Dokončeno**,
- z pravidla se nadále nevytváří nové přístupy,
- uživatelé aktivitu v historii stále vidí.

### Smazat pravidlo

Tlačítko **Smazat** (ikona koše) zobrazí dialog se dvěma volbami:

| Volba dialogu           | Dopad na přístupy uživatelů                                                                                            |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| **Ano**                 | Pravidlo se smaže; existující přístupy uživatelů zůstávají beze změny.                                                 |
| **Ano včetně přístupů** | Pravidlo se smaže a aktuální přístupy přejdou do stavu **Zrušeno**. Historické (již ukončené) přístupy jsou zachovány. |

______________________________________________________________________

## Pozor na

Pravidla s periodicitou a ukončení

U pravidla s nastavením periodicity může dojít k vytvoření nového přístupu i po ukončení pravidla tlačítkem **Ukončit**.

Formulář **Přiřadit** může obsahovat další nastavení přístupu, například periodicitu opakování. Konkrétní možnosti závisí na konfiguraci systému.

______________________________________________________________________

## Související stránky

- [Přiřazení dle skupin: mechanismus a principy](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/prirazeni-dle-skupin/index.md)
- [Uživatelská skupina: model a principy](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/skupina/index.md)
- [Přiřazení uživatele do skupiny](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/how-to/lide/prirazeni-uzivatele-do-skupiny/index.md)
- [Přiřazení uživatelů k aktivitě](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/how-to/aktivity/prirazeni-uzivatelu-k-aktivite/index.md)
- [Detail aktivity](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/reference/detail-aktivity/index.md)
