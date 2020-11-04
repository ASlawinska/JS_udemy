//map
const numbers = [1, 2, 3, 4, 5];
function multiplay(x) {
    console.log(x * 2);
}
numbers.map(multiplay)// metoda map, mapuje po tablicy o nazwie numbers i wywołuje funkcji multiplay dla każenego z elemetow

const colors = ['red', 'green', 'blue'];
function uppercase(color) {
    console.log(color.toUpperCase());
};
colors.map(uppercase)

// concat łączenie tablic

const numbs = [1, 2, 3]
const str = ['a', 'b', 'c', true]
const addNumbsStr = numbs.concat(str)//metoda nie ingeruje w stare tablice, musi powstać nowa tablica/zmienna, tablica numbs i str pozostaja bez zmian
console.log(addNumbsStr);

const addNumbs = numbs.concat(50, 60, 70)
console.log(addNumbs); // za pomocą concat możemy również dodawać elementy tablicy, ale twrzymy nową tablicę w przeciwieństwie do pusha 


// SPRED rozparowanie tablicy 
const nb = [1, 2, 5, 67];
console.log(nb);
console.log(...nb); // rozparowanie wartosci, 

const fruits = ['apple', 'banana', 'ananas']
const drinks = ['water', 'beer', 'juice']
const menu = [fruits, drinks] // zmienna menu przechowyje tablica z dwoma zagnieżdzonymi tablicami
console.log(menu); 
const menu2 = [...fruits, ...drinks] // nowa tablica zawierajaca elemty roparowanej tablicy fruits i drinks
console.log(menu2);

//slice niedestrukcyjne
// metoda do wycinanie elementów tablicy 
const word = ['one', 'two', 'three', 'four', 'five']
console.log(word);
const wordSlice = word.slice(2)//podajemy argument od którego do którgo wycinamy <2, 4) wycięte elementy to 2 i 3
console.log(wordSlice); // nie ingeruje w pierwotną zawartość tablicy
const wordSlice2 = word.slice(1,3)
console.log(wordSlice2);

// SPLICE
// destrukcyjne, zmienia pierwotną tablice
const arr = ['one', 'red', 'green', 'blue', true, 0, 1, 20]
console.log(arr);
const arrElSplice = arr.splice(1, 3);
console.log(arrElSplice);
console.log(arr);