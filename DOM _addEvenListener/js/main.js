//pobieranie przycisku
const btnAdd = document.querySelector('.btn1');
const btnRemove = document.querySelector('.btn2');
const btnToggle = document.querySelector('.btn3');
const text = document.querySelector('p');

const addFunct = () => {
    text.classList.add('new-color')
}
btnAdd.addEventListener('click', addFunct);

btnRemove.addEventListener('click', function() { text.classList.remove('new-color')})

btnToggle.addEventListener('click',() => text.classList.toggle('new-color'));