  
const x1 = 2;
const x2 = 5;

const x3 = 22;
const x4 = 55;

const x5 = 222;
const x6 = 555;

function sum(firstNumber, secondNumber) { // nurodome kitamuosius
    const totalSum = firstNumber + secondNumber; // operacija, ka reikia atlikti
    return totalSum; // grazina rezultata i totalSum
}

const n1 = sum(9, 4); // issikvieciame funkcija su 'name(x, y)' ir talpiname rezultata i kintamaji (const, let)
const n2 = sum(x1, x2);
const n3 = sum(x3, x4);
const n4 = sum(x5, x6);

console.log(n1); // atvaizduojame rezultatus
console.log(n2);
console.log(n3);
console.log(n4);

console.log('-----------------');

// Skaiciuojame kiek skaciu intervale dalinasi is nurodyto daliklio be liekanos
function liekana(first, second, divider) { // nurodome kintamuosius (nuo, iki, daliklis)
    let count = 0; // inicijuojame skaitliuka kuris skaiciuos
    for (let i = first; i <= second; i++) { // pradedame nuo nurodyto intevalo 'first', kol i maziau arba lygu 'second', kas 1
    if (i % divider === 0) { // % parodo kokia yra daliklio liekana (pvz, 1,2,3.. ), mes norime matyti tik skacius kuriu liekana lygu 0, tad prilyginima reikme 0 ( === 0)
        count++ // jeigu salyga tenkinama (t. y. liekana lygi 0, tuomet prideda +1 i skaitinkli 'count')
    }      
}   return count; // grazina atsakyma, be 'return' atsakymas nera isvedamas per console.
};

const lk3 = liekana(0, 3, 3);

const lk4 = liekana(0, 100, 25);

console.log(lk3);
console.log(lk4);

console.log('-----------------');

// Apverciame pasirinkta teksta
function reverseString(text) { // nurodome funkcijos pavadinima ir kintamaji 'text' kuri naudosime nurodyti teksta
    const size = text.length; // kintamajame 'size' issaugome teksto ilgi
    let reverseText = ''; // inicijuojame kintamaja kuriame saugosime atsakyma

    for (let i = 0; i < size; i++) { // pradedame nuo 0, kol i maziau negu teksto ilgis, kas 1
        const letter = text[i]; // i letter konstanta issaugome po viena raide pagal cikla i, i=0 -pirma raide, i=1 -antra raide, i=2 -trecia raide..
        reverseText = letter + reverseText;// // pridedame gauta raide i saraso pradzia, tai reiskia kiekviena sekanti raide bus pridedama is priekio, tokiu budu tekstas apsivercia is kito galo
    }
    return reverseText;
}

console.log(reverseString('labas'), '->', 'sabal');
console.log(reverseString('sedek'), '->', 'kedes');
console.log(reverseString('aciu'), '->', 'uica');
console.log(reverseString('sedek uzu kedes'), '->', 'sedek uzu kedes');

console.log('-----------------');

function divide(xx, xy) {
    const result = xx / xy; // galima sito nerasyti
    return result; // cia iskarto butu 'return xx / xy;'
}

console.log(divide(9, 3));
