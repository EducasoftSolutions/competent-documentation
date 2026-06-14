# Přiřazení uživatelů k aktivitě

Tento návod ukazuje, jak k aktivitě se schématem **Bez termínu** přiřadíte konkrétní uživatele (případně uživatelské skupiny), nastavíte jim data přístupu a volitelně zapnete periodické opakování. Přiřazení probíhá v detailu aktivity prostřednictvím panelu **Výběr účastníků** a **Nastavení plnění**.

## Předpoklady

- Máte přístup k editaci aktivit v administraci.
- V systému existuje alespoň jedna aktivita se schématem **Bez termínu** a alespoň jeden uživatel, kterého lze přiřadit.

## Postup

### 1. Otevřete detail aktivity

V seznamu aktivit (stromu) otevřete detail aktivity **dvojklikem** na její název. Zobrazí se detail s aktivním tabem **Uživatelé**. Dokud nemá aktivita žádné přiřazené uživatele, je tabulka prázdná a ve spodní části se zobrazuje text **Celkem položek: 0**.

### 2. Otevřete panel přiřazení

V tabu **Uživatelé** klikněte na tlačítko **+** (přidání uživatelů) v pravé části nástrojové lišty tabulky. Otevře se panel přiřazení s prvním krokem **Výběr účastníků**.

V bočním panelu můžete:

- přepínat mezi záložkami **Uživatelé** a **Uživatelské skupiny**,
- vyhledávat uživatele polem **Hledat**,
- hromadně vybírat tlačítky **Vše** a **Nic**,
- omezit seznam filtrem **Nemají splněno**.

### 3. Vyberte účastníky

Uživatele přidáte **kliknutím** na jeho řádek v bočním seznamu. Vybraní uživatelé se přesunou do hlavní části panelu. Jakmile vyberete alespoň jednoho uživatele, zpřístupní se tlačítko **Pokračovat nastavením plnění**.

### 4. Nastavte data přístupu

Klikněte na **Pokračovat nastavením plnění**. Zobrazí se krok **Nastavení plnění** s poli pro zadání dat přístupu k aktivitě.

| Pole                     | Význam                                                                                            |
| ------------------------ | ------------------------------------------------------------------------------------------------- |
| Začátek přístupu         | Od kdy má uživatel k aktivitě přístup. Když pole zůstane prázdné, doplní se aktuální datum a čas. |
| Optimální počátek plnění | Doporučené datum zahájení plnění.                                                                 |
| Optimální konec plnění   | Doporučené datum dokončení plnění.                                                                |
| Vyžadované datum splnění | Datum, do kterého má uživatel aktivitu povinně splnit.                                            |
| Konec přístupu           | Datum, po kterém uživatel ztrácí přístup k aktivitě.                                              |

Data jsou na sebe chronologicky vázaná v pořadí **Začátek přístupu → Optimální počátek plnění → Optimální konec plnění → Vyžadované datum splnění → Konec přístupu**. Pozdější datum nelze nastavit před dřívější. U každého pole je vpravo vidět, jaká hodnota se doplní, pokud pole ponecháte prázdné.

### 5. Volitelně zapněte periodické opakování

Pokud má být přiřazení periodické (například každoroční opakování školení), rozbalte v kroku **Nastavení plnění** sekci **Periodické nastavení**. Po jejím zapnutí přibude oddíl **Nastavení dat pro budoucí přístupy k aktivitě** a pole **Konec přístupu** se změní na **Konec periodického přístupu**.

Podrobný popis voleb periodicity najdete na stránce [Periodické nastavení](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/reference/periodicke-nastaveni/index.md). Pokud periodicitu nepotřebujete, sekci nechte vypnutou.

### 6. Uložte přiřazení

Klikněte na **Uložit**. Panel se zavře a v tabulce tabu **Uživatelé** se zobrazí nově přiřazení uživatelé. Počet záznamů ve spodní části (například **Celkem položek: 3**) potvrzuje, že se přiřazení uložilo.

Tím je postup dokončen.

## Pozor na

- U aktivit se schématem **S termíny** probíhá přiřazení odlišně – uživatel se přiřazuje na konkrétní **termín** ze seznamu termínů. Tento postup popíšeme v samostatném návodu: [Přiřazení k termínové aktivitě (připravujeme)](#).
- Periodické nastavení nezaměňujte s funkcí automatického prodloužení přístupu (pole **Počet dnů automatického prodloužení**) – jde o samostatné, nesouvisející nastavení.

## Související stránky

- [Periodické nastavení](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/reference/periodicke-nastaveni/index.md)
- [Detail aktivity](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/reference/detail-aktivity/index.md)
