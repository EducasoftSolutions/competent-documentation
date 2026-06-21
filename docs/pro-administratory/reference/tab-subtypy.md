# Záložka Subtypy

Záložka **Subtypy** je součástí obrazovky **Nastavení** a umožňuje spravovat subtypy pro všechny typy objektů v systému Competent – aktivity, hodnocení, sady, termínové sady, uživatele, uživatelské skupiny a kvalifikace. Záložka je přístupná pouze uživatelům s oprávněním spravovat subtypy a parametry systému Competent.

---

## Přístup k záložce

Záložka **Subtypy** se nachází na obrazovce **Nastavení**. K záložce mají přístup uživatelé s oprávněním spravovat subtypy a parametry systému Competent. Sekce Nastavení je určena pro zkušené administrátory – nesprávná manipulace se subtypy může ovlivnit fungování systému.

---

## Subtaby

Záložka Subtypy je vnitřně rozdělena do subtabů podle typů objektů. Aktivní subtab je vizuálně vyznačen tučným písmem a bílou šipkou zespodu.

| Subtab | Subtypy pro |
|---|---|
| **Aktivity** | Objekty typu Aktivita |
| **Hodnocení** | Objekty typu Hodnocení |
| **Sady** | Objekty typu Sada |
| **Termínové sady** | Objekty typu Termínová sada |
| **Uživatelé** | Uživatele |
| **Uživatelské skupiny** | Skupiny uživatelů |
| **Kvalifikace** | Kvalifikace |

---

## Seznam subtypů

Po výběru subtabu se zobrazí seznam subtypů příslušného typu. V záložce uvidíte subtypy nakonfigurované pro Vaši instalaci systému Competent.

| Prvek | Popis |
|---|---|
| **Tlačítko plus** (vpravo nahoře) | Otevře modál **Nový subtyp…** pro přidání nového subtypu. |
| **Řádek subtypu** | Kliknutím na řádek otevřete editační okno subtypu. |
| **Ikona koše** (na řádku) | Smaže vybraný subtyp. |

---

## Modál Nový subtyp

Modál **Nový subtyp…** se otevře po kliknutí na tlačítko plus v pravém horním rohu záložky.

| Pole / Prvek | Popis |
|---|---|
| **Název** | Název nového subtypu. Povinné pole. |
| **Iniciální konfigurace subtypu** | Výchozí hodnoty, které se automaticky nastaví každému nově vytvořenému objektu s tímto subtypem – například typ hodnocení, výchozí popis nebo schéma aktivity. Konkrétní konfigurační pole závisí na typu objektu. Sekci lze před vytvořením volitelně upravit. |
| **vytvořit** (tlačítko) | Potvrdí vytvoření subtypu. Po stisknutí systém otevře editační okno subtypu pro přidání parametrů. |

---

## Editační okno subtypu

Editační okno se otevře kliknutím na řádek existujícího subtypu nebo automaticky po potvrzení vytvoření nového.

| Prvek | Popis |
|---|---|
| **Název subtypu** (záhlaví) | Aktuální název subtypu. Lze upravit kliknutím na editační ikonu. |
| **Iniciální konfigurace subtypu** | Sekce s výchozí konfigurací subtypu. Tlačítko **Upravit konfiguraci** vpravo sekci otevře k editaci. |
| **Seznam parametrů subtypu** | Vedlejší parametry přiřazené k tomuto subtypu. Každý objekt vytvořený s daným subtypem tyto parametry zdědí. Kliknutím na řádek parametru ho upravíte, kliknutím na ikonu koše ho smažete. |
| **Přidat parametr** (tlačítko) | Přidá nový parametr k subtypu. Při vytváření parametru systém kontroluje unikátnost názvu. |
| **Uložit a zavřít** (tlačítko) | Uloží veškeré změny v editačním okně a zavře ho. |

!!! warning "Uložení změn v editačním okně"
    Veškeré změny – přidané parametry i úpravy konfigurace – se uloží až kliknutím na tlačítko **Uložit a zavřít**. Samotné přidání parametru nebo ukončení editace konfigurace změny neukládá.

---

## Vlastnosti subtypu

| Vlastnost | Popis |
|---|---|
| **Neměnnost** | Subtyp objektu je neměnný po uložení objektu. Po uložení aktivity, uživatele nebo jiného objektu nelze jeho subtyp změnit. |
| **Rozsah** | Subtypy existují pro každý typ objektu v systému: Aktivity, Hodnocení, Sady, Termínové sady, Uživatele, Uživatelské skupiny a Kvalifikace. |
| **Závislost na instalaci** | Konkrétní nabídka subtypů závisí na konfiguraci instalace systému Competent. |

---

## Související stránky

- [Subtypy aktivit: model a konfigurovatelnost](../concepts/subtypy-aktivit.md)
- [Aktivita: model a životní cyklus](../concepts/aktivita.md)
- [Detail aktivity](detail-aktivity.md)
