// const myObject= {
//     key: value,
//     key: value,
//     key: value,
//     key: value,
// }// obiekt charakteryzuje się parami klucz i wartość, 
// //
const newUser ={
    name: 'Ada',
    age: '29',
}
// odwolanie się do klucza obiektu
console.log(newUser.age);
//Tworzenie obiektu w obiekcie
const newUser2 = {
    name: 'Robert',
    age: '34',
    car: {
        brand: 'ford',
        year: '2013',
    }
}
console.log(newUser2.car); // zwraca cały obiekt 
console.log(newUser2.car.brand); // zwraca marke samochodu z obiektu car umieszczonego w obiekcie new User2
console.log(`${newUser2.name} jeździ samochodem marki ${newUser2.car.brand}.`);

const animal = {
    name: 'Kicia', 
    age: '2',
    sound () {
        console.log('Miau miau');// nowy zapis bez użycia słowa function
    }
};
console.log(animal.name);
console.log(`${animal.name} gdy chce jeść woła ${animal.sound()}`);
animal.sound()

const fruit = {
    name: 'jabłko',
    country: 'Polska',
}
console.log(fruit.country);

const car = {
    brand: 'cistroen',
    year: '2003',
};
console.log(car.brand);
// dodawanie elementów obiektu 
const user3 = {
    name: 'Klaudia',
    age: '23', // można dopisać
}
user3.country = "Polska";
user3['fav-color'] = 'żółty'; // dodawanie nowych kluczy i wartości o notacji ze znakami niedozwolonymi 
console.log(user3);

const nam = 'drops';
const age = '5';
// tworzymy obiekt DoG
// const dog = {
//     nam: nam, //przypisywanie klucz wartość o tej samej nazwie poprzez wcześniejsze zdefiniowanie zmiennej glob. jest częste
//     age: age,
// }
// zapis z nowego ES6, skrócenie kodu
let dog = {
    nam,
    age
};
console.log(dog.nam);
console.log(dog.age);
const anim = {
    nam,
    age,
    country : 'Polska',
}
console.log(anim);
delete anim.country
console.log(anim);