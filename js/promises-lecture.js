// JS PROMISES \\

// What is a promise in js

// what is async and sync
// async - everything happens at once
// sync - sequentially

// three states of a promise
// .1 pending
// .2 resolved (successfully)
// .3 rejected (handle failed request)

// console.log("above my fetch request")

// Fetch
// basic fetch syntax
// fetch('https://jsonplaceholder.typicode.com/posts/1')
//     // .then(response => {
//     //     console.log("inside first then method")
//     //     console.log(response.json())
//     // })
//     // .then(data => {
//     //     console.log(data);
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         $("div").append(`<p>${data.title}</p>`);
//     })


// console.log("below my fetch request")
// let's break down what .then() method does

// .then(response => console.log(response));
//
// .then(function(response){
//     console.log(response);
// })


// fetch syntax with .catch() method
// let's break down what .catch() method does
// .catch(err => {
//     console.log('error: ' + err);
// });
// alert("sorry an error has occurred");

// fetch syntax for post request

// fetch('https://jsonplaceholder.typicode.com/posts/',{
//     method: "POST",
//     headers: {},
//     body: {title: "Here's a title", body: "here's the body"}
// })
//     .then(response => console.log(response))
//     .catch(err => {
//      console.log('error: ' + err);
//  });

// TODO: using fetch(), make a simple GET request to this api: “https://dog.ceo/api/breeds/image/random” and append this image to the image element with an id of “random-dog-image”

// fetch("https://dog.ceo/api/breeds/image/random", {
//
// }).then(response => response.json())
//     .then(data => {
//         console.log(data);
//         console.log(data.message); // message displays the url of the picture
//         $("#random-dog-image").attr("src", data.message)// jquery: selects the image
//         console.log("place holder");
//     }) // we have the data in json format, now we can manipulate it
//     .catch(error => console.log(error));

// basic fetch syntax
// fetch('https://jsonplaceholder.typicode.com/posts/1')
//     // .then(response => {
//     //     console.log("inside first then method")
//     //     console.log(response.json())
//     // })
//     // .then(data => {
//     //     console.log(data);
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         $("div").append(`<p>${data.title}</p>`);
//     })

// TODO: create a second GET request to return the blog post with an id of 11 and display that blog post on the dom.
// *** Laura's answer. Please work on it yourself *** \\

// fetch('https://jsonplaceholder.typicode.com/posts') // make a request - GET
//     .then(response => response.json())
//     .then(data =>{
//         console.log(data); //
//         data.forEach(comment => {
//             // console.log(comment);
//             $("#comments").append(`<h4>${comment.name}</h4><hr><p>${comment.body}</p>`)
//         })
//     }) // we have the data in json format, now we can manipulate it
//     .catch(error => {
//         console.log(error);
//         console.error(error);
//     });

//  DELETE REQUEST
// fetch('https://jsonplaceholder.typicode.com/posts/2',{
//     method: "DELETE",
// })
//     .then(response => console.log(response))
//     .catch(err => {
//         console.log('error:' + err);
//     });
//
// console.log(myRequest);

//finish the delete request

// creating promises

// let promise = new Promise(function (resolve, reject){
//     console.log(promise);
//     // your code to be executed
//     console.log("has been resolved");
// });


// const myPromise = new Promise((resolve, reject) =>{
//     if(Math.random() > 0.5) {
//         resolve();
//     }else{
//         reject();
//     }
// })
//     myPromise.then(result => console.log('woohoo we made it! ' + result));
let y = Math.random()
const myOtherPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (y > 0.5) {
            console.log(y);
            resolve();
        }else{
            console.log(y);
            reject();
        }
    }, 1500);
});

console.log(myOtherPromise); //this is a pending promise

myOtherPromise.then(() => console.log('resolved!'));
myOtherPromise.catch(() => console.log('rejected'));
