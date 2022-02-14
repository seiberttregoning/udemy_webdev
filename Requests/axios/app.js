// axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then(res => {
//         console.log(res.data.ticker.price);
//     })
//     .catch(e => {
//         console.log('error:', e);
//     })

const fetchBitcoinPrice = async () => {
    try {
        const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd');
        console.log(res.data.ticker.price);
    } catch (e) {
        console.log('error:', e);
    }
}

const jokes = document.querySelector('#jokes');

const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } }
        const res = await axios.get('https://icanhazdadjoke.com/', config);
        // console.log(res.data.joke);
        return res.data.joke;
    } catch (e) {
        return 'No joke available! Sorry :('
    }
}

const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    const newLI = document.createElement('LI');
    newLI.append(jokeText);
    jokes.append(newLI);
}


const button = document.querySelector('button');
button.addEventListener('click', addNewJoke);