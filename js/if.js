// Kintamuju palyginimas

/* 

OPERATORIAI:

Naudotini: <, >, <=, >=, ===, !==
Ne naudotini: ==, !=

"==" - palyginimas ar lygu (a=b) <-- NENAUDOJAMAS. Naudoti ===
"!=" - palyginimas ar nelygu (a=/b) <-- NENAUDOJAMAS. Naudoti !==
"===" - palygina ir tikrina tipus(reikmes) (jei nesutampa - nevykdo)

if (tikrinima salyga) {
    jei tenkinama
} else {
    jei ne tenkinama
}

SABLONAI 

if () {}
if () {} else {}
if () {} else if {} .... else if () {}
if () {} else if {} .... else if () {} else {}


*/

const a = 4; //inicijuojame konstanta
const b = '2'; //inicijuojame konstanta

const c = +b; // konvetuojame string to number
console.log(c);

if (a > c){ // lyginame pagal nurodyta salyga
    console.log ('taip') // jeigu salyga tenkinama, vykdo sita 
} else {
    console.log('ne'); // jeigu salyga netenkinama, vykdo sita
}

// if gali buti ir be "else"
if (a <= c){
    console.log ('taip')
}

// 
if (a === c){
    console.log ('taip')
} else {
    console.log('ne');
}



const spalva = 'melyna';

if (spalva ==='raudona') {
    console.log('Ryski');
} else {
    console.log('Neryski');
}



// Su papildomu patikrinimu (jei ne raudona, tai gal melyna? ir taip iki begalybes)
const spalva = 'raudonos';

if (spalva === 'melyna') { // sulygina nurodyta teksta su konstanta 'spalva'
    console.log('Arijai!'); // jeigu tenkina vykdo
} else if (spalva === 'zalia') { // jeigu netenkita pirma salyga tikrina galbut sita tenkina (patikrink gal sita?)
    console.log('Gerai slepiasi zolej 🦗');
} else if (spalva === 'rudos') { // jeigu netenkina antra salyga, tikrina galbut sita tenkina (patikrink gal sita?)
    console.log('Angry bird 😬😬');
} else if (spalva === 'raudonos') { // jeigu netenkina trecia salyga, tikrina galbut sita tenkina (patikrink gal sita?)
    console.log('Turbut programuotojas... 💻🐱‍👤');
} else {
    console.log('A tu turi akis? 👀👀👀'); // jeigu netenkina nei viena salyga, vykdo sita
}


// monetos metimas
//if () {} else if {}.... else if{}... else if{}
const moneta = 'briad';

if (moneta === 'skaicius') {
    console.log('Iskrito skaicius ✌');
} else {
    if (moneta === 'herbas') {
        console.log('Iskrito herbas 💰');
    } else {
        if (moneta === 'briauna') {
            console.log('Moneta nukrito ant briaunos 😮');
        } else {
            console.log('tai moneta vis dar ore???');
        }
    }
}

// 

const namoTipas = 'namas';          // namas, butas
const kaipKilti = 'laiptai';        // laiptai, liftas

if (namoTipas === 'namas') {
    if (kaipKilti === 'laiptai') {
        console.log('Ieinu i nama ir kilu laiptais');
    } else if (kaipKilti === 'liftas') {
        console.log('Ieinu i nama ir kilu liftu');
    } else {
        console.log('Ienu i nama ir nera kaip kilti i virsu');
    }
} else if (namoTipas === 'butas') {
    if (kaipKilti === 'laiptai') {
        console.log('Ieinu i daugiaaukti nama ir kilu laiptais');
    } else if (kaipKilti === 'liftas') {
        console.log('Ieinu i daugiaaukti nama ir kilu liftu');
    } else {
        console.log('Ienu i daugiaaukti nama ir nera kaip kilti i virsu');
    }
} else {
    console.log('Nurodytas namo tipas nezinomas');
}