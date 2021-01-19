/*
Funkcija pavadinimu “didziausiasSkaiciusSarase”:
    a.	priima vieną kintamąjį
    b.	jei perduotas kintamasis nėra sąrašo tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
    c.	jei sąrašas yra tuščias, tai išveda pranešimą “Pateiktas sąrašas negali būti tuščias.”
    d.	priešingu atveju, funkcija tęsia darbą
    e.	pereina per visą pateiktą sąrašą ir į atskirą kintamąjį įsimena skaičių, kuris tuo metu yra didžiausias
    f.	gražina didžiausią surastą skaičių
    g.	TESTAI:
        i.	console.log( didziausiasSkaiciusSarase( [ 1 ] ) );
          1.	rezultatas: 1
        ii.	console.log( didziausiasSkaiciusSarase( [ 1, 2, 3 ] ) );
          1.	rezultatas: 3
        iii.	console.log( didziausiasSkaiciusSarase( [ -5, 78, 14, 0, 18 ] ) );
          1.	rezultatas: 78
        iv.	console.log( didziausiasSkaiciusSarase( [ 69, 69, 69, 69, 66 ] ) );
          1.	rezultatas: 69
        v.	console.log( didziausiasSkaiciusSarase( [ -1, -2, -3, -4, -5, -6, -7, -8 ] ) );
          1.	rezultatas: -1
        vi.	console.log( didziausiasSkaiciusSarase( “pomidoras” ) );
          1.	rezultatas: “Pateikta netinkamo tipo reikšmė.”
        vii.	console.log( didziausiasSkaiciusSarase( [] ) );
          1.	rezultatas: “Pateiktas sąrašas negali būti tuščias.”

*/


function bigNumber(list) { // inicijuojame funkcija su vienu kintamuoju list
    // validation
    if (typeof list !== 'object') { // tikriname ar kintamasis tikrai yra sarasas (array) (typeof array = object)
        return 'ERROR: reikia array tipo reiksmes.'; // jeigu ne, ismeta klaida
    }
    if (list.length === 0) { // tikriname ar sarasas (array) nera tuscias, patikriname jo ilgi, jeigu lygu 0, reiskia tuscias
        return 'ERROR: sarasas yra tuscias.'; // // jeigu taip, ismeta klaida
    }

    // logic
    let biggestNumber = -Infinity; // inicijuojame kintamaji su -Infinite reiksme (norint naudoti minusine reiksmes sarase)

    for (let i = 0; i < list.length; i++) { // pradedame nuo 0, kol i bus maziau negu saraso ilgio reiksme, kas 1
        const number = list[i]; // inicijuojame konstanta su kintamuoju number, kuriam priskiriame saraso reiksmes paeiliui (nuo 0 iki i < saraso ilgis)

        // list item validation
        if (typeof number !== 'number' || !isFinite(number)) { // tikriname ar nurodytas elementas sarase vykdant cikla yra ne skaicius (tekstas, false, true..) arba NaN, 'NaN, Infinite, -Infinite,
            continue; // jeigu tikriname reikme cikle netenkita salygos, tesia cikla
        }

        // list logic
        if (number > biggestNumber) { // kiekviena saraso elementa number=list[i] lyginame su biggestNumber (kuris prasideda nuo -Infinite, norint lyginti neigiamus skaicius). 
            biggestNumber = number; // jeigu tenkinama salyga iraso i konstanta
        }
    }

    // post logic validation
    if (biggestNumber === -Infinity) { //tikrina ar pasitinktas didziausias skaicius nelygus -Infinite (kai sarase nera nei vieno skaiciaus)
        return 'ERROR: sarase turi buti bent vienas normalus skaicius.';
    }

    // return result
    return biggestNumber;
}


// jeigu turime sarasa kuriame tikrai nebus kitu (negu skaiciu) reikmiu - galime sutrumpinti

function bigNumberFromValidArray(list) {
    // logic
    let biggestNumber = list[0];

    for (let i = 1; i < list.length; i++) {
        const number = list[i];
        if (number > biggestNumber) {
            biggestNumber = number;
        }
    }

    // return result
    return biggestNumber;
}

console.log(bigNumber('pomidoras'));
console.log(bigNumber(582));
console.log(bigNumber(true));
console.log(bigNumber(false));
console.log(bigNumber([]));
console.log(bigNumber(['asfd', true, 'false', false, [], [84], ['sdfc']]));

console.log(bigNumber([1]), '->', 1);
console.log(bigNumber([7]), '->', 7);
console.log(bigNumber([1, 2, 3]), '->', 3);
console.log(bigNumber([-5, 78, 14, 0, 18]), '->', 78);
console.log(bigNumber([69, 69, 69, 69, 66]), '->', 69);
console.log(bigNumber([-1, -2, -3, -4, -5, -6, -7, -8]), '->', -1);
console.log(bigNumber([-5, 78, 14, 0, 18, 'asfd']), '->', 78);
console.log(bigNumber([-5, 78, 14, 'asfd', 0, 18]), '->', 78);
console.log(bigNumber(['asfd', -5, 78, 14, 0, 18]), '->', 78);

console.log(bigNumber(['asfd', -5, 78, Infinity, 14, 0, 18]), '->', 78);

