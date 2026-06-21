# Pokusy uživatele: přístupy, pokusy a výsledky

Systém Competent sleduje, jak každý uživatel plní každou aktivitu, které byl přiřazen.
K tomu slouží dva propojené záznamy – **přístup uživatele k aktivitě** a **pokus uživatele**.
Tato stránka vysvětluje, co tyto záznamy znamenají, jak se mění jejich stav a jak systém
vyhodnocuje, zda uživatel aktivitu splnil. Je určena administrátorům, kteří přiřazují
aktivity nebo kontrolují plnění uživatelů.

---

## Přístup uživatele k aktivitě

**Přístup uživatele k aktivitě** (zkráceně „přístup") je záznam, který popisuje vztah
konkrétního uživatele ke konkrétní aktivitě: od kdy a do kdy aktivitu plní, v jakém
je stavu a zda ji splnil.

Každý přístup nese povinný **začátek přístupu** – datum, od kterého může uživatel
aktivitu plnit. Vedle toho může přístup nést další volitelná data:

- **Konec přístupu** – datum, kdy přestane být aktivita uživateli přístupná.
- **Vyžadované datum splnění** – termín, do kdy musí mít uživatel aktivitu úspěšně splněnou.
- **Optimální začátek plnění** a **Optimální konec plnění** – doporučené (nezávazné) termíny.
- **Platnost splnění** – pokud je nastavena, udává, do kdy platí úspěšné splnění.

V jeden okamžik může mít uživatel u jedné aktivity nejvýše jeden aktivní přístup. Pokud
přístup vyprší nebo je ukončen, stane se **historickým přístupem** a uživateli lze aktivitu
přiřadit znovu jako nový přístup.

### Termínové aktivity

U termínové aktivity se přístup váže ke konkrétnímu termínu. Data přístupu (datum
konání, konec registrace) se přebírají z termínu. Pokud byl uživatel přiřazen bez
výběru konkrétního termínu, přístup je ve stavu **Nemá termín**, dokud si termín
nevybere.

---

## Pokus uživatele

**Pokus uživatele** je záznam o jednom konkrétním běhu plnění aktivity – například
jednom spuštění online kurzu nebo jedné zkušební jízdě. Pokaždé, když se uživatel
pokusí o splnění přiřazené aktivity, vzniká v systému nový pokus.

Pokus může vzniknout dvěma způsoby:

- **Automaticky** – systém jej vytvoří po spuštění obsahu (například SCORM kurzu).
- **Manuálně** – hodnotitel jej zapíše do systému, typicky po fyzické zkoušce nebo
  jiné prověrce.

Každý přístup může mít libovolný počet pokusů. Pokud je na aktivitě nastaven parametr
**Počet pokusů**, tento limit určuje maximální počet pokusů dostupných pro daný přístup.
Není-li nastaven, uživatel počtem pokusů limitován není.

!!! note "Aktualizace počtu pokusů u existujících přístupů"
    Parametr Počet pokusů se nastavuje na aktivitě, ale jeho hodnota se při vytvoření
    přístupu zkopíruje do přístupu. Pokud je parametr na aktivitě změněn po již
    existujících přístupech, ke změně dojde jen tehdy, je-li zaškrtnuto
    **Aktualizovat existující přístupy**.

### Nejlepší pokus

Ze všech dokončených pokusů eviduje systém **nejlepší pokus** – pokus s nejlepším
výsledkem (při shodě ten dřívější). Nejlepší pokus se v přehledu zobrazuje jako výchozí.

### Modální okno Pokusy uživatele

Pokusy uživatele na dané aktivitě jsou přístupné v modálním okně **Pokusy uživatele**.
Toto okno zobrazuje pokusy aktuálního přístupu. Pokusy historických přístupů jsou
dostupné u příslušného historického přístupu.

Modální okno Pokusy uživatele lze otevřít ze dvou míst:

- Záložka **Uživatelé** v detailu aktivity – ikona **Hodnotit** v řádku uživatele.
- Záložka **Aktivity** v detailu uživatele – ikona hodnotit v kartě aktivity.

---

## Stavy přístupu uživatele

Přístup uživatele k aktivitě má vlastní **stav přístupu**, který je odlišný od
stavu aktivity jako objektu. Stav přístupu se mění jak automaticky (na základě dat
přístupu a výsledků pokusů), tak manuálně (administrátorem).

!!! note "Stejné názvy, různé entity"
    Pojmy jako „Spuštěno", „V hodnocení" nebo „Archivováno" se vyskytují jak jako
    stavy aktivity, tak jako stavy přístupu uživatele. Jde o dva zcela odlišné
    objekty s vlastními, na sobě nezávislými stavy. Stavy aktivity jako objektu
    jsou popsány na stránce [Stavy aktivity](stavy-aktivity.md).

Systém rozlišuje celkem 12 hodnot stavu přístupu:

| Stav | Aktivní? | Používá se? | Kdy nastane |
|------|----------|-------------|-------------|
| **Registrovaný** | ano | ano | Přiřazení s budoucím začátkem přístupu; přístup čeká na datum spuštění |
| **Spuštěno** | ano | ano | Nastal začátek přístupu; uživatel může aktivitu plnit |
| **V hodnocení** | ano | ano | Uživatel odevzdal pokus k hodnocení; hodnotitel jej dosud nevyhodnotil |
| **Dokončeno** | ne | ano | Přístup byl uzavřen: uživatel splnil aktivitu, nebo vypršel termín |
| **Zrušeno** | ne | ano | Přístup byl zrušen administrátorem |
| **Nemá termín** | ano | ano | Jen u termínové aktivity: uživatel byl přiřazen, ale dosud si nevybral konkrétní termín |
| **Expirováno** | ne | ano | Platnost splnění vypršela |
| **Budoucí** | ano | ne | V základní konfiguraci se nepoužívá |
| **Zajímám se** | ano | ne | V základní konfiguraci se nepoužívá |
| **Rezervovaný** | ano | ne | V základní konfiguraci se nepoužívá |
| **Objednáno** | ano | ne | V základní konfiguraci se nepoužívá |
| **Archivováno** | ne | ne | V základní konfiguraci se nepoužívá |

Stavy **Budoucí**, **Zajímám se**, **Rezervovaný**, **Objednáno** a **Archivováno** jsou
vyhrazeny pro pokročilé scénáře a v základním nasazení systému se nevyskytují.

### Automatické přechody na základě dat

Systém mění stav přístupu automaticky, jakmile nastane příslušné datum:

- Jakmile nastane **začátek přístupu**, přejde přístup ze stavu Registrovaný do stavu
  **Spuštěno**.
- Jakmile nastane **konec přístupu** nebo **vyžadované datum splnění**, přejde přístup
  do stavu **Dokončeno**.
- Jakmile nastane **platnost splnění**, přejde přístup do stavu **Expirováno**.

### Automatické přechody na základě pokusů

Stav přístupu se mění také na základě výsledků a průběhu pokusů:

- Když uživatel odevzdá pokus k hodnocení (a je nastaven hodnotitel), přejde přístup
  do stavu **V hodnocení**.
- Jakmile hodnotitel pokus vyhodnotí, přístup se vrátí do stavu **Spuštěno** (pokud
  zbývají pokusy) nebo přejde do stavu **Dokončeno**.
- Jakmile jsou vyčerpány všechny dostupné pokusy, přejde přístup do stavu **Dokončeno**.

### Hodnotitel

Hodnotitel je uživatel zodpovědný za ruční ohodnocení pokusu. Nastavuje se při
přiřazení aktivity.

### Co znamená „aktivní" přístup

Přístup je **aktivní**, pokud uživateli nelze stejnou aktivitu přiřadit znovu. Mezi
aktivní stavy patří: Registrovaný, Spuštěno, V hodnocení, Nemá termín a obdobné.
Neaktivní přístup (Dokončeno, Zrušeno, Expirováno, Archivováno) znamená, že interakce s aktivitou
je považována za skončenou a uživateli ji lze přiřadit znovu.

---

## Výsledek přístupu: splněno nebo nesplněno

**Výsledek přístupu** je dimenze oddělená od stavu přístupu. Zatímco stav popisuje,
v jaké fázi se přístup nachází (například Spuštěno nebo Dokončeno), výsledek popisuje,
zda uživatel aktivitu splnil.

Systém rozlišuje tři hodnoty výsledku přístupu:

- **Splněno** – uživatel má alespoň jeden úspěšný pokus.
- **Nesplněno** – přístup byl uzavřen bez úspěšného pokusu.
- **Prozatím nesplněno** – uživatel dosud nemá úspěšný pokus, ale stále může aktivitu
  splnit (přístup je aktivní a termín nenastal).

Stav **Dokončeno** má dvojí sémantiku: buď uživatel aktivitu úspěšně splnil
(výsledek: Splněno), nebo vypršel termín a splnění nestihl (výsledek: Nesplněno).
Tyto dvě situace rozlišuje právě hodnota výsledku přístupu.

### Kombinované zobrazení stavu a výsledku

V kontextech, kde je to relevantní, zobrazuje systém stav a výsledek společně –
například „Spuštěno (splněno)", „Dokončeno (splněno)" nebo „Expirováno (splněno)".
Nejde o samostatné stavy přístupu, ale o zobrazené kombinace stavu přístupu
a hodnoty výsledku (splněno).

---

## Kde v systému přístupy a pokusy vidíte

Přístupy a pokusy jsou přístupné ze dvou hlavních míst:

**Záložka Uživatelé v detailu aktivity** zobrazuje všechny přiřazené uživatele.
Tabulka obsahuje sloupce „Uživatel", „Aktuální výsledek", „Aktuální stav", „Budoucí stav"
a „Účastnické skupiny". Číslo v závorce u výsledku (například „Prozatím nesplněno (1)")
udává počet pokusů. Každý řádek nabízí akční ikony:

