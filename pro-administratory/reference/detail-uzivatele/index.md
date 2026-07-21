# Detail uživatele

Obrazovka **Detail uživatele** zobrazuje veškeré informace o konkrétním uživateli: jeho aktivity a hodnocení, profilová data, členství ve skupinách, kvalifikace a vazby s ostatními uživateli. Obrazovka používá stejný UX vzor jako [Detail aktivity](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/reference/detail-aktivity/index.md) – hlavička s akcemi, lišta tabů a obsahový panel. Tato stránka popisuje pouze prvky specifické pro Detail uživatele; společný rámec viz [Detail aktivity](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/reference/detail-aktivity/index.md).

Do Detailu uživatele se dostanete z přehledu **Lidé → pohled Uživatelé** kliknutím na řádek uživatele v tabulce.

______________________________________________________________________

## Hlavička detailu

Záhlaví obrazovky zobrazuje **jméno uživatele**. Pokud uživatel nemá vyplněné jméno, zobrazí se místo něj jeho e-mail. Vedle jména je dostupná informační ikona; po najetí myší se v tooltipu zobrazí e-mail a přihlašovací jméno uživatele.

Pod jménem je umístěna lišta tabů. V pravé části záhlaví se nacházejí tyto akce:

| Akce                    | Popis                                                                                |
| ----------------------- | ------------------------------------------------------------------------------------ |
| **Export do XLS**       | Exportuje obsah aktuálně zobrazeného tabu do souboru Excel.                          |
| **Hledání**             | Filtruje záznamy v zobrazeném seznamu.                                               |
| **Nastavení uživatele** | Otevře panel pro přidělení globálních rolí uživateli a zobrazení jeho historie akcí. |
| **Obnovit data**        | Znovu načte data ze serveru.                                                         |

Nastavení uživatele není tab

Přidělení globálních rolí a zobrazení historie akcí je dostupné přes akci **nastavení uživatele** v záhlaví obrazovky – nikoli jako samostatný tab v liště.

______________________________________________________________________

## Taby: přehled

Detail uživatele obsahuje šest tabů:

| Tab             | Obsah                                                                      |
| --------------- | -------------------------------------------------------------------------- |
| **Aktivity**    | Přehled aktivit přiřazených uživateli a jejich stav splněnosti.            |
| **Hodnocení**   | Přehled hodnocení přiřazených uživateli.                                   |
| **Popis**       | Profilová data uživatele s možností inline editace.                        |
| **Skupiny**     | Seznam uživatelských skupin, jichž je uživatel členem, a jeho role v nich. |
| **Kvalifikace** | Výpis kvalifikací uživatele rozdělený podle stavu.                         |
| **Vazby**       | Vztahy uživatele s dalšími uživateli (podřízení a nadřízení).              |

______________________________________________________________________

## Tab Aktivity

Tab **Aktivity** zobrazuje přehled aktivit přiřazených uživateli.

### Filtry a přepínače

Nad seznamem jsou dostupné rychlé filtry pro omezení zobrazených záznamů:

| Filtr           | Popis                                         |
| --------------- | --------------------------------------------- |
| **Všechny**     | Zobrazí všechna přiřazení bez ohledu na stav. |
| **Probíhající** | Přiřazení, která jsou aktuálně aktivní.       |
| **Budoucí**     | Přiřazení naplánovaná do budoucna.            |
| **K řešení**    | Přiřazení vyžadující pozornost.               |
| **Ukončené**    | Dokončená nebo zrušená přiřazení.             |

Přepínač **Hodnocený / Hodnotitel** umožňuje přepnout pohled mezi aktivitami, kde je uživatel v roli hodnoceného, a aktivitami, kde vystupuje jako hodnotitel.

### Zobrazení a řazení

Seznam podporuje hierarchické zobrazení zohledňující sady a řazení podle názvu nebo data.

### Informace o přiřazení

Každá položka seznamu obsahuje název aktivity, jméno hodnotitele, data přiřazení a **stav splněnosti**. Stav splněnosti nabývá hodnot:

