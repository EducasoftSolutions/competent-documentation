# Detail hodnocení

Obrazovka **Detail hodnocení** zobrazuje vlastnosti konkrétního hodnocení a seznam uživatelů, jimž bylo hodnocení přiřazeno. Rozložení obrazovky a základní ovládání jsou totožné s [Detailem aktivity](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/reference/detail-aktivity/index.md) – tato stránka popisuje pouze prvky specifické pro hodnocení.

______________________________________________________________________

## Taby: přehled

Detail hodnocení obsahuje dva taby:

| Tab           | Popis                                                                                  |
| ------------- | -------------------------------------------------------------------------------------- |
| **Uživatelé** | Seznam uživatelů přiřazených k hodnocení; hlavní rozhraní pro správu těchto přiřazení. |
| **Detaily**   | Formulář s vlastnostmi hodnocení – včetně parametrů specifických pro hodnocení.        |

Společné prvky hlavičky (stavová lišta, přepínání tabů) jsou popsány v [Detailu aktivity](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/reference/detail-aktivity/index.md).

______________________________________________________________________

## Tab Uživatelé

Tab Uživatelé zobrazuje seznam uživatelů přiřazených k hodnocení. Slouží zároveň jako hlavní rozhraní pro správu těchto přiřazení.

### Sloupec Splněnost

Sloupec **Splněnost** zobrazuje celkový výsledek přiřazení daného uživatele. Možné hodnoty:

| Hodnota                | Popis                                             |
| ---------------------- | ------------------------------------------------- |
| **Nesplněno**          | Uživatel hodnocení dosud nesplnil.                |
| **Splněno**            | Hodnocení bylo úspěšně vyhodnoceno jako splněné.  |
| **Prozatím nesplněno** | Hodnocení ještě probíhá nebo čeká na vyhodnocení. |

### Nástroje pro práci se seznamem

Nad seznamem jsou k dispozici tyto nástroje:

- **Znovunačtení dat** – obnoví seznam uživatelských přiřazení ze serveru.
- **Režim hromadných úprav** – umožní vybrat více přiřazení najednou a provést hromadnou operaci.
- **Export do XLS** – stáhne aktuálně zobrazený seznam přiřazení.
- **Přiřazení nových uživatelů** – otevře panel pro přiřazení dalších uživatelů k hodnocení.

### Akce na řádku uživatelského přiřazení

U každého uživatele v seznamu jsou dostupné tyto operace:

- **Pokusy uživatele** – zobrazení pokusů uživatele k tomuto hodnocení (viz [Pokusy uživatele](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/pokusy-uzivatele/index.md)).
- **Historické přístupy** – záznamy o předchozích přiřazeních.
- **Stav přístupu** – zobrazení aktuálního stavu přiřazení (viz [Přiřazení aktivity uživateli: přístup](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/prirazeni-aktivity-uzivateli-pristup/index.md)).
- **Úprava přiřazení** – editace parametrů přiřazení.
- **Zrušení přístupu** – odebere přiřazení uživatele k hodnocení.

______________________________________________________________________

## Tab Detaily

Tab Detaily obsahuje formulář s vlastnostmi hodnocení. Obecná pole (Název, Specifické ID, Externí ID) jsou stejná jako v [Detailu aktivity](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/reference/detail-aktivity/index.md). Níže jsou popsány parametry specifické pro hodnocení nebo parametry s odlišným chováním.

### Typ vyhodnocení

Pole **Typ vyhodnocení** určuje způsob, jakým hodnotitel vyhodnotí pokus přiřazeného uživatele. U hodnocení jsou dostupné právě dva typy:

| Typ          | Popis                                                                                                                             |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| **Textové**  | Hodnotitel zvolí, zda uživatel splnil nebo nesplnil, a připojí textové zdůvodnění.                                                |
| **Formulář** | Hodnotitel zvolí splnil/nesplnil a poté vyplní strukturovaný formulář. Strukturu formuláře určuje JSON přiřazený v tomto detailu. |

### Více aktivních přístupů

Parametr **Více aktivních přístupů** – u hodnocení je nastaven na Ano. Znamená to, že stejné hodnocení lze přiřadit témuž uživateli vícekrát, pokud se přiřazení liší hodnotitelem. Unikátní je trojice uživatel – hodnocení – hodnotitel. Podrobné vysvětlení principu viz [Hodnocení: koncept](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/hodnoceni/index.md).

### Opakování

Pole **Opakování** předvyplní periodické nastavení přiřazení: po přiřazení uživatele k hodnocení se zde nastavené hodnoty předvyplní do periodického nastavení. Podrobný popis rozhraní viz [Periodické nastavení](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/reference/periodicke-nastaveni/index.md).

### Správa verzí

Sekce **Správa verzí** zobrazuje přehled verzí hodnocení. Verze umožňují naplánovat změnu nastavení hodnocení na konkrétní okamžik.

### Notifikace

Sekce **Notifikace** slouží ke konfiguraci notifikací specifických pro toto hodnocení. Jak notifikace fungují, popisuje [E-mailové notifikace](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/emailove-notifikace/index.md). Přehled dostupných notifikačních událostí pro hodnocení viz [Přehled notifikačních událostí](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/reference/prehled-notifikacnich-udalosti/index.md).

### Další pole

| Pole                      | Popis                                                                      |
| ------------------------- | -------------------------------------------------------------------------- |
| **Popis**                 | Delší slovní popis hodnocení.                                              |
| **Spuštění i po splnění** | Pokud je zapnuto, hodnocení zůstává otevřené i po datu konce přístupu.     |
| **Počet pokusů**          | Kolik hodnotitelských zápisů lze vložit k jednomu uživatelskému hodnocení. |
| **Kapacita**              | Maximální počet uživatelů přiřazených k hodnocení.                         |
| **Skrýt výsledky**        | Skryje uživateli konkrétní dosažený výsledek.                              |
| **Vytvořeno**             | Datum vytvoření, vyplněno automaticky.                                     |

______________________________________________________________________

## Pozor na

Hodnotitel v administraci

Detail hodnocení nezobrazuje samostatnou frontu úkolů hodnotitele. Hodnotitel pokusy vyhodnocuje ve svém rozhraní. Informace o stavu vyhodnocení jsou dostupné přes akce na řádku uživatele v tabu Uživatelé.

______________________________________________________________________

## Související stránky

- [Detail aktivity](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/reference/detail-aktivity/index.md)
- [Obrazovka Hodnocení](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/reference/obrazovka-hodnoceni/index.md)
- [Hodnocení: koncept](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/hodnoceni/index.md)
- [Periodické nastavení](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/reference/periodicke-nastaveni/index.md)
- [E-mailové notifikace](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/emailove-notifikace/index.md)
- [Přehled notifikačních událostí](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/reference/prehled-notifikacnich-udalosti/index.md)
- [Přiřazení aktivity uživateli: přístup](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/prirazeni-aktivity-uzivateli-pristup/index.md)
- [Pokusy uživatele](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/pokusy-uzivatele/index.md)
