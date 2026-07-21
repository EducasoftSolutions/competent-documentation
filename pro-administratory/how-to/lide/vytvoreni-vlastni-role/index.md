# Vytvoření vlastní role

Kromě rolí, které jsou v Competent připravené předem, si můžete založit vlastní role s vlastní sadou oprávnění. Tento návod popisuje založení nové role v sekci **Nastavení → Role** a nastavení její matice oprávnění na záložce **Práva**.

## Předpoklady

- Máte administrátorský přístup do Competent a oprávnění pro správu rolí.

## Postup

### 1. Otevřete Nastavení → Role

V hlavním menu klikněte na **Nastavení** a poté na položku **Role**. Zobrazí se přehled rolí s přepínačem **Zobrazit systémové role** a kulatým tlačítkem **+** vedle něj.

### 2. Založte novou roli

Klikněte na kulaté tlačítko **+** vedle přepínače **Zobrazit systémové role**. Otevře se modál **Název nové role…** s jediným polem **Název**. Zadejte název role a klikněte na **Vytvořit roli**.

### 3. Pokračujte v editoru oprávnění

Po kliknutí na **Vytvořit roli** se stejné okno nezavře, ale překreslí na editor oprávnění nové role: v záhlaví se zobrazí zadaný název role, pod ním záložky **Práva**, **Vazby** a **Nastavení** (aktivní je **Práva**) a spodní lišta tlačítek se rozšíří na **Zrušit**, **Vytvořit roli** a **Vytvořit roli a zavřít**.

Role zatím není uložena

Kliknutím na **Vytvořit roli** se role ještě neuloží – otevře se jen editor jejích oprávnění. Uložení potvrdíte až v následujícím kroku.

### 4. Nastavte matici oprávnění na záložce Práva

Záložka **Práva** obsahuje dvousloupcovou matici. V levém sloupci je seznam kategorií entit, u nichž lze udělovat oprávnění – každá kategorie má vlastní zaškrtávací pole a ikonu informace „i". Kliknutím na název kategorie (například **Dokument**) se v pravém sloupci zobrazí konkrétní oprávnění dané kategorie, opět formou zaškrtávacích polí – pro kategorii **Dokument** jde například o oprávnění **Zobrazení - Dokument**, **Vytvoření - Dokument**, **Upravení - Dokument** a **Smazání - Dokument**.

Podrobný přehled kategorií oprávnění a jejich vzájemných závislostí (například že akce jako **Upravit** vyžadují i oprávnění **Číst**) najdete v referenci [Přehled rolí a oprávnění](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/reference/prehled-roli-a-opravneni/#kategorie-opravneni).

### 5. Dokončete vytvoření role

Po nastavení oprávnění uložení potvrďte tlačítkem **Vytvořit roli a zavřít** – editor se zavře a nová role se objeví v seznamu rolí.

Tím je postup dokončen.

## Pozor na

- **Kliknutí na Vytvořit roli v kroku 2 roli zatím neuloží.** Otevře jen editor oprávnění pro nově zadaný název. Pokud editor po tomto kliknutí neočekávaně zůstane otevřený místo toho, aby se zavřel, jde o očekávané chování, ne o chybu.

## Související stránky

- [Přehled rolí a oprávnění](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/reference/prehled-roli-a-opravneni/index.md)
- [Přiřazení role uživateli](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/how-to/lide/prirazeni-role-uzivateli/index.md)
