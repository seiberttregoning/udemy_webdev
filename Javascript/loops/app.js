// console.log(1)

// for (let i = 100; i >= 0; i -= 10) {
//     console.log(i);
// }

// const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!

// // WRITE YOUR LOOP BELOW THIS LINE:
// for (let i = 0; i < people.length; i++) {
//     console.log(people[i].toUpperCase())
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(`i is: ${i}`)
//     for (let j = 1; j <= 3; j++) {
//         console.log(`     j is: ${j}`)
//     }

// }

// let count = 0;
// while (count < 10) {
//     console.log(count);
//     count++;
// }

let maxNum = parseInt(prompt("Enter the max number:"));
let guessCount = 0;
let secretNum = Math.floor(Math.random() * maxNum) + 1

while (!maxNum) {
    maxNum = parseInt(prompt("Invalid entry, please enter a number:"));
}

let guess = parseInt(prompt("Enter a guess"));

while (true) {

    guessCount++
    if (secretNum > parseInt(guess)) {
        guess = prompt("Too low, guess again!");
    } else if (secretNum < parseInt(guess)) {
        guess = prompt("Too high, guess again!");
    } else if (guess.toLowerCase() === 'quit') {
        console.log("Game exited");
        console.log(secretNum)
        break;
    } else {
        console.log(`Correct guess!!!! It took you ${guessCount} guesses`)
        break;
    }
}
console.log(`Secret number was: ${secretNum}`)