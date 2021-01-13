/*

Array - bet kokiu elementu sarasas(prioritetas, to paties tipo elementai)

*/

const tusciaPinigine = [];
console.log(tusciaPinigine); 

const pinigine = [1, 2, 5, 10, 20];
console.log(pinigine);

const abc = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(abc);

const aplankytiMiestai = ['Vilnius', 'Kaunas', 'Klaipeda'];
console.log(aplankytiMiestai);

// kiek sarase yra reiksmiu: array.length
console.log('Kiek yra reiksmiu tusciame sarase', tusciaPinigine.length);
console.log('Kiek yra reiksmiu pinigineje', pinigine.length);
console.log('Kiek yra reiksmiu abeceleje', abc.length);
console.log('Kiek yra aplankytu miestu', aplankytiMiestai.length);


// koks teksto ilgis: tekstas.length
const labas = 'labas';
const labasIlgis = labas.length;
console.log(`"${labas}" ilgis yra ${labasIlgis}`);

console.log('Labas rytas', 'Labas rytas!'.length);

//istraukti saraso reikme 

const pirmasMiestas = aplankytiMiestai[0];
console.log('Pirmas miestas', pirmasMiestas);

const antrasMiestas = aplankytiMiestai[1];
console.log('Antras miestas', antrasMiestas);

const treciasMiestas = aplankytiMiestai[2];
console.log('Trecias miestas', treciasMiestas);

//istraukti teksto n-taji simboli

const hi = 'Labas';
const pirmaRaide = hi[0];
console.log(pirmaRaide);
console.log(hi[1]);
console.log(hi[2]);
console.log(hi[3]);
console.log(hi[4]);
