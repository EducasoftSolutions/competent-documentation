# Záložka Koš

Záložka **Koš** je součástí obrazovky **Nastavení** a slouží k zobrazení objektů, které byly v systému smazány. Každý smazaný objekt lze buď obnovit – vrátit zpět do systému – nebo trvale odstranit.

---

## Přístup k záložce

Záložka **Koš** se nachází na obrazovce [Nastavení](obrazovka-nastaveni.md). Zobrazí se jen uživatelům s oprávněním pro zobrazení nebo obnovení smazaných záznamů.

---

## Typy objektů

Koš je rozdělen do šesti záložek podle typu smazaného objektu:

| Záložka | Typ smazaného objektu |
|---|---|
| **Aktivity** | Smazané aktivity |
| **Uživatelé** | Smazaní uživatelé |
| **Uživatelské skupiny** | Smazané uživatelské skupiny |
| **Kvalifikace** | Smazané kvalifikace |
| **Pokusy o aktivitu** | Smazané pokusy o aktivitu |
| **Přístup k aktivitě** | Smazané záznamy přístupu k aktivitě |

---

## Tabulka smazaných položek

Po přepnutí na záložku příslušného typu se zobrazí tlačítko **Získat data**. Tabulka smazaných položek se načte až po jeho stisknutí. Tlačítkem **Získat další data** lze dočíst další dávku záznamů.

### Sloupce záložky Aktivity

| Sloupec | Popis |
|---|---|
| **Zodpovědný uživatel** | Uživatel odpovědný za danou aktivitu. |
| **ID Akce** | Identifikátor záznamu akce. |
| **Název aktivity** | Název smazané aktivity; kliknutím se otevře detail. |
| **Datum smazání** | Datum a čas, kdy byla aktivita smazána; sloupec lze seřadit, výchozí řazení je sestupné. |

Sloupce tabulky lze filtrovat.

### Ostatní typy objektů

U záložek **Uživatelé**, **Uživatelské skupiny**, **Kvalifikace**, **Pokusy o aktivitu** a **Přístup k aktivitě** jsou k dispozici obdobné sloupce odpovídající danému typu záznamu.

### Stránkování

Tabulka je stránkovaná. Výchozí počet zobrazených položek na stránku je 100; tento počet lze změnit.

---

## Akce

U každého záznamu v tabulce jsou dostupné dvě akce:

| Akce | Popis |
|---|---|
| **Obnovit** | Vrátí smazaný objekt zpět do systému. Před provedením systém zobrazí potvrzovací dialog. |
| **Smazat** | Trvale odstraní objekt ze systému. Před provedením systém zobrazí potvrzovací dialog. |

!!! warning "Trvalé smazání je nevratné"
    Akce **Smazat** objekt trvale odstraní a tuto operaci nelze vrátit zpět.

---

!!! note "Uchování smazaných položek"
    Položky v Koši se neodstraňují automaticky – zůstávají dostupné, dokud je neobnovíte nebo trvale nesmažete.

---

## Související stránky

- [Obrazovka Nastavení](obrazovka-nastaveni.md)
- [Záložka Parametry](tab-parametry.md)
- [Záložka Štítky](tab-stitky.md)
- [Záložka Notifikace](tab-notifikace.md)
