# Záložka Parametry

Záložka **Parametry** je součástí obrazovky **Nastavení** a slouží ke správě parametrů hlavních objektů systému Competent. Správa je rozdělena do subtabů podle typu objektu.

---

## Přístup k záložce

Záložka **Parametry** se nachází na obrazovce [Nastavení](obrazovka-nastaveni.md). Přístup do záložky je řízen oprávněními.

---

## Subtaby

Záložka Parametry je vnitřně rozdělena do čtyř subtabů. Aktuálně zvolený subtab je zvýrazněn.

| Subtab | Parametry pro |
|---|---|
| **Aktivity** | Objekty typu aktivita, hodnocení, sada a termínová sada |
| **Uživatelé** | Uživatele |
| **Uživatelské skupiny** | Skupiny uživatelů |
| **Kvalifikace** | Kvalifikace |

!!! note "Aktivity, hodnocení, sada a termínová sada sdílejí parametry"
    Pro systém Competent jsou [aktivita](../concepts/aktivita.md), [hodnocení](../concepts/hodnoceni.md), [sada](../concepts/sada.md) a [termínová sada](../concepts/terminova-sada.md) stejný objekt, rozlišený pouze vnitřním příznakem. Proto mají společné parametry a jsou všechny zastoupeny jediným subtabem Aktivity.

---

## Tabulka parametrů

Po výběru subtabu se zobrazí tabulka parametrů příslušného objektu. Tabulka je seřazena podle sloupce **Pořadí**.

| Sloupec | Popis |
|---|---|
| **Pořadí** | Pořadí parametru v seznamu; libovolné číslo, doporučen rozestup po desítkách/stovkách. |
| **Název** | Zobrazovaný název parametru. |
| **Skrytý** | Příznak Ano/Ne, zda je parametr skrytý. |
| **Smí být prázdný** | Příznak Ano/Ne, zda parametr smí zůstat bez hodnoty. |
| **Nelze upravit** | Příznak Ano/Ne, zda je parametr pouze pro čtení. |
| **Typ** | Datový typ hodnoty parametru. |
| **Výchozí hodnota** | Hodnota předvyplněná, pokud není zadána jiná. |
| **Konfigurace** | Rozšířená konfigurace parametru ve formátu JSON; sloupec zobrazuje JSON, nebo je prázdný. |
| **Překlady** | Překlady názvu parametru do podporovaných jazyků ve formátu JSON. |
| **Nápověda** | Text nápovědy k parametru ve formátu JSON. |

---

## Editace parametru

!!! warning "Parametry nelze přidávat ani odebírat"
    Parametry nelze přidávat ani odebírat, lze je pouze upravit.

Kliknutím na řádek parametru se řádek rozbalí a zobrazí editovatelné atributy. Tlačítko **Uložit** uloží provedené změny.

---

## Související stránky

- [Obrazovka Nastavení](obrazovka-nastaveni.md)
- [Záložka Subtypy](tab-subtypy.md)
- [Záložka Přiřazení dle skupin](tab-prirazeni-dle-skupin.md)
- [Aktivita: model a životní cyklus](../concepts/aktivita.md)
- [Hodnocení](../concepts/hodnoceni.md)
- [Sada](../concepts/sada.md)
- [Termínová sada](../concepts/terminova-sada.md)
