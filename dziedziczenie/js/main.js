// tworzenie obiektu na podstawie klasy 
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    sayHello(){
        console.log(`${this.name} mówi cześć!`);
    }
};
class Driver extends Person{// dzidziczenie 
    constructor(name, age, licence){
        super(name, age);// super musi być zawsze na gorze! kolejność arg musi być zachowana 
        this.licence = licence;
    }
    isDriver(){
        console.log(`${this.name} ma ${this.age} lata i posiada prawo jazdy kategorii ${this.licence}.`);
    }
};
const person1 = new Person('Adela', 24);
const driver1 = new Driver('Lily', 23, 'B');
person1.sayHello();
driver1.sayHello();
driver1.isDriver();
// dziedziczenie tylko w jedną stronę, dlatego klasa Driver ma metodę sayHello oraz isDriver, a Person nie posiada isDriver

// cwiczenia 
class Fruit {
    constructor(name, place){
        this.name = name;
        this.place = place;
    }
    show(){
        console.log(`nazwa:${this.name}, kraj pochodzenia: ${this.place} `);
    }
};
class EgzoticFruit extends Fruit{
    constructor(name, place, color) {
        super(name, place);
        this.color = color;
    }
    showColor(){
        console.log(`kolor owoca egzotycznego to ${this.color}, kraj pochodzenia: ${this.place}.`);
    }
};
const apple = new Fruit('apple', 'Polska');
const banana = new EgzoticFruit('banana', 'Grecja', 'żółty');
apple.show();
banana.showColor();
banana.show();

