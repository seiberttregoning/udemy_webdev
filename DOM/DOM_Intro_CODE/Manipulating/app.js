const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }


for (let link of allLinks) {
    link.style.color = 'rgb(0, 108, 134)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy'
}


// const allImages = document.getElementsByTagName('img')

// for (let img of allImages) {
//     img.src = 'https://upload.wikimedia.org/wikipedia/commons/3/36/A_fuzzy_baby_chicken_and_its_mom.jpg';
// }