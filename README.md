### Gál Kristóf Portfolio ###

## FUTTATÁS ##

# A projekt futtatása 3 lépésben lehetséges #

- 1: Elsőkörben az `npm install` parancs lefuttatása, hogy a szükséges csomagok letöltődjenek. * - ezt elég csak a legelső indításkor lefuttatni.
- 2: Másodjára, futtassuk a `ng serve` parancsot, hogy elinduljon az Angular szerver.
- 3: A böngészőben nyissuk meg a `http://localhost:4200` oldalt.

Alternatív megoldás, hogy a kész projekt megtekinthető a `https://galkristof.eu` weboldalon.

## FELÉPÍTÉS ##

A projekt az `app.component.html`-ben áll össze, amiben az összes komponens meghívásra kerül.

Az adatok az `src/app/data` fájljaiból töltődnek be.

## HASZNÁLAT ##

Az oldalon található egy navigációs sáv (mely telefonon hamburger menüvé változik), amivel elnavigálhatunk az oldal fontos elemeire, de természetesen görgethetünk is.

A navigációs sávban találunk három fontos beépített funkciót: 
- Egy nyelvválasztót (magyar és angol között változik kattintásra).
A nyelvválasztó a languageServicere épül. 
A service lekéri a felhasználó által használt nyelvet, ha talál benne magyart, akkor az lesz az alapértelmezett nyelv, egyébként pedig az angol.

- Egy témaválasztót. (villanykörte / hold ikon)
A témaválasztó a navigációs komponensben épül fel. A felhasználó eszközének alapértelmezett stílusát veszi figyelembe.
Ez lehet sötét, vagy világos. A kettő közül azt részesíti előnyben, amelyik be van állítva - ha nem talál ilyet, akkor viszont a sötét kerül beállításra.
Ez csupán egyéni preferencia, mivel a sötét egyéni véleményem szerint jobban néz ki.

- Egy nyilat.
Ez már nem is a sávban található meg, hanem a böngésző jobb alsó sarkában, viszont a navigáció része.
Ez arra szolgál, hogy ha lentebb görgettünk, akkor egy gombot megnyomva kényelmesen visszamehessünk az oldal tetejére.

A 'Magamról' résznél csak az Iskola kattintható elem, egyébként csak egy szép effektnek tartottam kiemelni azt, amelyiken éppen rajta a kurzor, a kártya önmagában nem kattintható.

A képességeim részben nem feltétlenül azt szemléltetem, hogy az adott nyelv/eszközből mekkora a tudásom, hanem önmagamhoz képest hány %-ra saccolom a tudásomat.
A HTML, Bootstrapben vagyok a legmagabiztosabb és így sorban, a felsoroltak szerint.
A teljes projekt birtokában egyébként a konkrét számok is megtekinthetőek az `src/app/data/skill-list.ts` fájlt megnyitva.

A referencia résznél a referenciát kiválasztva egy modalt nyit meg a böngésző, amit az Angular Material biztosít. 
Itt megtekinthetőek a korábbi referenciáim, továbbá az is, hogy milyen tech stackre épül az adott projekt.
Fontos, hogy csak a legfontosabbakat választottam ki - nem biztos, hogy minden projektnél csak az volt használatban.

Végül a kapcsolat résznél két fontos dolgot tartok kiemelendőnek.
- Csak egy email küldés miatt nem szerettem volna most backendet írni (NestJS nodemailerrel készítettem már hasonlót), ezért kerestem rá egy alternatív megoldást.
Az EmailJS-re esett a választásom, egész könnyű volt vele dolgozni, megadtam a szolgáltatóm adatait, egy template-t volt szükséges elkészíteni és már össze is lehetett kötni.
Az EmailJS biztosít havi 200 email küldést ingyenesen.

- A Google reCAPTCHA.
Fontosnak tartom, hogy botok ne spameljék tele a levélládámat, ezért megoldást kerestem rá.
Elsőkörben saját módszerrel próbáltam megoldani, írtam rá egy matematikai feladvány generátort (csupán egyszerű, 8 + 7, 6 - 5 szintű feladatok).
Viszont ismerőseim lebeszéltek róla, mivel nem volt elég egyértelmű, hogy mit keres ott stb, a 'robotellenőrzés' felirat sem volt a legpraktikusabb.
Így utána néztem a reCAPTCHA beillesztésének módszeréről és rájöttem, hogy ez sem egy nagy ördöngősség.

## UTÓIRAT ##

A projekt létrehozása során törekedtem arra, hogy lehetőleg SVG-ket és WEBP fájlokat alkalmazzak annak érdekében, hogy az oldal gyorsan betöltődhessen és remek felhasználói élményt tudjak biztosítani.

Ha szeretnének megkeresni, az alábbi elérhetőségeken megtalálnak:
- [LinkedIn]  `https://www.linkedin.com/in/kristofgal`
- [Facebook]  `https://www.facebook.com/kristof.gal.75`
- [Email]     `info@galkristof.eu`
- [Github]    `https://github.com/GalKristof`