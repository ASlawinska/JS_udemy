const female = {
    name: 'Ala',
    age: 23,
    hairColor: 'blond'
}
const men = {
    name: 'Leszek',
    age: 45,
    hight: 199
}
const person = Object.assign({}, female, men);//{} - stworzenie nowego obiekty do którego zostają przypisane wartości dwóch pozostałych 
// jezeli występuja dwa takie same klucze w obiektach laczonych, to wartości ostateczne w nowym obiekcie to te z obiektu najbardziej po prawej
console.log(person);
console.log(female);
console.log(men);
