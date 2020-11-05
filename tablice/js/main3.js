// zad 1
const arr = ['red', 1, 5, 'blue', true]
console.log(arr);
const arrAdd = console.log(arr.unshift('green'));
console.log(arr);
const newArray = arr
console.log(newArray.pop());
console.log(newArray);

// zad 2 
const array = []
console.log(array);
const fruits = ['banana', 'apple']
const vegetables = ['carot', 'pumpkin', 'tomato']
const menu = fruits.concat(vegetables)
console.log(menu);

const arr2 = [];
arr2.push(1, 2, 3, 4, 5, 6)
console.log(arr2);

//zad3
const menu2 = [...fruits, ...vegetables]
console.log(menu2);
//zad4
const nArrayNumb = [34, 56, 23, 4, 1]
const nArrayNumb2 = nArrayNumb.forEach(el => console.log(el*5));
// console.log(nArrayNumb2);
// function multiplayNumb(x) {
//     x *=5;
// }
// const nArrayNumb3 = nArrayNumb.forEach(multiplayNumb())
// console.log(nArrayNumb3);

//zad5
const color = ['green']
color.unshift('yellow')
console.log(color);
color.push('red')
console.log(color);
function loveColor(x) {
    return x == "yellow" ? console.log(`Mój ulubiony color to ${x.toUpperCase()}`): console.log(`kolor obojętny to ${x}`)
}
console.log(color.filter(loveColor));
const coloCapitalized = color.forEach(el => console.log(el.charAt(0).toUpperCase() + el.slice(1)));

for (let i = 0; i < color.length; i++) {
    console.log(`Mój ulubiony kolor to: ${color[i].charAt(0).toUpperCase() + color[i].slice(1)}`);
    }
// zad6
const text = 'Audi, Mercedes, BMW, Nissan, Dorde'
const carArray = text.split(', ')
console.log(carArray);
if (carArray.length>3) {
    console.log('jest OK!');
} else {
    console.log('nie jest ok');
}
// operator warunkowy 
console.log((carArray.length>3) ? 'Jest OK!': 'Nie jest ok');
if (carArray.includes('Audi')) {
    carArray.unshift('opel');
} else {
    carArray.pop();
}
for (let i = 0; i < carArray.length; i++) {
    console.log(carArray[i].toLocaleUpperCase());
    
}