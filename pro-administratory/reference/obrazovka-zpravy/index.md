# Obrazovka Zprávy

Obrazovka **Zprávy** zobrazuje interní zprávy, žádosti o schválení a systémová oznámení na jednom místě. Stejná hodnota stavu se přitom zobrazuje jinak podle typu zprávy; princip popisuje stránka [Zprávy: model a principy](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/zpravy/index.md).

Modul je dostupný podle nastavení systému. Pokud je zapnutý, mají k obrazovce přístup přihlášení uživatelé; zprávy směřované administrátorovi vidí příslušný administrátor.

Dostupnost obrazovky

Obrazovku Zprávy nemá aktivní každý klient.

______________________________________________________________________

## Vstup na obrazovku

Modul **není položkou hlavního menu**. Na obrazovku přejdete přes **zvonek notifikací** v hlavičce, odkazem **„Zobrazit všechny zprávy"**. Adresa obrazovky je `/portal/messaging`.

______________________________________________________________________

## Seznam zpráv

Nadpis obrazovky zní **Zprávy**. V záhlaví seznamu je ikona pro obnovení zobrazených dat a tlačítko **Nová zpráva**, které otevírá modál pro vytvoření zprávy.

Datová tabulka obsahuje tyto sloupce:

| Sloupec                | Popis                                                                                                                                                                                                              |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| (bez názvu)            | První sloupec obsahuje akční ikony pro otevření a smazání zprávy.                                                                                                                                                  |
| **Typ**                | Typ zprávy, s filtrem (dropdown).                                                                                                                                                                                  |
| **Předmět**            | Předmět zprávy, s textovým filtrem.                                                                                                                                                                                |
| **Odesílatel**         | Uživatel, který zprávu odeslal, s textovým filtrem.                                                                                                                                                                |
| **Poslední změna**     | Datum poslední změny, pouze řazení.                                                                                                                                                                                |
| **Přiřazený uživatel** | Uživatel přiřazený ke zprávě, s textovým filtrem.                                                                                                                                                                  |
| **Zpráva o uživateli** | Vazba zprávy na uživatele.                                                                                                                                                                                         |
| **Zpráva o aktivitě**  | Vazba zprávy na aktivitu.                                                                                                                                                                                          |
| **Vytvořeno**          | Datum vytvoření, pouze řazení.                                                                                                                                                                                     |
| **Stav**               | Stav zprávy, s filtrem (dropdown). Zobrazený text závisí na typu zprávy, viz [Zprávy: model a principy](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/zpravy/index.md). |
| **Zpráva**             | Zobrazuje předmět i tělo zprávy.                                                                                                                                                                                   |

Patička seznamu zobrazuje celkový počet položek.

______________________________________________________________________

## Nová zpráva

Modál **Nová zpráva** slouží k ručnímu vytvoření zprávy. Obsahuje tato pole:

| Pole           | Popis                                                                                                                                                   |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Typ zprávy** | Dropdown s 5 ručně vytvořitelnými typy (Uživatelská, Chyba, Úkol, Žádost o přístup, Žádost o novou aktivitu). Počáteční hodnota je „-- vyberte typ --". |
| **Předmět**    | Předmět zprávy, aktivní až po výběru typu.                                                                                                              |
| **Zpráva**     | Tělo zprávy jako formátovaný text (tučné, kurzíva, podtržení, přeškrtnutí, zarovnání, seznamy, tabulka, vložení odkazu).                                |

Potvrzení tlačítkem **Odeslat zprávu**, zrušení tlačítkem **Zrušit**.

______________________________________________________________________

## Detail zprávy

Nadpis modálu má tvar „Zprávy: `<Předmět>` (`<ID>`)". Detail obsahuje v pořadí tato pole: **Odesílatel**, **Typ zprávy**, **Vytvořeno** + **Poslední změna**, **Přiřazený uživatel**, **Stav** (s možností změny), **Sledující**, **Předmět**, **Zpráva**, **Notifikace e-mailem** (přepínač pro odeslání e-mailu o dané zprávě), **Přiložené soubory**, **Přiložené obrázky**.

Akční tlačítka detailu: **Přidat komentář**, **Hotovo** (zavření detailu).

______________________________________________________________________

## Schvalování žádostí

Funkcionalita schvalování žádostí slouží k tomu, aby požadavky o studium bylo možné v systému schválit před jeho realizací. Organizace má díky tomu kontrolu nad tím, k jakým kurzům uživatelé získají přístup a za jakých podmínek vznikají nové vzdělávací aktivity.

Schvalování se používá pouze pro dva případy:

- **Žádost o existující kurz z katalogu.** Tato varianta se používá u aktivit, které jsou v katalogu dostupné k prohlížení, ale není možné si je zapsat přímo. Uživatel má místo toho možnost o kurz zažádat. Žádost je následně posouzena řetězcem schvalovatelů a po jejím schválení získá uživatel k aktivitě přístup.
- **Žádost o vytvoření nové aktivity.** Tato varianta slouží k podání požadavku na vytvoření nové aktivity (kurzu). Uživatel vyplní formulář žádosti s potřebnými informacemi a odešle ji ke schválení. Po schválení žádosti může dojít k vytvoření nové aktivity v systému a případně i k jejímu přiřazení žadateli.

