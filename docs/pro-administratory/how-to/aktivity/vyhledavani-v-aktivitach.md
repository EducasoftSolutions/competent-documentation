# Jak vyhledat aktivity v administraci

V administraci Competent můžete v obrazovce aktivit rychle nalézt konkrétní aktivitu nebo sadu pomocí dvou nástrojů: **textového vyhledávání** (podle názvu) a **filtru podle štítků**. Oba nástroje fungují samostatně i v kombinaci a výsledky se aktualizují okamžitě.

---

## Než začnete

- Jste přihlášeni jako administrátor (nebo máte roli s oprávněním spravovat aktivity).
- V levém menu je otevřena sekce **AKTIVITY**.
- Máte otevřenu složku nebo sadu, ve které chcete vyhledávat.

---

## Postup

### Textové vyhledávání

1. Klikněte na **ikonu lupy** v záhlaví obrazovky aktivit.
   Zobrazí se **vyhledávací pole**.

2. Začněte psát hledaný výraz.
   Seznam aktivit se filtruje okamžitě s každým napsaným znakem — není třeba stiskat Enter.
   Vyhledávání porovnává zadaný text s **názvem aktivity** a je necitlivé na velikost písmen i na diakritiku.

3. Pokud chcete vyhledávání zrušit, klikněte na **× ikonu** vedle vyhledávacího pole.
   Filtr se vymaže a seznam se vrátí do původního stavu.

!!! note "Rozsah vyhledávání"
    Vyhledávání prochází položky, které jsou **aktuálně zobrazeny** v seznamu aktivit.

---

### Filtr podle štítků

1. Klikněte na **Filtrovat štítky** v záhlaví obrazovky aktivit.
   Otevře se **boční panel** s přehledem všech dostupných štítků.

2. Klikněte na požadovaný štítek v bočním panelu.
   Štítek se přesune do vyhledávací oblasti v záhlaví a seznam aktivit se okamžitě vyfiltruje.

3. Chcete-li přidat další štítky, klikejte na ně v bočním panelu.
   Pokud je v filtru více štítků, zobrazí se aktivity odpovídající **alespoň jednomu** z nich (logika OR).

4. Chcete-li odebrat jeden štítek, klikněte na něj přímo v záhlaví (ve vyhledávací oblasti).
   Štítek se vrátí do bočního panelu a filtr se aktualizuje.

5. Chcete-li zrušit výběr všech štítků najednou, klikněte na **× ikonu** (ikonu koše) ve vyhledávací oblasti.

!!! tip "Hledání ve štítcích"
    Boční panel obsahuje vlastní vyhledávací pole pro filtrování seznamu štítků. Vyhledávání ve štítcích je citlivé na velikost písmen a diakritiku — zadávejte hledaný výraz přesně.

---

### Kombinace textu a štítků

Textové vyhledávání a filtr podle štítků lze použít současně. Výsledkem je průnik: zobrazí se pouze aktivity, které **zároveň** odpovídají zadanému textu a mají alespoň jeden ze zvolených štítků (logika AND pro text + OR pro štítky).

---

## Ověření

Po nastavení filtru ověřte výsledek:

- Seznam aktivit zobrazuje pouze položky odpovídající kritériím.
- Aktivní štítky jsou viditelné jako **štítky** ve vyhledávací oblasti v záhlaví.
- Pokud filtr nevrátí žádnou položku, zobrazí se zpráva „nebyly nalezeny žádné výsledky".

---

## Pozor na

- **Štítky se přiřazují pouze aktivitám**, ne složkám ani sadám. Při filtrování podle štítků se složky zobrazí vždy bez ohledu na zvolené štítky.
- Vyhledávání prochází **pouze zobrazené položky** — nezohledňuje položky ve skrytých podsložkách.
- Textové vyhledávání porovnává pouze **název aktivity**; custom ID, popis ani jiné atributy se při vyhledávání nezohledňují.
- Vyhledávání ve štítcích v bočním panelu je **citlivé na velikost písmen a diakritiku** — toto chování se liší od hlavního vyhledávacího pole, které je na obojí necitlivé.

---

## Související stránky

- [Obrazovka aktivit](../../reference/obrazovka-aktivity.md)
- [Filtry zobrazení](filtry-a-vyhledavani.md)
- [Přiřazení štítků k aktivitě](prirazovani-stitku.md)
- [Vytvoření štítku — připravujeme](#)
- [Slovník: Štítky — připravujeme](#)
