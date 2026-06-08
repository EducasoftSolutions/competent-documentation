# Detail aktivity

Detail aktivity je obrazovka, která zobrazuje veškeré informace o konkrétní aktivitě: její základní vlastnosti, přiřazené uživatele, dokumenty a podmínky přístupu. Obrazovka je rozdělena na **hlavičku** se stavovou lištou a sadu **tabů**, přičemž každý tab pokrývá odlišnou oblast správy aktivity.

______________________________________________________________________

## Hlavička obrazovky

### Název a navigace

V levém horním rohu obrazovky je zobrazen **název aktuální aktivity**. Vlevo od názvu je umístěno tlačítko **Strom aktivit**, které Vás navrátí zpět na obrazovku Aktivity (přehled stromové struktury), odkud byl Detail aktivity otevřen.

### Taby

Pod názvem aktivity je zobrazena lišta s taby. Kliknutím na záložku přepínáte mezi jednotlivými oblastmi správy aktivity.

### Stavová lišta

Stavová lišta se nachází vpravo od lišty tabů a obsahuje:

| Prvek                     | Popis                                                                                                                                                                                                                                                 |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Stav**                  | Zobrazuje aktuální stav aktivity (např. **Spuštěno**, **Ukončeno**, **Archivováno**). Výčet všech dostupných stavů: Skryto / Předregistrace / Registrace / Před spuštěním / Spuštěno / Spuštěno (R) / Viditelné / Hodnocení / Ukončeno / Archivováno. |
| **Primární akce stavu**   | Tlačítko pro nejběžnější přechod ze současného stavu (např. **Ukončit**).                                                                                                                                                                             |
| **Dropdown dalších akcí** | Rozbalovací nabídka dalších přechodů stavu dostupných z aktuálního stavu (např. Ukončit, Hodnotit).                                                                                                                                                   |
| **Aktuální verze**        | Tlačítko nebo ikona, která navrátí zobrazení na aktivní verzi aktivity, pokud aktuálně prohlížíte historickou verzi.                                                                                                                                  |

______________________________________________________________________

## Taby: přehled

Detail aktivity obsahuje čtyři základní taby, které jsou dostupné pro všechny aktivity:

| Tab           | Popis                                                                                                  |
| ------------- | ------------------------------------------------------------------------------------------------------ |
| **Uživatelé** | Přehled uživatelů přiřazených k aktivitě – jejich stavy, výsledky a správa přiřazení.                  |
| **Detaily**   | Formulář s vlastnostmi aktivity: identifikace, typ, kapacita, nastavení opakování, notifikace a další. |
| **Dokumenty** | Přílohy a studijní materiály spojené s aktivitou.                                                      |
| **Podmínky**  | Konfigurace podmínek přístupu k aktivitě (např. předpoklady splnění).                                  |

Po otevření Detail aktivity je výchozím aktivním tabem **Uživatelé**.

