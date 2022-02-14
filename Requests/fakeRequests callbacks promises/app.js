const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection Timeout :(')
        } else {
            success(`Here is your fake data from ${url}`)
        }
    }, delay)
}

const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4500) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

fakeRequestPromise('yelp.com/api/coffee/page1')
    .then((data) => {
        console.log('it worked! (page 1)');
        console.log(data);
        return fakeRequestPromise('yelp.com/api/coffee/page2');
    })
    .then((data) => {
        console.log('it worked (page 2)!');
        console.log(data);
        return fakeRequestPromise('yelp.com/api/coffee/page3');
    })
    .then((data) => {
        console.log('it worked (page 3)!');
        console.log(data);
    })
    .catch((err) => {
        console.log('oh no, a request failed!');
        console.log(err);
    })


// const request = fakeRequestPromise('yelp.com/api/coffee/page1');

// request
//     .then(() => {
//         console.log("it worked!");
//         fakeRequestPromise('yelp.com/api/coffee/page2')
//             .then(() => {
//                 console.log('it worked again!');
//                 fakeRequestPromise('yelp.com/api/coffee/page2')
//                     .then(() => {
//                         console.log('it worked 3rd time');
//                     })
//                     .catch(() => {
//                         console.log('third page failed');
//                     })
//             })
//             .catch(() => {
//                 console.log('second page failed');
//             })
//     })
//     .catch(() => {
//         console.log("oh no, error!");
//     });

// fakeRequestCallback('books.com/page1',
//     function (response) {
//         console.log('It worked!!')
//         console.log(response)
//         fakeRequestCallback('books.com/page2',
//             function (response) {
//                 console.log('It worked again!!')
//                 console.log(response)
//                 fakeRequestCallback('books.com/page3',
//                     function (response) {
//                         console.log('It worked the third time!')
//                         console.log(response)
//                     }, function (err) {
//                         console.log('Error!! (3rd req)', err)
//                     })
//             }, function (err) {
//                 console.log('ERROR! (2nd req)', err)
//             })
//     }, function (err) {
//         console.log('ERROR!', err)
//     })