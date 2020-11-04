// PĘTLE//
//PĘTLA FOR
for (let i = 0; i <= 5 ; i++) {
    console.log(i);
}

const animal = ['dog', 'cat', 'rabbit', 'tiger', 'spider', 'bird'];

for (let i = 0; i < 6; i++) {
    console.log(animal[i]);//wylogowujemy tablice nazwaTablicy[ilośćElementów-wskaźnik]
    
}

for (let i = 0; i < animal.length ; i++) {
    console.log(animal[i]);
    
}

const color = ['blue', 'pink', 'yellow', 'red', 'purple', 'green']
for (let i = 0; i < color.length; i++) {
console.log(color[i]);
    
}

// clg(color[i]) wypisuje wszystkie elementy tablicy, jeżeli podamy zamiast i l;livzbe, np 2 to sześciokrotnie w consoli zostanie  wypisany kolor yellow

//PĘTLA WHILE

// WYKONUJE SIĘ TAK DŁUGO DOPÓKI NIE ZOSTANIE SPEŁNIONY WARUNEK 
// let i = 0;
// while (i < 5) {
//     console.log(i);
//     i++;
// }

//  PĘTLA DO ... WHILE 
let i = 0;
do {
    console.log(`Przed iteracją ${i}`);
    i++
    console.log(`Po iteracją ${i}`);
    
} while (i < 2);


// pętla for of 
const numbers = [1, 2, 3, 4, 5];
for (let number of numbers) {
    console.log(number * 2);
    
}

const cars = ['opel', 'ford', 'citroen']
for (let car of cars){
    console.log(car); // wypisanie elementów
}
// wynik NaN 

// PĘTLA FOREACH
// DOSTĘP ZA POMOCĄ FUNKCJI 

const numbs = [1, 2, 3, 4, 5]
const nextNumbers = numbs.forEach( x => console.log(x * 3) );

const arr = ['red', 'green', 'blue']
arr.forEach(el => console.log(el)); // wypisanie elementów tablicy

//ćwiczenia 
const city = ['Kraków', 'Warszawa', 'Berlin'];

for (let i = 0; i < city.length; i++) {
    console.log(`Nazwa miasta to ${city[i]}`);
    
}

let x = 0;
while (x <= 10) {
    x += 2;
    console.log(x);
    
}

let y = 20;
do { y -= 3
} while (y>0);
console.log(y);

const numbersTab = [5, 8, 10, 23, 46, 60]
for (const numberTab of numbersTab) { 
    console.log(numberTab/5);
}
for (const numbTab of numbersTab) {
    if (numbTab % 2 === 0) { console.log(`Liczba ${numbTab} jest podzielna przez 2`)
    }
    else {
        console.log(`Liczba ${numbTab} nie jest podzielna przez 2`)
    };
}