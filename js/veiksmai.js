/*  
1.	Susumuoti visus skaičiaus tipo kintamuosius
a.	Rezultatą išvesti į console
2.	Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas
a.	Rezultatą išvesti į console
3.	Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką
a.	1-2+3-4+5
b.	Rezultatą išvesti į console
4.	Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas


*/


const s1 = 2; // inicijuojame konstantas su kintamojo skaiciaus reiksmemis
const s2 = 7; // inicijuojame konstantas su kintamojo skaiciaus reiksmemis
const s3 = 5; // inicijuojame konstantas su kintamojo skaiciaus reiksmemis

const suma = s1 + s2 + s3; // atliekame kintamuju suma
console.log(suma); // isvedame i console

console.log('---------------------');

const t1 = 'Labas'; // inicijuojame konstantas su kintamojo teksto reikmemis
const t2 = 'rytas'; // inicijuojame konstantas su kintamojo teksto reikmemis
const t3 = 'sakau'; // inicijuojame konstantas su kintamojo teksto reikmemis
const t4 = 'tau'; // inicijuojame konstantas su kintamojo teksto reikmemis

const tekstas = t1 + ' ' + t2 + ' ' + t3 + ' ' + t4; // sudedame teksta i viena eilute su tarpais ' ' 
console.log(tekstas);

const tekstas2 = `${t1} ${t2} ${t3} ${t4}`; // sudedame teksta i viena eilute padaudodami `` ir kintamaji ${}
console.log(tekstas2); // isvedame i console

console.log('---------------------');

const n = [5, 2, 3, 4, 6]; // inicijuojame konstanta su saraso tipo kintamjuojo skaiciaus reiksmemis

const arraySuma = n[0] + n[1] + n[2] + n[3] + n[4]; // atliekame matematine sudeti
console.log(arraySuma); // isvedame i console

const alternuojantiSuma = n[0] - n[1] + n[2] - n[3] + n[4]; // atliekame atlernuojancios eilute matematinius veiksmus
console.log(alternuojantiSuma); // isvedame i console

console.log('---------------------');

const w = ['Lithuania', 'morning', 'Good']; // inicijuojame konstanta su saraso tipo kintamojo teksto reiksmemis

const sentence = w[2] + ', ' + w[1] + ', ' + w[0]; // sujungiame teksta norima tvarka su tarpais ' '
console.log(sentence); // isvedame i console