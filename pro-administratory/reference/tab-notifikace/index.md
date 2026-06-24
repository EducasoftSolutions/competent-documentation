# Záložka Notifikace

Záložka **Notifikace** v sekci **Nastavení** zobrazuje seznam globálních notifikačních pravidel platných pro celý systém. Tato stránka popisuje prvky a pole záložky. Výklad toho, jak notifikace v Competentu fungují, najdete v [E-mailových notifikacích](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/emailove-notifikace/index.md).

Záložka se zobrazí jen uživatelům s oprávněním pro správu notifikací.

Globální vs. per-aktivitní notifikace

Záložka **Notifikace** spravuje výhradně globální notifikace – pravidla, která platí pro celý systém bez ohledu na konkrétní aktivitu. Nastavení notifikací pro jednotlivou aktivitu se provádí v [detailu aktivity](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/reference/detail-aktivity/index.md).

______________________________________________________________________

## Seznam notifikací

Záložka zobrazuje plochý seznam notifikačních pravidel (ne tabulku se záhlavím sloupců).

### Prázdný stav

Pokud dosud nebyla přiřazena žádná notifikace, zobrazí se text **„Zatím nebyly přiřazeny žádné notifikace"** a textové tlačítko **„Přiřazení nové notifikace"**.

### Formát řádku

Každá notifikace tvoří jeden řádek se třemi neoznačenými údaji:

1. **Název události** (tučně) – typ události, na který notifikace reaguje.
1. **Typ šablony** – název skupiny e-mailových šablon přiřazené k pravidlu.
1. **Příjemci** ve zkráceném tvaru – zkratky `U` / `E` / `C` / `R` s tooltipem: U – uživatel, E – hodnotitel, C – zadavatel, R – příjemce notifikací skupiny.

Je-li notifikace deaktivovaná, zobrazí se u řádku ikona **❌**.

### Akce v seznamu

| Prvek                          | Funkce                                                                       |
| ------------------------------ | ---------------------------------------------------------------------------- |
| Kliknutí na řádek              | Otevře modál pro úpravu notifikace.                                          |
| Ikona křížku na řádku          | Vyvolá potvrzení smazání s tlačítky **Zrušit** a **Odebrat**.                |
| Tlačítko **+** (vpravo nahoře) | Otevře modál pro přidání nové notifikace. Zobrazuje se jako ikona bez textu. |

______________________________________________________________________

## Modál notifikace

Po kliknutí na řádek nebo na tlačítko **+** se otevře modál. Při vytváření nového pravidla má záhlaví **„Nová notifikace"**, při úpravě existujícího **„Notifikace"**.

### Pole modálu

| Pole                                              | Typ                                                             | Popis                                                                                                                                                                                                                                                                                            |
| ------------------------------------------------- | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Událost                                           | Rozbalovací seznam s vyhledáváním                               | Výběr události, která notifikaci spustí. Přehled dostupných událostí najdete v [Přehledu notifikačních událostí](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/reference/prehled-notifikacnich-udalosti/index.md).                                             |
| Šablona                                           | Rozbalovací seznam s vyhledáváním                               | Výběr skupiny e-mailových šablon. Správa šablon je dostupná na [obrazovce Šablony Emailů](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/reference/obrazovka-sablony-emailu/index.md).                                                                          |
| Notifikace se odesílá uživateli                   | Zaškrtávací pole                                                | Označuje uživatele jako příjemce notifikace.                                                                                                                                                                                                                                                     |
| Notifikace se odesílá hodnotiteli                 | Zaškrtávací pole                                                | Označuje hodnotitele jako příjemce notifikace.                                                                                                                                                                                                                                                   |
| Notifikace se odesílá zadavateli                  | Zaškrtávací pole                                                | Označuje zadavatele jako příjemce notifikace.                                                                                                                                                                                                                                                    |
| Notifikace se odesílá příjemci notifikací skupiny | Zaškrtávací pole                                                | Označuje příjemce notifikací skupiny jako příjemce notifikace.                                                                                                                                                                                                                                   |
| Typ notifikace                                    | Přepínač **Základní** / **Agregovaná**                          | U volby **Agregovaná** systém odesílá souhrnné e-maily v nastavené periodě místo jednotlivých zpráv. Podrobnosti o mechanismu agregace jsou v [E-mailových notifikacích](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/emailove-notifikace/index.md). |
| Deaktivována                                      | Zaškrtávací pole                                                | Dočasně vypne notifikaci; v seznamu se u ní zobrazí ikona ❌.                                                                                                                                                                                                                                    |
| Počet dní                                         | Textové pole                                                    | Zobrazuje se pouze u časových událostí (například „Počet dní před začátkem přístupu k aktivitě").                                                                                                                                                                                                |
| Specifické nastavení                              | Tlačítka **Inicializovat konfiguraci** / **Smazat konfiguraci** | Umožňuje inicializovat nebo smazat pokročilou konfiguraci pravidla. Jde o pokročilou funkci.                                                                                                                                                                                                     |

Některé typy událostí zpřístupní v modálu další volitelná pole, například **„Neaplikovat na podřízené přístupy sad"** nebo **„Poslat pozvánku do kalendáře"**.

### Tlačítka modálu

| Tlačítko | Dostupnost                   | Funkce                         |
| -------- | ---------------------------- | ------------------------------ |
| Vytvořit | Nová notifikace              | Uloží nově vytvořené pravidlo. |
| Uložit   | Úprava existující notifikace | Uloží provedené změny.         |
| Zrušit   | Vždy                         | Zavře modál bez uložení.       |

______________________________________________________________________

## Související stránky

- [E-mailové notifikace](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/emailove-notifikace/index.md) – jak notifikace v Competentu fungují, agregace, doručování
- [Přehled notifikačních událostí](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/reference/prehled-notifikacnich-udalosti/index.md) – katalog dostupných událostí
- [Obrazovka Šablony Emailů](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/reference/obrazovka-sablony-emailu/index.md) – správa e-mailových šablon
- [Přehled sekce Nastavení](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/reference/obrazovka-nastaveni/index.md)
- [Detail aktivity](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/reference/detail-aktivity/index.md) – nastavení notifikací pro konkrétní aktivitu
