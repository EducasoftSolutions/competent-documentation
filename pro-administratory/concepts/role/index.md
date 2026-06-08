# Role a oprávnění

Competent řídí přístup uživatelů prostřednictvím **rolí**. Role není jen označení uživatele – je to pojmenovaná sada oprávnění, která systém vyhodnocuje při každé akci. Klíčem k pochopení celého modelu je rozlišení mezi **globální rolí** a **objektovou rolí**: první platí pro celý systém, druhá platí pouze ve vztahu ke konkrétnímu záznamu.

______________________________________________________________________

## Globální role

Globální role se přiděluje uživateli jako vlastnost jeho účtu a platí bez ohledu na to, s jakým objektem pracuje. Typickými příklady jsou role administrátora nebo role s právem přepínat do jiného účtu.

Uživatel s globální rolí smí provádět všechny akce, které daná role obsahuje, kdekoliv v systému. Proto je přidělování globálních rolí vyhrazeno administrátorům – každý uživatel, který ji obdrží, získá odpovídající rozsah oprávnění plošně.

Globální role nezná hranice objektu

Oprávnění plynoucí z globální role nelze omezit na konkrétní aktivitu, sadu nebo dokument. Pokud potřebujete oprávnění omezit na jeden objekt, použijte objektovou roli.

______________________________________________________________________

## Objektové role

Objektová role popisuje vztah mezi uživatelem a konkrétním objektem – například aktivitou, skupinou uživatelů nebo dokumentem. Teprve spolu s touto vazbou má role smysl: „Anna je lektorka *této* aktivity" je jiný výrok než „Anna je lektorka".

Díky tomu lze nastavit, aby jedna osoba měla práva lektora u jedné aktivity a práva pouhého účastníka u jiné – bez jakékoliv globální změny jejího účtu.

Objektové role se přiřazují přímo u daného záznamu, zpravidla v sekci **Práva** nebo **Účastníci**. Přesné označení se může mírně lišit podle verze rozhraní. Kdo smí roli přiřadit, závisí na tom, jaké role sám přiřazující uživatel má (viz níže).

______________________________________________________________________

## Oprávnění a jejich typologie

Každá role (globální i objektová) je tvořena sadou oprávnění. Systém rozlišuje tyto základní kategorie:

| Kategorie       | Příklady akcí                                             |
| --------------- | --------------------------------------------------------- |
| **Zobrazit**    | Zobrazit záznam v přehledu                                |
| **Číst**        | Zobrazit detail včetně skrytého nebo archivovaného obsahu |
| **Vytvořit**    | Vytvořit nový záznam daného typu                          |
| **Upravit**     | Upravit existující záznam                                 |
| **Smazat**      | Smazat záznam                                             |
| **Změnit stav** | Změnit stav záznamu (např. publikovat aktivitu)           |
| **Registrovat** | Přihlásit uživatele na aktivitu                           |
| **Spustit**     | Spustit aktivitu (e-learning modul)                       |

Mezi oprávněními existují závislosti: například **Upravit vyžaduje Číst**. Systém tuto závislost vynucuje automaticky – roli, která má právo upravovat, musí mít uděleno i právo číst.

Globální oprávnění (např. správa šablon notifikací, editace navigace) jsou ve svém charakteru celosystémová a nemají vazbu na konkrétní objekt.

______________________________________________________________________

## Dědění oprávnění ve stromě objektů

Objekty v Competent tvoří hierarchii: skupiny uživatelů mohou být zanořeny, aktivity se zařazují do sad a podobně. Objektové role se v této hierarchii **dědí směrem dolů**: pokud je uživatel přiřazen v určité roli k nadřazenému objektu, platí jeho oprávnění i pro objekty zanořené pod ním – pokud to role výslovně nevylučuje.

Pravidlo pro vyhodnocení přístupu lze shrnout takto:

Uživatel smí provést akci, pokud má globální roli s daným oprávněním, nebo je přiřazen k objektu (nebo jeho rodiči ve stromě) v roli, která dané oprávnění obsahuje.

______________________________________________________________________

## Systémové role: Vlastník a Účastník

Competent přiřazuje dvě speciální role automaticky – bez zásahu administrátora.

**Vlastník (owner)** se stane uživatel v okamžiku, kdy objekt vytvoří. Vlastník má nad daným objektem plná práva a navíc může ostatním uživatelům přiřazovat objektové role – i tehdy, pokud by jinak neměl právo správy rolí.

**Účastník (participant)** je role, kterou systém přidělí uživateli při registraci na aktivitu, zařazení do skupiny nebo jiném připojení k objektu. Účastník typicky získá základní práva pro zobrazení záznamu, se kterým je svázán.

Obě role jsou systémové: nelze je ručně odstranit ze sady rolí v nastavení a systém je spravuje sám.

______________________________________________________________________

## Delegování: kdo smí přiřazovat role

Přiřazovat role mohou uživatelé ve třech situacích:

1. Uživatel má globální oprávnění pro správu rolí (typicky administrátor).
1. Uživatel je **vlastníkem** daného objektu – v takovém případě smí k tomuto objektu přiřazovat libovolnou objektovou roli.
1. Role vyšší úrovně (např. administrátor oddělení) má v systému nastaveno oprávnění přiřazovat určité podřízené role (např. role lektora nebo vedoucího).

U některých zákazníků se objektové role přidělují automaticky podle organizační struktury – manažeři tak bez manuálního nastavení získají oprávnění vůči svým podřízeným.

______________________________________________________________________

## Související stránky

- [Jak přiřadit roli uživateli](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/how-to/lide/prirazeni-role-uzivateli/index.md)
- [Jak nastavit práva k aktivitě](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/how-to/aktivity/nastaveni-prav-k-aktivite/index.md)
- [Přehled rolí a oprávnění](https://educasoftsolutions.github.io/competent-documentation/pro-administratory/reference/prehled-roli-a-opravneni/index.md)
