"use strict" //neleidzia naudoti kitamuju be "let" ar "const"

// vienos eilutes komentaras

/*
keletos
eiluciu
komentaras
*/

console.log(121); // isveda skaicius i Console
console.log('Labas rytas') //isveda teksta i Console

/* 
Reiksmiu tipai:
    number (skaicius)
    string (tekstas)
    boolean (logine reiksme)
    array (sarasas)
    object (objektas)
*/

/* 
Kintamuju iniciavimo budai
    const (pagrindinis, rinktis by default)
    let (jeigu info keiciasi)
    var (nenaudoti!)
*/

//---------------------------------------------

// inicijuojame kintamaji kuris nesikeicia pvz. 2021
const metai = 2021;

// inicijuojame kintamaji kuris nesikeicia pvz. Petras
const vardas = 'Petras';

console.log(metai);
console.log(vardas);

console.log(metai, vardas);

console.log('Metai:', metai);

console.log('Asmens vardas:', vardas);
console.log('---------------------------------');
//---------------------------------------------

const pirmasSkaicius = 13;
const antrasSkaicius= 2;

const suma = pirmasSkaicius + antrasSkaicius;

console.log(suma);

console.log(pirmasSkaicius, '+', antrasSkaicius, '=', suma);

//pirmasSkaicius = 77; const reiskmes perrasyti negalima

console.log('---------------------------------');
//---------------------------------------------

// Norint keisti reiksmes naudojame let
let adresas = 'Vilnius'; // let leidzia perrasyti reiksmes
console.log(adresas);

adresas = 'Kaunas'; // keiciame reiksme
console.log(adresas);

console.log('---------------------------------');
//---------------------------------------------
// Pvz kur panaudotas let (reikalinga keisti konstantos reikme)
let pinigine = 0;

const pirmaAlga = 100;
pinigine = pinigine + pirmaAlga; // issaugome pirmaAlga reiksme i pinigine
console.log('Turiu pinigu:', pinigine);

const antraAlga = 300;
pinigine = pinigine + antraAlga; // issaugome antraAlga reiksme i pinigine
console.log('Turiu pinigu:', pinigine);

const treciaAlga = 450;
pinigine = pinigine + treciaAlga; // issaugome treciaAlga reiksme i pinigine
console.log('Turiu pinigu:', pinigine); // isvedame pinigine reikme i console

console.log('---------------------------------');
//---------------------------------------------
// Matematines operacijos
const s1 = 2;
const s2 = 4;

console.log(s1 + s2); // sudetis
console.log(s1 - s2); // atimtis
console.log(s1 * s2); // daugyba
console.log(s1 / s2); // dalyba
console.log(s1 ** s2); // kelimas laipsniu (s2)
console.log((2 + 2) * 2); // operaciju eiliskumas (prioritetai)

console.log('---------------------------------');

// Tekstines operacijos

const hi = 'Labas';
const morning = 'rytas';

const sayHi = hi + ' ' + morning + '!'; //reikalingas tarpas ' ' tarp zodziu
console.log(sayHi);

// tekste naudojamos dvigubos kabutes
const dvigubosTekste = 'tekste naudojamos dvigubos (") kabutes.';
console.log(dvigubosTekste);

// tekste naudojamos viengubos kabutes
const viengubosTekste = "tekste naudojamos viengubos (') kabutes.";
console.log(viengubosTekste);

// jei tekste naudojamos viengubos ir dvigubos kabutes - naudojame "\" norint praleisti (ignoruoti pasirinkta elementa)
const abiTekste1 = 'tekste naudojamos viengubos (\') ir dvigubos kabutes (")';
console.log(abiTekste1);

// jei tekste naudojamos viengubos ir dvigubos kabutes - naudojame "\" norint praleisti (ignoruoti pasirinkta elementa)
const abiTekste2 = "tekste naudojamos viengubos (') ir dvigubos kabutes (\")";
console.log(abiTekste2);


// Palaiko tik vienos eilutes teksta, naudojame "\" kiekvienos eilute gale kad istaisyti
// '+ +' ikelia kintama i teksta
// \n kelia i nauja eilute
const imgSrc = './img/pic.jpg'

const html = '<main>\n\
                <img src="'+ imgSrc +'">\n\
                    <div>\n\
                        <h1>404</h1>\n\
                        <p>Lorem ipsum</p>\n\
                    </div>\n\
                </main>';
console.log(html);


// naudojame `` ir ${kintamasis}, gaunasi tas pats tik tvarkingiau
const beautifulHTML = `<main>
                <img src="${imgSrc}">
                    <div>
                        <h1>404</h1>
                        <p>Lorem ipsum</p>
                    </div>
                </main>`;
console.log(beautifulHTML);

console.log('---------------------------------');

// `` kabuciu ir ${} kintamuju pvz
const person = 'Jonny Boy';
const candy = 'lolly pop';

const sentence = `${person} do you want a ${candy}?`;
console.log(sentence);

