# Sdílené aktivity: mechanismus a princip

Sdílená aktivita umožňuje zobrazit jednu a tutéž aktivitu na více místech ve Stromu aktivit, aniž by vznikla její kopie. Díky tomu se centrálně spravovaný obsah automaticky projeví všude, kde je aktivita sdílena. Tato stránka vysvětluje, co sdílená aktivita je, jak funguje vztah mezi zdrojovou a sdílenou aktivitou, kam lze sdílenou aktivitu umístit a čím se liší od běžné aktivity nebo štítku.

______________________________________________________________________

## Co je sdílená aktivita

Sdílená aktivita je **odkaz (reference) na zdrojovou aktivitu** – nikoli její kopie ani duplikát. V systému Competent existuje vždy jen jedna zdrojová aktivita; sdílené aktivity jsou její výskyty zobrazené na dalších místech stromu.

Veškerý obsah i nastavení (detail, výukový obsah, dokumenty, podmínky, přiřazení uživatelů) jsou shodné se zdrojovou aktivitou. Z pohledu studenta není mezi zdrojovou a sdílenou aktivitou žádný rozdíl – obě jsou dostupné a chovají se stejně.

Klíčový důsledek tohoto modelu: **změny provedené na zdrojové aktivitě se automaticky projeví ve všech jejích sdílených výskytech.** Centrální správa obsahu tak nevyžaduje ruční aktualizaci každého výskytu zvlášť.

______________________________________________________________________

## Kam lze sdílenou aktivitu umístit

Sdílenou aktivitu lze umístit **pouze do Sady**. Neumisťuje se do složek ani do Termínových sad.

Podrobnosti o Sadě jako kontejneru naleznete na stránce [Sada: struktura, hierarchie a splnění](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/sada/index.md).

______________________________________________________________________

## Jak je sdílená aktivita odlišena ve stromu

Ve Stromu aktivit je sdílená aktivita vizuálně odlišena od běžných aktivit **nevyplněnou (obrysovou) ikonou**. Díky tomu lze na první pohled rozpoznat, zda se jedná o zdrojový objekt nebo o sdílený výskyt.

Se sdíleným výskytem jsou ve Stromu aktivit záměrně **omezeny tyto operace**:

- **Přetáhnout (drag)** – sdílený výskyt nelze přesunout přetažením.
- **Přejmenovat** – název se dědí ze zdrojové aktivity a nelze jej na výskytu měnit.
- **Měnit práva** – přístupová práva se spravují na zdrojové aktivitě, ne na výskytu.

Smazáním sdíleného výskytu se odebere pouze daná vazba – zdrojová aktivita i ostatní výskyty zůstanou nedotčeny.

Nelze sdílet sdílenou aktivitu

Ze seznamu aktivit nabízených k nasdílení jsou sdílené aktivity vyloučeny. Sdílet lze pouze zdrojové (běžné) aktivity – nikoli výskyty, které jsou samy výsledkem sdílení.

______________________________________________________________________

## Zdrojová aktivita a přehled sdílení

Zdrojová aktivita je centrální místo správy. Veškeré úpravy obsahu nebo nastavení se provádějí zde a automaticky se projeví ve všech sdílených výskytech.

V detailu zdrojové aktivity naleznete záložku **Sdílení** (zobrazuje se s počtem výskytů v závorce, například „Sdílení (1)"). Záložka uvádí přehled všech Sad, ve kterých je aktivita sdílena, a umožňuje příslušné Sady zobrazit přímo ve Stromu aktivit.

Podrobný popis záložek a polí detailu aktivity naleznete v části [Detail aktivity](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/reference/detail-aktivity/index.md).

Zdrojová aktivita s výskyty nejde smazat

Zdrojovou aktivitu nelze smazat, dokud z ní existují sdílené výskyty. Před smazáním zdrojové aktivity je nutné nejprve zrušit všechny sdílené výskyty.

______________________________________________________________________

## Sdílená aktivita, běžná aktivita a štítek

Sdílená aktivita se na první pohled může zaměnit se dvěma jinými koncepty:

**Sdílená aktivita vs běžná aktivita:** Běžná aktivita má jedno primární umístění ve stromu. Sdílená aktivita je tatáž aktivita zobrazená navíc na dalších místech jako výskyt – není to nová entita, ale reference na existující zdrojovou aktivitu.

**Sdílená aktivita vs štítek:** Sdílení se týká **umístění** téže aktivity na více míst ve Stromu aktivit. Štítek je naproti tomu **klasifikační značka** – přiřazuje se aktivitě pro potřeby filtrování a kategorizace, ale nemění umístění aktivity ve stromu. Jedné aktivitě lze přiřadit více štítků; štítky nevytvářejí výskyty.

Podrobnosti o štítcích naleznete na stránce [Štítky](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/stitky/index.md).

______________________________________________________________________

## Související stránky

- [Aktivita: model a životní cyklus](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/aktivita/index.md)
- [Sada: struktura, hierarchie a splnění](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/sada/index.md)
- [Termínová sada](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/terminova-sada/index.md)
- [Složky aktivit](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/slozky-aktivit/index.md)
- [Štítky](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/stitky/index.md)
- [Detail aktivity](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/reference/detail-aktivity/index.md)
- [Obrazovka Aktivity](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/reference/obrazovka-aktivity/index.md)
- [Jak sdílet aktivitu (připravujeme)](#)
