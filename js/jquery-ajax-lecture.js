//=====**** JQUERY AJAX ****=====\\

// js object
// let animal = {
//     name: "frog",
//     color: "green",
//     favorite: true
// }
// console.log(animal.color)

// JSON
// response === {
//     "name": "frog",
//     "color": "green",
//     "favorite": true
//}

// TODO: create a JSON object about your favorite hobby. make sure to include at least one of every data type that can be accepted as values

//    {
//     "name": "Ricardo",
//         "Hobbies" {
//             "Music",
//             "Cooking",
//         }
// }

//===============*** JQuery .ajax() method ***==============\\

// Requests
// jQuery .ajax() method
// syntax

// GET request - getting information from somewhere
// console.log($.ajax("https://jsonplaceholder.typicode.com/comments"));

// $.ajax("https://jsonplaceholder.typicode.com/comments",{
//     type: "POST",
//     data: {
//         title: "my trip to antartica",
//         article: "lorem ipsum blah blah blah. antartica is awesome"
//     }
// })
// url - location to go look for something / to go post something

// POST request - adding/sending information to the server adding to it

// DELETE - send info about the thing you want to delete, and then go in and actually delete

// PUT -

// TODO: using https://jsonplaceholder.typicode.com/ make an ajax request to the comments endpoint and console it.

console.log("/https://jsonplaceholder.typicode.com/comments");

// [
//     {
//         "postId": 1,
//         "id": 1,
//         "name": "id labore ex et quam laborum",
//         "email": "Eliseo@gardner.biz",
//         "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
//     }
// ]
console.log($.ajax("/https://jsonplaceholder.typicode.com/comments"));


// TODO: make a POST request to the '/posts' endpoint, make sure to include any data required for that post to be made successfully


// TODO: what status do you get back when making a GET request to: https://jsonplaceholder.typicode.com/comments