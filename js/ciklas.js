/* 
1.	Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):
    a.	0 - 0
    b.	0 - 4
    c.	0 - 100
    d.	574 - 815
    e.	-50 - 50
    f.	-70 - 30
2.	panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:
    a.	pvz.: “abcdef” -> “fedcba”
3.	Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai:
    a.	0 - 11
    b.	8 - 31
    c.	-18 - 18
    d.	rezultatą pateikti tokiu formatu:
        i.	Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.
        ii.	Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra 3 vienetai.
        iii.	Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra 2 vienetai

*/

// Ciklo for panaudojimas -----------------------

// 1 Suskaiciuoti susumavus skaicius intervale tarp (imtinai)

let sumaA = 0;

for (let i = 0; i < 0; i++) { // ciklas prasideda nuo 0 (i=0), tesiasi kol i bus maziau uz 0, kas 1
    sumaA += i; // pridedame gauta reiksme sumaA = sumaA + i
}

console.log(sumaA);

let sumaB = 0;

for (let i = 0; i <= 4; i++) { //ciklas prasideda nuo 0 (i=0), tesiasi kol i bus maziau arba lygu uz 4, kas 1
    sumaB += i; // kiekvieno ciklo metu pridedame i reiksme prie kintamojo sumaB, sumaB = sumaB + i
}

console.log(sumaB);

let sumaC = 0;

for (let i = 0; i <= 100; i++) {
    sumaC += i;
}

console.log(sumaC);


let sumaD = 0;

for (let i = 574; i <= 815; i++) {
    sumaD += i;
}

console.log(sumaD);

let sumaE = 0;

for (let i = -50; i <= 50; i++) {
    sumaE += i;
}

console.log(sumaE);

let sumaF = 0;

for (let i = -70; i <= 30; i++) {
    sumaF += i;
}

console.log(sumaF);

// 2 Perrasyti teksto tipo kintamuju reikmes is kito galo

// a)

const text = 'abcdef'; // nurodome teksta
const size = text.length; // issaugome kintamojo ilgi size kintamajame
let reverseText = ''; // inicijuojame reverseText kintamaji kuriame saugosime apversta teksta

for (let i = 0; i < size; i++) { // cikla pradedame nuo 0, tesiame kol i bus lygu kintamojo ilgiui, kas 1
    const letter = text[i]; // i letter konstanta issaugome po viena raide pagal cikla i, i=0 -a, i=1 -b, i=2 -c..
    reverseText = letter + reverseText; // pridedame gauta raide i saraso pradzia, tai reiskia kiekviena sekanti raide bus pridedama is priekio, tokiu budu tekstas apsivercia is kito galo
    console.log(i, letter, reverseText); // isvedame visa procesa
}

// for (let i = 0; i < size; i++) { 
//     const letter = text[size - i - 1]; // i letter konstanta issaugome po viena raide nuo galo (6-0-1)=f, (6-1-1)=e, (6-2-1)=d
//     reverseText += letter; // pridedame po viena raide paeiliui, f, e, d, c, b, a
//     console.log(i, letter, reverseText);
// }

// for (let i = 1; i <= size; i++) { // pradedame nuo 1 (antros raides), kol i maziau arba lygu 6, kad 1
//     const letter = text[size - i]; // i letter konstanta issaugome raides nuo galo (6-1)=f, (6-2)=e, (6-3)=d (naudojame -i kad gauti vienu maziau, nes ilgis 6 o sarasas turi 5 pozicijas (5,4,3,2,1,0))
//     reverseText += letter; // pridedame po viena raide paeiliui, f, e, d, c, b, a
//     console.log(i, letter, reverseText); // isvedame visa procesa
// }

// for (let i = size - 1; i >= 0; i--) { // pradedame nuo i=(6-1)=5, kol i yra daugiau arba lygu 0, kas 1 zemyn
//     const letter = text[i]; //i letter konstanta issaugome po viena raide pagal cikla i, i=(6-1)5 -f, i=(6-2)4 -e, i=(6-3)3 -d
//     reverseText += letter; // pridedame po viena raide paeiliui, f, e, d, c, b, a
//     console.log(i, letter, reverseText); // isvedame visa procesa
// }

// for (let i = size; i > 0; i--) { // pradedame nuo 6 (size), kol i daugiau negu 0, kas 1 zemyn
//     const letter = text[i - 1]; // i letter konstanta issaugome po viena raide kadangi pozicijos 6 nera darome (i-1)5=f, (i-2)4=e. Size = 6, pozicijos sarase prasideda nuo 0, tai reikia atimti vieneta.
//     reverseText += letter; // pridedame po viena raide paeiliui, f, e, d, c, b, a
//     console.log(i, letter, reverseText); // isvedame visa procesa
// }

console.log('Finale gavau:', reverseText);

// 3 Suskaičiuoti, kiek nurodytame intervale (0-11, 8-31, -18-15) yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai

// a)

const from = 0; // nurodome ciklo pradzia
const till = 11; // nurodome ciklo pabaiga
const divider = 3; // nurodome dalikli

let count = 0;

for (let i = from; i <= till; i++) { //pradedame nuo pasirinkto skaiciaus, kol i maziau arba lygu galutiniam skaiciui, kas 1
    if (i % divider === 0) { // % - apskaiciuoja ar yra liekana, jeigu jos nera vykdo count++
        count++; // veikia kaip skaitliukas, kai tik if salyga tinka prideda viena.
    }
}

const ats = `Skaičių intervale tarp ${from} ir ${till}, besidalijančių be liekanos iš ${divider} yra ${count} vienetai.`;

console.log(ats);

// b)

const from2 = 0;
const till2 = 11;
const divider2 = 5;

let count2 = 0;

for (let i = from2; i <= till2; i++) {
    if (i % divider2 === 0) {
        count2++;
    }
}

const ats2 = `Skaičių intervale tarp ${from2} ir ${till2}, besidalijančių be liekanos iš ${divider2} yra ${count2} vienetai.`;

console.log(ats2);

// c)

const from3 = 0;
const till3 = 11;
const divider3 = 7;

let count3 = 0;

for (let i = from3; i <= till3; i++) {
    if (i % divider3 === 0) {
        count3++;
    }
}

const ats3 = `Skaičių intervale tarp ${from3} ir ${till3}, besidalijančių be liekanos iš ${divider3} yra ${count3} vienetai.`;

console.log(ats3);

