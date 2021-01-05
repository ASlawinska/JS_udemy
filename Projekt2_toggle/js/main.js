const picture1 = document.querySelector('.item1');
const picture2 = document.querySelector('.item2');
const btn = document.querySelector('.arrow');
const icon = document.querySelector('.fas')



btn.addEventListener('click', function () {
    picture1.classList.toggle('hide');
    if (picture1.classList.contains('hide')) {
        icon.style.transform = 'rotate(180deg)'
    } else {
        icon.style.transform = 'rotate(0deg)'
    }
} )
