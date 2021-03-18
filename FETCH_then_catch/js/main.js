const button = document.querySelector('button');
const showDog = document.querySelector('.showDog');
const urlDog = 'https://dog.ceo/api/breeds/image/random';

button.addEventListener('click', function () {
    fetch(urlDog)
        .then(resp => resp.json())
        .then(resp => {
            showDog.setAttribute('src', resp.message)}
        )
        .catch(err => console.log(err))
})