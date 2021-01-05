const sizeUp = document.querySelector('.sizeUp');
const sizeDown = document.querySelector('.sizeDown');
const color = document.querySelector('.color');
const text = document.querySelector('.text');




let i = 36; // zmienna i musi być po za funckją, inaczej tylko jendna zmiana nastąpi na plu/minus
sizeUp.addEventListener('click', function () {
    i+= 5
    text.style.fontSize = i + 'px'
})
sizeDown.addEventListener('click', function () {
    i-= 5
    text.style.fontSize = i + 'px'
})
color.addEventListener('click', function () {
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    const rgb = `rgb(${r},${g},${b})`; // Collect all to a css color string
    text.style.color = rgb
})