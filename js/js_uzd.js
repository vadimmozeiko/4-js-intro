/* Comment
//Kintamuju inicijavimas -----------------------------------
// 1.
const a = 5;
console.log(a);

const b = 8;
console.log(b);

const c = 11;
console.log(c);

console.log('-------------------------');

// 2.

const vardas = 'Petras'
console.log(vardas);

const pavarde = 'Petraitis'
console.log(pavarde);

const gyvVieta = 'Klaipeda'
console.log(gyvVieta);

console.log('-------------------------');

// 3.

const lyginiaiSkaiciai = [2, 4, 6, 8, 10];
console.log(lyginiaiSkaiciai);

const nelyginiaiSkaiciai = [1, 3, 5, 7, 9];
console.log(nelyginiaiSkaiciai);

const atsitiktiniaiSkaiciai = [4, 8, 11, 22, 45];
console.log(atsitiktiniaiSkaiciai);

console.log('-------------------------');

// 4.

const vardai = ['Jonas', 'Povilas', 'Beata', 'Justina', 'Arvydas'];
console.log(vardai);

const miestai = ['Vilnius', 'Kaunas', 'Alytus', 'Kedainiai', 'Siauliai'];
console.log(miestai);

const eile = ['Pirmas', 'Antras', 'Trecias', 'Ketvirtas', 'Penktas'];
console.log(eile);

console.log('-------------------------');


// Veiksmai su kintamaisiais ------------------------------------------

// 1. 

const suma = a + b + c;
console.log(suma);

console.log('-------------------------');

// 2.

const tekstas = `${vardas} ${pavarde} ${gyvVieta}`;
console.log(tekstas);

console.log('-------------------------');

// 3.

const sarasoSuma = lyginiaiSkaiciai[0] - nelyginiaiSkaiciai[1] + lyginiaiSkaiciai[2] - nelyginiaiSkaiciai[3] + lyginiaiSkaiciai[4];
console.log(sarasoSuma);


console.log('-------------------------');

// 4.

const varduEile = vardai[4] + ', ' + vardai [3] + ', ' + vardai[2] + ', ' + vardai[1] + ', ' + vardai[0] + '.';
console.log(varduEile);

console.log('-------------------------');

*/ Comment

// Kintamuju palyginimas ----------------------------------------

// 1. Palyginti tarpusavyje skaiciu kintamuosius

// const num1 = 4;
// const num2 = 8;


// // a)

// if (num1 > num2) {
//     console.log('Pomidoras');
// } else {
//     console.log('Bandykite dar karta');
// };

// const arDidesnis = num1 > num2 ? 'TAIP, didesnis' : 'NE, mazesnis';
// console.log(arDidesnis); 

// // b)
// if (num1 < num2) {
//     console.log('Pomidoras');
// } else {
//     console.log('Bandykite dar karta');
// };

// const arMazesnis = num1 < num2 ? 'TAIP, mazesnis' : 'NE, didesnis';
// console.log(arMazesnis);

// // c)

// if (num1 === num2) {
//     console.log('lygus');
// } else {
//     console.log('nelygus');
// };

// const arLygus = num1 === num2 ? 'LYGUS' : 'NELYGUS';
// console.log(arLygus);


// // d)

// if (num1 !== num2) {
//     console.log('nelygus');
// } else {
//     console.log('lygus');
// };

// // e)

// if (num1 >= num2) {
//     console.log('taip');
// } else {
//     console.log('ne');
// };

// // f)

// if (num1 <= num2) {
//     console.log('taip');
// } else {
//     console.log('ne');
// };

// // 2. Isvesti teksto kintamuju ilgius

// const text = 'Kazkoks tekstas'
// const text1 = 'Dar kazkoks tekstas'

// console.log(text.length);
// console.log(text1.length);

// const textLength = text.length;
// const textLength1 = text1.length;

// // 3. Tarpusavyje palyginti teksto tipo kintamuju ilgius

// // a)

// if (textLength > textLength1) {
//     console.log('Taip, ilgesnis');
// } else {
//     console.log('Ne, neilgesnis');
// };

