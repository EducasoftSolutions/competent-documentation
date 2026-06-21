# Přiřazení aktivity uživateli: přístup

Když přiřadíte aktivitu uživateli, systém vytvoří objekt nazývaný **přístup** (plným názvem: přiřazení aktivity uživateli). Přístup popisuje, jak a kdy má uživatel aktivitu plnit a v jakém stavu se tento proces nachází. Tato stránka vysvětluje, co přístup obsahuje, jaké má stavy a jak se liší od pokusů uživatele. Je určena administrátorům, kteří přiřazují aktivity a sledují jejich plnění.

______________________________________________________________________

## Přístup a pokus: dvě různé věci

Systém Competent rozlišuje dva propojené záznamy, které se snadno zaměňují: **přístup** a **pokus**.

**Přístup** je trvalá vazba mezi uživatelem a aktivitou. Nese termíny, stav procesu a informaci o tom, zda uživatel aktivitu splnil. Na každou kombinaci uživatel–aktivita–přiřazení vznikne právě jeden přístup.

**Pokus** je záznam o jednom konkrétním spuštění nebo odevzdání obsahu aktivity. Pod jedním přístupem může vzniknout více pokusů – například když uživatel prochází online kurzem opakovaně nebo když hodnotitel zapíše výsledek fyzické zkoušky.

Přístup si průběžně udržuje odkaz na **nejlepší pokus** (pokus s nejlepším výsledkem) a na **právě probíhající pokus**. Celkový výsledek přístupu vychází z nejlepšího pokusu.

Podrobnosti o tom, jak jednotlivé pokusy vznikají, jak jsou hodnoceny a kde je v systému najdete na stránce [Pokusy uživatele](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/pokusy-uzivatele/index.md).

______________________________________________________________________

## Klíčové atributy přístupu

Každý přístup nese povinný **začátek přístupu** – datum, od kterého může uživatel aktivitu plnit. Vedle toho může přístup nést další volitelná data:

- **Konec přístupu** – datum, kdy přestane být aktivita uživateli přístupná.
- **Vyžadované datum splnění** – termín, do kdy musí mít uživatel aktivitu úspěšně splněnou; jeho uplynutím bez úspěšného pokusu přístup přechází do stavu Dokončeno s výsledkem nesplněno.
- **Platnost splnění** – pokud je nastavena, udává, do kdy platí úspěšné splnění; po jejím uplynutí přejde přístup do stavu Expirováno.
- **Počet zbývajících pokusů** – kolik dalších pokusů zbývá uživateli k dispozici v rámci tohoto přístupu.

______________________________________________________________________

## Stavy přístupu

Přístup má vlastní stav, nezávislý na stavu aktivity jako objektu. Systém rozlišuje celkem 12 hodnot stavu přístupu. Sedm z nich se používá v běžném provozu systému; zbývající pětice se vyskytuje jen ve specifických nebo pokročilých konfiguracích.

### Běžně používané stavy

| Stav             | Přístup je aktivní | Kdy nastane                                                                                            |
| ---------------- | ------------------ | ------------------------------------------------------------------------------------------------------ |
| **Registrovaný** | ano                | Uživatel byl přiřazen; datum začátku přístupu ještě nenastalo                                          |
| **Spuštěno**     | ano                | Nastalo datum začátku přístupu; uživatel může aktivitu plnit                                           |
| **V hodnocení**  | ano                | Uživatel odevzdal pokus k hodnocení; hodnotitel jej dosud nevyhodnotil (typicky u termínových aktivit) |
| **Nemá termín**  | ano                | Jen u termínové aktivity: uživatel byl přiřazen, ale dosud si nevybral konkrétní termín                |
| **Dokončeno**    | ne                 | Přístup byl uzavřen – buď uživatel aktivitu splnil, nebo vypršel termín bez splnění                    |
| **Zrušeno**      | ne                 | Přístup byl zrušen; aktivitu nelze plnit                                                               |
| **Expirováno**   | ne                 | Platnost splnění vypršela; úspěch již není považován za platný                                         |

Sloupec „Přístup je aktivní" říká, zda lze uživateli tutéž aktivitu v daném stavu přiřadit znovu. Aktivní přístup nové přiřazení blokuje; neaktivní přístup se stane historickým a nové přiřazení je možné.

