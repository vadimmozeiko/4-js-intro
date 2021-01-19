const day = 1; // inicijuojame konstanta ir nurodome kintamaji

switch(day) { // tikriname pagal nurodyta konstanta (cia atsiranda reiksme)
    case 1: // tikriname pagal galima reikmes (pvz 1)
        console.log('Pirmas'); // jeigu salyga atitinka, vykdo sita
        break; // jeigu salyga buvo tenkinama, sustoja.
    case 2:
        console.log('Antras');
        break;
    case 3:
        console.log('Trecias');
        break;
    default: 
        console.log('Tokio nera');
        break;
}

const day1 = 'pirm';

switch(day1) {
    case 'pirm':
        console.log('Pirmas');
        break;
    case 'antr':
        console.log('Antras');
        break;
    case 'trec':
        console.log('Trecias');
        break;
    default: 
        console.log('Tokio nera');
        break;
};

//Jeigu nera "break;" tesia toliau
// Kai reikmes vienodos galima trumpinti taip

const day2 = 1;
switch (day2) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('darbo diena');
        break;
    case 6:
    case 7:
        console.log('savaitgalis');
        break;
    default: 
        console.log('Tokio nera');
        break;
};


const stotele = 'rudens2';

switch (stotele) {
    case 'ziedas1':
        console.log('ziedas');
    case 'parko':
        console.log('parko');
    case 'geniu':
        console.log('geniu');
    case 'leliju':
        console.log('leliju');
    case 'rudens1':
        console.log('rudens');
    case 'filaretu':
        console.log('filaretu');
    case 'karaliaus':
        console.log('karaliaus');
    case 'zaliasis':
        console.log('zaliasis');
        break;

    case 'lvovo':
        console.log('lvovo');
    case 'vasaros':
        console.log('vasaros');
    case 'rudens2':
        console.log('rudens');
    case 'tremtiniu':
        console.log('tremtiniu');
    case 'ziedas2':
        console.log('ziedas');
        break;

    default:
        console.log('Tokia stotele nerasta');
}

console.log('-------------------');

const eiga = 'sienos';

switch (eiga) {
    case 'zeme':
        console.log('Paruosiam zeme');
    case 'pamatai':
        console.log('Paruosiam pamatus');
    case 'sienos':
        console.log('Statom sienas');
    case 'stogas':
        console.log('Statom stoga');
    case 'apsiltinimas':
        console.log('Apsiltinam nama');
    case 'irengimas':
        console.log('Dirbam viduje');
        break;
}