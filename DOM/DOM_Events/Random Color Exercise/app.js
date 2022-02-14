const h1 = document.querySelector('h1');
const colorBtn = document.querySelector('#colorBtn');


function updatePage() {
    let redChannel = Math.floor(Math.random() * 255) + 1;
    let greenChannel = Math.floor(Math.random() * 255) + 1;
    let blueChannel = Math.floor(Math.random() * 255) + 1;
    let colorString = `rgb(${redChannel}, ${greenChannel}, ${blueChannel})`
    document.body.style.backgroundColor = colorString;
    h1.innerText = colorString;
    if (redChannel + greenChannel + blueChannel < 150) {
        h1.style.color = 'white';
    }
}

colorBtn.addEventListener('click', updatePage);