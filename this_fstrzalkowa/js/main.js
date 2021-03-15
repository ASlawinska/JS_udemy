const obiekt = {
    name: 'Ada',
    callName() {
        console.log(`${this.name} metoda w obiekcie`);
        function callName2() {
            console.log(`${this.name} funkcja w metodzie w obiekcie`);
        };
        //callName2();// tutaj nie mamy wiązania do this. this wskazuje na window, aby prawidłowo wywołanie musimu dodać bind
        callName2.bind(obiekt)();
        const callName3 = () => console.log(`${this.name} funkcja strzałkowa w metodzie w obiekcie`);
        callName3();// funkcja strzałkowa sama szuka wiązania do obiektu
    }
}
obiekt.callName();
// ALE 
// jeżeli callName3 wywołamy globalnie, to this bd wskazyłam na window! 

console.log(this === window); //true
console.log(this.a === Window.a); //true

//zad
function add(a, b) {
    return a + b +this.c + this.d;
}
const numbers = {
    c: 7,
    d: 3
};
console.log(add.call(numbers, 2,5));
console.log(add.apply(numbers, [4,8]));

// zad 2 
//UWAGA BIND nie łączy nam funkcji strzałkowych!
// musimy zapisać jako funkcje lub wyrażenie funkcyjne aby móc yżywać BIND 

// obiekt
const user = {
    name: 'Lily'
}
const showUser = () => console.log(this.name); // funcja strzałkowa poza obiektem!
showUser.bind(user)() // -> zwraca pusty element, bo BIND nie do f. strzałkowych 
const showUser2 = function () {
    console.log(this.name);
}; //wyrażenie funkcyjne
showUser2.bind(user)();

function showUser3() {
    console.log(this.name);
}; //funkcja
showUser3.bind(user)();

// zad 3
const user1 = {
    name: 'Lily',
    age: 23,
    'fav-color': 'niebieski',
    car: {
        brand: 'Audi'
    }
};
function showData() {
    console.log(`${this.name} ma ${this.age} lata, a jej ulubiony kolor to ${this['fav-color']}.`);
};
showData.bind(user1)();
function showCar(col) {
    console.log(`Jeżdzi samochodem marki ${this.car.brand}. Samochód jest koloru ${col}.`);
};
showCar.call(user1, 'czarnego');