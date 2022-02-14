// const password = prompt("Please enter a new password");

// // Password must be 6+ characters
// if (password.length >= 6) {
//     // Password cannont include space

//     if (password.indexOf(' ') === -1) {
//         console.log("Valid Password")
//     } else {
//         console.log("Password cannot contain spaces.")
//     }

// } else {
//     console.log("Password too short. Must be 6+ characters")
// }

const password = prompt("Enter your password");

if (password.length >= 6 && password.indexOf(' ') === -1) {
    console.log("Valid password!")
} else {
    console.log("Invalid password")
}