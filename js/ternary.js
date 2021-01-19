const a = 4; // inicijuojame konstanta su kintamojo reiksme 
const b = 4; // inicijuojame konstanta su kintamojo reiksme

const arLygu = a === b ? true : false; // tikriname, jeigu a lygu b tuomet vykdo pirma reikme (true), jeigu ne - antra (false)

console.log(arLygu); // isvedame rezultata i console

// ------------------------------------------

const aukstai = 2; // inicijuojame konstanta su kintamojo reiksme
const kadaDaug = 5; // inicijuojame konstanta su kintamojo reiksme
const arDaug = aukstai >= kadaDaug ? 'taip' : 'ne'; // tikriname, jeigu a lygu b tuomet vykdo pirma reikme (taip), jeigu ne - antra (ne)

console.log(arDaug); // isvedame rezultata i console


// ------------------------------------------

const variklisIsjungtas = false;  // inicijuojame konstanta su kintamojo reiksme
const arJudam = variklisIsjungtas === true ? 'stovim' : 'vaziuojam' ; // tikriname, jeigu a lygu b tuomet vykdo pirma reikme (stovim), jeigu ne - antra (vaziuojam)
console.log(arJudam);


let variklioBusena = '' // inicijuojame kintamaji kuriame saugosime atsakyma
if (variklisIsjungtas === true) { // tinkriname at tenkinama salyga
    variklioBusena = 'tai uzvesk varikli' // jeigu taip, vykdo sita
} else {
    variklioBusena = 'uzgesink varikli' // jeigu ne, vykdo sita
}
console.log(variklioBusena); // isvedame i console

const arVaziuojame = variklisIsjungtas === true ? 'tai uzvesk varikli' : 'uzgesink varikli'; // tikriname, jeigu a lygu b tuomet vykdo pirma reikme (uzvesk varikli), jeigu ne - antra (uzgesink varikli)
console.log(arVaziuojame);

console.log('----------TERNARY------------');

// Naudojame ternary, if, switch

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