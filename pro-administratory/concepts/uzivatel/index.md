# Uživatel: model a životní cyklus

Uživatel je základní evidenční objekt systému Competent – každá osoba zavedená do systému existuje jako objekt uživatele s vlastními parametry, rolemi a přístupy k aktivitám. Tato stránka vysvětluje, co uživatelský objekt obsahuje, jakými stavy účet prochází a jak uživatel souvisí s dalšími částmi systému. Je určena administrátorům, kteří chtějí pochopit model před tím, než začnou uživatele spravovat nebo konfigurovat jejich přístupy.

______________________________________________________________________

## Co je uživatel

Uživatelem rozumíme každou osobu zavedenou do systému Competent: správce, hodnotitele, účastníky kurzů i osoby evidované v systému bez aktivního přístupu k rozhraní. Obrazovka, kde spravujete uživatele, se jmenuje **Lidé**.

V technickém smyslu lze rozlišit dvě roviny:

- **Uživatel** – fyzická osoba, za níž záznam stojí.
- **Objekt uživatele** – datový záznam v systému s parametry, rolemi a vazbami.

Toto rozlišení je užitečné zejména při uvažování o tom, co se děje při deaktivaci účtu nebo při automatickém přiřazování aktivit – akce vždy míří na objekt, nikoliv přímo na osobu.

______________________________________________________________________

## Parametry účtu

Každý uživatel má sadu parametrů. Níže jsou klíčové z nich:

| Parametr               | Popis                                                                                 |
| ---------------------- | ------------------------------------------------------------------------------------- |
| **Jméno a Příjmení**   | Identifikace osoby v systému                                                          |
| **E-mail**             | Musí být unikátní v celém systému; používá se pro notifikace                          |
| **Přihlašovací jméno** | Unikátní identifikátor pro přihlášení                                                 |
| **Heslo**              | Uloženo v zašifrované podobě                                                          |
| **Jazyk**              | Jazyk rozhraní systému pro daného uživatele; nemá vliv na jazyk obsahu kurzů          |
| **Subtyp**             | Určuje sadu parametrů uživatele; nastavuje se při vytvoření a nelze ho později změnit |

Uživatelské subtypy umožňují přidat vlastní parametry; jejich správa je v **Nastavení**. Detailní přehled všech parametrů najdete na stránce [Detail uživatele](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/reference/detail-uzivatele/index.md).

______________________________________________________________________

## Stav účtu

Uživatelský účet má právě dva možné stavy:

- **Aktivní** – uživatel se může přihlásit a pracovat v systému podle svých oprávnění.
- **Deaktivovaný** – přihlášení není možné; uživatelský záznam zůstává v systému zachován včetně veškeré historie.

Jiné stavy účtu neexistují. Deaktivaci nastavuje přepínač **Účet deaktivován** v zakládacím nebo editačním modálu uživatele; záznam se z databáze nemaže.

______________________________________________________________________

## Životní cyklus uživatele

Uživatel vzniká jedním ze dvou způsobů:

- **Ručním založením** – administrátor vytvoří záznam přímo v obrazovce **Lidé** ([Jak vytvořit nového uživatele](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/how-to/lide/vytvoreni-uzivatele/index.md)).
- **Importem** – hromadné zavedení uživatelů ze souboru xlsx ([Jak importovat uživatele](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/how-to/lide/import-uzivatelu/index.md)).

Po celou dobu existence uživatelského záznamu systém eviduje **historii akcí**: veškeré změny parametrů i přiřazení jsou zaznamenány a dostupné v detailu uživatele.

Deaktivace probíhá nastavením stavu **Deaktivovaný** (přepínač Účet deaktivován). Záznam se z databáze nemaže – historická data a přístupy k aktivitám zůstávají zachovány.

```
graph LR
    A["Vznik\n(ruční / import)"]
    B["Aktivní"]
    C["Deaktivovaný"]

    A --> B
    B --> C
    C --> B
```

______________________________________________________________________

## Role a oprávnění

Uživatel může mít oprávnění přidělena dvěma způsoby:

- **Globální role** – přiřazeny přímo uživateli a platí v celém systému.
- **Objektové role** – vážou se ke konkrétnímu objektu (aktivitě, skupině apod.) a platí jen pro tento objekt.

Role lze přidělit uživateli přímo nebo prostřednictvím jeho členství v uživatelské skupině. Detailní popis modelu oprávnění najdete na stránce [Role a oprávnění](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/role/index.md).

______________________________________________________________________

## Skupiny

Uživatel může být členem jedné nebo více **uživatelských skupin**. Skupiny slouží ke klasifikaci uživatelů a umožňují hromadné přiřazování oprávnění nebo aktivit. Podrobnosti najdete na stránce [Uživatelská skupina](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/skupina/index.md).

______________________________________________________________________

## Přístupy k aktivitám

Vztah uživatele k aktivitám není uložen přímo na uživateli – pro každou kombinaci uživatel a aktivita vzniká samostatný objekt zvaný **přístup**. Přístup popisuje, od kdy a do kdy má uživatel aktivitu k dispozici, v jakém stavu se plnění nachází a jaké pokusy proběhly. Podrobnosti najdete na stránce [Přiřazení aktivity uživateli (přístup)](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/prirazeni-aktivity-uzivateli-pristup/index.md).

______________________________________________________________________

## Pozor na

Super administrátor

Systém Competent nabízí příznak **Super administrátor**, který uděluje přihlášenému uživateli plná práva bez ohledu na přiřazené role. Jeho nastavení se nedoporučuje – použijte raději cíleně přidělené role. Podrobnosti o rolích najdete na stránce [Role a oprávnění](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/role/index.md).

______________________________________________________________________

## Související stránky

- [Jak vytvořit nového uživatele](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/how-to/lide/vytvoreni-uzivatele/index.md)
- [Jak importovat uživatele](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/how-to/lide/import-uzivatelu/index.md)
- [Jak přiřadit roli uživateli](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/how-to/lide/prirazeni-role-uzivateli/index.md)
- [Role a oprávnění](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/role/index.md)
- [Uživatelská skupina](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/skupina/index.md)
- [Přiřazení aktivity uživateli (přístup)](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/prirazeni-aktivity-uzivateli-pristup/index.md)
- [Přiřazení dle skupin](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/prirazeni-dle-skupin/index.md)
