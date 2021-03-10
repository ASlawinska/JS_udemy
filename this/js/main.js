const btns = document.querySelectorAll('button');

for (const btn of btns) {
    btn.addEventListener('click', function () {
        console.log(this.innerText);
    })
    
}
// stworzenie kontruktora 
function Food(name) {
    this.name =name
}
const soup = new Food('pomidorowa');
const second = new Food('schabowy');
console.log(soup);
console.log(second);

// call apply bind 