// // b)

// if (textLength < textLength1) {
//     console.log('Taip, ilgesnis');
// } else {
//     console.log('Ne, neilgesnis');
// };

// // c)

// if (textLength === textLength1) {
//     console.log('Taip, lygus');
// } else {
//     console.log('Ne, nelygus');
// };

// // d) 

// if (textLength !== textLength1) {
//     console.log('Taip, nelygus');
// } else {
//     console.log('Ne, lygus');
// };

// // e)

// if (textLength >= textLength1) {
//     console.log('Taip');
// } else {
//     console.log('Ne');
// };

// // f)

// if (textLength <= textLength1) {
//     console.log('Taip');
// } else {
//     console.log('Ne');
// };

// ----------------------Usign ternary, if and switch---------------

// const noFuel = true; // true,false
// const fuelType = ''; // petrol, diesel

// const needFuel = noFuel === true ? 
//                 fuelType === 'petrol' ? 
//                     'Fill up with petrol' : 
//                     fuelType === 'diesel' ?
//                         'Fill up with diesel'
//                         : 'Check fuel type' :
//                 'Do not need fuel';
// console.log(needFuel);

// console.log('----------IF----------------');

// if (noFuel === true) {
//     if (fuelType === "petrol"){
//         console.log('Fill up with PETROL');
//     } else if (fuelType === 'diesel') {
//         console.log('Fill up with DIESEL');
//     } else {
//         console.log('Check fuel TYPE');
//     }
// } else {
//     console.log('Do no need FUEL');
// };

// console.log('----------SWITCH----------------');

// switch (noFuel) {
//     case true : 
//         switch (fuelType){
//             case 'petrol': 
//                 console.log('!PETROL');
//                 break;
//             case 'diesel': 
//                 console.log('!DIESEL');
//                 break;
//             default :  
//             console.log('!CHECK');
//             break;     
//     } 
//         break;
//     default : 
//         console.log('---DONT NEED FUEL---');
//         break; 
// };


// console.log('----------SWITCH with interaction----------------');

// let myFuelLevel = prompt('Whats your fuel level (low or high?)');

// switch (myFuelLevel) {
//     case 'low' : 
//         let myFuelType = prompt('Whats your fuel type (petrol or diesel?)');
//         switch (myFuelType) {
//             case 'petrol': 
//                 alert('!FILL UP PETROL');
//                 break;
//             case 'diesel': 
//                 alert('!FILL UP DIESEL');
//                 break;
//             default :  
//             alert('!I DONT KNOW THIS ONE!');
//             break;     
//     } 
//         break;
//     case 'high' :
//         alert('---DONT NEED FUEL---');
//         break; 
//     default : 
//         alert('---MAKE YOUR MIND---');
//         break; 
// };


// 4) Isvesti saraso tipo kintamuju ilgius


// const array = [4, 8, 10, 'Ne', 'Taip'];

// console.log(array.length);

// // 5) Tarpusavyje palyginti saraso tipo kintamuju ilgius


// const array1 = [11, 5, 6, 9, 'K', 'L'];
// const array2 = ['Z', 'B', 7, 4, 6, 2, 1, 1];

// const arrayLength1 = array1.length;
// const arrayLength2 = array2.length;

// if (arrayLength1 > arrayLength2) {
//     console.log('Taip');
// } else {
//     console.log('Ne');
// };

// if (arrayLength1 < arrayLength2) {
//     console.log('Taip');
// } else {
//     console.log('Ne');
// };

// if (arrayLength1 === arrayLength2) {
//     console.log('Taip, lygus');
// } else {
//     console.log('Ne, nelygus');
// };

// if (arrayLength1 !== arrayLength2) {
//     console.log('Taip, nelygus');
// } else {
//     console.log('Ne, lygus');
// };


// if (arrayLength1 <= arrayLength2) {
//     console.log('Taip');
// } else {
//     console.log('Ne');
// };


// if (arrayLength1 >= arrayLength2) {
//     console.log('Taip');
// } else {
//     console.log('Ne');
// };


