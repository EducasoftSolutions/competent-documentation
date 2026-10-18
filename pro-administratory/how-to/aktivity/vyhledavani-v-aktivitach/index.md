# Jak vyhledat aktivity v administraci

V administraci Competent můžete v obrazovce aktivit rychle nalézt konkrétní aktivitu nebo sadu pomocí tří nástrojů: **textového vyhledávání** (podle názvu), **filtru podle štítků** a **panelu zobrazení** (podle typu položek a způsobu uspořádání). Všechny nástroje fungují samostatně i v kombinaci a výsledky se aktualizují okamžitě.

______________________________________________________________________

## Než začnete

- Jste přihlášeni jako administrátor (nebo máte roli s oprávněním spravovat aktivity).
- V levém menu je otevřena sekce **AKTIVITY**.
- Máte otevřenu složku nebo sadu, ve které chcete vyhledávat.

______________________________________________________________________

## Postup

### Textové vyhledávání

1. Klikněte na **ikonu lupy** v záhlaví obrazovky aktivit. Zobrazí se **vyhledávací pole**.
1. Začněte psát hledaný výraz. Seznam aktivit se filtruje okamžitě s každým napsaným znakem – není třeba stiskat Enter. Vyhledávání porovnává zadaný text s **názvem aktivity** a je necitlivé na velikost písmen i na diakritiku.
1. Pokud chcete vyhledávání zrušit, klikněte na **× ikonu** vedle vyhledávacího pole. Filtr se vymaže a seznam se vrátí do původního stavu.

Rozsah vyhledávání

Vyhledávání prochází položky, které jsou **aktuálně zobrazeny** v seznamu aktivit.

______________________________________________________________________

### Filtr podle štítků

1. Klikněte na **Filtrovat štítky** v záhlaví obrazovky aktivit. Otevře se **boční panel** s přehledem všech dostupných štítků.
1. Klikněte na požadovaný štítek v bočním panelu. Štítek se přesune do vyhledávací oblasti v záhlaví a seznam aktivit se okamžitě vyfiltruje.
1. Chcete-li přidat další štítky, klikejte na ně v bočním panelu. Pokud je v filtru více štítků, zobrazí se aktivity odpovídající **alespoň jednomu** z nich (logika OR).
1. Chcete-li odebrat jeden štítek, klikněte na něj přímo v záhlaví (ve vyhledávací oblasti). Štítek se vrátí do bočního panelu a filtr se aktualizuje.
1. Chcete-li zrušit výběr všech štítků najednou, klikněte na **× ikonu** (ikonu koše) ve vyhledávací oblasti.

Hledání ve štítcích

Boční panel obsahuje vlastní vyhledávací pole pro filtrování seznamu štítků. Vyhledávání ve štítcích je citlivé na velikost písmen a diakritiku – zadávejte hledaný výraz přesně.

______________________________________________________________________

### Kombinace textu a štítků

Textové vyhledávání a filtr podle štítků lze použít současně. Výsledkem je průnik: zobrazí se pouze aktivity, které **zároveň** odpovídají zadanému textu a mají alespoň jeden ze zvolených štítků (logika AND pro text + OR pro štítky).

______________________________________________________________________

## Přizpůsobení zobrazení

V panelu zobrazení si nastavíte, které typy a podtypy položek se v seznamu zobrazují a zda se obsah složky ukazuje stromově nebo ploše. Nastavení se projeví okamžitě a kombinuje se s textovým vyhledáváním i s filtrem podle štítků.

### 1. Otevřete panel zobrazení

V záhlaví obrazovky aktivit klikněte na **ikonu oka** (vpravo u vyhledávacího pole). Otevře se **panel zobrazení** s volbami pro typ zobrazení a viditelnost jednotlivých typů položek.

### 2. Přepněte typ zobrazení

V horní části panelu zobrazení je **přepínač** se dvěma možnostmi:

| Volba                            | Popis                                                                                                                                                                                   |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Stromové zobrazení** (výchozí) | V seznamu aktivit jsou viditelné položky aktuální složky. K ostatním složkám se navigujete prostřednictvím stromu složek.                                                               |
| **Ploché zobrazení**             | V seznamu aktivit jsou viditelné všechny položky aktuální složky i jejích podsložek najednou, rekurzivně. Složky se v plochém zobrazení nezobrazují – jsou vidět pouze aktivity a sady. |

