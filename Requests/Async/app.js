// const multiply = (x, y) => x * y;

// const square = x => multiply(x, x);

// const isRightTriangle = (a, b, c) => {
//     return square(a) + square(b) === square(c)
// }



// console.log('Sending request to server!');
// setTimeout(() => {
//     console.log('Here is your data from the server...')
// }, 3000);
// console.log('I am at the end of the file');



// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'orange';
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'yellow';
//             setTimeout(() => {
//                 document.body.style.backgroundColor = 'green';
//                 setTimeout(() => {
//                     document.body.style.backgroundColor = 'blue';
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)

const delayedColorChange = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        // allows doNext to be undefined if not passed in the function call
        doNext && doNext();
    }, delay)
}

delayedColorChange('red', 1000, () => {
    delayedColorChange('orange', 1000, () => {
        delayedColorChange('yellow', 1000, () => {
            delayedColorChange('green', 1000, () => {
                delayedColorChange('blue', 1000, () => {
                })
            })
        })
    })
});