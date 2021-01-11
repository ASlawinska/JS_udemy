const burgerBtn = document.querySelector('.burger');
const open = document.querySelector('.fa-bars');
const close = document.querySelector('.fa-times');
const nav = document.querySelector('nav')

const addActive = () => {
    nav.classList.toggle('active');
    burgerBtn.classList.toggle('active');
    if (burgerBtn.classList.contains('active')) {
        open.classList.add('hide');
        close.classList.remove('hide');
    } else {
        open.classList.remove('hide');
        close.classList.add('hide');
    }

}
burgerBtn.addEventListener('click', addActive)