Stejné názvy, různé entity

Pojmy jako „Spuštěno", „V hodnocení" nebo „Dokončeno" se vyskytují jak jako stavy přístupu uživatele, tak jako stavy aktivity jako objektu. Jde o dva zcela odlišné záznamy s vlastními, na sobě nezávislými stavy.

### Okrajové stavy

Pět dalších stavů je vyhrazeno pro pokročilé nebo nestandardní scénáře a v základním nasazení systému se nevyskytují:

| Stav            | Přístup je aktivní | Typický scénář                                                                       |
| --------------- | ------------------ | ------------------------------------------------------------------------------------ |
| **Budoucí**     | ano                | Aktivita přiřazena; datum přístupu teprve nastane (alternativní konfigurační scénář) |
| **Zajímám se**  | ano                | Vyjádření zájmu o aktivitu                                                           |
| **Rezervováno** | ano                | Rezervovaná účast                                                                    |
| **Objednáno**   | ano                | Účast objednaná přes prodejní systém                                                 |
| **Archivováno** | ne                 | Přístup ukončen archivací celé aktivity; viditelné jen administrátorům               |

______________________________________________________________________

## Typický průběh přístupu

Přístup prochází stavy v závislosti na čase a výsledcích pokusů. Níže je popsán nejběžnější tok:

Po přiřazení aktivity uživateli s budoucím datem začátku je přístup ve stavu **Registrovaný**. Jakmile nastane datum začátku přístupu, systém přístup automaticky přepne do stavu **Spuštěno** a uživatel může aktivitu plnit.

Pokud je aktivita hodnocena hodnotitelem, přejde přístup po odevzdání pokusu do stavu **V hodnocení**. Po vyhodnocení hodnotitelem přístup přechází do stavu **Dokončeno**.

Přístup skončí ve stavu **Dokončeno** také tehdy, vyprší-li termín bez splnění nebo jsou-li vyčerpány všechny dostupné pokusy. Stav Dokončeno tedy neznačí automaticky úspěch – rozhoduje výsledek přístupu (splněno nebo nesplněno).

Byl-li přístup úspěšně splněn a je nastavena platnost splnění, přejde přístup po uplynutí platnosti do stavu **Expirováno**. V takovém případě lze uživateli aktivitu přiřadit znovu – buď ručně, nebo automaticky prostřednictvím [periodického nastavení](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/periodicke-nastaveni/index.md).

______________________________________________________________________

## Vznik a zánik přístupu

Přístup vzniká jedním z těchto způsobů:

- ručním přiřazením aktivity uživateli nebo skupině uživatelů,
- hromadným importem,
- samoregistrací uživatele na termín aktivity,
- automatickou periodickou obnovou po vypršení předchozího přístupu.

Když přístup vyprší nebo je ukončen, stane se **historickým přístupem** – zůstane v systému zachován v historii uživatele a uživateli lze aktivitu přiřadit znovu jako zcela nový přístup.

Automatickou obnovu přístupu po vypršení zajišťuje funkce periodického nastavení; její princip popisuje stránka [Periodické nastavení](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/periodicke-nastaveni/index.md).

______________________________________________________________________

## Pozor na

- Stav **Dokončeno** má dvojí sémantiku: přístup mohl být uzavřen úspěšným splněním i vypršením termínu bez splnění. Jaký byl výsledek, sděluje hodnota výsledku přístupu (splněno / nesplněno), nikoli samotný stav.
- Přechody mezi stavy závisejí na konkrétní konfiguraci přístupu a aktivitě. Uvedený typický tok platí pro nejběžnější nasazení; v pokročilých scénářích se mohou lišit.

______________________________________________________________________

## Související stránky

- [Pokusy uživatele](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/pokusy-uzivatele/index.md)
- [Periodické nastavení](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/periodicke-nastaveni/index.md)
- [Aktivita: model a životní cyklus](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/aktivita/index.md)
- [Přiřazení dle skupin](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/prirazeni-dle-skupin/index.md)
- [Uživatel: model a principy](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/uzivatel/index.md)
- [Detail aktivity](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/reference/detail-aktivity/index.md)
