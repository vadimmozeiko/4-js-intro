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

if (variklisIsjungtas === true) {
    variklioBusena = 'tai uzvesk varikli'
} else {
    variklioBusena = 'uzgesink varikli'
}
console.log(variklioBusena);

const arVaziuojame = variklisIsjungtas === true ? 'tai uzvesk varikli' : 'uzgesink varikli';
console.log(arVaziuojame);

console.log('----------TERNARY------------');

// Usign ternary, if and switch

const noFuel = true; // true,false
const fuelType = ''; // petrol, diesel

const needFuel = noFuel === true ? 
                fuelType === 'petrol' ? 
                    'Fill up with petrol' : 
                    fuelType === 'diesel' ?
                        'Fill up with diesel'
                        : 'Check fuel type' :
                'Do not need fuel';
console.log(needFuel);

console.log('----------IF----------------');

if (noFuel === true) {
    if (fuelType === "petrol"){
        console.log('Fill up with PETROL');
    } else if (fuelType === 'diesel') {
        console.log('Fill up with DIESEL');
    } else {
        console.log('Check fuel TYPE');
    }
} else {
    console.log('Do no need FUEL');
};

console.log('----------SWITCH----------------');

switch (noFuel) {
    case true : 
        switch (fuelType){
            case 'petrol': 
                console.log('!PETROL');
                break;
            case 'diesel': 
                console.log('!DIESEL');
                break;
            default :  
            console.log('!CHECK');
            break;     
    } 
        break;
    default : 
        console.log('---DONT NEED FUEL---');
        break; 
};