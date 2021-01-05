const conv = document.querySelector('.conv')
const reset = document.querySelector('.reset')
const change = document.querySelector('.change')
let result = document.querySelector('.result')
const converter = document.querySelector('#converter')
const oneCF = document.querySelector('.one')
const twoFC = document.querySelector('.two')

let celsius
let farenheit
//F=C*1,8+32
//C= (F-32)/1,8

conv.addEventListener('click', function () {
    if (oneCF === '°C') {
        celsius = (converter.value -32) / 1.8;
        result.innerHTML = `${converter.value}°F to ${celsius.toFixed(2)} °C`
        converter.value = ''
    } else {
        farenheit = converter.value*1.8 +32;
        result.innerHTML = `${converter.value} °C to ${farenheit.toFixed(2)}°F `
        converter.value = ''
    }
})
reset.addEventListener('click', function () {
    result.innerHTML = '';
    converter.value = '';
})
change.addEventListener('click', function () {
    if (oneCF.innerHTML === '°C') {
        oneCF.innerHTML = '°F';
        twoFC.innerHTML = '°C';
    } else {
        oneCF.innerHTML = '°C';
        twoFC.innerHTML = '°F';
    }
})