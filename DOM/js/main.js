//Dodawanie elementów na strone
const ulList = document.createElement('ul')
document.body.appendChild(ulList)
const liItem = document.createElement('li')
liItem.textContent = 'cześć';
ulList.appendChild(liItem); // dodajemy elemnt do rodzica 

// elemnt dodawany na końcu dokumentu jeżeli nie zdefiniujemy kontenera/ seksji. 
const divCreatElements = document.querySelector('.creatElement')
const pCreat = document.createElement('p')
pCreat.textContent = 'Hello World'
divCreatElements.appendChild(pCreat)