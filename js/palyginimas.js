
/* 
Kintamųjų palyginimas
Lyginant, jei rezultatas tenkina palyginimo sąlygą, tai į console išvesti žodį “Pomidoras”, o jei sąlyga nėra tenkinama, išvesti sakinį “Bandykite kitą kartą.”.

1.	Tarpusavyje palyginti skaičiaus tipo kintamuosius:
    a.	kuris didesnis
    b.	kuris mažesnis
    c.	ar jie lygūs
    d.	ar jie nelygūs
    e.	kuris didesnis arba lygus
    f.	kuris mažesnis arba lygus
2.	Išvesti teksto tipo kintamųjų ilgius
3.	Tarpusavyje palyginti teksto tipo kintamųjų ilgius:
    a.	kuris didesnis
    b.	kuris mažesnis
    c.	ar jie lygūs
    d.	ar jie nelygūs
    e.	kuris didesnis arba lygus
    f.	kuris mažesnis arba lygus
4.	Išvesti sąrašo tipo kintamųjų ilgius
5.	Tarpusavyje palyginti sąrašo tipo kintamųjų ilgius:
    a.	kuris didesnis
    b.	kuris mažesnis
    c.	ar jie lygūs
    d.	ar jie nelygūs
    e.	kuris didesnis arba lygus
    f.	kuris mažesnis arba lygus

*/



//Kintamuju palyginimas ----------------------------------------

//1. Palyginti tarpusavyje skaiciu kintamuosius

const num1 = 4; // inicijuojame konstanta ir priskiriame skaiciaus tipo reiksme 
const num2 = 8; // inicijuojame konstanta ir priskiriame skaiciaus tipo reiksme


// a)

if (num1 > num2) { // tikriname pasirinkta salyga (ar num1 yra daugiau negu num2)
    console.log('Pomidoras'); // jei salyga tenkinama, isveda sita
} else {
    console.log('Bandykite dar karta'); // jeigu netenkinama salyga, isveda sita
};

const arDidesnis = num1 > num2 ? 'TAIP, didesnis' : 'NE, mazesnis'; // variantas su ternary operatoriumi
console.log(arDidesnis); // isveda i reiksme i console

// b)

if (num1 < num2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
};

const arMazesnis = num1 < num2 ? 'TAIP, mazesnis' : 'NE, didesnis';
console.log(arMazesnis);

// c)

if (num1 === num2) {
    console.log('lygus');
} else {
    console.log('nelygus');
};

const arLygus = num1 === num2 ? 'LYGUS' : 'NELYGUS';
console.log(arLygus);

// d)

if (num1 !== num2) {
    console.log('nelygus');
} else {
    console.log('lygus');
};

// e)

if (num1 >= num2) {
    console.log('taip');
} else {
    console.log('ne');
};

// f)

if (num1 <= num2) {
    console.log('taip');
} else {
    console.log('ne');
};

// 2. Isvesti teksto kintamuju ilgius

const text = 'Kazkoks tekstas'
const text1 = 'Dar kazkoks tekstas'

console.log(text.length);
console.log(text1.length);

const textLength = text.length;
const textLength1 = text1.length;

// 3. Tarpusavyje palyginti teksto tipo kintamuju ilgius

// a)

if (textLength > textLength1) {
    console.log('Taip, ilgesnis');
} else {
    console.log('Ne, neilgesnis');
};

// b)

if (textLength < textLength1) {
    console.log('Taip, ilgesnis');
} else {
    console.log('Ne, neilgesnis');
};

// c)

if (textLength === textLength1) {
    console.log('Taip, lygus');
} else {
    console.log('Ne, nelygus');
};

// d) 

if (textLength !== textLength1) {
    console.log('Taip, nelygus');
} else {
    console.log('Ne, lygus');
};

// e)

if (textLength >= textLength1) {
    console.log('Taip');
} else {
    console.log('Ne');
};

// f)

if (textLength <= textLength1) {
    console.log('Taip');
} else {
    console.log('Ne');
};

// 4) Isvesti saraso tipo kintamuju ilgius


const array = [4, 8, 10, 'Ne', 'Taip']; // inicijuojama konstanta ir nurodome saraso tipo kintamaji su misriomis reikmemis

console.log(array.length); // isvedame nurodyto saraso ilgi i console

// 5) Tarpusavyje palyginti saraso tipo kintamuju ilgius


const array1 = [11, 5, 6, 9, 'K', 'L']; // inicijuojame konstanta ir nurodome saraso tipo kintamaji su misriomis reikmemis
const array2 = ['Z', 'B', 7, 4, 6, 2, 1, 1]; // inicijuojame konstanta ir nurodome saraso tipo kintamaji su misriomis reikmemis

const arrayLength1 = array1.length; // isvedame nurodyto saraso ilgi i konstanta
const arrayLength2 = array2.length; // isvedame nurodyto saraso ilgi i konstanta

// a)

if (arrayLength1 > arrayLength2) {
    console.log('Taip');
} else {
    console.log('Ne');
};

// b)

if (arrayLength1 < arrayLength2) {
    console.log('Taip');
} else {
    console.log('Ne');
};

// c)

if (arrayLength1 === arrayLength2) {
    console.log('Taip, lygus');
} else {
    console.log('Ne, nelygus');
};

// d)

if (arrayLength1 !== arrayLength2) {
    console.log('Taip, nelygus');
} else {
    console.log('Ne, lygus');
};

// e)

if (arrayLength1 <= arrayLength2) {
    console.log('Taip');
} else {
    console.log('Ne');
};

// f)

if (arrayLength1 >= arrayLength2) {
    console.log('Taip');
} else {
    console.log('Ne');
};
