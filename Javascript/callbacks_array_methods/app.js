const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// const doubles = numbers.map(function (num) {
//     return num * 2;
// })

// function print(element) {
//     console.log(element)
// }

// numbers.forEach(function (el) {
//     if (el % 2 === 0) {
//         console.log(el);
//     }
// })

const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    }
]

const newMovies = movies.map((movie) => (
    `${movie.title} - ${movie.score / 10}`
))

// const newMovies = movies.map(function (movie) {
//     return `${movie.title} - ${movie.score / 10}`
// })

// movies.forEach(function (movie) {
//     console.log(`${movie.title} - ${movie.score}/100`)
// })

// const titles = movies.map(function (movie) {
//     return movie.title;
// })

// const add = (x, y) => {
//     return x + y;
// }

// const square = (x) => {
//     return x * x;
//}

// const rollDie = () => {
//     return Math.floor(Math.random() * 6) + 1;
// }

// const cube = x => {
//     return x * x * x;
// }

// const rollDie = () => (
//     Math.floor(Math.random() * 6) + 1
// )

// const add = (a, b) => a + b;