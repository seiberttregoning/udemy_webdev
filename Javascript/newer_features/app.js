// function rollDie(numSides) {
//     if (numSides === undefined) {
//         numSides = 6
//     }
//     return Math.floor(Math.random * numSides) + 1;
// }

function rollDie(numSides = 6) {
    return Math.floor(Math.random() * numSides) + 1
}

function greet(name, msg = "Hi", punc = "!") {
    console.log(`${msg}, ${name}${punc}`)
}

function sum(...nums) {
    return nums.reduce((total, el) => total += el)
}

const user = {
    email: 'harvey@gmail.com',
    password: 'jfelsa9382jfesl!',
    firstName: 'Harvey',
    lastName: 'Milk',
    born: 1930,
    died: 1978,
    city: 'San Francisco',
    state: 'California'
}

// const { email, firstName, lastName } = user;

// const { born: birthYear } = user; // creates a new variable from object with custom name

const user2 = {
    email: 'stacy@gmail.com',
    firstName: 'Stacy',
    lastName: 'Gonzalez',
    born: 1987,
    city: 'Tulsa',
    state: 'Oklahoma'
}

const { born: birthYear, died: deathYear = 'N/A' } = user2; // creates a default value of 'N/A' if would otherwise be undefined


// function fullName(user) {
//     return `${user.firstName} ${user.lastName}`
// }

// function fullName(user) {
//     const { firstName, lastName } = user;
//     return `${firstName} ${lastName}`
// }

// function fullName({ firstName, lastName }) {
//     return `${firstName} ${lastName}`
// }

const fullName = ({ firstName, lastName }) => `${firstName} ${lastName}`