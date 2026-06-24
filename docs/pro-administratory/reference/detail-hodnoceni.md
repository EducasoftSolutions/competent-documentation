# Detail hodnocení

Obrazovka **Detail hodnocení** zobrazuje vlastnosti konkrétního hodnocení a seznam uživatelů, jimž bylo hodnocení přiřazeno. Rozložení obrazovky a základní ovládání jsou totožné s [Detailem aktivity](detail-aktivity.md) – tato stránka popisuje pouze prvky specifické pro hodnocení.

---

## Taby: přehled

Detail hodnocení obsahuje dva taby:

| Tab | Popis |
|---|---|
| **Uživatelé** | Seznam uživatelů přiřazených k hodnocení; hlavní rozhraní pro správu těchto přiřazení. |
| **Detaily** | Formulář s vlastnostmi hodnocení – včetně parametrů specifických pro hodnocení. |

Společné prvky hlavičky (stavová lišta, přepínání tabů) jsou popsány v [Detailu aktivity](detail-aktivity.md).

---

## Tab Uživatelé

Tab Uživatelé zobrazuje seznam uživatelů přiřazených k hodnocení. Slouží zároveň jako hlavní rozhraní pro správu těchto přiřazení.

### Sloupec Splněnost

Sloupec **Splněnost** zobrazuje celkový výsledek přiřazení daného uživatele. Možné hodnoty:

| Hodnota | Popis |
|---|---|
| **Nesplněno** | Uživatel hodnocení dosud nesplnil. |
| **Splněno** | Hodnocení bylo úspěšně vyhodnoceno jako splněné. |
| **Prozatím nesplněno** | Hodnocení ještě probíhá nebo čeká na vyhodnocení. |

### Nástroje pro práci se seznamem

Nad seznamem jsou k dispozici tyto nástroje:

- **Znovunačtení dat** – obnoví seznam uživatelských přiřazení ze serveru.
- **Režim hromadných úprav** – umožní vybrat více přiřazení najednou a provést hromadnou operaci.
- **Export do XLS** – stáhne aktuálně zobrazený seznam přiřazení.
- **Přiřazení nových uživatelů** – otevře panel pro přiřazení dalších uživatelů k hodnocení.

### Akce na řádku uživatelského přiřazení

U každého uživatele v seznamu jsou dostupné tyto operace:

- **Pokusy uživatele** – zobrazení pokusů uživatele k tomuto hodnocení (viz [Pokusy uživatele](../concepts/pokusy-uzivatele.md)).
- **Historické přístupy** – záznamy o předchozích přiřazeních.
- **Stav přístupu** – zobrazení aktuálního stavu přiřazení (viz [Přiřazení aktivity uživateli: přístup](../concepts/prirazeni-aktivity-uzivateli-pristup.md)).
- **Úprava přiřazení** – editace parametrů přiřazení.
- **Zrušení přístupu** – odebere přiřazení uživatele k hodnocení.

---

## Tab Detaily

Tab Detaily obsahuje formulář s vlastnostmi hodnocení. Obecná pole (Název, Specifické ID, Externí ID) jsou stejná jako v [Detailu aktivity](detail-aktivity.md). Níže jsou popsány parametry specifické pro hodnocení nebo parametry s odlišným chováním.

### Typ vyhodnocení

Pole **Typ vyhodnocení** určuje způsob, jakým hodnotitel vyhodnotí pokus přiřazeného uživatele. U hodnocení jsou dostupné právě dva typy:

| Typ | Popis |
|---|---|
| **Textové** | Hodnotitel zvolí, zda uživatel splnil nebo nesplnil, a připojí textové zdůvodnění. |
| **Formulář** | Hodnotitel zvolí splnil/nesplnil a poté vyplní strukturovaný formulář. Strukturu formuláře určuje JSON přiřazený v tomto detailu. |

### Více aktivních přístupů

Parametr **Více aktivních přístupů** – u hodnocení je nastaven na Ano. Znamená to, že stejné hodnocení lze přiřadit témuž uživateli vícekrát, pokud se přiřazení liší hodnotitelem. Unikátní je trojice uživatel – hodnocení – hodnotitel. Podrobné vysvětlení principu viz [Hodnocení: koncept](../concepts/hodnoceni.md).

### Opakování

Pole **Opakování** předvyplní periodické nastavení přiřazení: po přiřazení uživatele k hodnocení se zde nastavené hodnoty předvyplní do periodického nastavení. Podrobný popis rozhraní viz [Periodické nastavení](periodicke-nastaveni.md).

### Správa verzí

Sekce **Správa verzí** zobrazuje přehled verzí hodnocení. Verze umožňují naplánovat změnu nastavení hodnocení na konkrétní okamžik.

### Notifikace

Sekce **Notifikace** slouží ke konfiguraci notifikací specifických pro toto hodnocení. Jak notifikace fungují, popisuje [E-mailové notifikace](../concepts/emailove-notifikace.md). Přehled dostupných notifikačních událostí pro hodnocení viz [Přehled notifikačních událostí](prehled-notifikacnich-udalosti.md).

### Další pole

| Pole | Popis |
|---|---|
| **Popis** | Delší slovní popis hodnocení. |
| **Spuštění i po splnění** | Pokud je zapnuto, hodnocení zůstává otevřené i po datu konce přístupu. |
| **Počet pokusů** | Kolik hodnotitelských zápisů lze vložit k jednomu uživatelskému hodnocení. |
| **Kapacita** | Maximální počet uživatelů přiřazených k hodnocení. |
| **Skrýt výsledky** | Skryje uživateli konkrétní dosažený výsledek. |
| **Vytvořeno** | Datum vytvoření, vyplněno automaticky. |

---

## Pozor na

!!! warning "Hodnotitel v administraci"
    Detail hodnocení nezobrazuje samostatnou frontu úkolů hodnotitele. Hodnotitel pokusy vyhodnocuje ve svém rozhraní. Informace o stavu vyhodnocení jsou dostupné přes akce na řádku uživatele v tabu Uživatelé.

---

## Související stránky

- [Detail aktivity](detail-aktivity.md)
- [Obrazovka Hodnocení](obrazovka-hodnoceni.md)
- [Hodnocení: koncept](../concepts/hodnoceni.md)
- [Periodické nastavení](periodicke-nastaveni.md)
- [E-mailové notifikace](../concepts/emailove-notifikace.md)
- [Přehled notifikačních událostí](prehled-notifikacnich-udalosti.md)
- [Přiřazení aktivity uživateli: přístup](../concepts/prirazeni-aktivity-uzivateli-pristup.md)
- [Pokusy uživatele](../concepts/pokusy-uzivatele.md)
