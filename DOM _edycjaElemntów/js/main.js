//pobieranie przycisku
const btn1 = document.querySelector('.btn1')
// inner HTML to tylko nasz tekst, możemy zmieniać zawartość tekstu
console.log(btn1.innerHTML);
btn1.innerHTML = 'siemka'
const btn2 = document.querySelector('.btn2')
btn2.innerHTML = '<li>123</li>'
//zmiana edycja trkstu wewnatrz elementów

const btn3 = document.querySelector('.btn3')
console.log(btn3.outerHTML);// zwraca cały obiekt wraz z tagami html
btn3.outerHTML = '<li>123</li>'
// zmiana przycisku na inny element li 
// zmiana edycja całych elemntów


// textContent  i innerText wpisuja nowa tresc wewnatrz naszego obiektu, ale różnica polega na ukazywaniu zawartości w konsoli, patrz niżej
const one = document.querySelector('.one')
const two = document.querySelector('.two')
one.textContent = '098'
two.innerText = 'xyz'

const test = document.querySelector('#test')
console.log(test.innerText); // zwraca tylko to co widać na stronie, nie iwdać elementów ukrytych, tylko tekst 
console.log(test.textContent);//textContent pokazuj wsyztsko, biale znaki sacje, zawartość. 

