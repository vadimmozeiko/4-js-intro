const day = 1;

switch(day) {
    case 1:
        console.log('Pirmas');
        break;
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
}

//Jeigu nera "break;" tesia toliau

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
}