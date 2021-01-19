/* 
for (let i=0 (pradzia); i<5 (pabaiga); i++ (kaip keiciasi) ) {
    kartotinas kodas
}

*/

for (let i = 0; i < 5; i++) { // pradedame nuo 0, kol i maziau negu 5, kas 1
    console.log(i, 'kodas'); // isveda zodi 'kodas' 5 kartus (nes nurodyti 5 ciklai i<5, 0,1,2,3,4)
}

console.log('-----------------');
for (let i = 2; i <= 10; i += 2) {// pradedame nuo 2, kol i maziau ar lygu 10, kas 2
    console.log(i, 'kodas'); // isveda skaiciuos intervale 2-10, kas antra (2,4,6,8,10).
}

console.log('-----------------');

const words = ['suo', 'kate', 'ziurkenas', 'papuga', 'diezas',]; // nurodome sarasa su teksto tipo kintamaisiais
const wordsLength = words.length // i konstanta issaugome saraso ilgi

for (let i = 0; i < wordsLength; i++){ // pradedame nuo 0, kol i maziau negu saraso ilgi (5), kas 1
    console.log(i, words[i]); // isveda visus zodzius is saraso, words[0]= 'suo', words[1]='kate'...

}

console.log('-----------------');

const pazymiai = [10, 2, 8, 4, 6, 4, 8, 2, 10,]; // inicijuojame konstanta ir nurodome saraso tipo kintamaji su misriomis reikmemis

let vidurkis = 0; // inicijuojame konstanta kurioje saugosime rezultata


for (let i = 0; i < pazymiai.length; i++) { // pradedame nuo 0, kol i bus maziau negu saraso ilgis, kas 1
   vidurkis += pazymiai[i] / pazymiai.length; // prie konstantos pridedame paeiliui kiekviena reiksme (pazymi) ir ja daliname is saraso ilgio (pazymiu skaiciaus), taip skaiciuojame vidurki
   
}

console.log(vidurkis); // isvedame rezultata i console

console.log('-----------------');