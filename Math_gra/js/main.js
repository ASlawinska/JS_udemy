const number = prompt('WYBIERZ CYFRĘ 0 LUB 1')
if (number == Math.floor(Math.random() *2)) {
    console.log('Wygrałeś!');
} else {
    console.log('Przegrałeś...');
}

// porównujemy typ string wprowadziny przez yżutkownika z typem number zwracany przet obiekt Math dlatego 2 równa się a nie 3! 