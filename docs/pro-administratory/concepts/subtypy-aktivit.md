# Subtypy aktivit: model a konfigurovatelnost

Každá aktivita v systému Competent patří nejen k určitému **typu**, ale také
k určitému **subtypu**. Zatímco typ určuje základní strukturální roli objektu
(zda jde o vzdělávací list, kontejner nebo hodnoticí formulář), subtyp přidává
vrstvu zákaznicky definovaného přednastaveného chování – sadu výchozích hodnot,
které se při vytvoření aktivity automaticky uplatní. Tato stránka vysvětluje,
co subtyp je, jak se vztahuje k typům aktivit a proč se konkrétní nabídka
subtypů liší od jedné instalace ke druhé.

---

## Typ aktivity a subtyp: dvě různé úrovně

### Typ aktivity

Typ aktivity je pevně daná strukturální kategorie. Systém Competent rozlišuje
čtyři typy: **Aktivita**, **Sada**, **Termínová sada** a **Hodnocení**. Tyto
čtyři hodnoty jsou stejné pro všechny zákazníky a nelze je přidávat ani
odebírat. Každý typ nese konkrétní pravidla – co může objekt obsahovat, kde
může být umístěn v hierarchii a jak se zobrazuje. Podrobnosti o jednotlivých
typech a jejich vztazích naleznete na stránce
[Aktivita: model a životní cyklus](aktivita.md).

Ikona objektu v hierarchii obsahu se řídí typem aktivity, nikoliv subtypem.

### Subtyp

Subtyp je jemnější rozlišení uvnitř jednoho typu. Na rozdíl od typů nejsou
subtypy pevně zabudovány do systému – každý zákazník si je definuje sám
v administraci. Subtyp patří vždy právě jednomu typu; subtypy různých typů
jsou navzájem oddělené.

Subtyp plní dva účely:

- **Rozlišení a filtrování.** Aktivity stejného typu lze pomocí subtypu dále
  třídit – například odlišit různé druhy prezenčních aktivit od aktivit
  realizovaných online.
- **Výchozí parametry.** Každý subtyp nese přednastavené hodnoty, které se
  automaticky přenesou do každé nově vytvořené aktivity daného subtypu.
  Jde o výchozí schéma, typ vyhodnocení, předvyplněný popis a další
  výchozí parametry.

---

## Volba subtypu při vytváření aktivity

Výběr probíhá ve dvou krocích. Při zakládání nové aktivity Vám systém
nejprve nabídne skupiny odpovídající čtyřem typům aktivit. Po výběru
skupiny se zobrazí konkrétní subtypy patřící k danému typu. Výběrem
subtypu se nové aktivitě nastaví obojí – jak její typ, tak subtyp.

Subtyp zvolený při vytváření je **neměnný** – po uložení aktivity jej
nelze změnit na jiný.

Konkrétní nabídka subtypů závisí na konfiguraci dané instalace. Například
v jedné instalaci mohou být pro typ Aktivita k dispozici subtypy jako
„elearning" nebo „školení", zatímco jiná instalace může mít subtypy
pojmenované a nastavené zcela odlišně. Typ Termínová sada mívá subtyp
nazvaný **Komplexní Sada** – tento název ilustruje, jak se jméno subtypu
záměrně liší od jména typu: typ popisuje strukturální kategorii
(kontejner s termíny a kapacitou), zatímco Komplexní Sada je pojmenovaná
zákaznická varianta tohoto kontejneru s vlastními výchozími nastaveními.

---

## Konfigurace subtypů

Subtypy aktivit jsou zákaznicky konfigurovatelné. V administraci na obrazovce
Nastavení naleznete záložku **Subtypy**, kde lze spravovat stávající subtypy
a přidávat subtypy nové. Nově vytvořený subtyp se okamžitě objeví v nabídce
při zakládání aktivity – pod svým typem.

Podrobný popis záložky Subtypy a postup konfigurace naleznete na stránce
[Tab Subtypy](../reference/tab-subtypy.md).

### Subtypy dalších objektů

Subtypy nejsou výhradou aktivit. Systém Competent používá stejný mechanismus
i pro další typy objektů – například pro uživatele, uživatelské skupiny nebo
kvalifikace. Princip je totožný, konkrétní nastavení se však liší podle druhu
objektu. Tato stránka se zaměřuje výhradně na subtypy aktivit.

---

## Pozor na

!!! warning "Termínová sada vs. Komplexní Sada"
    Název **Termínová sada** označuje **typ** objektu – jednu ze čtyř pevných
    strukturálních kategorií. Název **Komplexní Sada** označuje **subtyp**
    patřící k tomuto typu. Nejde o synonyma ani o zaměnitelné pojmy – jsou to
    dvě různé úrovně modelu. Konkrétní instalace může subtypy Termínové sady
    pojmenovávat jinak nebo jich mít více.

---

## Související stránky

- [Aktivita: model a životní cyklus](aktivita.md)
- [Detail aktivity](../reference/detail-aktivity.md)
- [Tab Subtypy](../reference/tab-subtypy.md)
