const form = document.querySelector('#shelterForm');
const input = document.querySelector('#catName');
const ul = document.querySelector('#cats');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let newCat = document.createElement('li');
    newCat.innerText = input.value;
    ul.appendChild(newCat);
    input.value = '';
})