Průběh schvalování je z pohledu uživatele jednoduchý – uživatel odešle žádost, ta je předána ke schválení určeným osobám a na základě jejich rozhodnutí je žádost schválena nebo zamítnuta. O výsledku může být uživatel informován prostřednictvím e-mailové notifikace, pokud je nastavena.

______________________________________________________________________

## Oprávnění pro podání žádosti

Možnost podat žádost o kurz je řízena oprávněními, která určují, zda uživatel kurz v katalogu vůbec vidí a zda má možnost o něj zažádat. Pokud uživatel nemá potřebná oprávnění, možnost podat žádost se mu v systému nezobrazí.

Centrální správa oprávnění ve složce

U žádostí o existující kurzy se oprávnění zpravidla nastavují na úrovni složky, do které jsou umístěny všechny kurzy vyžadující schválení. Tento přístup umožňuje spravovat oprávnění centrálně a zajistit, že se stejná pravidla automaticky uplatní na všechny kurzy v dané složce včetně nově vytvořených.

Pro nastavení oprávnění nejprve vytvořte složku, do které umístíte všechny kurzy dostupné pouze na základě schválení. Následně u této složky otevřete nabídku (ikona burger menu) a zvolte možnost **Práva**. Oprávnění lze přiřazovat buď konkrétním uživatelům, nebo celým skupinám, a to v příslušné záložce. Po kliknutí na tlačítko **+** vyberte z bočního panelu požadované uživatele nebo skupiny a přiřaďte jim oprávnění **Zobrazení v katalogu** a **Možnost zažádat v katalogu**.

Po přiřazení těchto oprávnění se u kurzů v dané složce zobrazí uživatelům v katalogu tlačítko **Zažádat o kurz**. Další chování žádosti, včetně jejího schvalování, se pak řídí nastaveným schvalovacím procesem.

______________________________________________________________________

## Průběh schvalování ve Zprávách

Do Zpráv se automaticky doručují všechny žádosti, které čekají na schválení, a zároveň zde probíhá komunikace mezi žadatelem a schvalovatelem.

Všechny zprávy, které se týkají schvalování žádostí, mají typ **Žádost o přístup** nebo **Žádost o novou aktivitu**. Jednotlivou žádost otevřete kliknutím na ikonu obálky na levé straně přehledu zpráv.

______________________________________________________________________

## Detail žádosti o schválení

Po otevření žádosti má schvalovatel k dispozici detailní informace o žádosti. V detailu zprávy se zobrazují zejména tyto údaje:

| Údaj                      | Popis                                                                                                 |
| ------------------------- | ----------------------------------------------------------------------------------------------------- |
| **Odesílatel**            | Uživatel, který žádost podal.                                                                         |
| **Datum a čas založení**  | Okamžik, kdy byla žádost vytvořena.                                                                   |
| **Aktuální schvalovatel** | Osoba, která má žádost právě posoudit.                                                                |
| **Stav žádosti**          | Fáze, ve které se žádost nachází.                                                                     |
| **Aktivita**              | Aktivita, o kterou je žádáno (u žádosti o existující aktivitu), včetně termínu u termínových aktivit. |
| **Předmět**               | Předmět zprávy se žádostí.                                                                            |
| **Text žádosti**          | Vlastní text žádosti.                                                                                 |
| **Komentáře**             | Ke každé žádosti je možné průběžně přidávat komentáře.                                                |
| **Systémové zprávy**      | Zobrazují se zde také systémové zprávy o akcích a událostech v rámci procesu schvalování.             |

______________________________________________________________________

## Rozhodnutí o žádosti

Pokud máte oprávnění žádost schvalovat nebo zamítat, proveďte akci pomocí příslušných tlačítek v pravém dolním rohu detailu zprávy. K dispozici jsou možnosti **Schválit žádost** nebo **Zamítnout žádost**.

Pokud se jedná o posledního nebo jediného schvalovatele v řetězci, nebo je žádost zamítnuta, dojde k vyřešení žádosti. V opačném případě je po schválení žádost posunuta na dalšího schvalovatele v řetězci, kterého vidíte v části **Další schvalovatelé**.

V detailu žádosti se vždy zobrazuje aktuální schvalovatel. Pokud má aktuální schvalovatel nastavené alternativní zastoupení, zobrazují se v části **Alternativní schvalovatelé** také jeho zástupci. Pokud ve schvalovacím procesu následují další schvalovatelé, zobrazují se v části **Další schvalovatelé**. Schvalovatelé, kteří již svůj krok schválili, se zde dále nezobrazují.

V některých případech nemusí mít aktuálně přihlášený uživatel oprávnění zobrazit konkrétního schvalovatele. V takové situaci se místo uživatele zobrazí anonymní ikonka s tooltipem. Díky tomu zůstává zachován přehled o počtu schvalovatelů v procesu, aniž by došlo ke zpřístupnění uživatelů, které nemá aktuální uživatel oprávnění vidět.

______________________________________________________________________

## Pozor na

- U žádostí o schválení nabízí detail navíc akce pro schválení nebo zamítnutí žádosti.
- Schválením žádosti, která není poslední v řetězci, se žádost posouvá dalšímu schvalovateli – k vyřešení dochází až rozhodnutím posledního schvalovatele nebo zamítnutím.

______________________________________________________________________

## Související stránky

- [Zprávy: model a principy](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/zpravy/index.md)
- [E-mailové notifikace](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/emailove-notifikace/index.md)
- [Pokusy uživatele](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/pokusy-uzivatele/index.md)
