# Přehled notifikačních událostí

Systém Competent podporuje **57 notifikačních událostí** (spouštěčů), které lze přiřadit k notifikačním pravidlům. Přehled mechanismu fungování notifikací naleznete na stránce [E-mailové notifikace](../concepts/emailove-notifikace.md).

Události se dělí podle způsobu spouštění:

| Typ spouštění | Popis |
|---------------|-------|
| **Reakce na akci** | E-mail se odešle okamžitě, jakmile nastane příslušná systémová událost. |
| **Časovaná připomínka** | E-mail se odešle v naplánovaný čas, určitý počet dní před nebo po sledovaném datu. |

---

## Přístupy k aktivitám

| Událost | Kdy nastane |
|---------|-------------|
| Přiřazení aktivity uživateli | Uživateli je vytvořen nový přístup k aktivitě (např. přiřazením z administrace nebo importem). |
| Začátek přístupu k aktivitě | Nastane okamžik začátku přístupu uživatele k aktivitě. |
| Dokončení aktivity | Přístup uživatele k aktivitě přechází do stavu Dokončeno (s libovolným výsledkem). |
| Úspěšné dokončení aktivity | Přístup uživatele k aktivitě je dokončen a aktivita je úspěšně splněna. |
| Neúspěšné dokončení aktivity | Přístup uživatele k aktivitě je dokončen a aktivita nebyla splněna (vypršel přístup nebo pokusy). |
| Splnění aktivity | Aktivita je splněna. |
| Zrušení aktivity | Přístup uživatele k aktivitě je zrušen. |
| Potřeba vyhodnocení aktivity | Pokus aktivity čeká na ruční vyhodnocení hodnotitelem. |
| Prodloužení přístupu k aktivitě | Přístup uživatele k aktivitě byl automaticky prodloužen. |
| Změna času přístupu k Aktivitě | Datum začátku nebo konce přístupu uživatele k aktivitě bylo změněno. |

---

## Běhy přístupu k aktivitě

Události v této kategorii nastávají pouze u aktivit s přiřazeným termínem (během).

| Událost | Kdy nastane |
|---------|-------------|
| Vybrán běh přístupu | Uživateli je k přístupu přiřazen konkrétní termín (běh). |
| Změněn běh přístupu | Termín přiřazený k přístupu byl změněn. |
| Smazán běh přístupu | Termín přiřazený k přístupu byl odstraněn. |

---

## Přístupy k hodnocením

| Událost | Kdy nastane |
|---------|-------------|
| Přiřazení hodnocení uživateli | Uživateli je vytvořen nový přístup k hodnocení. |
| Začátek přístupu k hodnocení | Nastane okamžik začátku přístupu uživatele k hodnocení. |
| Dokončení hodnocení | Přístup uživatele k hodnocení přechází do stavu Dokončeno. |
| Úspěšné dokončení hodnocení | Hodnocení je dokončeno a úspěšně splněno. |
| Neúspěšné dokončení hodnocení | Hodnocení je dokončeno a nebylo splněno. |
| Zrušení hodnocení | Přístup uživatele k hodnocení je zrušen. |
| Prodloužení přístupu k hodnocení | Přístup uživatele k hodnocení byl automaticky prodloužen. |
| Změna času přístupu k Hodnocení | Datum přístupu uživatele k hodnocení bylo změněno. |

---

## Pokusy

