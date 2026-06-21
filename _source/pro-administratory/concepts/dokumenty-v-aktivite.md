# Dokumenty v aktivitě: přiřazení a viditelnost

Systém Competent umožňuje ke každé aktivitě přiřadit soubory a studijní materiály – **dokumenty** – které jsou uživatelům dostupné ke stažení nebo zobrazení ve studentském zobrazení aktivity. Tato stránka vysvětluje mechanismus stavové viditelnosti dokumentů vůči uživateli a způsob, jakým jsou dokumenty ke aktivitě přiřazovány. Je určena administrátorům konfigurujícím studijní materiály k aktivitám.

---

## Co jsou dokumenty v aktivitě

**Dokumenty v aktivitě** jsou soubory a materiály přiřazené ke konkrétní aktivitě. Uživatel je vidí a může si je stáhnout nebo zobrazit ve svém studentském zobrazení aktivity. Administrátor je spravuje prostřednictvím záložky **Dokumenty** v Detailu aktivity.

---

## Stavová viditelnost dokumentů

Klíčovým principem systému dokumentů je **stavová viditelnost**: každý přiřazený dokument nese informaci, v jakých stavech přístupu uživatele k aktivitě má být viditelný. Uživatel vidí pouze ty dokumenty, jejichž nastavená viditelnost odpovídá aktuálnímu stavu jeho přístupu.

Tím je možné zobrazit uživateli jiné materiály před spuštěním aktivity, jiné při plnění a jiné po úspěšném splnění – aniž by bylo nutné vytvářet více verzí aktivity. Ke každému dokumentu lze vybrat jeden nebo více stavů.

### Varianty viditelnosti

Každé přiřazení dokumentu se váže na jeden nebo více stavů ze dvou typů:

| Typ stavu | Podmínka viditelnosti pro uživatele |
|-----------|-------------------------------------|
| **Stav** (např. „Spuštěno") | Přístup uživatele k aktivitě se nachází v daném stavu. Výsledek (splněno / nesplněno) nehraje roli. |
| **Stav (splněno)** (např. „Spuštěno (splněno)") | Přístup uživatele k aktivitě se nachází v daném stavu a aktivita je zároveň úspěšně splněna. |

Variantu **Stav (splněno)** lze využít například pro bonusové materiály nebo potvrzovací dokumenty, které se mají zobrazit teprve po úspěšném splnění aktivity.

### Stav Veřejný

Zvláštní kategorií je stav **Veřejný**. Dokument přiřazený s tímto stavem je viditelný i uživateli, který dosud nemá aktivitu přiřazenou – například v Katalogu, kde si teprve vybírá, zda o aktivitu projeví zájem. Stav Veřejný slouží ke zpřístupnění informačních a přehledových materiálů před samotnou registrací.

---

## Záložka Dokumenty a sekce Všechny stavy

Záložka **Dokumenty** v Detailu aktivity zobrazuje přehled přiřazených dokumentů. Záložka je rozdělena do sekcí:

- **Všechny stavy** – zobrazuje všechny dokumenty aktivity bez ohledu na nastavený stav viditelnosti. Tato sekce je ve výchozím stavu rozbalená a nabízí rychlý přehled kompletního obsahu dokumentů k aktivitě.
- **Sekce pojmenované podle stavů** – každá sekce zobrazuje dokumenty přiřazené právě pro daný stav (například „Spuštěno" nebo „Veřejný"). Administrátor tak vidí, jaké materiály obdrží uživatel v každém konkrétním stavu přístupu.

---

## Jak systém přiřazení dokumentů funguje

Dokumenty se přiřazují prostřednictvím **vedlejšího panelu Knihovna souborů**, který se otevře kliknutím na ikonu + v záložce Dokumenty. Vedlejší panel nabízí dvě cesty výběru souboru:

- **Výběr ze stávající Knihovny souborů** – stromová struktura složek umožňuje procházet a vybrat dříve nahraný soubor.
- **Nahrání nového souboru** – tlačítkem **Nahrát soubor** lze přidat soubor přímo z počítače.

Po výběru souboru se ve vedlejším panelu zpřístupní sekce **Nastavit stavy**, kde administrátor určí, v jakých stavech přístupu bude dokument uživatelům viditelný. Teprve po výběru alespoň jednoho stavu je dokument k aktivitě přiřazen.

Přiřazení dokumentu k aktivitě vyžaduje oprávnění **Upravení – Aktivita**.

### Interní kopie přiřazeného souboru

Přiřazením souboru k aktivitě systém vytvoří jeho **interní kopii**. Dokument proto zůstane uživatelům dostupný i v případě, že jej administrátor následně odstraní z Knihovny souborů – uživatelé přiřazení k aktivitě nepřijdou o přístup k materiálu bez ohledu na to, co se s původním souborem v knihovně stane.

Stejný soubor lze přiřadit ke stejné aktivitě opakovaně pro různé stavy, nebo jej sdílet přes více aktivit.

### Odebrání dokumentu z aktivity

Dokument lze z aktivity odebrat dvěma způsoby:

- **Ze sekce Všechny stavy** – odebrání platí pro všechny nastavené stavy zároveň; dokument je z aktivity odstraněn zcela.
- **Z konkrétní stavové sekce** – odebrání platí jen pro daný stav; ve zbývajících stavech dokument zůstane přiřazen.

---

## Pozor na

- Pokud dokument nemá nastaven žádný stav viditelnosti, uživatelé jej neuvidí. Bez výběru alespoň jednoho stavu v sekci **Nastavit stavy** k přiřazení dokumentu nedojde.
- Typ dokumentu systém určí automaticky z přípony souboru – uživatel jej nemusí nastavovat ručně. Pokud se soubor zobrazí s nesprávným typem, zkontrolujte příponu nahrávaného souboru.

---

## Související stránky

- [Pokusy uživatele: přístupy, pokusy a výsledky](pokusy-uzivatele.md) – stav přístupu uživatele a jeho hodnoty
- [Stavy aktivity](stavy-aktivity.md)
- [Aktivita: model a životní cyklus](aktivita.md)
- [Detail aktivity](../reference/detail-aktivity.md)
- [Přidání dokumentu k aktivitě](../how-to/aktivity/dokumenty-v-aktivite.md)
