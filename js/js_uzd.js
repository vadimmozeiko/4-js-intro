
//Kintamuju inicijavimas
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


// Veiksmai su kintamaisiais

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