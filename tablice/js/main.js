const numbers = [1, 2, 3, 4, 5];
console.log(numbers);
numbers.unshift(-1, 0) //zmiana wartości tabli metoda destrukcyjne, nadpisuje wartość, zawsze na pocza
console.log(numbers);

// metoda shift usuwa elementy z początku tablicy
const deleted = numbers.shift()
console.log(deleted);//element usunięty
console.log(numbers); // tablica pomniejszona o element deleted

const colors = ['red', 'green', 'blue']
console.log(colors.length);
console.log(colors);
colors.push('yellow') // dadajemy na końcu tablicy element
console.log(colors);
const deleted2 = colors.pop() //usuwanie elentu na końcu listy
console.log(deleted2);
console.log(colors);
