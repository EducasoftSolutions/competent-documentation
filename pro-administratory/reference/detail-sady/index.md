# Detail sady

Detail sady je obrazovka, která zobrazuje informace o aktivitě typu **Sada** – kontejneru sdružujícím více potomků (dílčích aktivit) do jednoho celku. Stránka popisuje, čím se Detail sady liší od detailu běžné aktivity; pro sdílené části odkazuje na [Detail aktivity](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/reference/detail-aktivity/index.md).

______________________________________________________________________

## Co je Sada

**Sada** je typ aktivity, který funguje jako kontejner: sdružuje více dílčích aktivit (potomků) do jednoho celku, například kurikula nebo strukturovaného vzdělávacího programu. Na rozdíl od koncové aktivity může Sada mít potomky.

Variantou Sady je **Termínová sada** – varianta sady s termíny (přidává tab **Termíny**). Termínová sada je popsána samostatně: [Termínová sada](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/terminova-sada/index.md).

______________________________________________________________________

## Otevření detailu Sady

Otevření detailu Sady se liší od otevření detailu běžné aktivity:

- **Dvojklik** na Sadu ve stromu aktivit Sadu **neotevře do detailu** – pouze ji rozbalí jako složku a zobrazí její obsah v pravém panelu.
- Tabový detail Sady se otevře kliknutím na **ikonu tužky** (úpravy) v hlavičce pravého panelu.

Dvojklik neotevře detail

U Sady platí odlišné chování než u koncové aktivity. Pokud po dvojkliku detail nevidíte, použijte ikonu tužky v hlavičce pravého panelu.

______________________________________________________________________

## Taby: přehled

Detail sady obsahuje pět tabů v tomto pořadí:

| Tab           | Popis                                                                                                                                                                                      |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Uživatelé** | Přehled uživatelů přiřazených k Sadě a správa přiřazení (viz [Tab Uživatelé](#tab-uzivatele) níže).                                                                                        |
| **Obsah**     | Seznam potomků Sady a nástroj pro jejich správu (viz [Tab Obsah](#tab-obsah) níže).                                                                                                        |
| **Detaily**   | Formulář s vlastnostmi Sady (viz [Detail aktivity](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/reference/detail-aktivity/index.md)).                   |
| **Dokumenty** | Přílohy a studijní materiály spojené se Sadou (viz [Detail aktivity](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/reference/detail-aktivity/index.md)). |
| **Podmínky**  | Konfigurace podmínek přístupu k Sadě (viz [Detail aktivity](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/reference/detail-aktivity/index.md)).          |

Prostá Sada **nemá** taby Termíny, Recenze ani Sdílení.

______________________________________________________________________

## Tab Uživatelé

Tab Uživatelé zobrazuje seznam uživatelů přiřazených k Sadě. Přiřazení k Sadě probíhá 3krokovým průvodcem, který je popsán v sekci [Přiřazení uživatelů k Sadě](#prirazeni-uzivatelu-k-sade) níže.

______________________________________________________________________

## Tab Obsah

Tab **Obsah** je tab specifický pro Sadu – u běžné (koncové) aktivity neexistuje. Zobrazuje seznam potomků (dílčích aktivit) aktuálně zařazených do Sady.

### Tlačítko Upravit obsah

Tlačítko **Upravit obsah** v tabu Obsah přepne zobrazení do stromového procházení Sady, kde lze její obsah spravovat běžnými nástroji stromu: přidat potomka, přesunout nebo změnit pořadí aktivit. Tlačítko neotevírá modální okno.

______________________________________________________________________

## Tab Detaily, Dokumenty a Podmínky

Taby **Detaily**, **Dokumenty** a **Podmínky** fungují u Sady stejným způsobem jako u běžné aktivity. Jejich popis viz [Detail aktivity](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/reference/detail-aktivity/index.md).

______________________________________________________________________

## Přiřazení uživatelů k Sadě

Přiřazení uživatelů k Sadě probíhá prostřednictvím 3krokového průvodce. Oproti přiřazení ke koncové aktivitě obsahuje průvodce jeden krok navíc – výběr aktivit Sady. Průvodce se spouští z tabu Uživatelé.

| Krok | Název                | Obsah a ovládací prvky                                                                                                                                                                                                                                                                                                                                                                       |
| ---- | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | **Výběr účastníků**  | Výběr uživatelů nebo uživatelských skupin. K dispozici jsou záložky Uživatelé / Uživatelské skupiny, hromadný výběr Vše / Nic a filtr Nemají splněno. Tlačítko **Pokračovat výběrem aktivit** se aktivuje po výběru aspoň jednoho účastníka.                                                                                                                                                 |
| 2    | **Výběr Aktivit**    | Výběr potomků Sady, které se přiřazeným účastníkům zařadí. Ovládací prvky: **Vybrat všechny** / **Zrušit výběr**. Tlačítko **Pokračovat nastavením plnění**.                                                                                                                                                                                                                                 |
| 3    | **Nastavení plnění** | Nastavení dat přístupu. Horní řádek zobrazuje Sadu jako celek; pod ní jsou uvedeny jednotlivé vybrané potomky s možností nastavit data samostatně. Tlačítko **Uložit** / **Zavřít**. Podrobný popis nastavení viz [Přiřazení uživatelů k aktivitě](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/how-to/aktivity/prirazeni-uzivatelu-k-aktivite/index.md). |

______________________________________________________________________

## Pozor na

Částečné splnění – skrytý parametr

Sada obsahuje parametr **Částečné splnění**, který určuje, zda pro splnění celé Sady postačuje splnění jedné dílčí aktivity (zapnuto), nebo zda je nutné splnit všechny aktivity Sady (vypnuto). Ve standardním nasazení je tento parametr v administraci **skrytý** a zobrazí se v tabu Detaily pouze pokud ho zákaznická konfigurace odkryje. Nejedná se o standardně viditelné pole.

______________________________________________________________________

## Související stránky

- [Detail aktivity](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/reference/detail-aktivity/index.md)
- [Přiřazení uživatelů k aktivitě](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/how-to/aktivity/prirazeni-uzivatelu-k-aktivite/index.md)
- [Periodické nastavení](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/reference/periodicke-nastaveni/index.md)
- [Termínová sada](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/terminova-sada/index.md)
- [Sada](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/sada/index.md)