Některé aktivity mohou mít zobrazeny další taby – viz [Další taby (podle typu aktivity)](#dalsi-taby-podle-typu-aktivity) níže.

______________________________________________________________________

## Tab Uživatelé

Tab Uživatelé zobrazuje seznam uživatelů, jimž byla aktivita přiřazena – včetně současných, minulých i budoucích přiřazení. U každého záznamu jsou dostupné informace o datu přiřazení, výsledku a stavu.

### Sloupce gridu

| Sloupec                | Popis a hodnoty filtru                                                                                                                                                                                                               |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Uživatel**           | Jméno uživatele. Sloupec lze filtrovat textovým polem a řadit.                                                                                                                                                                       |
| **Aktuální výsledek**  | Výsledek plnění aktivity. Hodnoty filtru: **Nesplněno**, **Splněno**, **Prozatím nesplněno**.                                                                                                                                        |
| **Aktuální stav**      | Aktuální stav přiřazení. Hodnoty filtru: **Budoucí**, **Zajímám se**, **Rezervovaný**, **Registrovaný**, **Spuštěno**, **V hodnocení**, **Dokončeno**, **Zrušeno**, **Objednáno**, **Archivováno**, **Nemá termín**, **Expirováno**. |
| **Budoucí stav**       | Plánovaný budoucí stav přiřazení. Stejné hodnoty filtru jako sloupec Aktuální stav.                                                                                                                                                  |
| **Účastnické skupiny** | Skupiny, do nichž uživatel patří v kontextu tohoto přiřazení.                                                                                                                                                                        |

V patičce tabulky je zobrazen **celkový počet záznamů** (Celkem položek: N).

### Nástroje pro práci se seznamem

Nad gridem je umístěna lišta nástrojů s následujícími funkcemi:

- **Filtry** – k dispozici přímo v hlavičkách sloupců (viz výše).
- **Znovunačtení dat** – obnoví seznam uživatelských přiřazení ze serveru.
- **Hromadné akce** – umožní vybrat více uživatelských přiřazení najednou a provést hromadnou operaci: změnu dat plnění, odebrání uživatelských přístupů nebo odeslání zprávy. Potvrzovací modál má název **Hromadná změna stavu**.
- **Export do Excelu** – otevře modál **Souhrnný report přístupů uživatelů** a nabídne ke stažení aktuálně zobrazený seznam uživatelů.
- **Přiřazení nových uživatelů** – otevře vedlejší panel se seznamem uživatelů pro přiřazení. Průběh přiřazení se liší podle schématu aktivity (**S termíny** nebo **Bez termínu**) – viz [Přiřazení uživatelů (připravujeme)](#) a [Periodické nastavení (připravujeme)](#).

### Akce na řádku uživatelského přiřazení

Každý řádek v gridu umožňuje následující operace:

- **Data přiřazení** – nastavení dat: začátek, optimální začátek, optimální konec, vyžadovaný konec a konec přístupu.
- **Stáhnout certifikát** – stažení certifikátu o splnění aktivity.
- **Historie přístupů** – zobrazení záznamu o přístupech uživatele k aktivitě.
- **Hodnotit** – otevře modální okno s pokusy uživatele (viz [Pokusy uživatele (připravujeme)](#)).
- **Stav přiřazení** – zobrazení a změna stavu přiřazení.
- **Editace přiřazení** – dostupná pouze u aktivit se schématem **Bez termínu**.
- **Odebrání uživatelského přístupu** – odebere přístup uživatele k aktivitě.

______________________________________________________________________

## Tab Detaily

Tab Detaily obsahuje formulář pro správu vlastností aktivity. Pole jsou logicky seskupena do několika oblastí.

### Základní identifikace

| Pole              | Popis                                                     |
| ----------------- | --------------------------------------------------------- |
| **Název**         | Název aktivity (povinné pole).                            |
| **Popis**         | Volný text s popisem obsahu nebo účelu aktivity.          |
| **Specifické ID** | Vlastní identifikátor aktivity, viditelný v administraci. |
| **Externí ID**    | Identifikátor pro integraci s externími systémy.          |

### Typ a vyhodnocení

| Pole                | Popis                                                                                                                                                                                                                                                                                                                             |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Typ spouštění**   | Určuje způsob spuštění aktivity (např. Scorm kurz, PDF soubor, Url adresa, Video, Vložený kód, Formulář, iTrivio, Nahrání souborů, Žádný a další). Podrobnosti viz [Vytvoření SCORM aktivity](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/how-to/aktivity/vytvoreni-scorm-aktivity/index.md). |
| **Typ vyhodnocení** | Určuje metodu vyhodnocení výsledku aktivity (např. Body).                                                                                                                                                                                                                                                                         |

### Kapacita a účast

| Pole                                    | Popis                                                                                |
| --------------------------------------- | ------------------------------------------------------------------------------------ |
| **Kapacita**                            | Maximální počet účastníků. Hodnota **Neomezeno** znamená, že kapacita není omezena.  |
| **Spuštění i po splnění**               | Pokud je zapnuto, uživatel může aktivitu spustit znovu i po jejím splnění.           |
| **Počet pokusů**                        | Počet pokusů dostupných pro vyhodnocení. Musí být číslo větší než 0.                 |
| **Povolit splnit po vypršení přístupu** | Pokud je zapnuto, uživatel může aktivitu dokončit i po uplynutí data konce přístupu. |

### Čas a opakování

| Pole                                          | Popis                                                                                                          |
| --------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| **Nastavení opakování**                       | Volba periodického přiřazování aktivity. Detailní popis rozhraní viz [Periodické nastavení (připravujeme)](#). |
| **Opakování**                                 | Zobrazuje aktuálně nastavený způsob opakování (např. Bez opakování).                                           |
| **Počet dnů přístupu**                        | Délka přístupu uživatele k aktivitě ve dnech.                                                                  |
| **Počet dnů automatického prodloužení**       | Počet dnů, o které se přístup automaticky prodlouží.                                                           |
| **Počet opakování automatického prodloužení** | Kolikrát se automatické prodloužení přístupu uplatní.                                                          |

### Verze aktivity

| Pole               | Popis                                                                                                                                                                                                                                                |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Verze aktivity** | Zobrazuje číslo aktuální verze obsahu aktivity.                                                                                                                                                                                                      |
| **Nová verze**     | Umožní zvýšit číslo verze obsahu, například při výměně SCORM balíčku. Podrobnosti viz [Vytvoření SCORM aktivity](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/how-to/aktivity/vytvoreni-scorm-aktivity/index.md). |

### Notifikace

Sekce **Notifikace** slouží ke konfiguraci automaticky odesílaných zpráv spojených s aktivitou.

| Pole                | Popis                                                                                                                                                                                                                            |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Nová notifikace** | Přidá nový záznam notifikace k aktivitě.                                                                                                                                                                                         |
| **Událost**         | Událost, na jejímž základě se notifikace odešle. Jak notifikace fungují, popisuje [E-mailové notifikace](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/emailove-notifikace/index.md). |
| **Šablona**         | Šablona zprávy, která se použije pro danou notifikaci.                                                                                                                                                                           |

### Ostatní pole

| Pole                | Popis                                                                                                                |
| ------------------- | -------------------------------------------------------------------------------------------------------------------- |
| **Recenze**         | Sekce pro konfiguraci recenzí aktivity. Obsahuje přepínač **Skrýt výsledky** a pole **Otázka pro recenzi aktivity**. |
| **Vytvořeno**       | Datum vytvoření aktivity (jen pro čtení).                                                                            |
| **Poslední úprava** | Datum poslední úpravy záznamu (jen pro čtení).                                                                       |
| **Štítky**          | Panel pro přiřazení štítků k aktivitě (viz [Přiřazování štítků (připravujeme)](#)).                                  |
| **Workflow**        | Panel Workflow. Viz [Workflow aktivity (připravujeme)](#).                                                           |

______________________________________________________________________

## Tab Dokumenty

Tab Dokumenty slouží ke správě příloh a studijních materiálů spojených s aktivitou. Podrobný popis funkcí tohoto tabu viz [Dokumenty v aktivitě (připravujeme)](#).

______________________________________________________________________

## Tab Podmínky

Tab Podmínky slouží ke konfiguraci podmínek přístupu k aktivitě – například k nastavení požadavku na předchozí splnění jiné aktivity. Podrobný popis viz [Podmínky přístupu (připravujeme)](#).

______________________________________________________________________

## Další taby (podle typu aktivity)

U některých typů aktivit se mohou vedle čtyř základních tabů zobrazit také tyto taby:

| Tab         | Kdy se zobrazuje                                                 |
| ----------- | ---------------------------------------------------------------- |
| **iTrivio** | Pravděpodobně u aktivit s Typem spouštění nastaveným na iTrivio. |
| **Termíny** | Pravděpodobně u aktivit se schématem **S termíny**.              |

Podmínky zobrazení

Přesné podmínky zobrazení tabů iTrivio a Termíny závisí na konfiguraci aktivity. Obsah těchto tabů není v současné dokumentaci popsán – doplníme po dokončení testovacích scénářů.

______________________________________________________________________

## Pozor na

Různé chování tabu Uživatelé podle schématu

Tab Uživatelé funguje odlišně v závislosti na schématu aktivity. U aktivit se schématem **S termíny** je správa přiřazení provázána s termíny a přiřazení uživatelů probíhá jinak než u aktivit se schématem **Bez termínu**. Podrobnosti viz [Přiřazení uživatelů (připravujeme)](#).

Detail aktivity má výchozí čtyři taby (Uživatelé, Detaily, Dokumenty, Podmínky). U aktivit s Typem spouštění iTrivio a u aktivit se schématem **S termíny** se mohou zobrazit další taby (iTrivio, Termíny). Přesný výčet podmínek pro zobrazení těchto tabů bude doplněn v samostatné referenci po dokončení testování.

______________________________________________________________________

## Související stránky

- [Obrazovka Aktivity](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/reference/obrazovka-aktivity/index.md)
- [Vytvoření nového objektu](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/how-to/aktivity/vytvoreni-noveho-objektu/index.md)
- [Vytvoření SCORM aktivity](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/how-to/aktivity/vytvoreni-scorm-aktivity/index.md)
- [Přiřazení uživatelů (připravujeme)](#)
- [Periodické nastavení (připravujeme)](#)
- [Pokusy uživatele (připravujeme)](#)
- [Dokumenty v aktivitě (připravujeme)](#)
- [Podmínky přístupu (připravujeme)](#)
- [E-mailové notifikace](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/emailove-notifikace/index.md)
- [Detail sady (připravujeme)](#)
- [Sdílené aktivity (připravujeme)](#)