// const pazymiai = [10, 2, 8, 4, 6, 4, 8, 2, 10,];

// let vidurkis = 0;


// for (let i = 0; i < pazymiai.length; i++) {
//    vidurkis += pazymiai[i] / pazymiai.length;
   
// }

// console.log(vidurkis);

// Ciklo for panaudojimas -----------------------

// 1 Suskaiciuoti susumavus skaicius intervale tarp (imtinai)

// let sumaA = 0;

// for (let i = 0; i < 0; i++) {
//     sumaA += i;
// }

// console.log(sumaA);

// let sumaB = 0;

// for (let i = 0; i <= 4; i++) {
//     sumaB += i;
// }

// console.log(sumaB);

// let sumaC = 0;

// for (let i = 0; i <= 100; i++) {
//     sumaC += i;
// }

// console.log(sumaC);


// let sumaD = 0;

// for (let i = 574; i <= 815; i++) {
//     sumaD += i;
// }

// console.log(sumaD);

// let sumaE = 0;

// for (let i = -50; i <= 50; i++) {
//     sumaE += i;
// }

// console.log(sumaE);

// let sumaF = 0;

// for (let i = -70; i <= 30; i++) {
//     sumaF += i;
// }

// console.log(sumaF);

// 2 Perrasyti teksto tipo kintamuju reikmes is kito galo

// a)

// const tekstasX = 'abcdef';
// let tekstasY = '';

// // paima raides is eiles ir prideda kiekviena raide i saraso pradzia
// for (let i = 0; i < tekstasX.length; i++) {
//      const raide = tekstasX[i]; /skaiciuoja is eiles
//      tekstasY = raide + tekstasY;
// };

// console.log(tekstasX, '->', tekstasY);


// // paima raides is galo ir deda is eiles
// for (let i = 0; i < tekstasX.length; i++) {
//     const raide = tekstasX[tekstasX.length - i - 1]; // skaciuoja nuo galo
//     tekstasY += raide;
// };

// console.log(tekstasX, '->', tekstasY);

// paima raides is galo ir deda is eiles
// for (let i = 1; i <= tekstasX.length; i++) {
//     const raide = tekstasX[tekstasX.length - i];
//     tekstasY += raide;
// };

// console.log(tekstasX, '->', tekstasY);

// 3 Suskaičiuoti, kiek nurodytame intervale (0-11, 8-31, -18-15) yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai

// a)

// const from = 0;
// const till = 10;
// const divider = 3;

// let count = 0;

// for (let i = from; i <= till; i++) {
//     if (i % divider === 0) {
//         count++
//     }   
// }
// const ats = `Skaičių intervale tarp ${from} ir ${till}, besidalijančių be liekanos iš ${divider} yra ${count} vienetai.`

// console.log(ats);


// const pr = 0;
// const pab = 100;
// const daliklis = 3;

// let skaiciuoti = 0;

// for (let i = pr; i <= pab; i++) {
//     if (i % daliklis === 0) {
//         skaiciuoti = skaiciuoti + 1; // arba skaiciuoti++
//     } else if(daliklis === 0) {
//         console.log('Dalyba is nulio negalima');
//     }
// }

// console.log(skaiciuoti);



// Funkcijos function panaudojimas -----------------------


// 1. Funkcija pavadinimu “tusciaFunkcija”

 function tusciaFunkcija() {
     return false;
 }

 console.log(tusciaFunkcija());

 // 2. Funkcija pavadinimu “daugyba”

 function daugyba(sk1, sk2) {
     const ats = sk1 * sk2;
     return ats;
 }

console.log(daugyba(2, 3));
console.log(daugyba(4, 3));
console.log(daugyba(2, 4));

console.log('-------------------------');


function skaitmenuKiekisSkaiciuje(sk3) {
    if (typeof sk3 !== 'number') {
        return 'Pateikta netinkamo tipo reikšmė.';
    } else if (isNaN(sk3)) { //arba !isFinite(sk3) kuris tikrina ir Infinite!
        return 'Pateikta netinkamo tipo reikšmė.';
    } 
    const ilgis = sk3.toString().length; // arba '' + sk3;
    return ilgis;
};