- **Splněno**
- **Nesplněno**
- **Prozatím nesplněno**

### Akce na řádku

| Akce                   | Popis                                                                                                                                                                                    |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Prerekvizity**       | Zobrazí prerekvizity aktivity.                                                                                                                                                           |
| **Historie přístupů**  | Zobrazí záznam přístupů uživatele k aktivitě.                                                                                                                                            |
| **Hodnotit**           | Otevře pokusy uživatele pro danou aktivitu (viz [Pokusy uživatele](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/pokusy-uzivatele/index.md)). |
| **Stav přiřazení**     | Umožní zobrazit nebo ručně změnit stav přiřazení. Ruční změna se nedoporučuje – stav řídí systém.                                                                                        |
| **Editovat přiřazení** | Umožní upravit parametry přiřazení.                                                                                                                                                      |
| **Smazat přiřazení**   | Odebere přiřazení aktivity uživateli.                                                                                                                                                    |

______________________________________________________________________

## Tab Hodnocení

Tab **Hodnocení** je vizuálně a ovládáním shodný s tabem [Aktivity](#tab-aktivity). Místo aktivit zobrazuje hodnocení přiřazená uživateli. Podrobnosti o modelu hodnocení viz [Hodnocení](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/hodnoceni/index.md).

______________________________________________________________________

## Tab Popis

Tab **Popis** zobrazuje profilová data uživatele. Jednotlivá pole lze upravovat inline – kliknutím na ikonu tužky vedle pole nebo skupiny polí.

Pole dostupná v tabu Popis:

| Pole                   | Popis                                              |
| ---------------------- | -------------------------------------------------- |
| **E-mail**             | E-mailová adresa uživatele.                        |
| **Přihlašovací jméno** | Jméno použité pro přihlášení do systému.           |
| **Heslo**              | Umožňuje nastavit nové heslo uživatele.            |
| **Vytvořen**           | Datum vytvoření záznamu uživatele (jen pro čtení). |
| **Titul před jménem**  | Akademický nebo jiný titul uváděný před jménem.    |
| **Titul za jménem**    | Akademický nebo jiný titul uváděný za jménem.      |
| **Datum narození**     | Datum narození uživatele.                          |
| **Jazyk**              | Preferovaný jazyk rozhraní pro daného uživatele.   |

Jméno uživatele se mění přes editační ikonu přímo v záhlaví obrazovky, nikoli v tomto tabu. Přehled všech parametrů uživatele viz [Uživatel: model a principy](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/uzivatel/index.md).

______________________________________________________________________

## Tab Skupiny

Tab **Skupiny** zobrazuje seznam uživatelských skupin, jichž je uživatel členem, a jeho role v nich.

### Přepínač zobrazení

| Přepínač    | Popis                                   |
| ----------- | --------------------------------------- |
| **Seznam**  | Zobrazí skupiny jako jednoduchý seznam. |
| **Skupiny** | Zobrazí skupiny ve stromové struktuře.  |

Filtr umožňuje omezit zobrazení na účastnické skupiny nebo skupiny s lokální rolí.

### Editace skupin a rolí

Přiřazení skupin a rolí se provádí přes vedlejší panel. Po výběru skupin a nastavení rolí se přiřazení potvrdí tlačítkem **Přiřadit role vybraným skupinám**. Výchozí role při přiřazení je **Účastník**. Podrobnosti o rolích viz [Role a oprávnění](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/role/index.md) a [Uživatelská skupina: model a principy](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/skupina/index.md).

______________________________________________________________________

## Tab Kvalifikace

Tab **Kvalifikace** zobrazuje výpis kvalifikací uživatele rozdělený podle stavu. Novou kvalifikaci lze uživateli přiřadit; přiřazená kvalifikace má výchozí stav **Přiřazená**.

Dostupné stavy uživatelské kvalifikace:

- **Přiřazená**
- **Splněná**
- **Nesplněná**
- **Zrušená**
- **Expirovaná**

Podrobnosti o modelu kvalifikace, jejích stavech a platnosti viz [Kvalifikace: model a principy](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/kvalifikace/index.md). Popis obrazovky Kvalifikace a jejího detailu viz [Obrazovka Kvalifikace](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/reference/obrazovka-kvalifikace/index.md) a [Detail kvalifikace](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/reference/detail-kvalifikace/index.md).

______________________________________________________________________

## Tab Vazby

Tab **Vazby** zobrazuje vztahy uživatele s dalšími uživateli na základě členství a rolí ve skupinách. Záznamy jsou rozděleny do dvou pohledů:

| Pohled        | Popis                                                          |
| ------------- | -------------------------------------------------------------- |
| **Podřízení** | Uživatelé, kteří jsou vůči tomuto uživateli v podřízené vazbě. |
| **Nadřízení** | Uživatelé, jimž je tento uživatel podřízen.                    |

K dispozici je checkbox **Zobrazit vazby ze skupin**. Přiřazení nové vazby se provádí přes vedlejší panel tlačítkem **Přiřadit role vybraným uživatelům**.

______________________________________________________________________

## Profil (vlastní účet)

Obrazovka **Profil** zobrazuje vlastní účet přihlášeného uživatele. Otevře se kliknutím na položku **Profil** v menu avataru, na adrese `/portal/profile`. Jde o stejnou obrazovku jako Detail uživatele, zobrazenou nad vlastními daty přihlášeného uživatele.

Pole na záložce **Parametry** (odpovídá záložce [Popis](#tab-popis) výše) jsou věcně totožná s poli popsanými v tomto dokumentu – podrobný popis jednotlivých polí se zde neopakuje.

Profil se od administrátorského zobrazení Detailu uživatele liší v několika ohledech:

- Editační režim je na Profilu vždy zapnutý – uživatel může své parametry upravovat přímo, bez nutnosti editaci nejprve aktivovat.
- Záložka **Skupiny** je needitovatelná – zobrazuje pouze seznam skupin s filtrem **Zobrazit** (Pouze účastníky / Pouze lokální role / Vše), bez možnosti přiřazení skupin nebo změny rolí.
- Na Profilu je dostupná změna vlastního hesla. K dispozici jsou pole **Aktuální**, **Nové**, **Síla hesla** a **Požadavky na heslo** (systém zde zobrazí požadavky, které nové heslo musí splňovat), potvrzení provádí tlačítka **Zrušit** a **Uložit nové heslo**.

______________________________________________________________________

## Pozor na

Stav přiřazení aktivity

Stav přiřazení aktivity v tabu Aktivity spravuje systém automaticky. Ruční změna stavu je sice technicky dostupná, nedoporučuje se však – může vést k nekonzistentnímu stavu záznamu.

______________________________________________________________________

## Související stránky

- [Detail aktivity](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/reference/detail-aktivity/index.md)
- [Detail skupiny](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/reference/detail-skupiny/index.md)
- [Obrazovka Lidé](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/reference/obrazovka-lide/index.md)
- [Uživatel: model a principy](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/uzivatel/index.md)
- [Pokusy uživatele](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/pokusy-uzivatele/index.md)
- [Přiřazení aktivity uživateli](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/prirazeni-aktivity-uzivateli-pristup/index.md)
- [Stavy aktivity](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/stavy-aktivity/index.md)
- [Hodnocení](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/hodnoceni/index.md)
- [Uživatelská skupina: model a principy](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/skupina/index.md)
- [Role a oprávnění](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/role/index.md)
- [Kvalifikace: model a principy](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/kvalifikace/index.md)
- [Obrazovka Kvalifikace](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/reference/obrazovka-kvalifikace/index.md)
- [Detail kvalifikace](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/reference/detail-kvalifikace/index.md)
- [Vytvoření uživatele](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/how-to/lide/vytvoreni-uzivatele/index.md)
- [Import uživatelů](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/how-to/lide/import-uzivatelu/index.md)
