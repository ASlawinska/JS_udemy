//call powiązanie funkcji która zwiera this z obiektem który przechowuje dany typ klucza na który wskazujemy - wiązemy funkcje z obietem. nazwaFunkcji.call(obiek, pozostałe argumenty funkcji)
// CALL przyjmuje argumenty
const movie = {
    title: 'Dziewczyna z tatuażem'
}; 
function showMovie(price, place) {
    console.log(`${this.title}, cena biletu: ${price}zł, miejsce:${place}`);
};
showMovie.call(movie, 15, 'KinoŚwiat');

// call more complicate
// tworzenie konstruktora wspólnego dla wielu obiektów
function Movie(title, year) {
    this.title = title;
    this.year = year;
}
// tworzenie konstruktora bd podstawą do biblioteki filmów akcji
function Action(title, year) {
    Movie.call(this, title, year);// dziedziczenie po konstruktorze
    this.category = 'Action';
    console.log(`tytuł: ${this.title}, rok produkcji: ${this.year}, kategoria: ${this.category}`);
};

// tworzenie konstruktora bd podstawą do biblioteki filmów komediowych
function Comedy(title, year) {
    Movie.call(this, title, year);
    this.category = 'Comedy';
    console.log(`tytuł: ${this.title}, rok produkcji: ${this.year}, kategoria: ${this.category}`);
};
const newMovie = new Action('Szybcy i wściekli', 2001);
const newMovie2 = new Comedy('Chłopaki nie płaczą', 2000);
console.log(newMovie);
console.log(newMovie2);


// przyklad 2
function Person(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
}
function School(name, age){
    Person.call(this, name, age);// TAK nie można! przy użyciu metody call musimy przekazać wszystkie parametry zdef. dla konstruktora po którym dzidziczymy! 
    this.school = 'szkoły podstawowej'
    console.log(`${this.name} ma ${this.age} lat i chodzi do ${this.school}.`);
}
function Kindergarden(name, surname, age){
    Person.call(this, name, surname, age);
    this.kindergarden = 'przedszkola'
    console.log(`${this.name} ${this.surname} ma ${this.age} lat i chodzi do ${this.kindergarden}.`);
}
const Person1 = new School('Ania', 9); // 9 trafia do surmane a age jest undefined 
const Person2 = new Kindergarden('Ela', 'Kowalska', 5);
console.log(Person1);
console.log(Person2);

//APPLY - to taki call ale zamiast arg przyjmuje tablice!
function add(...args) {
    let result = 0;
    for (let i = 0; i < args.length; i++) {
        result += args[i];
    }
    return result;
}
const calculate = add.apply(null, [1,6,8,90]);
console.log(calculate);

// BIND - pozwala wywołać funkcje na obiekcie 
//przykład 1
// const car1 = {
//     name: 'Ferrari',
//     year: 2000
// };
// const car2 = {
//     name: 'Opel',
//     year: 2012
// };
// const car3 = {
//     name: 'Ford',
//     year: 2013
// };
// function showName() {
//     console.log(this.name);
//     console.log(this.year);
// };
// showName.bind(car1)();
// showName.bind(car2)();
// showName.bind(car3)();
//Przyklad2
// bind(this) - przypisanie thisa do danego obiektu 
const colorsObj ={
    colors: ['red', 'green', 'yellow'],

    showColors() {
        this.colors.forEach(
            function (el, i) {
                console.log(this.colors[i]);
            }.bind(this) // bindujemy funkcje w callbacku do obiektu na którym działamy
        )
    }
};
colorsObj.showColors();
// Przykład 3
const fruitObj = {
    fruit: ['apple', 'banana', 'pear'],
    //dodanie metody 
    showFruit(){
        this.fruit.forEach(
            function (el, i) {
                console.log(this.fruit[i]);// to this jest wewnatrz funkcji i sama bez przypisania przez bind wskazuje na obiekt window
            }.bind(this)// to this wskazuje na obiekt do którego jest przypisany
        )
    }
}
fruitObj.showFruit();