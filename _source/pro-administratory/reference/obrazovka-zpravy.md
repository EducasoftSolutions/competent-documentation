# Obrazovka Zprávy

Obrazovka **Zprávy** zobrazuje všechny zprávy v systému. Stejná hodnota stavu se přitom zobrazuje jinak podle typu zprávy; princip popisuje [Zprávy: model a principy](../concepts/zpravy.md).

Modul je dostupný podle nastavení systému. Pokud je zapnutý, mají k odkazu na obrazovku přístup přihlášení uživatelé; zprávy směřované administrátorovi vidí příslušný administrátor.

---

## Vstup na obrazovku

Obrazovka Zprávy **není položkou hlavního menu**. Otevírá se výhradně přes **zvonek notifikací** v hlavičce aplikace, odkazem **„Zobrazit všechny zprávy"** ve výklopném panelu notifikací. Adresa obrazovky je `/portal/messaging`.

---

## Seznam zpráv

Nadpis obrazovky zní **Zprávy**. V záhlaví seznamu se nachází ikona obnovení dat (bez textového popisku) a tlačítko **Nová zpráva**, které otevírá **modál** pro vytvoření nové zprávy.

Pod záhlavím se nachází datová tabulka se zprávami. Patička seznamu zobrazuje celkový počet položek.

### Sloupce datové tabulky

| Sloupec | Popis |
|---|---|
| *(bez názvu)* | Akční ikony pro otevření detailu zprávy a její smazání. |
| **Typ** | Typ zprávy; nabízí filtrování výběrem z dropdownu. Přehled typů popisuje [Zprávy: model a principy](../concepts/zpravy.md). |
| **Předmět** | Předmět zprávy; nabízí textový filtr. |
| **Odesílatel** | Uživatel, který zprávu vytvořil; nabízí textový filtr. |
| **Poslední změna** | Datum a čas poslední změny zprávy; sloupec podporuje pouze řazení. |
| **Přiřazený uživatel** | Uživatel, kterého se zpráva týká; nabízí textový filtr. |
| **Zpráva o uživateli** | Uživatel, k němuž se zpráva vztahuje obsahově. |
| **Zpráva o aktivitě** | Aktivita, k níž se zpráva vztahuje obsahově. |
| **Vytvořeno** | Datum a čas vzniku zprávy; sloupec podporuje pouze řazení. |
| **Stav** | Aktuální stav zprávy; nabízí filtrování výběrem z dropdownu. Zobrazená hodnota závisí na typu zprávy – podrobně viz [Zprávy: model a principy](../concepts/zpravy.md). |
| **Zpráva** | Zobrazuje předmět i tělo zprávy. |

---

## Modál Nová zpráva

Modál se otevírá tlačítkem **Nová zpráva** na obrazovce Zprávy. Obsahuje tato pole:

| Pole | Popis |
|---|---|
| **Typ zprávy** | Dropdown s placeholderem „-- vyberte typ --". Nabízí typy zpráv, které lze vytvořit ručně; jejich přehled je součástí [Zprávy: model a principy](../concepts/zpravy.md). |
| **Předmět** | Textové pole, aktivní až po výběru typu zprávy. |
| **Zpráva** | Pole s formátovaným textem – podporuje tučné písmo, kurzívu, podtržení, přeškrtnutí, zarovnání, seznamy, vložení tabulky a vložení odkazu. |

Modál uzavírají dvě tlačítka: **Zrušit** ukončí vytváření zprávy bez uložení, **Odeslat zprávu** zprávu odešle a vytvoří.

---

## Modál Detail zprávy

Nadpis **modálu** má formát **„Zprávy: `<Předmět>` (`<ID>`)"**. Modál obsahuje jedenáct polí:

| Pole | Popis |
|---|---|
| **Odesílatel** | Uživatel nebo systém, který zprávu vytvořil. |
| **Typ zprávy** | Typ dané zprávy, viz [Zprávy: model a principy](../concepts/zpravy.md). |
| **Vytvořeno** | Datum a čas vzniku zprávy. |
| **Poslední změna** | Datum a čas poslední změny zprávy. |
| **Přiřazený uživatel** | Uživatel, kterého se zpráva týká. |
| **Stav** | Aktuální stav zprávy, s možností změny. Zobrazená hodnota závisí na typu zprávy – kontext vysvětluje [Zprávy: model a principy](../concepts/zpravy.md). |
| **Sledující** | Uživatelé sledující danou zprávu. |
| **Předmět** | Předmět zprávy. |
| **Zpráva** | Text zprávy. |
| **Notifikace e-mailem** | Přepínač, který určuje, zda se o zprávě odešle i samostatná e-mailová notifikace. Vztah mezi zprávami a e-mailovými notifikacemi popisuje [E-mailové notifikace](../concepts/emailove-notifikace.md). |
| **Přiložené soubory** | Seznam souborů připojených ke zprávě. |
| **Přiložené obrázky** | Seznam obrázků připojených ke zprávě. |

Modál má dvě akční tlačítka: **Přidat komentář** a **Hotovo**, které modál zavírá.

---

## Pozor na

!!! note "Schválení a zamítnutí žádostí"
    U žádostí o schválení nabízí detail navíc akce pro schválení nebo zamítnutí žádosti.

---

## Související stránky

- [Zprávy: model a principy](../concepts/zpravy.md)
- [E-mailové notifikace](../concepts/emailove-notifikace.md)
- [Pokusy uživatele](../concepts/pokusy-uzivatele.md)
