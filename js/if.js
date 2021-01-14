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
if () {} else if {}.... else if{}... else if{}
if () {} else if {}.... else if{}... else {if {} else{}}


*/

const a = 4;
const b = 2;

if (a > b){
    console.log ('taip')
} else {
    console.log('ne');
}

// if gali buti ir be "else"
if (a <= b){
    console.log ('taip')
}

// 
if (a === b){
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



// Su papildomu patirinimu (jei ne raudona, tai gal melyna? ir taip iki begalybes)
if (spalva ==='raudona') {
    console.log('Ryski');
} else if (spalva === 'melyna') {
    console.log('Kitokia');
}else {
    console.log('Nieko nezinau');
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

// if (){if{else if{else}}else if{if()}} else {if{} else{}}

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