// JOIN
const arr = ['green', 'red', 'blue']
console.log(arr);
console.log(arr.join());//defoltowo oddzielone przecinkiem, bez spacji
console.log(arr.join('^&'));//argumenty wewnatrz nawiasu to string 
const arr2 = ['one', 'two', true]
console.log(arr2.toString());
const text = 'sjndsu sfhu skfhhy jnu sde vfffft'
console.log(text.split('s'));


// FILTER
const numbers = [1, 2, 4, 5, 7, 89, 72, 75, 2];
function number(x) {
    return x %2 ===0
    
};
console.log(numbers.filter(number));

//FOR EACH
const newNumber = numbers.forEach(el => console.log(el * 2)); // dla każedego elemntyu tablicy numbers wykonaj funkcje strzałkową
//REVERSE
console.log(numbers);
console.log(numbers.reverse());
console.log(numbers);
// metoda desrukcyjna, nadpisuje wartości tablicy

//SORT
const names = ['Klaudia', 'Zosia', 'Ala', 'Daria'];
console.log(names.sort());

console.log(numbers.sort((x,y) => x-y));

// INCLUDE
// czy w danej tablicy znajduje się element podany w nawiasie
console.log(numbers.includes(2));

// INDEXOF spradzenie ideksu danego elementu
console.log(numbers.indexOf(2)); // szuka pierszej wartości od lewej
console.log(numbers.indexOf(36)); // zwraca -1 gdy elemntu brak w tabllic 

//LASTINDEXOF szuka elementu od prawej
console.log(numbers.lastIndexOf(2));
//TOLOCALSTRING
let date = new Date();
console.log(date);
const arrDate = [3500, date]
console.log(arrDate.toLocaleString());