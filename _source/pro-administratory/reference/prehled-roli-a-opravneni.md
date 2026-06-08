# Přehled rolí a oprávnění

Tato stránka je referenční katalog rolí a kategorií oprávnění v systému Competent. Vysvětluje, které role lze přiřadit ručně, které přiděluje systém automaticky a co vyjadřují závorky u názvů rolí v dialogu práv. Model fungování rolí (globální vs. objektové, dědění, delegování) je popsán na stránce [Role a oprávnění](../concepts/role.md).

---

## Přiřaditelné role

Přiřaditelné role jsou role, které administrátor přiděluje ručně – uživateli nebo skupině. Systém je nabídne při přiřazování v příslušném panelu.

| Role | Kde se přiřazuje | Co role zajišťuje |
|---|---|---|
| **Účastník (člen skupiny)** | detail skupiny nebo detail uživatele | členství uživatele v uživatelské skupině |
| **Zobrazení v katalogu** | dialog Práva přístupu u aktivity | aktivita je viditelná danému uživateli nebo skupině v katalogu |
| **Možnost zažádat v katalogu** | dialog Práva přístupu u aktivity | uživatel může odeslat žádost o přístup k aktivitě přes katalog |
| **Admin pohled** | globální role uživatele | uživatel vidí skryté a archivované záznamy v celém systému |
| **Přepínání účtů** | globální role uživatele | uživatel se může přihlásit za jiného uživatele |

Role **Admin pohled** a **Přepínání účtů** jsou globální: platí v celém systému a přidělují se přes pohled **Nastavení** v detailu uživatele. Role **Zobrazení v katalogu** a **Možnost zažádat v katalogu** jsou objektové: platí jen pro konkrétní aktivitu a přidělují se přes dialog **Práva přístupu pro...** ve stromu aktivit. Podrobné postupy viz [Přiřazení role uživateli](../how-to/lide/prirazeni-role-uzivateli.md) a [Nastavení práv k aktivitě](../how-to/aktivity/nastaveni-prav-k-aktivite.md).

Vlastní role (nad rámec výše uvedených) si každá organizace zakládá v sekci **Nastavení → Role** – viz [Kde se definují vlastní role](#kde-se-definuji-vlastni-role) níže.

---

## Systémové role

Systémové role přiděluje Competent automaticky. Nelze je přiřadit ani odebrat ručně. V dialogu práv aktivity se zobrazují v **[hranatých závorkách]**.

| Role | Kdy ji systém přidělí |
|---|---|
| **Vlastník** (objektu) | uživateli, který objekt vytvořil – platí pro aktivitu, skupinu, dokument a další typy objektů |
| **Účastník** (objektu) | uživateli připojenému k objektu – registrací na aktivitu, zařazením do skupiny apod. |

Vlastník má nad svým objektem plná práva a může ostatním přiřazovat objektové role, i pokud nemá globální oprávnění správy rolí. Podrobnosti o modelu viz [Role a oprávnění](../concepts/role.md).

---

## Vizuální konvence závorek v dialogu práv

Dialog **Práva přístupu pro...** označuje různé typy rolí závorkami:

| Zápis | Typ role | Popis |
|---|---|---|
| `[Název role]` | systémová role | Přidělena automaticky systémem; nelze ručně odebrat |
| `(Název role)` | zděděná role | Zděděna z nadřazeného objektu ve stromu; zobrazí se po zapnutí filtru **Zobrazit zděděná práva** |
| Název role (bez závorek) | ručně přiřazená role | Přiřazena administrátorem nebo vlastníkem objektu |

---

## Kategorie oprávnění

Každá role je tvořena sadou oprávnění. Systém rozlišuje tyto kategorie akcí:

| Kategorie | Co oprávnění pokrývá |
|---|---|
| **Zobrazit** | Zobrazit záznam v přehledu |
| **Číst** | Zobrazit detail záznamu (včetně skrytého nebo archivovaného obsahu) |
| **Vytvořit** | Vytvořit nový záznam daného typu |
| **Upravit** | Upravit existující záznam |
| **Smazat** | Smazat záznam |
| **Změnit stav** | Změnit stav záznamu (např. publikovat aktivitu) |
| **Registrovat** | Přihlásit uživatele na aktivitu |
| **Spustit** | Spustit aktivitu (e-learningový modul) |

U aktivit jsou dostupné navíc akce **Zájem** a **Rezervace**.

### Závislost oprávnění: akce vyžadují Číst

Akční oprávnění (Upravit, Smazat, Změnit stav, Registrovat, Spustit) vyžadují, aby role obsahovala také oprávnění **Číst**. Systém tuto závislost vynucuje automaticky – roli, která má právo upravovat záznam, musí mít uděleno i právo číst.

!!! note "Globální oprávnění"
    Část oprávnění je celosystémová a nemá vazbu na konkrétní objekt – například správa šablon notifikací nebo editace navigace. Tato oprávnění se nastavují jako součást globální role.

---

## Kde se definují vlastní role

Vlastní role (neinterní, zákazníkem zakládané) se spravují v části **Nastavení → Role**.

- Tlačítkem **Vytvořit roli** administrátor vytvoří novou roli a nastaví pro ni matici oprávnění a vazby. Vyžaduje oprávnění správy rolí.
- Systémové (interní) role jsou v tomto přehledu skryty za přepínačem **Zobrazit systémové role** a nelze je smazat.
- Podrobný postup zakládání vlastní role bude popsán v návodu [Vytvoření vlastní role (připravujeme)](#).

**Lidé → Role** je čistě přehledový panel (strom role → skupina → uživatelé) a slouží pouze ke čtení – definice rolí ani přiřazení zde nelze měnit.

---

## Pozor na

!!! warning "Anonymní přístup"
    U aktivit lze udělit i přístup bez přihlášení (anonymní přístup). Jeho nastavení se v některých verzích teprve sjednocuje; pokud tuto možnost potřebujete, ověřte si její dostupnost přímo v prostředí.

---

## Související stránky

- [Role a oprávnění](../concepts/role.md)
- [Přiřazení role uživateli](../how-to/lide/prirazeni-role-uzivateli.md)
- [Nastavení práv k aktivitě](../how-to/aktivity/nastaveni-prav-k-aktivite.md)
- [Detail skupiny](detail-skupiny.md)
