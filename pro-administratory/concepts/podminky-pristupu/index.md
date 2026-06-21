# Podmínky přístupu: prerekvizity a vyhodnocení

Podmínky přístupu říkají systému Competent, **které jiné aktivity musí uživatel splnit, než mu bude zpřístupněn obsah podmíněné aktivity**. Nejde o omezení samotného přiřazení – uživatel může být k aktivitě přiřazen a jeho přístup být ve stavu Spuštěno, ale bez splnění podmínek obsah spustit nemůže. Tato stránka vysvětluje mechanismus podmínek, logiku jejich kombinování a způsob, jakým systém vyhodnocení provádí.

______________________________________________________________________

## Co podmínky přístupu blokují

Podmínky přístupu blokují **spuštění obsahu aktivity** – například otevření SCORM kurzu nebo jiného studijního materiálu. Nebrání tomu, aby byl uživatel k aktivitě přiřazen, ani aby jeho přístup k aktivitě existoval.

Pokud uživatel podmínky nesplňuje:

- Přístup uživatele k aktivitě existuje a může být ve stavu **Spuštěno**.
- Obsah aktivity **nelze spustit**, dokud nejsou podmínky splněny.

Podmínky se konfigurují v záložce **Podmínky** v Detailu aktivity.

______________________________________________________________________

## Logika stromu podmínek

Podmínky tvoří strom. Na nejvyšší úrovni stromu jsou jednotlivé aktivity a skupiny požadovány **a zároveň** – uživatel musí splnit všechny z nich.

Tam, kde stačí splnit alespoň jednu z více aktivit, se používá skupina **„a jednu z možností"**. Uvnitř takové skupiny jsou větve pojmenované **Možnost A**, **Možnost B** atd. Uživatel musí splnit právě jednu libovolnou z nich.

Skupiny „a jednu z možností" lze vnořovat, takže výsledný strom může vyjádřit libovolně složitá kombinační pravidla.

**Příklad:** aktivita vyžaduje splnění Aktivity 1 a zároveň splnění alespoň jedné z Aktivity 2 nebo Aktivity 3.

```
flowchart TD
    Root["Je třeba splnit (a zároveň)"]
    A1["Aktivita 1"]
    OR["a jednu z možností"]
    MA["Možnost A: Aktivita 2"]
    MB["Možnost B: Aktivita 3"]

    Root --> A1
    Root --> OR
    OR --> MA
    OR --> MB
```

______________________________________________________________________

## Kdy se podmínky vyhodnocují

Vyhodnocení podmínek probíhá **automaticky** – systém jej spustí pokaždé, když se změní stav nebo výsledek prerekvizitní aktivity u daného uživatele. To nastane například při přiřazení aktivity, při splnění pokusu nebo při zrušení přístupu.

Výsledek vyhodnocení (zda jsou podmínky splněny) je uložen v přístupu uživatele. Systém jej použije při každém pokusu o spuštění obsahu.

______________________________________________________________________

## Co musí uživatel splnit

Podmínka vázaná na konkrétní aktivitu je vyhodnocena jako **splněná**, pokud uživatel tuto prerekvizitní aktivitu **úspěšně splnil**. Není přitom rozhodující, ve kterém konkrétním stavu se přístup uživatele k prerekvizitě nachází – rozhoduje výsledek přístupu.

Podrobnosti o stavech přístupu uživatele a jejich vztahu k výsledkům najdete na stránce [Pokusy uživatele: přístupy, pokusy a výsledky](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/pokusy-uzivatele/index.md).

______________________________________________________________________

## Dědičnost podmínek z nadřazené aktivity

Pokud je aktivita součástí hierarchie, může záložka **Podmínky** zobrazit informaci, že podmínka je nastavena dle podmínky na nadřazené aktivitě. V takovém případě aktivita přebírá podmínky z nadřazeného uzlu.

Pokud je potřeba podmínky pro danou aktivitu od rodiče oddělit, je k dispozici tlačítko **Osamostatnit od podmínky na nadřazené Aktivitě**.

______________________________________________________________________

## Záložka Podmínky: co zobrazuje

Záložka **Podmínky** je součástí Detailu aktivity. Co zobrazuje, závisí na tom, zda jsou podmínky nastaveny a zda máte oprávnění k úpravě:

| Situace                                               | Co záložka zobrazuje                                                                                                                                |
| ----------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Podmínky nejsou nastaveny, máte oprávnění k editaci   | Tlačítko **Nastavit podmínky**. Pokud existuje nadřazená aktivita s podmínkami, zobrazí se také tlačítko **Převzít podmínky z nadřazené Aktivity**. |
| Podmínky nejsou nastaveny, oprávnění k editaci nemáte | Záložka je prázdná – žádný text ani tlačítko.                                                                                                       |
| Podmínky jsou nastaveny                               | Nadpis **Je třeba splnit:** a pod ním strom podmínek s možností odstranit jednotlivé položky.                                                       |

Přidávat podmínky do stromu lze přes akční menu, které nabízí dvě volby:

- **Aktivita** – přidá konkrétní aktivitu jako prerekvizitu.
- **Více možností** – vytvoří skupinu „a jednu z možností" pro větvení s volitelnou alternativou.

______________________________________________________________________

## Pozor na

- Podmínky přístupu blokují **spuštění obsahu**, ne samotný přístup uživatele. Uživatel s přístupem ve stavu Spuštěno, který podmínky nesplňuje, aktivitu „má" přiřazenu – jen nemůže otevřít obsah.
- V záložce Podmínky se v akčním menu může zobrazit i volba **Kvalifikace**. Tato volba v základní konfiguraci systému nemá efekt. Pokud ji vidíte a chcete ji využít, obraťte se na dodavatele.

______________________________________________________________________

## Související stránky

- [Aktivita: model a životní cyklus](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/aktivita/index.md)
- [Pokusy uživatele: přístupy, pokusy a výsledky](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/pokusy-uzivatele/index.md)
- [Stavy aktivity: přechody a životní cyklus](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/stavy-aktivity/index.md)
- [Schémata aktivity](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/concepts/schemata-aktivity/index.md)
- [Detail aktivity](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/reference/detail-aktivity/index.md)
- [Nastavení podmínek přístupu](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/how-to/aktivity/podminky-pristupu/index.md)
