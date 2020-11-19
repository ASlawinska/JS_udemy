// zadania https://kursjs.pl/kurs/super-podstawy/funkcje.php
// github @kartofelek007
//zad1
const text = 'Ala ma kota, a kot ma Alę';
const letterCount = text.length;
console.log(letterCount);
//zad2
const tab = [12, 30, 2];
const sum = tab.reduce(function(prev, curr) {
    return prev + curr;
});
console.log(sum);
// lub 
let sum1 = 0;
const tab1 = [12, 30, 2];
for (let i = 0; i < tab1.length; i++) {
    sum1 += tab1 [i];
}
console.log(sum1);

// // zad 3
// const textChangeLetter = text.toUpperCase();
// console.log(textChangeLetter);
// function textChange() {
//     let textoutput 
//     for (let i = 0; i < text.length; i++) {
//         textoutput += text[Math.floor(Math.random)].toUpperCase();
        
//     }
    
// }
// textChange()
function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

console.log(makeid(15));

// zad 4
function multiplay(x, y) {
    if (typeof x === "number" && typeof y === "number" ) {
        console.log(x*y);
    } else {
        console.log('false');
    }
}
// zad 5
function whatTodo(name1, month) {
    switch (true) {
        case (month ==`grudzien`||month ==`styczen`||month ==`luty`):
            console.log(`${name1} jezdzi na sankach`);
            break;
        case (month ==`marzec`||month ==`kwiecien`||month ==`maj`):
            console.log(`${name1} chodzi po kaluzach`);
            break;
        case (month ==`czerwiec`||month ==`lipiec`||month ==`sierpien`):
            console.log(`${name1} sie opala`);
            break;
        case (month ==`wrzesien`||month ==`pazdziernik`||month ==`listopad`):
            console.log(`${name1} zbiera liscie`);
            break;

        default: console.log(`${name1} uczy się JS`);
            break;
        }
}