/*
Funkcija pavadinimu “daugyba”:
    a.	priima du skaičiaus tipo kintamuosius
    b.	atskirame kintamajame įsimena sandaugos reikšmę
    c.	gražina saudaugos rezultatą
    d.	TESTAI:
        i.	console.log( daugyba( skaicius1, skaicius2 ) );
        ii.	console.log( daugyba( skaicius3, skaicius2 ) );
        iii.	console.log( daugyba( skaicius1, skaicius3 ) );
        iv.	rezultatas: teisingos reikšmės;

*/

function multiply(a, b) { // inicijuojame funkcija su dviem kintamaisiais
    if (typeof a !== 'number') { // tikrina: o gal a yra ne skaicius?
        return 'ERROR: pirmasis parametras turi buti skaicius.'; // jeigu taip, ismeta klaida 
    }
    if ('' + a === 'NaN') { // tikrina: o gal a NaN yra teksto tipo reikme?.  
        return 'ERROR: pirmasis parametras turi buti tikras skaicius.';
    }
    // alternatyvus uzrasymas
    // if (isNaN(a)) { //tikrina: o gal a yra NaN skaiciaus tipo reikme?
    //     return 'ERROR: pirmasis parametras turi buti tikras skaicius.'; // jeigu taip, ismeta klaida
    // }

    if (a === Infinity || a === -Infinity) { // tikrina: o gal a yra begalybe arba -begalybe? 
        return 'ERROR: pirmasis parametras negali buti begalybe.'; // jeigu taip, ismeta klaida
    }
    // alternatyvus uzrasymas
    // if (Math.abs(a) === Infinity) {
    //     return 'ERROR: pirmasis parametras negali buti begalybe.';
    // }

    if (typeof b !== 'number') { // tikrina: o gal b yra ne skaicius?
        return 'ERROR: antrasis parametras turi buti skaicius.'; // jeigu taip, ismeta klaida 
    }
    if (!isFinite(b)) { // tikrina: o gal b yra NaN arba Infinite, -Infinite? (yra ne baigtinis kintamasis)
        return 'ERROR: antrasis parametras turi buti tikras skaicius.'; // jeigu taip, ismeta klaida 
    }

    const rez = a * b; // inicijuojame konstanta su kintajuoju kurio reikme matematine operacija, issaugome rezultata

    return rez === 0 ? 0 : rez; // eliminuojame -0, tokiu budu, jeigu reikme lygu 0 arba -0 grazinti 0, kitu atveju rezultata
}

// patikriname funkcija su visais galimais variantai (patikra skirta eliminuoti nepageidajamus rezultatus)

console.log(multiply('labas', 'rytas'));
console.log(multiply('labas', 5));
console.log(multiply(5, 'labas'));
console.log(multiply('5', '4'));
console.log(multiply(true, 4));
console.log(multiply(true, false));
console.log(multiply(8, false));
console.log(multiply(NaN, 5));
console.log(multiply(NaN, NaN));
console.log(multiply(8, NaN));
console.log(multiply(Infinity, 5));
console.log(multiply(Infinity, Infinity));
console.log(multiply(8, Infinity));
console.log(multiply(-Infinity, 5));
console.log(multiply(-Infinity, -Infinity));
console.log(multiply(8, -Infinity));

console.log(multiply(2, 2), '->', 4);
console.log(multiply(22, -2), '->', -44);
console.log(multiply(-22, -2), '->', 44);
console.log(multiply(0.4, 3.65), '->', 1.46);
console.log(multiply(-1, 0), '->', 0);