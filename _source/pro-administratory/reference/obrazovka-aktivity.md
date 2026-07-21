# Obrazovka Aktivity

Obrazovka **Aktivity** je centrálním místem pro správu výukových objektů v administraci Competent. Zobrazí se po kliknutí na položku **Aktivity** v horním hlavním menu administrace. Obrazovka je rozdělena na **levý panel** (Strom aktivit) a **pravý panel** (obsah aktuální složky nebo sady).

---

## Strom aktivit

Strom aktivit v levém panelu zobrazuje hierarchii všech složek, sad, termínových sad a aktivit. Nejvyšší položkou hierarchie je **root** – kořenová složka obsahující všechny ostatní položky.

Každá položka ve stromu má tyto aktivní části:

| Část položky | Funkce |
|---|---|
| Rozbalovací ikona | Rozbalí nebo sbalí potomky položky. |
| Ikona typu | Vizuálně odlišuje typ položky; slouží zároveň jako úchyt pro přetažení (drag and drop) při přesunu. |
| Název | Kliknutí otevře obsah dané složky nebo sady v pravém panelu. Kliknutí na aktivitu otevře [Detail aktivity](detail-aktivity.md). |
| Kontextové menu | Zobrazí se po najetí myší na položku; viz [Kontextové menu položek](#kontextove-menu-polozek). |

Pod stromem se nachází tlačítko pro **obnovení dat** – načte aktuální stav stromu ze serveru.

### Povolené typy objektů v kontejnerech

Každý kontejner přijímá pouze určité typy potomků:

| Cílový kontejner | Povolené typy objektů uvnitř |
|---|---|
| root | Složka, Aktivita, Sada, Termínová sada |
| Složka | Složka, Aktivita, Sada, Termínová sada |
| Sada | Aktivita, Sada, Termínová sada |
| Termínová sada | Pouze Aktivita |
| Aktivita | Aktivita není kontejner – nic neobsahuje |

---

## Složkové zobrazení

Pravý panel zobrazuje obsah aktuálně otevřené složky nebo sady. Nad ním je **informační pruh** s názvem a ikonou aktuální položky, navigačním odkazem na cestu ke složce (breadcrumb) a akčními ikonami.

### Informační pruh: akční ikony

Čtyři ikony v pravém horním rohu informačního pruhu:

| Ikona | Funkce |
|---|---|
| Přidání nového objektu | Otevře nabídku pro výběr typu nového prvku. Podrobně viz [Vytvoření nového objektu](../how-to/aktivity/vytvoreni-noveho-objektu.md). |
| Vyhledávání | Otevře vyhledávací lištu pro aktuální složku nebo sadu; viz [Vyhledávání](#vyhledavani). |
| Filtrování | Otevře okno s volbami pro filtrování obsahu; viz [Filtrování](#filtrovani). |
| Zobrazení stromu | Skryje nebo znovu zobrazí Strom aktivit. |

Pokud je aktivní jakýkoli filtr, ikona filtrování se vizuálně změní (indikátor aktivity filtru).

### Obsah složky nebo sady

Seznam položek v pravém panelu zobrazuje přímé potomky aktuální složky nebo sady. Při najetí myší na řádek se vpravo zobrazí tři akční ikony:

| Ikona | Funkce | Dostupnost |
|---|---|---|
| Editace | Otevře Detail aktivity nebo detail sady. | U složek se nezobrazuje. |
| Práva | Otevře modál **Práva přístupu pro ...** pro daný objekt; viz [Modál Práva přístupu pro ...](#modal-prava-pristupu-pro). | Všechny typy. |
| Menu | Otevře kontextové menu; viz [Kontextové menu položek](#kontextove-menu-polozek). | Všechny typy. |

Kliknutí na **složku, sadu nebo termínovou sadu** přejde o úroveň níže do jejího obsahu. Kliknutí na **aktivitu** otevře [Detail aktivity](detail-aktivity.md).

---

## Vyhledávání

Vyhledávací lišta se zobrazí po kliknutí na ikonu vyhledávání v informačním pruhu. Vyhledávání probíhá **pouze v aktuální složce nebo sadě**, případně v jejich podsložkách a pod-sadách – pokud je zapnuto **Hromadné zobrazení** (viz [Filtrování](#filtrovani)). Výsledky se aktualizují okamžitě při změně textu v poli.

Druhý prvek vyhledávací lišty je **Filtrovat štítky** – otevře vedlejší panel pro výběr štítků. Vybrané štítky se přesunou do vyhledávací lišty jako aktivní filtr. Kliknutím na vybraný štítek ve vyhledávací liště jej odeberete; ikonkou koše celý výběr štítků zrušíte.

---

## Filtrování

Okno filtrování nabízí tři skupiny voleb:

1. **Hromadné zobrazení** – výchozí stav pravého panelu zobrazuje pouze přímé položky aktuální složky nebo sady. Po přepnutí na Hromadné zobrazení se zobrazí **všechny položky ve všech podsložkách a pod-sadách**. V tomto režimu jsou složky skryty.
2. **Zobrazení aktivit** – skryje nebo zobrazí všechny aktivity, případně pouze aktivity určitého subtypu.
3. **Zobrazení strukturních prvků** – skryje nebo zobrazí složky, sady nebo termínové sady.

Všechny aktivní filtry lze zrušit najednou ikonkou křížku.

---

## Kontextové menu položek

Kontextové menu každé položky stromu kombinuje dvě skupiny voleb: **menu pro vytvoření nové položky** a **menu pro úpravu aktuální položky**.

### Menu pro vytvoření nové položky

Kliknutím na typ v nabídce se vytvoří nový prvek jako přímý potomek položky, pro kterou bylo menu otevřeno:

| Typ | Podmenu |
|---|---|
| Složka | – |
| Aktivita | Elearning, Školení |
| Sada | Sada |
| Termínová sada | Komplexní Sada |

Podrobný postup vytváření nových objektů viz [Vytvoření nového objektu](../how-to/aktivity/vytvoreni-noveho-objektu.md).

### Menu pro úpravu aktuální položky

Tři volby dostupné pro většinu položek:

| Volba | Funkce |
|---|---|
| Přesunout do... | Otevře panel pro výběr cílového umístění v hierarchii. Viz [Přesun objektu](../how-to/aktivity/presun-objektu.md). |
| Přejmenovat | Umožní upravit název položky. Název lze lokalizovat do více jazyků. |
| Smazat | Smaže položku po potvrzení konfirmačního dialogu. |

!!! note "Kořenová položka root"
    U položky **root** jsou k dispozici: **menu pro vytvoření nové položky** (plná nabídka typů – Složka, Aktivita, Sada, Termínová sada), **Přejmenovat** a **Práva**. Volba **Smazat** není dostupná, protože kořenovou položku nelze odstranit.

---

## Modál Práva přístupu pro ...

Modál se otevře kliknutím na ikonu práv u libovolné položky – buď ve stromu aktivit, nebo ve složkovém zobrazení. Zobrazuje souhrnný přehled práv nad daným objektem, včetně přímo přiřazených, zděděných a systémových práv.

### Struktura modálu

Modál je rozdělený na dva taby:

- **Skupiny** (výchozí otevřený tab)
- **Uživatelé**

V každém tabu jsou data zobrazena v tabulce se třemi sloupci: název skupiny nebo uživatele, přiřazené role, tlačítko editace.

### Konvence zobrazení rolí

Role jsou odlišeny závorkami podle způsobu přiřazení:

| Zobrazení | Význam |
|---|---|
| Bez závorek | Role přiřazená přímo tomuto objektu. |
| V kulatých závorkách | Role zděděná z nadřazené složky nebo sady. |
| V hranatých závorkách | Systémová role (například `[Vlastník aktivity]`). |

### Přidávání a úprava práv

- **Přidání skupiny nebo uživatele** – kliknutím na ikonu přidání se otevře vedlejší panel **Výběr skupinové role** (nebo **Výběr uživatelské role**).
- **Úprava přiřazené role** – ikona editace na řádku skupiny nebo uživatele otevře editor rolí.

---

## Související stránky

- [Vytvoření nového objektu](../how-to/aktivity/vytvoreni-noveho-objektu.md)
- [Přesun objektu](../how-to/aktivity/presun-objektu.md)
- [Vytvoření SCORM aktivity](../how-to/aktivity/vytvoreni-scorm-aktivity.md)
- [Detail aktivity](detail-aktivity.md)
- [Detail sady](detail-sady.md)
- [Sdílené aktivity](../concepts/sdilene-aktivity.md)
- [Jak přidat termín k aktivitě](../how-to/aktivity/terminy-aktivity.md)
