const btn = document.querySelector('#v2');

btn.onclick = function () {
    console.log("YOU CLICKED ME!");
    console.log("I HOPE IT WORKED!!");
}

function scream() {
    console.log("AAAAAAAAH");
    console.log("STOP TOUCHING ME!");
}

// btn.onmouseenter = scream;

const btn3 = document.querySelector('#v3');

btn3.addEventListener('click', function () {
    alert("CLICKED!");
})

btn3.addEventListener('click', scream)