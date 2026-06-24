# Obrazovka Lidé

Obrazovka **Lidé** je centrálním místem administrace pro správu uživatelů, skupin a rolí. Zobrazí se po kliknutí na položku **Lidé** v hlavním menu administrace. Obrazovka nabízí **přepínač pohledů** se třemi výchozími pohledy: **Uživatelé**, **Skupiny** a **Role**. Kliknutím na řádek v pohledu Uživatelé nebo Skupiny přejdete na příslušný detail.

______________________________________________________________________

## Přepínač pohledů

Přepínač pohledů v horní části obrazovky umožňuje přecházet mezi třemi výchozími pohledy:

| Pohled        | Obsah                                                                                |
| ------------- | ------------------------------------------------------------------------------------ |
| **Uživatelé** | Datová tabulka uživatelů s vyhledáváním, zakládáním a hromadnými operacemi.          |
| **Skupiny**   | Datová tabulka uživatelských skupin s vyhledáváním a zakládáním.                     |
| **Role**      | Doplňkový přehled uživatelů seřazených podle role (1. úroveň) a skupiny (2. úroveň). |

Další pohledy

Podle konfigurace systému se mohou v přepínači pohledů zobrazit i další pohledy (například Nadskupiny nebo Oddělení).

______________________________________________________________________

## Nástroje datové tabulky

Pohledy Uživatelé a Skupiny jsou datové tabulky. Nad tabulkou jsou k dispozici tyto nástroje:

