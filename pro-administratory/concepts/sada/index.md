# Sada: struktura, hierarchie a splnění

Sada je typ aktivity v systému Competent, jehož úlohou je seskupovat dílčí aktivity do jednoho vzdělávacího celku. Na rozdíl od koncové aktivity Sada sama o sobě výukový obsah nenese – jejím smyslem je strukturovat a seskupit. Tato stránka vysvětluje, co Sada je, co může obsahovat, jak se liší od příbuzných konceptů a jak funguje mechanismus Částečného splnění.

______________________________________________________________________

## Co je Sada

Sada je kontejner: sdružuje koncové aktivity, vnořené Sady a Termínové sady do jednoho celku. Samotný výukový obsah (e-learning, prezentace a podobně) nesou dílčí aktivity uvnitř Sady – Sada jako taková slouží jen jako organizační obálka.

Každá Sada musí mít přiřazen **subtyp**, který je povinnou volbou při vytváření. Subtyp určuje vedlejší vlastnosti Sady. Přehled dostupných subtypů naleznete na stránce [Subtypy aktivit](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/subtypy-aktivit/index.md).

Sada lze uživateli **přiřadit jako celek**. Přiřazení se automaticky propaguje na všechny dílčí aktivity uvnitř – není třeba přiřazovat každou aktivitu samostatně. Studentovi se přiřazená Sada zobrazí na nástěnce; dílčí aktivity se zobrazí až po rozkliknutí.

______________________________________________________________________

## Co Sada může obsahovat

Sada je flexibilní kontejner, který akceptuje tři typy dílčích položek:

- **Aktivity** – koncové vzdělávací objekty (e-learning, formulář a podobně).
- **Vnořené Sady** – Sada může obsahovat další Sady, čímž vzniká víceúrovňová hierarchie.
- **Termínové sady** – kontejnery s termíny a kapacitou.

Termínová sada se od Sady liší tím, že může obsahovat **pouze aktivity** – nelze do ní vkládat další Sady ani jiné Termínové sady. Toto omezení je záměrné: Termínová sada organizuje aktivity kolem konkrétních termínů a kapacit, nikoliv jako obecný hierarchický kontejner. Podrobnosti o Termínové sadě viz [Termínová sada (připravujeme)](#).

______________________________________________________________________

## Sada, Aktivita a Termínová sada: srovnání

Tři hlavní typy kontejnerů a listů v hierarchii obsahu se liší svou rolí a pravidly vnořování:

| Typ            | Role                        | Co může obsahovat              |
| -------------- | --------------------------- | ------------------------------ |
| Aktivita       | list – přímý výukový objekt | nic (nemůže mít děti)          |
| Sada           | kontejner                   | aktivity, Sady, Termínové sady |
| Termínová sada | kontejner s termíny         | pouze aktivity                 |

Aktivita (typ list) je přímým výukovým objektem – má výukový obsah, ale nemůže mít podřízené položky. Sada je opakem: podřízené položky mít může, výukový obsah vlastní nenese.

______________________________________________________________________

## Sada a složka: kritická odlišnost

Sada není složka

V systému Competent existují dva strukturálně odlišné koncepty, které se na první pohled mohou jevit podobně: **Sada** a **složka**. Tyto pojmy NELZE zaměňovat.

**Sada** je typ aktivity: lze ji přiřadit uživateli, sledují se výsledky jejího plnění a má životní cyklus jako každá jiná aktivita.

**Složka** je organizační struktura v hierarchii obsahu – pomáhá udržet přehlednost v administraci, ale nelze ji přiřadit uživateli ani k ní tvořit přístupy. Plnění složky se nesleduje.

Sada má se složkou jednu společnou vlastnost: může obsahovat podřízené objekty. Na rozdíl od složky ale Sada nemůže obsahovat podsložky – vztah mezi Sadou a složkou je tedy asymetrický. Více o principech organizace obsahu přes složky viz [Složky aktivit (připravujeme)](#).

______________________________________________________________________

## Částečné splnění

Sada má parametr **Částečné splnění**, který ovlivňuje, za jakých podmínek je Sada považována za splněnou:

- **Částečné splnění: Ne** (výchozí stav) – ke splnění Sady musí být splněny všechny dílčí aktivity.
- **Částečné splnění: Ano** – ke splnění Sady postačí splnit kteroukoli jednu dílčí aktivitu. Jde tedy o logiku OR: splní-li uživatel libovolnou z aktivit uvnitř Sady, celá Sada se označí jako splněná.

Ve standardním nasazení je parametr Částečné splnění v administraci skrytý a v běžném admin formuláři se nezobrazuje. Pokud potřebujete tento parametr zpřístupnit nebo změnit, obraťte se na správce systému. Přehled záložek a parametrů obrazovky Sady naleznete v [Detailu sady](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/reference/detail-sady/index.md).

______________________________________________________________________

## Záložka Obsah a úprava obsahu

Strukturu dílčích položek Sady spravujete na záložce **Obsah** v detailu Sady. Záložka zobrazuje seznam přiřazených aktivit, vnořených Sad a Termínových sad. Pro přidávání a přesouvání položek slouží tlačítko **Upravit obsah**.

______________________________________________________________________

## Související stránky

- [Aktivita: model a životní cyklus](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/aktivita/index.md)
- [Subtypy aktivit](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/subtypy-aktivit/index.md)
- [Detail sady](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/reference/detail-sady/index.md)
- [Jak přiřadit aktivitu uživatelům](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/how-to/aktivity/prirazeni-uzivatelu-k-aktivite/index.md)
- [Termínová sada (připravujeme)](#)
- [Složky aktivit (připravujeme)](#)
