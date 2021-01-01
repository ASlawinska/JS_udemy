const sumResult = document.querySelector('.sumResult')
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btnResult = document.querySelector('.btnResult')
let score;
function number(a, b) {
    score = a + b; 
    sumResult.innerHTML = score;
}
const multiply = () => {
    multiplyScore=score*3;
    btnResult.innerHTML = multiplyScore;
}
function divide() {
    divideScore=score/5
    btnResult.innerHTML = divideScore;
}
btn1.addEventListener('click', multiply);
btn2.addEventListener('click', divide);
number(5,6)