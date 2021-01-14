const a = 4; 
const b = 4;

const arLygu = a === b ? true : false;

console.log(arLygu);

// ------------------------------------------

const aukstai = 2;
const kadaDaug = 5;
const arDaug = aukstai >= kadaDaug ? 'taip' : 'ne';
console.log(arDaug);


// ------------------------------------------

const variklisIsjungtas = false;
const arJudam = variklisIsjungtas === true ? 'stovim' : 'vaziuojam' ;
console.log(arJudam);

let variklioBusena = ''

if (variklisIsjungtas === false) {
    variklioBusena = 'tai uzvesk varikli'
} else {
    variklioBusena = 'uzgesink varikli'
}
console.log(variklioBusena);

const arVaziuojame = variklisIsjungtas === true ? 'tai uzvesk varikli' : 'uzgesink varikli';
console.log(arVaziuojame);