| Událost | Kdy nastane |
|---------|-------------|
| Aktualizace pokusu aktivity | Pokus aktivity byl aktualizován (např. uložení průběhu). |
| Aktualizace pokusu aktivity po vyhodnocení | Pokus aktivity byl aktualizován v návaznosti na vyhodnocení. |
| Vyhodnocení pokusu hodnocení | Pokus hodnocení byl vyhodnocen hodnotitelem. |
| Aktualizace pokusu hodnocení | Pokus hodnocení byl aktualizován. |
| Aktualizace pokusu hodnocení po vyhodnocení | Pokus hodnocení byl aktualizován v návaznosti na vyhodnocení. |
| Vyhodnocení pokusu aktivity | Dostupné v UI; funkčnost neověřena – viz [Pozor na](#pozor-na). |

---

## Časované připomínky

Události v této kategorii se neodesílají okamžitě – e-mail je naplánován na konkrétní datum odvozené od sledovaného data přístupu.

| Událost | Kdy nastane |
|---------|-------------|
| Počet dní před začátkem přístupu k aktivitě | N dní před datem začátku přístupu uživatele k aktivitě. |
| Počet dní po začátku přístupu k aktivitě | N dní po datu začátku přístupu uživatele k aktivitě. |
| Počet dní před začátkem přístupu k hodnocení | N dní před datem začátku přístupu uživatele k hodnocení. |
| Počet dní po začátku přístupu k hodnocení | N dní po datu začátku přístupu uživatele k hodnocení. |
| Počet dní po úspěšném splnění aktivity | N dní po datu splnění aktivity uživatelem. |
| Počet dní před datem splnění aktivity | Dostupné v UI; funkčnost neověřena – viz [Pozor na](#pozor-na). |
| Počet dní po datu splnění aktivity | Dostupné v UI; funkčnost neověřena – viz [Pozor na](#pozor-na). |
| Počet dní před datem splnění hodnocení | Dostupné v UI; funkčnost neověřena – viz [Pozor na](#pozor-na). |
| Počet dní po datu splnění hodnocení | Dostupné v UI; funkčnost neověřena – viz [Pozor na](#pozor-na). |

---

## Uživatelský účet

| Událost | Kdy nastane |
|---------|-------------|
| Založení nového uživatele | Byl vytvořen nový uživatelský účet (jednotlivě nebo importem). |
| Zapomenuté heslo | Uživatel požádal o reset hesla na přihlašovací obrazovce. |
| Změna emailu uživatele | E-mailová adresa uživatelského účtu byla změněna. |
| Ověření emailu uživatele | Systém odeslal požadavek na ověření e-mailové adresy. |
| Emailové ověření před vytvořením Uživatele | Ověřovací e-mail je odeslán před dokončením registrace nového účtu. |
| Změna hesla uživatele | Heslo uživatelského účtu bylo změněno. |

---

## Verze aktivity

| Událost | Kdy nastane |
|---------|-------------|
| Aktivace nové verze aktivity | Nová verze aktivity byla aktivována (ručně nebo plánovaně). |

---

## Zprávy

| Událost | Kdy nastane |
|---------|-------------|
| Nová zpráva | V systému byla vytvořena nová zpráva. |
| Aktualizace zprávy | Zpráva v systému byla aktualizována. |

---

## Žádosti o přístup k aktivitě

| Událost | Kdy nastane |
|---------|-------------|
| Vytvoření žádosti o přístup k Aktivitě | Uživatel odeslal žádost o přístup k aktivitě z katalogu. |
| Aktualizace žádosti o přístup k Aktivitě | Stav nebo obsah žádosti o přístup byl aktualizován. |
| Uživatel se stal Schvalovatelem žádosti o přístup k Aktivitě | Uživatel byl zařazen do řetězce schvalovatelů žádosti o přístup. |
| Schválení žádosti o přístup k Aktivitě | Žádost o přístup k aktivitě byla schválena. |
| Zamítnutí žádosti o přístup k Aktivitě | Žádost o přístup k aktivitě byla zamítnuta. |

---

## Žádosti o vytvoření nové aktivity

| Událost | Kdy nastane |
|---------|-------------|
| Vytvoření žádosti o novou Aktivitu | Uživatel odeslal žádost o vytvoření nové aktivity. |
| Aktualizace žádosti o novou Aktivitu | Stav nebo obsah žádosti o novou aktivitu byl aktualizován. |
| Uživatel se stal Schvalovatelem žádosti o novou Aktivitu | Uživatel byl zařazen do řetězce schvalovatelů žádosti o novou aktivitu. |
| Schválení žádosti o novou Aktivitu | Žádost o vytvoření nové aktivity byla schválena. |
| Zamítnutí žádosti o novou Aktivitu | Žádost o vytvoření nové aktivity byla zamítnuta. |

---

## Speciální události

| Událost | Kdy nastane |
|---------|-------------|
| Agregační skupina | Speciální typ události, který seskupí více dílčích notifikací do jednoho souhrnného e-mailu odesílaného jednou denně. Vyžaduje šablonu typu Agregovaná. |
| Specifický | Vlastní spouštěč pro specifické integrace. Chování závisí na konfiguraci konkrétní instalace. |

---

## Pozor na

!!! warning "Neověřené události"
    Pět následujících událostí je v systému dostupných v rozbalovacím seznamu, ale jejich aktivní fungování v aktuální verzi nebylo ověřeno. Pokud je chcete použít, ověřte nejdříve funkčnost s dodavatelem.

    - Vyhodnocení pokusu aktivity
    - Počet dní před datem splnění aktivity
    - Počet dní po datu splnění aktivity
    - Počet dní před datem splnění hodnocení
    - Počet dní po datu splnění hodnocení

---

## Související stránky

- [E-mailové notifikace](../concepts/emailove-notifikace.md)
- [Obrazovka Šablony e-mailů](obrazovka-sablony-emailu.md)
- [Nastavení notifikací aktivity (připravujeme)](#)
