# Chybové zprávy

Chybová zpráva se zobrazí vždy, když systém nemůže provést požadovanou operaci – například z důvodu nedostatečných oprávnění, chybějících dat nebo neplatného stavu záznamu. Zprávy se zpravidla zobrazují v modálním okně, které je možné zavřít; kliknutím na řádek chyby zobrazíte její detail.

!!! note "Obrázek"
    Ukázka modálního okna s chybovou hláškou – [připravujeme](#).

---

## Přehled chybových zpráv

| Chybová zpráva | Popis | Doporučené řešení |
|---|---|---|
| `Cannot delete access` | Přístup uživatele k aktivitě nebo sadě nelze odstranit. | Ověřte, zda má přihlášený účet oprávnění ke správě přístupů. Pokud je přístup děděn z nadřazené sady, odeberte jej na úrovni sady. |
| `Cannot read property 'activities' of undefined` | Aplikace se pokusila číst seznam aktivit z objektu, který neexistuje nebo nebyl načten. | Obnovte stránku (**Ctrl+F5**). Pokud chyba přetrvává, odhlaste se a přihlaste znovu. |
| `Cannot read property 'push' of undefined` | U aktivity byl ručně změněn způsob časování poté, co již existoval alespoň jeden termín. Skrytý termín zůstává navázán a způsobuje tuto chybu. | Proveďte jeden z těchto kroků: (1) aktivitu odstraňte, (2) vraťte nastavení časování v **Detailu aktivity → Nastavení** do původního stavu, nebo (3) odeberte napojení uživatele na aktivitu. |
| `Insufficient Permissions` (Nedostatečná práva) | Přihlášený uživatel nemá dostatečná oprávnění k provedení dané operace. Operace nebyla provedena. | Ověřte roli a přístupová práva uživatele. Pokud operaci potřebuje provádět, požádejte správce systému o přidělení příslušné role. |
| `Objekt nebyl nalezen` | Požadovaný záznam nebyl v databázi nalezen. Pravděpodobně byl odstraněn jiným uživatelem nebo v jiné záložce prohlížeče. | Obnovte stránku (**Ctrl+F5**) a načtěte seznam znovu. |
| `Není možné upravit tento přístup` | Přístup uživatele byl přidělen v rámci nadřazené sady. Přímá úprava na úrovni aktivity není povolena. | Přistupte ke správě přístupu přes nadřazenou sadu, nikoli přes detail aktivity. |
| `Špatné vstupní parametry` | Vstupní data neprošla validací. Nejčastějším příkladem je překročení maximálního počtu povolených pokusů nastavených v detailu aktivity – systém odmítne uložit další pokus uživatele. | Zkontrolujte nastavení maximálního počtu pokusů v **Detailu aktivity**. Pokud je limit záměrný, upozorněte uživatele. |
| `Špatný požadavek` | Uživatel se pokusil přistoupit k objektu, který byl mezitím odstraněn systémem nebo jiným uživatelem. Stav nastává v souběžném víceuživatelském provozu. | Obnovte stránku (**Ctrl+F5**). Záznam byl pravděpodobně odstraněn – vyhledejte jej v příslušném seznamu, nebo jej v případě potřeby vytvořte znovu. |

---

## Kde se chybové zprávy zobrazují

Většina zpráv se zobrazuje v modálním okně nad aktuální obrazovkou. Okno lze zavřít kliknutím na tlačítko pro zavření nebo klávesou **Esc**. Kliknutím na řádek se zkráceným textem chyby zobrazíte její plný detail.

!!! warning "Chyba při nahrávání souboru"
    Pokud chyba nastane během nahrávání souboru, zobrazí se zpráva přímo v dialogu nahrávání. Překontrolujte oprávnění přihlášeného uživatele a velikost nahrávaného souboru.

---

## Související stránky

- [Přehled rolí a oprávnění](prehled-roli-a-opravneni.md)
- [Detail aktivity (připravujeme)](#)
- [Sady aktivit (připravujeme)](#)
