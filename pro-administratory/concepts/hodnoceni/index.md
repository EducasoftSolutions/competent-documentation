# Hodnocení: model a principy

Hodnocení je objekt systému Competent, který sdílí datový model s aktivitou, ale slouží jinému účelu: uživatel hodnocení neplní, nýbrž je **hodnocen** jinou osobou. Tato stránka vysvětluje, co hodnocení je, jak se liší od běžné aktivity, kdo je hodnotitel a jak systém výsledek hodnocení eviduje. Je určena administrátorům, kteří chtějí pochopit princip před tím, než začnou hodnocení konfigurovat nebo přiřazovat.

______________________________________________________________________

## Co je hodnocení

Hodnocení je hlavní objekt Competentu, který sdílí datový model s aktivitou, ale má odlišné využití: na rozdíl od aktivity nevyžaduje od přiřazeného uživatele žádné vlastní plnění. Uživatel je hodnocen – například jako podklad pro klasifikaci podřízeného nadřízeným nebo jako zpětná vazba účastníků kurzu na instruktora.

Hodnocení se spravuje v samostatné sekci systému přístupné přes menu **Hodnocení**.

Výsledek konkrétního vyhodnocení se ukládá k **pokusu** uživatele; celkový výsledek se promítá do **přístupu** uživatele. Principy přístupu a pokusu jsou shodné s aktivitami – podrobnosti viz [Přiřazení aktivity uživateli: přístup](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/prirazeni-aktivity-uzivateli-pristup/index.md) a [Pokusy uživatele](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/pokusy-uzivatele/index.md).

______________________________________________________________________

## Hodnotitel

**Hodnotitel** je uživatel pověřený vyhodnocením pokusů přiřazených uživatelů. Hodnotitel není systémová role ani oprávnění – jde o přiřazení konkrétní osoby jako hodnotitele k danému přístupu nebo pokusu.

Jakmile uživatel odevzdá pokus k vyhodnocení, přístup přejde do stavu **V hodnocení** a čeká, dokud hodnotitel pokus nevyhodnotí. Přechody stavu přístupu jsou popsány na stránce [Přiřazení aktivity uživateli: přístup](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/prirazeni-aktivity-uzivateli-pristup/index.md).

______________________________________________________________________

## Více aktivních přístupů

Parametr **Více aktivních přístupů** je u hodnocení nastaven na hodnotu Ano. Znamená to, že stejné hodnocení lze přiřadit témuž uživateli vícekrát – za podmínky, že se liší hodnotitel. Unikátní je teprve trojice **uživatel – hodnocení – hodnotitel**.

Toto nastavení pokrývá scénáře, kdy více osob hodnotí téhož uživatele: každý hodnotitel pak má vlastní přístup ke stejnému hodnocení, aniž by si záznamy kolidovaly.

______________________________________________________________________

## Typ vyhodnocení

Způsob, jakým hodnotitel výsledek zapíše, určuje pole **Typ vyhodnocení**. U hodnocení jsou dostupné právě dva typy:

**Textové** – hodnotitel rozhodne, zda uživatel splnil nebo nesplnil, a připojí textové zdůvodnění.

**Formulář** – hodnotitel nejprve rozhodne o splnění a poté vyplní strukturovaný formulář. Strukturu formuláře určuje JSON přiřazený v detailu hodnocení.

Splněnost uživatele nabývá tří hodnot: **Nesplněno**, **Splněno** nebo **Prozatím nesplněno** (přístup je stále aktivní a výsledek dosud nebyl stanoven).

Typ vyhodnocení u aktivit

Aktivity obecně nabízejí pět typů vyhodnocení. U hodnocení jsou dostupné pouze dva – Textové a Formulář. Přehled všech typů najdete ve [Slovníku pojmů](https://educasoftsolutions.github.io/competent-documentation/slovnik/index.md) u hesla Typ vyhodnocení.

______________________________________________________________________

## Stavy, notifikace a oprávnění

**Stavy hodnocení jsou shodné se stavy aktivity.** Jejich přehled a popis přechodů najdete na stránce [Stavy aktivity](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/stavy-aktivity/index.md).

Hodnocení má **vlastní sadu notifikačních spouštěčů**, oddělenou od aktivit – změny hodnocení se tak nemíchají se změnami aktivit. Přehled spouštěčů a konfiguraci e-mailových notifikací popisují stránky [Přehled notifikačních událostí](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/reference/prehled-notifikacnich-udalosti/index.md) a [E-mailové notifikace](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/emailove-notifikace/index.md).

**Oprávnění pro přístup k hodnocení jsou stejná jako u aktivit.** Jejich přehled najdete na stránce [Přehled rolí a oprávnění](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/reference/prehled-roli-a-opravneni/index.md).

______________________________________________________________________

## Související stránky

- [Aktivita: model a životní cyklus](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/aktivita/index.md)
- [Přiřazení aktivity uživateli: přístup](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/prirazeni-aktivity-uzivateli-pristup/index.md)
- [Pokusy uživatele](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/pokusy-uzivatele/index.md)
- [Stavy aktivity](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/stavy-aktivity/index.md)
- [Podmínky přístupu](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/podminky-pristupu/index.md)
- [Periodické nastavení](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/periodicke-nastaveni/index.md)
- [E-mailové notifikace](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/emailove-notifikace/index.md)
- [Přehled notifikačních událostí](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/reference/prehled-notifikacnich-udalosti/index.md)
- [Přehled rolí a oprávnění](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/reference/prehled-roli-a-opravneni/index.md)
- [Obrazovka Hodnocení](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/reference/obrazovka-hodnoceni/index.md)
- [Detail hodnocení](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/reference/detail-hodnoceni/index.md)
