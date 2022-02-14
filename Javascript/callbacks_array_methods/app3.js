const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

// let total = 0;
// for (let i = 0; i < prices.length; i++){
//     total = total + prices[i];
// }


// let total = 0;
// for (let price of prices) {
//     total += price;
// }



// let total = prices.reduce((total, price) => {
//     return total + price
// })


// let total = prices.reduce(function (total, price) {
//     return total + price;
// })

// let total = prices.reduce((total, price) => (total + price));

// console.log(total)

let minimumValue = prices.reduce((min, price) => {
    if (min < price) {
        return min;
    }
    return price;
})

console.log(minimumValue)

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

let topMovie = movies.reduce((bestMovie, movie) => {
    if (bestMovie.score > movie.score) {
        return bestMovie;
    } return movie;
})

console.log(topMovie.title)

const evens = [2, 4, 6, 8];

let evensSum = evens.reduce((total, item) => total + item, 100); // can add a starting value as an arg

console.log(evensSum)

const person = {
    firstName: 'Viggo',
    lastName: 'Mortensen',
    fullname: function () {
        return `${this.firstName} ${this.lastName}`
    }
}