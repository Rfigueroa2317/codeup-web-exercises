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

fetch("https://dog.ceo/api/breeds/image/random", {

}).then(response => response.json())
    .then(data => {
        console.log(data);
        $("#random-dog-image").attr("src", data.message)
        console.log("place holder");
    }).catch(error => console.log(error));

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
