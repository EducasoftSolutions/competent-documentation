# Obrazovka Reporty

Obrazovka **Reporty** je interaktivní přehled nad daty o přístupech uživatelů k aktivitám, postavený na tabulce s možností postupného rozpadu (drill-down). Obrazovka nabízí dva pohledy na data (podle uživatelů a podle aktivit) a nástroje pro export přehledu do souboru. Stránka popisuje jednotlivé prvky obrazovky; postup exportu je předmětem samostatného návodu.

______________________________________________________________________

## Záhlaví obrazovky Reporty

Záhlaví obrazovky Reporty obsahuje záložky, breadcrumby, dropdown Typ zobrazení, ikonu obnovení dat a tlačítko Souhrnný report.

| Prvek                            | Popis                                                                                                                                                                                                  |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Záložky Uživatelé / Aktivity** | Přepínají pohled na data v tabulce reportu.                                                                                                                                                            |
| **Breadcrumby**                  | Umožňují procházet strukturou dat postupným rozpadem (drill-down); viz [Breadcrumby a drill-down](#breadcrumby-a-drill-down) níže.                                                                     |
| **Typ zobrazení**                | Dropdown, který mění granularitu zobrazených dat; viz [Typ zobrazení](#typ-zobrazeni) níže.                                                                                                            |
| **Ikona obnovení dat**           | Znovu načte data tabulky ze serveru.                                                                                                                                                                   |
| **Souhrnný report**              | Otevře modál pro souhrnný export dat do souboru; viz [Tlačítko Souhrnný report a modál Souhrnný report přístupů uživatelů](#tlacitko-souhrnny-report-a-modal-souhrnny-report-pristupu-uzivatelu) níže. |

### Záložky Uživatelé a Aktivity

Obrazovka Reporty má dvě záložky:

- **Uživatelé** – přehled dat z pohledu jednotlivých uživatelů.
- **Aktivity** – přehled dat z pohledu jednotlivých aktivit.

### Breadcrumby a drill-down

Breadcrumby v záhlaví umožňují procházet strukturou dat postupným rozpadem. Kořenová úroveň breadcrumby je v záložce Uživatelé **Všichni uživatelé**, v záložce Aktivity **Všechny aktivity**. Další úrovně breadcrumby se skládají za běhu podle aktuálního výběru (jména konkrétních uživatelů, názvy konkrétních aktivit).

### Typ zobrazení

Dropdown **Typ zobrazení** mění granularitu dat zobrazených v tabulce reportu. K dispozici jsou varianty **Jen aktivity**, **Sady**, **Hodnocení**, **Vše** a **Hierarchické**.

______________________________________________________________________

## Tabulka reportu

Tabulka reportu je hlavní obsahová oblast obrazovky. Zobrazuje data podle zvolené záložky (Uživatelé / Aktivity) a zvoleného Typu zobrazení.

### Sloupce tabulky (reprezentativní přehled)

Sloupce zobrazené v tabulce se liší podle zvoleného pohledu. Mezi sloupce, které se mohou v tabulce reportu objevit, patří například:

- **Splněno**, **Nesplněno**, **Ke splnění**, **Splněnost**, **Po limitu**
- **Termín splnění**, **Datum splnění**, **První splnění**, **Poslední splnění**
- **Chronologie** s hodnotami **Aktuální**, **Budoucí** a **Historický**
- **Nejlepší výsledek**, **Počet přístupů**, **Splněných přístupů**
- U záložky Uživatelé dále: **Přihlášení**, **E-mail**, **Vytvořeno**, případně **Titul před/za** a **Datum narození**

### Export tabulky (sekundární možnost)

Kromě souhrnného exportu lze zobrazenou tabulku exportovat i přímo přes menu sloupce tabulky (volba **XLS Export**). Výstupem je soubor `userData.xlsx` v záložce Uživatelé, respektive `activityData.xlsx` v záložce Aktivity. Export do formátů CSV a PDF není u tabulky reportu k dispozici.

______________________________________________________________________

## Tlačítko Souhrnný report a modál Souhrnný report přístupů uživatelů

Tlačítko **Souhrnný report** v záhlaví obrazovky otevře modál **Souhrnný report přístupů uživatelů** s podnadpisem **Export ve formátu XLSX**.

Modál obsahuje tyto prvky:

| Prvek                   | Popis                                                                                                                                                                                                             |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Konfigurace reportu** | Výběr konfigurace, která určuje sloupce obsažené ve výsledném souboru. Modál nabízí výběr konfigurace reportu; dostupné konfigurace závisí na nastavení systému.                                                  |
| **Rozsah exportu**      | Volí se buď výběrem z předdefinovaných možností (například Všechny přístupy, Aktuální přístup, Budoucí přístup), nebo volbou **Přístupy dle časového rozmezí**, kde se rozsah zadává pomocí polí **od** a **do**. |
| **Stáhnout**            | Spustí export. Po spuštění se připraví soubor XLSX ke stažení; modál informuje o průběhu a dokončení exportu.                                                                                                     |

______________________________________________________________________

## Dostupnost obrazovky

Obrazovka Reporty je dostupná administrátorům.

______________________________________________________________________

## Pozor na

Export bez filtru

Pokud se souhrnný export spustí bez filtru přístupů nebo časového rozmezí, může jít o velký objem dat. Doporučuje se rozsah exportu předem omezit.

______________________________________________________________________

## Související stránky

- [Obrazovka Lidé](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/reference/obrazovka-lide/index.md)
- [Obrazovka Aktivity](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/reference/obrazovka-aktivity/index.md)
- [Pokusy uživatele](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/pokusy-uzivatele/index.md)
- [Stavy aktivity](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/stavy-aktivity/index.md)
- [Import uživatelů](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/how-to/lide/import-uzivatelu/index.md)
