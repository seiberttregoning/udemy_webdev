const express = require('express');
const app = express();

// app.use((req, res) => {
//     console.log('we got a new request!');
//     // res.send('hello, we got your request! this is a response!');
//     res.send({ color: 'red' });
// })

app.get('/', (req, res) => {
    console.log('ROOT REQUEST!');
    res.send('This is the home page!');
})



// colon defines a pattern, anything could be 'subreddit'
app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`);
})

app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`<h1>Viewing Post ID: ${postId} on ${subreddit} subreddit</h1>`);
})

app.get('/cats', (req, res) => {
    console.log('CAT REQUEST!');
    res.send('meow!');
})

app.post('/cats', (req, res) => {
    console.log('CAT POST!');
    res.send('This is different than a get request!');
})

app.get('/dogs', (req, res) => {
    console.log('DOG REQUEST!');
    res.send('woof!');
})

// This matches all other GET requests
app.get('*', (req, res) => {
    res.send(`I don't know that path!`);
})

// /cats => 'meow'
// /dogs => 'woof'
// /     => 'This is the home page!'

app.listen(3000, () => {
    console.log('listening on port 3000');
})