// fetch('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then(res => {
//         console.log('response, waiting to parse...', res);
//         return res.json();
//     })
//     .then(data => {
//         console.log('data parsed...', data.ticker.price);
//     })
//     .catch(e => {
//         console.log('Oh no! Error:', e);
//     })

const fetchBitcoinPrice = async () => {
    try {
        const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd');
        const data = await res.json();
        console.log(data.ticker.price);
    } catch (e) {
        console.log('something went wrong:', e);
    }
}