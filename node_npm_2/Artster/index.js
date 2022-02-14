const figlet = require('figlet');
const colors = require('colors');

figlet('Join your holes', function (err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data.trap)
});


// use "npm install" in the terminal to look into package.json
// and install dependencies