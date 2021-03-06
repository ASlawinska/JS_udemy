// funkcja strzałkowa 
// znienna = (warunek) => {co ma zostać wykonane}
// jeżeli jeden awrunek(argument ) i jedno polecenie pozwbywamy się nawiasow (){}
//Przykłady 
const testAge = age => 
    console.log(`Mam ${age} lat.`);

testAge(24);

function add(a, b) {
    return a + b;
};
// Jeżeli funkcja ma tylko zwracać nie musimy dodać słówka return. 
const multiplay = (x, y) => x*y;


const arr = ['poniedziałek', 'wtorek', 'środa']
const arr2 = arr.forEach(function(el){console.log(el);})
const arr3 = arr.forEach(el=>console.log(el)) // funkcja strzałkowa 


// domyślne parametry funckji
const hello = (name='drogi użytkowniku')=> console.log(`Witaj ${name} na stronie o biżuterii`);
// jeżeli wywołamy funkcje bez podawania wartości arg zostanie wyświetlona wartość domyślna 


const add1 = (x, y) => x + y; // może być bez nawiasów {}() i bez słowa return
console.log(add1(2,3));
console.log(add1(500)); // NAN zwraca w konsoli, bo brak 2 argumentu ALE!
// zdefiniowanie wartości domyślnej, pozwala uniknąć tego błędu
const add2 = (a=5,b=20) => a+b;
console.log(add2()); // otrzymamy wartość 25
console.log(add2(10)); // otrzymamy 30 bo a =10 a b ma wartość domyślna 20
console.log(add2(60,80)); // 140, obie wartości domyślne są zastępowane przez argumenty


// operator SPREAD / REST ...
// SPREAD  rozmarowuje tablice 
const table = ['arg1', 'arg2', true, 50];
console.log(...table);
// REST z argumentów tworzy tablice
function multiplay1 (num) {
    return num*2;
}
function numbers(x, y, ...z) {
    console.log(x, y, z);
    console.log(z);
    console.log(z.map(multiplay1));
}
numbers(23, 25, 1, 90, 2, 40)

// wywołanie funckji numbers o 6 parametrach z użyciem operatora rest dla arg z powoduje że fukcja przybiera wszytskice zdefiniowane argumenty, x i y według kolejności, natomiast pozostałe elementy zostają umieszczone w tablicy. 

//foreach and callback

const numb = [0.5, 3, 11]

const newNumb = numb.forEach(el=>console.log(el**2));

const nam = ['Ania', 'Hania', 'Zosia']
function uppercase(x) {
    return x.toUpperCase()
}
const bigNam = nam.map(uppercase);
console.log(`Imiona pisene drukowanymi literami ${bigNam}`);