| Nástroj                              | Popis                                                                                                                        |
| ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| **Znovunačtení dat ze serveru**      | Obnoví data v tabulce ze serveru (Obnovit data).                                                                             |
| **Import/Export**                    | Otevře modál pro import a export uživatelů, přístupů a vztahů.                                                               |
| **Nový uživatel** / **Nová skupina** | Otevře modál pro vytvoření nového záznamu; viz [Modál Nový uživatel](#modal-novy-uzivatel).                                  |
| **Vyhledávání**                      | Otevře filtrační pole pod záhlavími sloupců; viz [Vyhledávání](#vyhledavani).                                                |
| **Hromadné úpravy**                  | Aktivuje výběr více řádků pro hromadné operace; dostupné jen v pohledu Uživatelé. Viz [Hromadné operace](#hromadne-operace). |
| **Zobrazené sloupce**                | Umožní zobrazit nebo skrýt volitelné sloupce tabulky.                                                                        |
| **Řazení dat**                       | Nastaví řazení tabulky.                                                                                                      |
| **Možnosti sloupce**                 | Upřesní chování jednotlivých sloupců.                                                                                        |

______________________________________________________________________

## Sloupce seznamu uživatelů

Ve výchozím zobrazení pohledu Uživatelé jsou viditelné tyto sloupce:

| Sloupec                | Popis                                            |
| ---------------------- | ------------------------------------------------ |
| **Jméno**              | Křestní jméno uživatele.                         |
| **Příjmení**           | Příjmení uživatele.                              |
| **E-mail**             | E-mailová adresa uživatele.                      |
| **Skupiny**            | Uživatelské skupiny, jejichž je uživatel členem. |
| **Účastnické skupiny** | Skupiny, ve kterých má uživatel roli Účastník.   |

Pomocí nástroje **Zobrazené sloupce** lze doplnit další sloupce: **Vlastní ID, Externí ID, Nástup, Výstup, Jazyk, Deaktivován, Superadmin**.

Patička tabulky uvádí celkový počet záznamů (například „Celkem položek: 31").

______________________________________________________________________

## Pohled Uživatelé

### Modál Nový uživatel

Kliknutím na **Nový uživatel** v nástrojích tabulky se otevře modál pro vytvoření nového uživatele. Modál obsahuje tato pole a prvky:

| Pole / Prvek            | Popis                                                                                                                                                                                                  |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Subtyp**              | Výběr subtypu uživatele; výchozí hodnota je **Uživatel**. Dostupné subtypy: Uživatel, Eshop uživatel.                                                                                                  |
| **E-mail**              | Povinné. E-mailová adresa uživatele.                                                                                                                                                                   |
| **Přihlašovací jméno**  | Povinné. Unikátní přihlašovací jméno.                                                                                                                                                                  |
| **Heslo**               | Povinné. Heslo pro přístup do systému.                                                                                                                                                                 |
| **Jméno**               | Povinné. Křestní jméno uživatele.                                                                                                                                                                      |
| **Příjmení**            | Povinné. Příjmení uživatele.                                                                                                                                                                           |
| **Jazyk**               | Jazyk rozhraní pro tohoto uživatele.                                                                                                                                                                   |
| **Účet deaktivován**    | Přepínač. Je-li zapnut, uživatel nemůže přistupovat do systému; viz [Stav účtu uživatele](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/uzivatel/index.md). |
| **Uživatelské skupiny** | Multiselect. Přiřazení uživatele do jedné nebo více skupin při vytvoření.                                                                                                                              |
| **Zrušit / Vytvořit**   | Tlačítka pro zrušení nebo potvrzení vytvoření uživatele.                                                                                                                                               |

Podrobný postup viz [Vytvoření uživatele](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/how-to/lide/vytvoreni-uzivatele/index.md).

### Vyhledávání

Nástroj **Vyhledávání** otevře filtrační pole pod záhlavími sloupců. Výsledky tabulky se aktualizují okamžitě při změně hodnoty filtru.

### Hromadné operace

Po aktivaci nástroje **Hromadné úpravy** lze vybrat více uživatelů najednou a provést jednu z hromadných operací:

| Operace             | Popis                                                |
| ------------------- | ---------------------------------------------------- |
| **Poslat zprávu**   | Otevře modál Poslat e-mail s předvybranými příjemci. |
| **Odebrat vybrané** | Odebere vybrané uživatele; vyžaduje potvrzení.       |

Hromadné operace jsou dostupné pouze v pohledu **Uživatelé**.

______________________________________________________________________

## Pohled Skupiny

Pohled **Skupiny** zobrazuje datovou tabulku uživatelských skupin. Dostupné operace:

- **Nová skupina** – otevře zakládací modál pro vytvoření nové uživatelské skupiny.
- **Vyhledávání** – filtrační pole pod záhlavími sloupců, aktualizace výsledků okamžitá.
- **Smazání skupiny** – smaže skupinu po potvrzení konfirmačního dialogu.

Pohled Skupiny nemá hromadné operace. Kliknutím na řádek přejdete na [Detail skupiny](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/reference/detail-skupiny/index.md).

______________________________________________________________________

## Pohled Role

Pohled **Role** je doplňkový přehled. Zobrazuje uživatele seřazené podle přiřazené role (1. úroveň) a skupiny, ve které je role přiřazena (2. úroveň). Správu rolí a oprávnění popisuje [Přehled rolí a oprávnění](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/reference/prehled-roli-a-opravneni/index.md).

______________________________________________________________________

## Pozor na

Deaktivace vs. smazání uživatele

Přepínač **Účet deaktivován** v zakládacím modálu (i v editaci uživatele) deaktivuje přístup do systému, ale uživatelský záznam zůstává zachován. Smazání záznamu je nevratné. Model stavů uživatelského účtu popisuje [Uživatel: model a principy](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/uzivatel/index.md).

______________________________________________________________________

## Související stránky

- [Detail uživatele](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/reference/detail-uzivatele/index.md)
- [Detail skupiny](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/reference/detail-skupiny/index.md)
- [Přehled rolí a oprávnění](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/reference/prehled-roli-a-opravneni/index.md)
- [Uživatel: model a principy](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/uzivatel/index.md)
- [Uživatelská skupina: model a principy](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/skupina/index.md)
- [Role a oprávnění](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/role/index.md)
- [Vytvoření uživatele](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/how-to/lide/vytvoreni-uzivatele/index.md)
- [Import uživatelů](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/how-to/lide/import-uzivatelu/index.md)
