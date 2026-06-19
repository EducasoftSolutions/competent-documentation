# Termínová sada: princip a model

!!! warning "Funkce ve vývoji"
    Termínová sada je v aktuální verzi Competentu funkce ve vývoji. Doporučujeme
    před použitím ověřit stav s Vaším správcem systému nebo podporou Educasoft.

Termínová sada je typ kontejnerové aktivity v systému Competent. Na rozdíl od
běžné Sady organizuje aktivity kolem konkrétních termínů – každý termín
reprezentuje jedno datum, čas a místo konání. Tato stránka vysvětluje, čím se
Termínová sada liší od Sady, co může obsahovat a z čeho se termín skládá.

---

## Co je Termínová sada

Termínová sada je kontejner: sdružuje dílčí aktivity do jednoho vzdělávacího
celku spojeného s termíny konání. Sama o sobě výukový obsah nenese – ten je
uložen v dílčích aktivitách uvnitř. V tomto ohledu se Termínová sada chová
stejně jako Sada.

Termínová sada je přiřaditelná uživatelům. Přiřazení probíhá ke konkrétnímu
termínu Termínové sady, nikoliv k Termínové sadě jako celku bez termínu.

Termínová sada má, stejně jako každý jiný typ aktivity, přiřazený **subtyp**.
Subtyp není totožný s typem: **Termínová sada** je název *typu* aktivity,
zatímco **Komplexní Sada** je příkladem *subtypu* tohoto typu.
Přehled dostupných subtypů naleznete na stránce
[Subtypy aktivit](subtypy-aktivit.md).

---

## Termínová sada vs. Sada: klíčové rozdíly

Termínová sada a Sada jsou oba kontejnery, avšak ve dvou podstatných rysech se
liší:

**1. Záložka Termíny**

Termínová sada vždy zobrazuje záložku **Termíny**. Tato záložka je trvalou
součástí Termínové sady bez ohledu na jakékoli nastavení. U běžné Sady záložka
Termíny přítomna není.

**2. Omezení obsahu**

Termínová sada může obsahovat **pouze aktivity**. Nelze do ní vkládat Sady ani
jiné Termínové sady. Sada toto omezení nemá – může obsahovat aktivity, vnořené
Sady i Termínové sady.

Srovnání obou typů spolu s Aktivitou naleznete v tabulce na stránce
[Sada: struktura, hierarchie a splnění](sada.md).

---

## Co Termínová sada může obsahovat

Termínová sada je záměrně omezená v tom, co může obsahovat:

- **Aktivity** – výhradně listové vzdělávací objekty (e-learning, školení
  a podobně).

Sady ani jiné Termínové sady jako podřízené položky nejsou povoleny. Toto
omezení odráží účel Termínové sady: organizovat aktivity kolem konkrétních
termínů a kapacit, nikoliv budovat obecnou víceúrovňovou hierarchii.

---

## Model termínu

V rámci Termínové sady se vytváří jednotlivé termíny. Každý termín reprezentuje
jedno konkrétní datum a místo konání. Termín se skládá z těchto atributů:

| Atribut | Popis |
|---------|-------|
| **Název** | Název termínu |
| **Popis** | Popis termínu (nepovinný) |
| **Začátek termínu** | Datum a čas začátku |
| **Konec termínu** | Datum a čas konce |
| **Místo termínu** | Místo konání |

Aktivity uvnitř termínu mohou mít vlastní data dostupnosti v rámci daného
termínu.

---

## Záložka Termíny a záložka Obsah

Na záložce **Termíny** spravujete jednotlivé termíny – jejich název, čas
a místo.

Obsah Termínové sady – přiřazené aktivity – spravujete na záložce **Obsah**.

Přehled záložek a parametrů obrazovky Termínové sady naleznete v
[Detailu sady](../reference/detail-sady.md).

---

## Přiřazení uživatelů

Přiřazení uživatelů probíhá ke konkrétnímu termínu Termínové sady.

---

## Související stránky

- [Aktivita: model a životní cyklus](aktivita.md)
- [Sada: struktura, hierarchie a splnění](sada.md)
- [Subtypy aktivit](subtypy-aktivit.md)
- [Detail sady](../reference/detail-sady.md)
- [Složky aktivit (připravujeme)](#)
