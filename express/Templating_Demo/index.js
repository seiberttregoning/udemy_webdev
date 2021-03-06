const express = require('express');
const app = express();
const path = require('path'); // Needed to update ejs views directory lookup
const redditData = require('./data.json');

app.use(express.static(path.join(__dirname, '/public')));

app.set('view engine', 'ejs');

// This sets up ejs to find the /views directory in relation
// to the index file rather than the directory the code was run from
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/cats', (req, res) => {
    const cats = [
        'Blue', 'Rocket', 'Monty', 'Stephanie', 'Winston', 'Ellie'
    ];
    res.render('cats', { cats });
});

app.get('/random', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    // res.render('random', { rand: num });
    // Can also pass like this:
    res.render('random', { num });
});


app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    const data = redditData[subreddit];
    if (data) {
        res.render('subreddit', { ...data }) // Spreads the object, saves me from referencing data.name data.etc
    } else {
        res.render('notfound', { subreddit })
    };
});


app.listen(3000, () => {
    console.log('Listening on port 3000');
});