// console.log("HELLO!!!...")

// setTimeout(() => {
//     console.log("...are you still there?")
// }, 3000)

// console.log("Goodbye!")

// console.log(Math.random())

// const id = setInterval(() => {
//     console.log(Math.random())
// }, 2000)

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

const evens = numbers.filter(function (element) {
    return element % 2 === 0;
})

const evens2 = numbers.filter(element => {
    return element % 2 === 0;
})

const evens3 = numbers.filter(element => (element % 2 === 0))

const func = function (element) {
    console.log(element)
}

const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2013
    },
    {
        title: '13 Going on 30',
        score: 70,
        year: 2004
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 1986
    },
    {
        title: 'Waterworld',
        score: 62,
        year: 1985
    },
    {
        title: 'Jingle All The Way',
        score: 71,
        year: 1996
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2019
    },
    {
        title: 'Notting Hill',
        score: 77,
        year: 1999
    },
    {
        title: 'Alien',
        score: 90,
        year: 1979
    }
]

const goodMovies = movies.filter(movie => {
    return movie.score > 80;
})

const goodMovies2 = movies.filter(m => m.score > 80);
const badMovies = movies.filter(m => m.score <= 70);
const newMovies = movies.filter(m => m.year > 2000);

const goodMovies3 = movies.filter(m => m.score > 90);
const goodTitles = goodMovies3.map(m => m.title);

const goodTitles2 = movies
    .filter(m => m.score > 90)
    .map(m => m.title);


// function validUserName(name) {
//     console.log(name);
// }

function validUserNames(array) {
    return array.filter(n => n.length < 10);
}

const exams = [80, 98, 92, 78, 77, 90, 89, 84, 81, 77]

exams.every(n => n >= 75) // True
exams.every(n => n >= 80) // False

exams.some(n => n > 80) // True