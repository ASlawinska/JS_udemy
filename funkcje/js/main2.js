let num=10;
let numbers =[];
for (let i = 0; i < num; i++) {
    numbers.push(i); // unshift
}
const numbFunct = x => {
    arg = x;
    if (x % 3 === 0 && x !== 0 ) {
        console.log(`${arg} jest podzielne przez 3 i jest różna od 0`);
    } else {
        console.log(`${arg}  nie jest podzielne przez 3 jest różna od 0`);
    }
}
const newNumb = numbers.forEach(numbFunct);

