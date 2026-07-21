# Detail kvalifikace

Detail kvalifikace je obrazovka, na které se spravuje jedna konkrétní kvalifikace. Nadpis obrazovky odpovídá názvu dané kvalifikace. Obrazovka je rozdělena do čtyř záložek: **Uživatelé**, **Popis**, **Podmínky** a **Práva**.

---

## Záložky: přehled

| Záložka | Popis |
|---|---|
| **Uživatelé** | Seznam uživatelů, kterým je kvalifikace přiřazena, se stavovými filtry a akcemi pro přiřazení. Výchozí (aktivní po otevření detailu) záložka. |
| **Popis** | Vlastnosti kvalifikace: délka platnosti, dodatečné hodnocení, textový popis a dokumenty. |
| **Podmínky** | Definice požadavků, které je třeba splnit. |
| **Práva** | Správa přístupových práv ke kvalifikaci. |

---

## Záložka Uživatelé

Záložka Uživatelé zobrazuje seznam uživatelů, kterým je kvalifikace přiřazena. Seznam lze filtrovat podle stavu, ve kterém se kvalifikace u daného uživatele nachází.

### Stav kvalifikace

| Stav | Význam |
|---|---|
| **Přiřazená** | Kvalifikace je uživateli přiřazena, zatím není splněná. |
| **Splněná** | Uživatel kvalifikaci splnil. |
| **Nesplněná** | Kvalifikace nebyla splněna. |
| **Zrušená** | Přiřazení kvalifikace bylo zrušeno. |
| **Expirovaná** | Kvalifikace byla dříve splněná, ale její platnost vypršela. |

### Akce

Tlačítko **+** v záhlaví záložky otevře **modál** Přiřazení kvalifikace uživatelům s poli **Stav kvalifikace** (výchozí hodnota „Přiřazená") a **Splnit do**. Uvnitř modálu tlačítko **+** otevře boční panel s taby **Uživatelé** a **Uživatelské skupiny** a řaditelným, filtrovatelným seznamem; kliknutím na položku v seznamu se přidá do modálu. Modál se potvrzuje tlačítkem **Uložit**, zrušuje tlačítkem **Zrušit**.

---

## Záložka Popis

Záložka Popis obsahuje editovatelné vlastnosti kvalifikace.

| Položka | Popis |
|---|---|
| **Délka platnosti** | Určuje, jak dlouho zůstává splněná kvalifikace platná. K dispozici jsou tři volby: **Neomezeně** (kvalifikace nikdy neexpiruje), **Do termínu** (platnost končí k pevně zadanému datu) a **Od data splnění** (platnost se počítá jako počet **Dnů** od okamžiku, kdy uživatel kvalifikaci splnil). |
| **Dodatečné hodnocení** | Volba doplňkového způsobu hodnocení kvalifikace: **Žádné** nebo **Procentuální s komentářem**. |
| **Popis** | Volný text popisující kvalifikaci. |
| **Dokumenty** | Dokumenty přiřazené ke kvalifikaci. |

---

## Záložka Podmínky

Záložka Podmínky nese nadpis **Je třeba splnit** a definuje, co je pro danou kvalifikaci požadováno.

Tlačítko **Přidat** nabízí tři možnosti:

- **Aktivity** – přidání požadované aktivity (nebo více aktivit).
- **Kvalifikace** – přidání jiné požadované kvalifikace.
- **Více možností** – přidá další sadu podmínek.

Jednotlivé požadavky se seskupují do **sad**. U sady lze určit, zda je pro její splnění nutné splnit všechny položky, nebo zda postačí splnění libovolné jedné položky.

Záložka Podmínky slouží k **definici požadavků** na kvalifikaci, nikoli k jejich vyhodnocování. Stav kvalifikace u konkrétního uživatele (Přiřazená, Splněná, Nesplněná, Zrušená, Expirovaná) systém eviduje na záložce Uživatelé.

---

## Záložka Práva

Záložka Práva slouží ke správě přístupových práv ke kvalifikaci.

| Prvek | Popis |
|---|---|
| **SKUPINY** | Seznam uživatelských skupin s právy ke kvalifikaci. |
| **Vlastník kvalifikace** | Uživatel nebo skupina v roli vlastníka kvalifikace. |

---

## Pozor na

!!! note "Podmínky nejsou automatické vyhodnocení"
    Splnění položek na záložce Podmínky samo o sobě nezpůsobí, že se kvalifikace u uživatele automaticky změní na stav Splněná. Záložka Podmínky popisuje pouze to, co je pro splnění kvalifikace požadováno (splnění vybraných aktivit, případně jiných kvalifikací); samotný stav kvalifikace u uživatele eviduje záložka Uživatelé.

Přesný výpočet data expirace nebo termínu nad rámec tří popsaných režimů platnosti (Neomezeně / Do termínu / Od data splnění) tato reference neuvádí.

---

## Související stránky

- [Obrazovka Kvalifikace](obrazovka-kvalifikace.md)
- [Kvalifikace (koncept)](../concepts/kvalifikace.md)
