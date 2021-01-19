/* 
3Funkcija pavadinimu “skaitmenuKiekisSkaiciuje”:
    a.	priima vieną kintamąjį
    b.	jei perduotas kintamasis nėra skaičiaus tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
    c.	priešingu atveju, funkcija tęsia darbą
    d.	į atskirą kintamąjį įsimena skaičių sudarančių skaitmenų kiekį
    e.	gražina skaitmenų kiekį
    f.	TESTAI:
        i.	console.log( skaitmenuKiekisSkaiciuje( 5 ) );
            1.	rezultatas: 1
        ii.	console.log( skaitmenuKiekisSkaiciuje( 781 ) );
            1.	rezultatas: 3
        iii.	console.log( skaitmenuKiekisSkaiciuje( 37060123456 ) );
            1.	rezultatas: 11
        iv.	console.log( skaitmenuKiekisSkaiciuje( true ) );
            1.	rezultatas: “Pateikta netinkamo tipo reikšmė.”
        v.	console.log( skaitmenuKiekisSkaiciuje( “asd” ) );
            1.	rezultatas: “Pateikta netinkamo tipo reikšmė.”
        vi.	console.log( skaitmenuKiekisSkaiciuje( NaN ) );
            1.	rezultatas: “Pateikta netinkamo tipo reikšmė.”

*/


function numLength(number) { // inicijuojame funkcija su vienu kintamuoju
    // validation
    if (typeof number !== 'number') { // tikrina: o gal a yra ne skaicius?
        return 'ERROR: reikia skaiciaus.'; // jeigu taip, ismeta klaida
    }
    if (!isFinite(number)) { // tikrina: o gal number yra NaN arba Infinite, -Infinite? (yra ne baigtinis kintamasis)
        return 'ERROR: turi buti tikras skaicius.'; // jeigu taip, ismeta klaida
    }

    // logic
    const numberAsString = '' + number; // konvertuoja skaiciu i teksta (number to string), nes negalime ismatuoti skaicius ilgio (.length)
    let length = numberAsString.length; // priskitiame length pakeisto skaiciaus (number) i teksta (string) ilgi

    if (number < 0) { // tikriname jeigu skaicius neigimas, jis turi minusa (-) priekyje kas yra papildomas simbolis konvertuojant i teksta kas is tiesu nera skaiciaus ilgi, norint eliminuoti papildoma simboli iskeliame salyga.
        length--; // jei tenkinama, skaicius neigimas - reikia atimti viena simboli (-1), siekiant nurodyti tikslu skaiciaus ilgi
    }
    if (number % 1 !== 0) { // tikrina ar skacius nurodytas su kableliu (1.123), tai yra su liekana, kai skaicius nera sveikas, jis tures liekana 1
        length--; // jei tenkinama, skaicius turi liekana - reikia atimti viena simboli taska (-1), siekiant nurodyti tikslu skaiciaus ilgi
    }

    // return
    return length;
}

// patikriname funkcija su visais galimais variantai (patikra skirta eliminuoti nepageidajamus rezultatus)

console.log(numLength(true));
console.log(numLength('asd'));
console.log(numLength(NaN));
console.log(numLength(-NaN));
console.log(numLength(Infinity));
console.log(numLength(-Infinity));
console.log(numLength([]));
console.log(numLength([8415]));
console.log(numLength([8415, 541]));
console.log(numLength(['gasg']));
console.log(numLength(['gasg', true]));

console.log(numLength(5), '->', 1);
console.log(numLength(781), '->', 3);
console.log(numLength(37060123456), '->', 11);
console.log(numLength(-5), '->', 1);
console.log(numLength(-781), '->', 3);
console.log(numLength(-37060123456), '->', 11);
console.log(numLength(5.123), '->', 4);
console.log(numLength(781.123), '->', 6);
console.log(numLength(37060123456.123), '->', 14);
console.log(numLength(-5.123), '->', 4);
console.log(numLength(-781.123), '->', 6);
console.log(numLength(-37060123456.123), '->', 14);



