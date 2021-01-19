/* 
Funkcija pavadinimu “isrinktiRaides”:
    a.	priima du kintamuosius:
        i.	pirmasis nurodo tekstą, su kuriuo reikės atlikti užduotį
        ii.	antrasis nurodo kas kelintą raidę išrinkti
    b.	patikrinti, ar pirmasis kintamasis yra teksto tipo:
        i.	jei ne, išvedame pranešimą “Pirmasis kintamasis yra netinkamo tipo.”
        ii.	priešingu atveju tęsiame darbą
    c.	patikrinti, ar pirmasis kintamasis yra ne tuščias tekstas ir ne didesnis nei 100 simbolių:
        i.	jei ne, išvedame pranešimą “Pirmojo kintamojo reikšmė yra netinkamo dydžio.”
        ii.	priešingu atveju tęsiame darbą
    d.	patikrinti, ar antrasis kintamasis yra skaičiaus tipo:
         i.	jei ne, išvedame pranešimą “Antrasis kintamasis yra netinkamo tipo.”
         ii.	priešingu atveju tęsiame darbą
    e.	patikriname, ar antrojo kintamojo vertė yra didesnė už nulį:
        i.	jei ne, išvedame pranešimą “Antrasis kintamasis turi būti didesnis už nulį.”
        ii.	priešingu atveju tęsiame darbą
    f.	patikriname, ar antrojo kintamojo vertė yra ne didesnė už pirmojo kintamojo ilgį:
        i.	jei ne, išvedame pranešimą “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.”
        ii.	priešingu atveju tęsiame darbą
    g.	išrenkame iš nurodyto teksto kas kelintą raidę (pagal antrojo kintamojo žingsnį)
    h.	išrinktas raides sudėti į atskirą kintamąjį, kuris yra teksto tipo
    i.	gražina rezultatą
    j.	TESTAI:
            i.	console.log( isrinktiRaides( “abcdefg”, 2 ) );
                1.	rezultatas: “bdf”
            ii.	console.log( isrinktiRaides( “abcdefghijkl”, 3 ) );
                1.	rezultatas: “cfil”
            iii.	console.log( isrinktiRaides( “abc”, 0 ) );
                1.	rezultatas: “Antrasis kintamasis turi būti didesnis už nulį.”
            iv.	console.log( isrinktiRaides( “abc”, 4 ) );
                1.	rezultatas: “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.”
            v.	console.log( isrinktiRaides( 1561, 2 ) );
                1.	rezultatas: “Pirmasis kintamasis yra netinkamo tipo.”

*/



function pickLetters(text, step) { // inicijuojame funkcija su dviem kintamaisiais
    // validation
    if (typeof text !== 'string' ||  text === '') { // tinkrina ar text kintamasis yra ne tekstas arba (||) tuscias tekstas
        return 'ERROR: pirmasis parametras turi buti ne tuscias tekstas'; // jeigu taip, ismeta klaida
    }
    if (typeof step !== 'number' || !isFinite(step)) { // tikrina ar step kintamasis yra ne skaicius arba yra ne NaN arba Infinite, -Infinite (yra ne baigtinis kintamasis)
        return 'ERROR: antrasis parametras turi buti skaicius'; // jeigu taip, ismeta klaida
    }
    if (step === 0) { // tikrina ar step nera lygus nuliui
        return 'ERROR: zingsnis negali buti nulinis.'; // jeigu taip, ismeta klaida
    }
    if (step > text.length) { // tikrina ar step kintamasis nera didesnis negu teksto ilgis
        return 'ERROR: zingsnis negali buti didesnis nei teksto ilgis.'; // jeigu taip, ismeta klaida
    }
    if (step % 1 !== 0) { // tikrina ar skacius nurodytas su kableliu (pvz 1.123), tai yra su liekana, kai skaicius nera sveikas, jis tures liekana 1
        return 'ERROR: zingsnis turi buti sveikasis skaicius.'; //jeigu taip, ismeta klaida
    }

    // logic
    let picker = ''; // inicijuojame kintamaji kuriame saugosime rezultata

    if (step > 0) { // jeigu zingsnis (step) daugiau negu 0, tuomet vykdo cikla
        for (let i = step - 1; i < text.length; i += step) { // pradedame nuo zingsnio (step) - 1, kadangi saraso ilgis yra vienetu didesnis negu saraso indeksas (pvz ilgis 6, saraso paskutinis indeksas 5), tesiame kol i maziau negu saraso ilgis (pvz ilgis 6, i=5 < 6), kas step zingsnis (pvz 3)
            picker += text[i];
        }
    } else { // jeigu kintamasis step neigiamas t.y. step < 0, vykdo sita cikla
        for (let i = text.length + step; i >= 0; i += step) { // pradedame nuo i = teksto ilgis + zingsnis (pvz 6 + -3), pasiima trecia raide nuo galo (pvz 'abcdef', -3), '->', 'da', tol kol i daugiau arba lygu uz 0, kas nurodyta step (pvz 3)
            picker += text[i]; 
        }
    }

    // for (let i = 0; i < text.length; i++) {
    //     const letter = text[i];

    //     if (i + 1 % step === 0) {
    //     if (i % step === step - 1) {
    //         picker += letter;
    //     }
    // }

    // post logic validation
    if (picker === '') {// tikrina ar rezultatas nera tuscias
        return 'ERROR: nenumatyta logine klaida.';
    }

    // return result
    return picker; 
}

console.log(pickLetters(1561, 2));
console.log(pickLetters('Labas', 'fd'));
console.log(pickLetters('Labas', NaN));
console.log(pickLetters('Labas', -Infinity));
console.log(pickLetters('abc', 0));
console.log(pickLetters('abc', 4));
console.log(pickLetters('abc', 1.5));
console.log(pickLetters('', 5));

console.log(pickLetters('abcdefg', 2), '->', 'bdf');
console.log(pickLetters('Labasrytas', 2), '->', 'aarts');
console.log(pickLetters('abcdefghijkl', 3), '->', 'cfil');
console.log(pickLetters('abcdefg', 1), '->', 'abcdefg');
console.log(pickLetters('abc', 3), '->', 'c');

console.log(pickLetters('abcdefg', -1), '->', 'gfedcba');
console.log(pickLetters('abcdefg', -2), '->', 'fdb');
console.log(pickLetters('abcdefghijkl', -3), '->', 'jgda');
console.log(pickLetters('abc', -3), '->', 'a');
