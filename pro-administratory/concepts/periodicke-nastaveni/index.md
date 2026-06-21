# Periodické nastavení: princip a typy periody

Periodické nastavení je mechanismus, díky kterému systém Competent automaticky obnovuje přístup uživatele k beztermínové aktivitě nebo sadě poté, co předchozí přístup skončí. Typické využití jsou zákonem vyžadovaná opakovaná školení – například každoroční školení BOZP nebo proškolení řidičů.

Tato stránka vysvětluje **princip**, na kterém periodicita stojí. Postup nastavení v rozhraní popisuje stránka [Periodické nastavení (reference)](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/reference/periodicke-nastaveni/index.md).

______________________________________________________________________

## Jak periodické nastavení funguje

Přístup s nastavenou periodicitou funguje stejně jako běžné přiřazení aktivity uživateli. Rozdíl nastane v okamžiku, kdy uživatel aktivitu úspěšně dokončí: systém podle parametrů periody naplánuje nový přístup na další období. Obnovu zajišťuje periodický job systému.

Celý cyklus lze popsat takto:

1. Uživateli je přiřazena aktivita s periodickým nastavením – vzniká první přístup.
1. Uživatel aktivitu splní (stav **Dokončeno**).
1. Systém podle zvoleného typu výpočtu periody naplánuje začátek dalšího přístupu.
1. V naplánovaný okamžik se automaticky vytvoří nový přístup a cyklus se opakuje.

______________________________________________________________________

## Tři typy výpočtu periody

Typ výpočtu určuje, od jakého okamžiku se odvíjí začátek příštího přístupu.

| Typ výpočtu      | Jak se počítá příští přístup                                                                     |
| ---------------- | ------------------------------------------------------------------------------------------------ |
| **Kalendářní**   | Příští přístup se spouští k pevnému kalendářnímu pravidlu (například každý rok v konkrétní den). |
| **Od přiřazení** | Pevný interval (roky / měsíce / dny) se počítá od začátku aktuálního přiřazení.                  |
| **Od splnění**   | Stejný interval, ale počítaný od okamžiku úspěšného splnění aktivity.                            |

### Parametry typů Od přiřazení a Od splnění

Oba tyto typy sdílejí dvě klíčová pole:

- **Délka aktivní části** – počet dní, po které je obnovený přístup otevřený (uživatel může aktivitu v tomto okně plnit).
- **Perioda** – interval opakování zadaný v rocích, měsících a dnech.

U typu **Od splnění** se pole **Příští spuštění** nezobrazuje. Datum dalšího přístupu nelze naplánovat dopředu, protože se odvíjí od okamžiku splnění, který předem není znám.

### Upřesnění ke Kalendářnímu typu

U typu **Kalendářní** se interval v rocích, měsících a dnech nezadává. Místo toho se opakování nastavuje výběrem frekvence: **Denně**, **Týdně**, **Měsíčně** nebo **Ročně**.

______________________________________________________________________

## Periodicita sad

Sadu lze přiřadit periodicky obdobně jako samostatnou aktivitu. Po splnění sady systém naplánuje její další přiřazení. Při obnově platí tato pravidla:

- Všem beztermínovým aktivitám v sadě se nastaví stejný přístup jako sadě samotné.
- Termínové aktivity v sadě se přiřadí bez termínu.

Podrobnosti o sadách viz [Sada: struktura, hierarchie a splnění](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/sada/index.md).

______________________________________________________________________

## Zrušení periody

Aby se přístup přestal automaticky obnovovat, je třeba přístup převést do stavu **Zrušeno**. Systém poté již další přístup neplánuje.

______________________________________________________________________

## Pozor na

Přestupné roky a délka měsíce

U intervalu zadaného v měsících nebo rocích systém nebere v potaz skutečnou délku konkrétního měsíce ani přestupné roky. Datum příštího přístupu se počítá bez korekce na tyto odchylky.

Periodicita vs. automatické prodloužení přístupu

Periodické nastavení nesouvisí s funkcí **automatického prodloužení přístupu** (pole Počet dnů automatického prodloužení). Jde o dva samostatné mechanismy s odlišným chováním.

______________________________________________________________________

## Související stránky

- [Periodické nastavení (reference)](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/reference/periodicke-nastaveni/index.md) – postup nastavení v rozhraní
- [Přiřazení aktivity uživateli (přístup)](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/prirazeni-aktivity-uzivateli-pristup/index.md) – přístup jako objekt, stavy
- [Sada: struktura, hierarchie a splnění](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/sada/index.md)
- [Schémata aktivity](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/schemata-aktivity/index.md)
