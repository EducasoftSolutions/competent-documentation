# Přiřazení dle skupin: mechanismus a principy

Přiřazení dle skupin je funkce systému Competent, která automaticky přiřazuje aktivity uživatelům na základě jejich členství ve skupině. Tato stránka vysvětluje, jak mechanismus funguje, jak reaguje na změny ve složení skupiny a jaký je vztah k přímému přiřazení uživatele k aktivitě. Je určena administrátorům, kteří chtějí pochopit princip před tím, než začnou pravidla přiřazení nastavovat nebo spravovat.

______________________________________________________________________

## Co je Přiřazení dle skupin

Bez funkce Přiřazení dle skupin je nutné přiřazovat aktivity každému uživateli zvlášť – tedy ručně pro každou osobu a každou aktivitu. U větších organizací to vede k opakované, časově náročné práci.

Přiřazení dle skupin tento postup automatizuje. Administrátor nastaví **pravidlo přiřazení** ve tvaru „skupina → aktivita" a systém sám vytvoří příslušné přístupy pro všechny členy skupiny. Výsledek je funkčně totožný s ručním přiřazením – rozdíl je pouze v tom, že práci odvede systém, nikoli administrátor.

Pravidlo přiřazení lze cílit na:

- **aktivitu** – přiřazení platí pro danou konkrétní aktivitu,
- **sadu** – pravidlo pokryje celou sadu aktivit,
- **složku** – pravidlo se rozpadne na dílčí pravidla pro každou aktivitu uvnitř složky.

______________________________________________________________________

## Jak se pravidlo projeví

### Při vytvoření pravidla

Jakmile administrátor pravidlo přiřazení uloží, systém ho okamžitě aplikuje na **všechny současné členy skupiny**. Každému z nich vznikne přístup k dotčené aktivitě (nebo aktivitám, pokud pravidlo cílí na sadu či složku).

### Při přidání nového člena do skupiny

Pokud je uživatel do skupiny zařazen později – poté, co pravidlo přiřazení již existuje – systém mu **automaticky vytvoří přístupy ke všem aktivitám**, které skupina prostřednictvím svých pravidel přiřazení pokrývá. Uživatel nemusí být do každé aktivity přidán zvlášť.

### Při odebrání člena nebo zrušení pravidla

Když uživatel skupinu opustí nebo administrátor pravidlo přiřazení zruší, jeho automaticky vytvořené přístupy se ukončí. Konkrétní chování – zda přístup zůstane jako ukončený záznam, nebo se zcela odebere – závisí na nastavení systému.

______________________________________________________________________

## Vztah k přímému přiřazení

Přiřazení dle skupin nevytváří žádný zvláštní druh přístupu. Výsledkem pravidla přiřazení je standardní **přístup** uživatele k aktivitě – stejný, jaký vznikne při ručním přiřazení přes správu aktivity.

Rozdíl mezi oběma způsoby je výhradně v **původu přístupu**:

- **Přímé přiřazení** – administrátor přístup vytvoří ručně. Přístup existuje nezávisle na členství uživatele v jakékoli skupině.
- **Skupinové přiřazení** – přístup vznikl automaticky z pravidla přiřazení. Systém ho udržuje v souladu s členstvím uživatele ve skupině.

V přehledu uživatelů přiřazených k aktivitě se oba druhy přístupů zobrazují společně. Přístupy vzniklé ze skupinových pravidel jsou spravovány automaticky a administrátor je nemění ručně – jejich životní cyklus řídí pravidlo přiřazení a členství ve skupině.

Jak přiřadit uživatele k aktivitě ručně popisuje stránka [Přiřazení uživatelů k aktivitě](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/how-to/aktivity/prirazeni-uzivatelu-k-aktivite/index.md).

______________________________________________________________________

## Kde se pravidla konfigurují

Pravidla přiřazení se nastavují v sekci Nastavení na **záložce Přiřazení dle skupin**. Záložka umožňuje vytvářet nová pravidla, prohlížet existující a spravovat jejich parametry.

Podrobný popis záložky – včetně jednotlivých polí a průvodce vytvořením nového pravidla – najdete v části [Tab Přiřazení dle skupin](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/reference/tab-prirazeni-dle-skupin/index.md).

______________________________________________________________________

## Pozor na

Přiřazení dle skupin je samostatná funkce a nesouvisí s rolemi nebo oprávněními, která uživatel ve skupině má. Členství ve skupině a role v rámci skupiny jsou popsány na stránce [Uživatelská skupina](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/skupina/index.md) a [Role a oprávnění](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/role/index.md).

Chování systému při odebrání uživatele ze skupiny nebo při zrušení pravidla přiřazení může záviset na nastavení konkrétní instalace systému Competent. Pokud si nejste jistí, jak je Váš systém nakonfigurován, obraťte se na správce systému.

______________________________________________________________________

## Související stránky

- [Uživatelská skupina](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/skupina/index.md)
- [Přiřazení uživatelů k aktivitě](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/how-to/aktivity/prirazeni-uzivatelu-k-aktivite/index.md)
- [Přiřazení uživatele do skupiny](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/how-to/lide/prirazeni-uzivatele-do-skupiny/index.md)
- [Tab Přiřazení dle skupin](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/reference/tab-prirazeni-dle-skupin/index.md)