console.log(skaitmenuKiekisSkaiciuje(5));
console.log(skaitmenuKiekisSkaiciuje(781));
console.log(skaitmenuKiekisSkaiciuje(37060123456));
console.log(skaitmenuKiekisSkaiciuje(true));
console.log(skaitmenuKiekisSkaiciuje("asd"));
console.log(skaitmenuKiekisSkaiciuje(NaN));
console.log(skaitmenuKiekisSkaiciuje(NaN));

console.log('-------------------------');

// 4. Funkcija pavadinimu “didziausiasSkaiciusSarase”

function didziausiasSkaiciusSarase(sr1) {
    if (!Array.isArray(sr1)) {
        return 'Pateikta netinkamo tipo saraso reikšmė.'
    }
    if (sr1.length === 0) {
        return 'Pateiktas sąrašas negali būti tuščias'
    }
    let rezultatas = sr1[0];
    for (let i = 0; i < sr1.length; i++) {
        if (rezultatas < sr1[i]) {
            rezultatas = sr1[i];
        }
    } return rezultatas;
    
};

console.log( didziausiasSkaiciusSarase([1]));
console.log( didziausiasSkaiciusSarase([1, 2, 3]));
console.log( didziausiasSkaiciusSarase([-5, 78, 14, 0, 18]));
console.log( didziausiasSkaiciusSarase([69, 69, 69, 69, 66]));
console.log( didziausiasSkaiciusSarase([-1, -2, -3, -4, -5, -6, -7, -8]));
console.log( didziausiasSkaiciusSarase('pomidoras'));
console.log( didziausiasSkaiciusSarase([]));

console.log('-------------------------');


// 5. Funkcija pavadinimu “isrinktiRaides”

function isrinktiRaides(xx, xy) {
    if (typeof xx !== 'string') {
        return 'Pirmasis kintamasis yra netinkamo tipo';
    } else if (xx.length === 0) {
        return 'Pirmojo kintamojo reikšmė yra netinkamo dydžio';
    } else if (xx.length > 100) {
        return 'Pirmojo kintamojo reikšmė yra netinkamo dydžio';
    }
    if (typeof xy !== 'number') {
        return 'Antrojo Antrasis kintamasis yra netinkamo tipo';
    } else if (xy <= 0) {
        return 'Antrasis kintamasis turi būti didesnis už nulį';
    } else if (xy > xx.length) {
        return 'Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį';
    } 
    let rezultatas = '';
    for (let i = xy - 1 ; i < xx.length; i += xy){
         rezultatas += xx[i];  
    }
    return rezultatas;
};

console.log(isrinktiRaides('abcdefg', 2));
console.log(isrinktiRaides('abcdefg', 1));
console.log(isrinktiRaides('abcdefghijkl', 3));
console.log(isrinktiRaides('abc', 0));
console.log(isrinktiRaides('abc', 4));
console.log(isrinktiRaides(1561, 2));


console.log('-------------------------');

// 6.Funkcija pavadinimu “dalyba”

function dalyba(x1, x2) {
    if (typeof x1 !== 'number') {
        return 'Kitamasis turi buti skaicius';
    } else if (typeof x2 !== 'number'){
        return 'Kitamasis turi buti skaicius';
    } else if (x2 === 0) {
        return 'Antras kintamasis neturi buti nulis';
    } else if (Number.isNaN(x1)){
        return "Pirmas kintamasis negali buti NaN";
    } else if (Number.isNaN(x2)){
        return "Antras kintamasis negali buti NaN";
    }
    rezultatas = x1 / x2;
    return rezultatas;
};


console.log(dalyba(0, 0));
console.log(dalyba(0, 4));
console.log(dalyba(4, 0));
console.log(dalyba(NaN, 2));
console.log(dalyba(2, NaN));
console.log(dalyba(2, false));
console.log(dalyba(false, false));
console.log(dalyba('lol', 4 ));
console.log(dalyba(4, 'lol' ));
console.log(dalyba('lol', 'lol'));