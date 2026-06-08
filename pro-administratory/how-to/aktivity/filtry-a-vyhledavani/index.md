# Jak filtrovat a přizpůsobit zobrazení aktivit

V administraci Competent si můžete v obrazovce aktivit přizpůsobit, které typy a podtypy položek se zobrazují a jakým způsobem jsou uspořádány. Panel zobrazení umožňuje skrýt nepotřebné typy položek, přepnout mezi stromovým a plochým pohledem na obsah složky a kdykoli se jedním kliknutím vrátit na výchozí nastavení.

## Než začnete

- Jste přihlášeni jako administrátor (nebo máte roli s oprávněním spravovat aktivity).
- V horním hlavním menu je otevřena sekce **Aktivity**.

## Postup

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

Pod přepínačem viditelnosti aktivit je **rozbalitelný seznam podtypů** (například Elearning, Školení). Konkrétní podtypy závisejí na konfiguraci vašeho systému. Každý podtyp má vlastní tlačítka **Skrýt** / **Zobrazit** – skrytí podtypu odebere ze seznamu aktivit všechny aktivity daného podtypu.

Výchozí stav: všechny podtypy jsou zobrazené.

### 5. Resetujte zobrazení na výchozí nastavení

Pokud se aktuální nastavení liší od výchozího stavu, zobrazí se v panelu zobrazení **ikona ×** s tooltipem **Resetovat zobrazení**. Kliknutím na ni vrátíte všechny volby na výchozí hodnoty (viz tabulka výše – hodnocení zůstane po resetu skryté, protože skrytý je jeho výchozí stav).

Pokud je již nastavení ve výchozím stavu, ikona × se nezobrazí.

## Ověření

Po provedených změnách zkontrolujte seznam aktivit:

- Typy položek označené jako **Zobrazit** se v seznamu objevují.
- Typy označené jako **Skrýt** v seznamu chybí.
- Při plochém zobrazení vidíte položky ze všech podsložek a složky se v seznamu nezobrazují.
- Pokud je nastavení výchozí, ikona × v panelu zobrazení chybí.

## Pozor na

- **Filtr zobrazení, textové vyhledávání a štítky se kombinují:** položka se zobrazí pouze tehdy, pokud prošla všemi aktivními filtry současně. Skrytý typ se nezobrazí ani při zadání přesného názvu do vyhledávání.
- **Pořadí položek v panelu zobrazení** se může lišit dle konfigurace systému – spoléhejte na popisky, ne na pozici v panelu.

## Související stránky

- [Textové vyhledávání a filtr štítků](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/how-to/aktivity/vyhledavani-v-aktivitach/index.md)
- [Obrazovka Aktivity](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/reference/obrazovka-aktivity/index.md)
