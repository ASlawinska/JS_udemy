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
