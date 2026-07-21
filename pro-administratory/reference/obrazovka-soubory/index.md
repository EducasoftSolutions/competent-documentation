# Obrazovka Soubory

Obrazovka **Soubory** (správce souborů) slouží ke správě souborů a adresářů v systému Competent. Otevírá se z hlavního menu položkou **Soubory**. Tato stránka popisuje prvky a pole obrazovky – způsob práce se soubory naleznete v příslušných návodech.

______________________________________________________________________

## Rozložení obrazovky

Obrazovka je rozdělena na dvě části:

- **Strom adresářů** (levý panel) – zobrazí se pouze tehdy, pokud kořenový adresář obsahuje podadresáře.
- **Hlavní panel** (pravá část) – zobrazuje obsah aktuálně vybraného adresáře.

V horní části obrazovky je **breadcrumb navigace**, jejíž kořen je označen „Správce souborů". Vedle breadcrumbu se nachází přepínač zobrazení.

Je-li aktuální adresář prázdný, zobrazí se v hlavním panelu text „Žádné soubory v tomto adresáři".

______________________________________________________________________

## Přepínač zobrazení

Obsah adresáře lze zobrazit ve dvou režimech:

| Režim      | Popis                                                                                                                         |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------- |
| **Ikony**  | Soubory a adresáře jsou zobrazeny jako ikony s názvem.                                                                        |
| **Seznam** | Soubory a adresáře jsou zobrazeny jako řádky tabulky se sloupci (viz [Zobrazení Seznam: sloupce](#zobrazeni-seznam-sloupce)). |

______________________________________________________________________

## Globální akce

Globální akce jsou dostupné z rozbalovacího menu v pravém horním rohu obrazovky.

| Akce               | Popis                                                            |
| ------------------ | ---------------------------------------------------------------- |
| **Nový adresář**   | Otevře modál pro vytvoření nového adresáře v aktuálním umístění. |
| **Nahrát soubory** | Otevře modál pro nahrání souborů do aktuálního adresáře.         |

______________________________________________________________________

## Kontextové menu

Pravým kliknutím na soubor nebo adresář se zobrazí kontextové menu s dostupnými akcemi.

| Akce                                  | Platí pro                         | Popis                                                                                       |
| ------------------------------------- | --------------------------------- | ------------------------------------------------------------------------------------------- |
| **Otevřít**                           | Adresář                           | Otevře vybraný adresář a zobrazí jeho obsah.                                                |
| **Stáhnout**                          | Soubor                            | Stáhne soubor do počítače uživatele.                                                        |
| **Uložit jako ZIP**                   | Více souborů                      | Zabalí vybrané položky do archivu ZIP a nabídne jeho stažení.                               |
| **Zobrazit položku**                  | Soubor (obrázek)                  | Zobrazí náhled obrázku.                                                                     |
| **Přejmenovat**                       | Soubor, adresář                   | Otevře modál pro změnu názvu.                                                               |
| **Přesunout**                         | Soubor, adresář                   | Otevře modál pro výběr cílového adresáře.                                                   |
| **Kopírovat**                         | Soubor                            | Otevře modál pro kopírování souboru s volbou nového názvu.                                  |
| **Editovat**                          | Textový soubor                    | Otevře modál s editorem obsahu textového souboru.                                           |
| **Označit jako šablonu certifikátu**  | Soubor .odt                       | Označí soubor jako šablonu certifikátu (viz [Soubory jako šablony](#soubory-jako-sablony)). |
| **Odznačit jako šablonu certifikátu** | Soubor .odt označený jako šablona | Odebere označení šablony certifikátu.                                                       |
| **Smazat**                            | Soubor, adresář                   | Otevře potvrzovací dialog a po potvrzení soubor nebo adresář odstraní.                      |

______________________________________________________________________

## Zobrazení Seznam: sloupce

V režimu **Seznam** jsou položky zobrazeny v tabulce s těmito sloupci:

| Sloupec      | Popis                                                                                                                                                               |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Jméno**    | Název souboru nebo adresáře.                                                                                                                                        |
| **Šablona**  | Uvádí, zda je soubor použit jako šablona. Možné hodnoty: „certifikát" (šablona certifikátu) nebo „email" (šablona e-mailu). U ostatních souborů je sloupec prázdný. |
| **Velikost** | Velikost souboru.                                                                                                                                                   |
| **Datum**    | Datum přiřazené k souboru.                                                                                                                                          |
| **Práva**    | V této instalaci není sloupec zobrazen.                                                                                                                             |

______________________________________________________________________

## Soubory jako šablony

Soubory uložené na obrazovce **Soubory** lze využít jako šablony pro automaticky generované dokumenty.

- **Šablona certifikátu** – soubor formátu `.odt` lze označit jako šablonu certifikátu pomocí akce „Označit jako šablonu certifikátu" v kontextovém menu. Ve sloupci **Šablona** se poté zobrazí hodnota „certifikát". Podrobnosti o certifikátech naleznete na stránce [Certifikát](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/certifikat/index.md).
- **Šablona e-mailu** – soubor označený jako šablona e-mailu má ve sloupci **Šablona** hodnotu „email". Správa e-mailových šablon je dostupná na obrazovce [Šablony e-mailů](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/reference/obrazovka-sablony-emailu/index.md).

______________________________________________________________________

## Modály

### Nový adresář

| Prvek              | Popis                                                   |
| ------------------ | ------------------------------------------------------- |
| **Jméno adresáře** | Textové pole pro zadání názvu nového adresáře.          |
| **Zrušit**         | Zavře modál bez vytvoření adresáře.                     |
| **Vytvořit**       | Vytvoří adresář se zadaným názvem v aktuálním umístění. |

### Nahrát soubory

| Prvek             | Popis                                                                                         |
| ----------------- | --------------------------------------------------------------------------------------------- |
| Informace o cíli  | Modál zobrazuje text „Soubory budou nahrány do `<cesta>`", kde `<cesta>` je aktuální adresář. |
| **Výběr souborů** | Tlačítko pro výběr souborů z počítače uživatele.                                              |
| **Nahrát**        | Spustí nahrávání vybraných souborů.                                                           |
| **Přerušit**      | Přeruší probíhající nahrávání.                                                                |
| **Zavřít**        | Zavře modál.                                                                                  |

### Přejmenovat

| Prvek               | Popis                                 |
| ------------------- | ------------------------------------- |
| Pole pro nový název | Textové pole pro zadání nového názvu. |
| **Zrušit**          | Zavře modál bez přejmenování.         |
| **Přejmenovat**     | Uloží nový název.                     |

### Přesunout

| Prvek            | Popis                                                                              |
| ---------------- | ---------------------------------------------------------------------------------- |
| **Cíl**          | Zobrazuje aktuálně vybraný cílový adresář.                                         |
| **Změnit**       | Otevře dialog **Zvolte cílový adresář** pro výběr adresáře v adresářové struktuře. |
| **Označit toto** | Potvrdí výběr zobrazeného adresáře jako cíle přesunu.                              |
| **Zrušit**       | Zavře modál bez přesunutí.                                                         |
| **Přesunout**    | Přesune soubor nebo adresář do vybraného cíle.                                     |

### Kopírovat soubor

| Prvek               | Popis                                        |
| ------------------- | -------------------------------------------- |
| Pole pro nový název | Textové pole pro zadání názvu kopie souboru. |
| **Zrušit**          | Zavře modál bez kopírování.                  |
| **Kopírovat**       | Vytvoří kopii souboru se zadaným názvem.     |

### Smazat

| Prvek            | Popis                                              |
| ---------------- | -------------------------------------------------- |
| Potvrzovací text | Zobrazí výzvu k potvrzení smazání vybrané položky. |
| **Zrušit**       | Zavře dialog bez smazání.                          |
| **Smazat**       | Trvale odstraní soubor nebo adresář.               |

### Editovat soubor

| Prvek        | Popis                                                          |
| ------------ | -------------------------------------------------------------- |
| Editor       | Textový editor zobrazující a umožňující úpravu obsahu souboru. |
| **Zavřít**   | Zavře modál bez uložení změn.                                  |
| **Editovat** | Uloží provedené úpravy.                                        |

______________________________________________________________________

## Oprávnění

Obrazovka **Soubory** je dostupná pouze uživatelům s oprávněním pro správu souborů. Uživatelům bez tohoto oprávnění se položka **Soubory** v hlavním menu nezobrazí.

______________________________________________________________________

## Pozor na

Smazání je nevratné

Po potvrzení v dialogu Smazat je soubor nebo adresář trvale odstraněn. Operaci nelze vrátit zpět.

______________________________________________________________________

## Související stránky

- [Certifikát](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/certifikat/index.md)
- [Obrazovka Šablony e-mailů](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/reference/obrazovka-sablony-emailu/index.md)
