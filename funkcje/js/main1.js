// Zadania wakeUp and code
// zad1 tylko parzyste liczby z tablicy const numbers = [2, 5, 7, 10, 34, 16, 879, 1]
const numbers = [2, 5, 7, 10, 34, 16, 879, 1]
function parzyste(x) {
    return x%2===0;
}
const newNumb = numbers.filter(parzyste);
console.log(newNumb);

//zad 2
const sayHello = (name='')=> console.log(`Hello ${name}`);
sayHello()

// // zadania udemy 

let score
const add = (x,y) => {
    score = x+y;
    (score % 2 === 0) ? console.log(`Liczba ${score} jest parzysta`):console.log(`Liczba ${score} jest nieparzysta`);
    
};
// //Poprawne rozwiązanie 
// let score
// const add = (x,y) => {
//     score = x+y;
//     if (score % 2 === 0) {
//         evenFunct()
//     } else {
//         oddFunct()
//     }
// }
// function evenFunct() {
//     console.log(`Liczba ${score} jest parzysta.`); // def. funkcji bez parametru
// }
// function oddFunct() {
//     console.log(`Liczba ${score} jest nieprzysta.`); 
// }

// // // wyrażenie funkcyjne  i funkcja anonimowa
// // const oddFunction = function () {
// //     console.log(`Liczba ${score} jest nieprzysta.`); 
// // }
// add (5,12);

// Konwerter C->F
let celsius
let temp
const farentheit = x => { celsius = x;
    temp = x*1.8+32;
    console.log(`${celsius} stopni Celsiusza to ${temp} farenhaita.`);
};


