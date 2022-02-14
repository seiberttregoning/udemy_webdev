const makeRandomColor = () => {
    const r = Math.floor(Math.random() * 255) + 1;
    const g = Math.floor(Math.random() * 255) + 1;
    const b = Math.floor(Math.random() * 255) + 1;
    return `rgb(${r}, ${g}, ${b})`;
}


const buttons = document.querySelectorAll('button');


for (let button of buttons) {
    button.addEventListener('click', function () {
        button.style.backgroundColor = makeRandomColor();
    })
}



const h2s = document.querySelectorAll('h2');

function colorize() {
    this.style.backgroundColor = makeRandomColor();
}

for (let h2 of h2s) {
    h2.addEventListener('click', colorize);
}