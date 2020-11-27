// Pobieranie elemtów
// getElementByTagName
const liID = document.getElementById('item');
// przeszukanie dokumentu i pobranie elementru o id item 
console.log(liID);
//getElementByTagName
const li = document.getElementsByTagName('li');
console.log(li); // wszytskie elementy li bez i z klasa a takze bez i z id 
//getElementbyClassName
const liClass = document.getElementsByClassName('item-class');
console.log(liClass); // wywołanie obiektu tablicopodobnego, ale nie można wyonać operacji/ metod jak na tablicach, elementy tylko zwierające klasę 
// querrySelector 
// UWAGA!! pobiera tylko jeden pierwszy element pobrany z obiekty document!! 
const liQuerrySelectorID = document.querySelector('#item');
console.log(liQuerrySelectorID);
const liQuerrySelectorClass = document.querySelector('.item-class');
console.log(liQuerrySelectorClass);
const liQuerrySelector = document.querySelector('li'); // piebiera tylko jeden element 
console.log(liQuerrySelector);
// querrySelectorAll  - pozwala pobrać wszystkie elementy w documencie
const liQuerrySelectorIDAll = document.querySelectorAll('#item');
console.log(liQuerrySelectorIDAll);
const liQuerrySelectorClassAll = document.querySelectorAll('.item-class');
console.log(liQuerrySelectorClassAll);
const liQuerrySelectorAll = document.querySelectorAll('li'); // piebiera wszytskie elementy z document 
console.log(liQuerrySelectorAll);
// uwaga jeżeli chcemyaby automatycznie uzupełniana byla trześć o elementy dynamicznie dodane musimy używać getelementbyID getElementByTagName lub getElementByClassName