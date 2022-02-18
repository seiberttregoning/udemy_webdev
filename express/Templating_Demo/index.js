const express = require('express');
const app = express();
const path = require('path'); // Needed to update ejs views directory lookup

app.set('view engine', 'ejs');

// This sets up ejs to find the /views directory in relation
// to the index file rather than the directory the code was run from
app.set('views', path.join(__dirname, '/views'))

app.get('/', (req, res) => {
    res.render('home');
})


app.listen(3000, () => {
    console.log('Listening on port 3000');
})