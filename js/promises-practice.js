// fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
//     .then(response => {
//         console.log("inside first then method");
//         console.log(response.json())
//     }).then(data => {
//     console.log(data);
// }).then(data => data.response.json())

// promises
let p = new Promise((resolve, reject) => {
    let a = 1 + 1
    if (a === 2) {
        resolve('Success')
    }else {
        reject('Failed')
    }
})

p.then((message) => {
    console.log('This is the then ' + message)
}).catch((message) => {
    console.log('This is in the catch ' + message)
})

