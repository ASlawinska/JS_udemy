// Zadania wakeUp and code
// zad1 tylko parzyste liczby z tablicy const numbers = [2, 5, 7, 10, 34, 16, 879, 1]
const numbers = [2, 5, 7, 10, 34, 16, 879, 1]
function parzyste(x) {
    return x%2===0;
}
const newNumb = numbers.filter(parzyste);
console.log(newNumb);

//zad 2
const sayHello = (name='')=> console.log(`Hello ${name}`);
sayHello()