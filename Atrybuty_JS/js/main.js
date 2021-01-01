const link = document.querySelector('a');
const img = document.querySelector('img');
const h1 = document.querySelector('h1');

link.setAttribute('target', '_blank')
// setAttribute('nazwaAtrybutu', 'własność') dodanie atrybutu o danej właśności
console.log(img.getAttribute('alt'));
//pobranie atrubutu img 

//sprawdzenie posiadania danego atrybutu
const hasAtt = img.hasAttribute('alt')
const hasAtt2 = img.hasAttribute('safdsf')
console.log(hasAtt);//true
console.log(hasAtt2);//false


//usunięcie atrybutu
h1.removeAttribute('style')