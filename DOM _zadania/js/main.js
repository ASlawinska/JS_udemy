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
const text =document.querySelector('.text')
// function Show() {
//     text.classList.add('show')
//     text.classList.('show')
    
// }
btn1.addEventListener('click', function () {
    text.classList.add('show')
    text.classList.remove('hide')
})
btn2.addEventListener('click', function () {
    text.classList.add('hide')
    text.classList.remove('show')
})