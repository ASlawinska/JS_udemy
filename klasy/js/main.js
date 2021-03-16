// STARY SPOSÓB// 
//tworzenie konstruktura,obiektu i prototypu
function Food (name, price) {
    this.name = name,
    this.price = price
};
Food.prototype.showMeal = function () {
    console.log(`${this.name} kosztuje ${this.price}zł.`);
};
const sandwich = new Food('kanapka', 8);
sandwich.showMeal();

//////////////////////KLASY///////////////////////////
// klasy nowy zapis konstruktora
class Food2 {
    constructor(name, price){
        this.name = name,
        this.price = price
    }
    showMeal2(){
        console.log(`${this.name} kosztuje ${this.price}zł.`);
    }// prototypy wpisuje wewnatrz klasy
};
const shake = new Food2('milk shake', 6);
console.log(shake);
shake.showMeal2();

//ćwiczenia
class User {
    constructor(name, surname, age){
        this.name = name,
        this.surname = surname,
        this.age = age
    }
    showUser(){
        console.log(`${this.name} ${this.surname} ma ${this.age} lat.`);
    }
};
const person = new User('Ania', 'Kowalska', 5);
person.showUser();
