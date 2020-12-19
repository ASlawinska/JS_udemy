// zad1
//const ulList = document.createElement('ul');
// document.body.appendChild(ulList)
// for (let i = 1; i <= 3; i++) {
//     const liItem = document.createElement('li');
//     ulList.appendChild(liItem);
//     liItem.textContent = i;
// }
// const liLast = document.querySelector('li:last-child');
// liLast.innerText = 'Ostatni element '


//zad2
const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const btn3 = document.querySelector('.btn3')
const text =document.querySelector('.text')

btn1.addEventListener('click', function () {
    text.classList.add('show')
    text.classList.remove('hide')
})
btn2.addEventListener('click', function () {
    text.classList.add('hide')
    text.classList.remove('show')
})
// za pomocą jednego przycisku 
btn3.addEventListener('click', function () {
    text.classList.toggle('show')
})
