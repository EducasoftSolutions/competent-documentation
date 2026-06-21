# Certifikát: princip a generování

Certifikát je listina potvrzující splnění aktivity. Competent jej nevytváří jako samostatný objekt v databázi, ale **generuje ho z ODT šablony** v okamžiku, kdy uživatel splní aktivitu a dosáhne nastaveného stavu. Tato stránka vysvětluje, jak generování funguje, z čeho certifikát čerpá data a jak se nastavuje šablona.

---

## Certifikát jako generovaný dokument

Klíčová vlastnost certifikátu je, že **nejde o systémovou entitu**. Systém neeviduje vydané certifikáty v žádné vlastní tabulce. Existuje pouze:

- **šablona certifikátu** – ODT soubor nahraný administrátorem,
- **vygenerovaný dokument** – výsledek sloučení šablony s daty konkrétního uživatele, aktivity a přístupu, stažitelný dokument.

Každé stažení certifikátu je tedy generování tohoto dokumentu na vyžádání z aktuálních dat.

---

## Princip generování certifikátu

Aby systém mohl certifikát vygenerovat, musí být splněny dvě podmínky: existuje nahraná ODT šablona označená jako **šablona certifikátu** a tato šablona je přiřazena k aktivitě s nastaveným stavem dostupnosti. Administrátor obě podmínky nastavuje předem – šablonu nahraje přes obrazovku **Soubory** a označí ji v kontextové nabídce, poté ji přiřadí na záložce **Dokumenty** v detailu aktivity a zvolí stav, při jehož dosažení má být certifikát uživatelům dostupný.

Jakmile přístup uživatele k aktivitě dosáhne nastaveného stavu, systém dokument sestaví sloučením šablony s aktuálními daty daného uživatele a zpřístupní jej ke stažení. Stažení certifikátu tedy není odložená operace – certifikát vzniká na vyžádání pokaždé z dat platných v daném okamžiku.

Podrobný postup nastavení šablony popisuje [Nastavení šablony certifikátu (připravujeme)](#).

---

## Data v certifikátu

Šablona certifikátu čerpá data ze tří oblastí:

| Oblast dat | Popis |
|------------|-------|
| **Uživatel** | Jméno, příjmení a další parametry uživatele, jemuž je aktivita přiřazena |
| **Aktivita** | Název a parametry aktivity |
| **Přístup** | Stav, datum splnění a výsledky z nejlepšího pokusu uživatele |

Tím certifikát odráží skutečný stav plnění v okamžiku stažení.

---

## Šablona certifikátu: formát a obsah

Šablona se vytváří v editoru kompatibilním s formátem ODT (například LibreOffice Writer). Místa, která mají být nahrazena daty ze systému, se označují **placeholdery** ve tvaru `${název}`.

Pro pokročilou práci se šablonou – například podmíněné zobrazení bloků textu nebo formátování dat – slouží skriptovací jazyk **ZenScript** (vycházející z JavaScriptu). Podrobná tvorba šablon s využitím ZenScriptu přesahuje rozsah tohoto přehledu a bude popsána v samostatném návodu.

---

## Stažení certifikátu

Certifikát ke stažení je dostupný:

- **Administrátorovi aktivity** – zobrazí se u uživatele na záložce **Uživatelé** v detailu aktivity, pokud má administrátor přístup k aktivitě i k danému uživateli a přístup uživatele se nachází v nastaveném stavu.
- **Uživateli (studentovi)** – ve svém studentském zobrazení, pokud je mu aktivita přiřazena a přístup se nachází v nastaveném stavu.

---

## Pozor na

- Šablonu je třeba v systému souborů explicitně označit jako **šablonu certifikátu** – samotné nahrání souboru nestačí. Bez tohoto označení nebude nabídnuta k přiřazení v záložce Dokumenty jako certifikátová šablona.
- Stav nastavený u šablony v záložce **Dokumenty** určuje, kdy je certifikát dostupný. Doporučuje se volit stav odpovídající úspěšnému splnění (například **Dokončeno**), aby certifikát nebyl přístupný dříve, než uživatel aktivitu úspěšně dokončí.

---

## Související stránky

- [Dokumenty v aktivitě: přiřazení a viditelnost](dokumenty-v-aktivite.md) – jak se k aktivitě přiřazují soubory a nastavuje jejich stavová viditelnost
- [Pokusy uživatele: přístupy, pokusy a výsledky](pokusy-uzivatele.md) – co je nejlepší pokus a jak systém ukládá výsledky
- [Aktivita: model a životní cyklus](aktivita.md) – kontext aktivity, ke které se certifikát váže
- [Přiřazení aktivity uživateli (přístup)](prirazeni-aktivity-uzivateli-pristup.md) – přístup a stavy, od nichž se odvíjí dostupnost certifikátu
- [Uživatel: model a životní cyklus](uzivatel.md) – data uživatele, která šablona může obsahovat
