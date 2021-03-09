// tworzenie konstruktora stary zapis, konstruktory ( nazwy klas) piszemy duzą literą 
// function User (name, age, eyeColor) {
//     this.name = name;
//     this.age = age;
//     this.eyeColor = eyeColor;
//     // tego rodzaju funkcja jest powielana dla kazdego obiektu;  dlatego przenosimy to do prototype
//     // this.test = function() {
//     //     console.log(`Użytkownik ma na imię ${this.name} i ma ${this.age}.`);
//     // }
// }
// // towrzenie prototypu dla obiektu User, zyskujemy na optymalizacji pamieci
// User.prototype.test = function() {
//     console.log(`Użytkownik ma na imię ${this.name} i ma ${this.age}.`);};

// // Tworzenie klucza kraj o określonej wartości w obiekcie i prototypie
// User.prototype.country="Polska";
// // tworzenie obiektu na bazie konstruktora 
// const newUser = new User ('Ada', 29, 'brązowe');
// const newUser2 = new User ('Tosia', 2, 'czarne');
// const newUser3 = new User ('Robert', 34, 'zielone');
// console.log(newUser);
// console.log(newUser2);
// console.log(newUser3);
// newUser.test();
// newUser2.test();
// newUser3.test();
// console.log(newUser.country);

//  zadanie 
const but1 = document.querySelector(".but1");
const but2 = document.querySelector(".but2");
const but3 = document.querySelector(".but3");
const text = document.querySelector(".text");
// stworzenie konstruktora
function Eat(posilek, cena) {
    this.posilek = posilek;
    this.cena = cena;
};
// stworzenie 3 obiektór na bazie konstruktora
const Sniadanie = new Eat ('mleko', 5);
const Obiad = new Eat('makaron', 15);
const Kolacja = new Eat('kanapka', 10);
//dadanie metody przy użyciu prototypu
Eat.prototype.opis = function() {
    text.innerHTML = `${this.posilek} kosztuje ${this.cena}zł`
};
but1.addEventListener('click', function(){Sniadanie.opis()});
but2.addEventListener('click', function(){Obiad.opis()});
but3.addEventListener('click', function(){Kolacja.opis()});