Kliknutím na požadovanou volbu se zobrazení přepne.

### 3. Skryjte nebo zobrazte typy položek

Panel zobrazení obsahuje přepínače viditelnosti pro tyto typy položek:

| Typ položky    | Výchozí stav                             |
| -------------- | ---------------------------------------- |
| Aktivity       | Zobrazené                                |
| Sady           | Zobrazené                                |
| Termínové sady | Zobrazené                                |
| Složky         | Zobrazené (pouze ve stromovém zobrazení) |
| Hodnocení      | Skryté                                   |

U každého typu jsou k dispozici tlačítka **Skrýt** a **Zobrazit**. Kliknutím na příslušné tlačítko okamžitě změníte viditelnost daného typu v seznamu aktivit.

Složky v plochém zobrazení

Pokud je aktivní **ploché zobrazení**, jsou složky skryty vždy – tlačítko **Zobrazit** pro složky v tomto režimu nemá efekt.

### 4. Skryjte nebo zobrazte podtypy aktivit

Pod přepínačem viditelnosti aktivit je **rozbalitelný seznam podtypů** (například Elearning, Školení). Konkrétní podtypy závisejí na konfiguraci Vašeho systému. Každý podtyp má vlastní tlačítka **Skrýt** / **Zobrazit** – skrytí podtypu odebere ze seznamu aktivit všechny aktivity daného podtypu.

Výchozí stav: všechny podtypy jsou zobrazené.

### 5. Resetujte zobrazení na výchozí nastavení

Pokud se aktuální nastavení liší od výchozího stavu, zobrazí se v panelu zobrazení **ikona ×** s tooltipem **Resetovat zobrazení**. Kliknutím na ni vrátíte všechny volby na výchozí hodnoty (viz tabulka výše – hodnocení zůstane po resetu skryté, protože skrytý je jeho výchozí stav).

Pokud je již nastavení ve výchozím stavu, ikona × se nezobrazí.

______________________________________________________________________

## Ověření

Po nastavení filtru ověřte výsledek:

- Seznam aktivit zobrazuje pouze položky odpovídající kritériím.
- Aktivní štítky jsou viditelné jako **štítky** ve vyhledávací oblasti v záhlaví.
- Pokud filtr nevrátí žádnou položku, zobrazí se zpráva „nebyly nalezeny žádné výsledky".
- Typy položek označené jako **Zobrazit** se v seznamu objevují, typy označené jako **Skrýt** v seznamu chybí.
- Při plochém zobrazení vidíte položky ze všech podsložek a složky se v seznamu nezobrazují.
- Pokud je nastavení zobrazení výchozí, ikona × v panelu zobrazení chybí.

______________________________________________________________________

## Pozor na

- **Štítky se přiřazují pouze aktivitám**, ne složkám ani sadám. Při filtrování podle štítků se složky zobrazí vždy bez ohledu na zvolené štítky.
- Vyhledávání prochází **pouze zobrazené položky** – nezohledňuje položky ve skrytých podsložkách.
- Textové vyhledávání porovnává pouze **název aktivity**; custom ID, popis ani jiné atributy se při vyhledávání nezohledňují.
- Vyhledávání ve štítcích v bočním panelu je **citlivé na velikost písmen a diakritiku** – toto chování se liší od hlavního vyhledávacího pole, které je na obojí necitlivé.
- **Panel zobrazení, textové vyhledávání a štítky se kombinují:** položka se zobrazí pouze tehdy, pokud prošla všemi aktivními filtry současně. Skrytý typ se nezobrazí ani při zadání přesného názvu do vyhledávání.
- **Pořadí položek v panelu zobrazení** se může lišit dle konfigurace systému – spoléhejte na popisky, ne na pozici v panelu.

______________________________________________________________________

## Související stránky

- [Obrazovka aktivit](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/reference/obrazovka-aktivity/index.md)
- [Přiřazení štítků k aktivitě](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/how-to/aktivity/prirazovani-stitku/index.md)
- [Vytvoření a správa štítků](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/how-to/nastaveni/stitky/index.md)
- [Štítek](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/stitky/index.md)