- **Hodnotit** – otevře modální okno Pokusy uživatele.
- **Historie přístupů** – otevře přehled historických přístupů.
- **Upravit** – upraví data přístupu.
- **Smazat** – smaže přístup.

**Záložka Aktivity v detailu uživatele** zobrazuje aktivity uživatele rozdělené
do skupin: „Probíhající", „Budoucí", „K řešení" a „Ukončené". Každá karta aktivity
zobrazuje výsledek a umožňuje přístup k pokusům i historii přístupů.

---

## Pozor na

- Stav přístupu a výsledek přístupu jsou dvě nezávislé hodnoty. Přístup ve stavu
  Dokončeno může mít výsledek Splněno i výsledek Nesplněno – záleží na tom, proč
  byl uzavřen.
- Aktivitu lze nastavit tak, aby zůstala ve stavu Spuštěno i po úspěšném splnění –
  uživatel pak může dále spouštět obsah.
- Pokusy zobrazené v modálním okně Pokusy uživatele patří vždy k aktuálnímu přístupu.
  Pokusy z dřívějších (historických) přístupů jsou přístupné přes ikonu
  **Historie přístupů**.

---

## Související stránky

- [Aktivita: model a životní cyklus](aktivita.md)
- [Stavy aktivity](stavy-aktivity.md)
- [Schémata aktivity](schemata-aktivity.md)
- [Subtypy aktivit](subtypy-aktivit.md)
- [Detail aktivity](../reference/detail-aktivity.md)
- [Pokusy uživatele](../how-to/aktivity/pokusy-uzivatele.md)
