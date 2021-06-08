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

// console.log("/https://jsonplaceholder.typicode.com/comments"), {
//     type: "GET"
// };
// console.log($.ajax("/https://jsonplaceholder.typicode.com/posts"))
//      type: "POST",
//     data: {
//         "postId": 1,
//         "id": 1,
//         "name": "id labore ex et quam laborum",
//         "email": "Eliseo@gardner.biz",
//         "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
//     }
//
// }

// .click()
// call function -
// click on the button
$("#click-me").click(function () {
    console.log("/https://jsonplaceholder.typicode.com/comments"), {
        type: "GET"
    };
})

// TODO: make a POST request to the '/posts' endpoint, make sure to include any data required for that post to be made successfully


// TODO: what status do you get back when making a GET request to: https://jsonplaceholder.typicode.com/comments


// Responses

// successful
// console.log($.ajax("/https://jsonplaceholder.typicode.com/posts"))
// $.ajax("/https://jsonplaceholder.typicode.com/posts").done(function (data,status,jqXhr){
//     console.log(status);
//     alert("Your request has been completed successfully");
//     })

// failed
// $.ajax("https://jsonplaceholder.typicode.com/posts",{
//     type:"POST",
//     data: {
//         title: "hello world",
//         body: "our planet rocks!"
//     }
// }).fail(function (jqHxr, status, error){
//     console.log(jqHxr);
//     console.log(status); // 400s .// failed // statusText
//     console.log(error); //
// })


//always

// $.ajax("https://jsonplaceholder.typicode.com/posts").always(function (){
//     alert("Thank you for being here today");
// })

// $("#click-me").click(function () {
//     $.ajax("https://jsonplaceholder.typicode.com/posts", {
//         type: "GET",
//         success: function () {
//             alert("This worked!")
//         },
//         error: function () {
//             alert("an error has occurred")
//         }
//     }).done(function () {
//         alert("done method has been fired!")
//     })
// })

$.ajax("https://jsonplaceholder.typicode.com/posts").done(function (data){
    console.log(data);
    let dataId = data[25].id;
    console.log(dataId);
    // make a request to the comments section and look for only the comments that have an id of the one you just got from the
    $.ajax(`https://jsonplaceholder.typicode.com/comments?postsId=${dataId}`).done(function (commentsData){
        console.log(commentsData);
    })
}).fail(function (){
    alert("hey something went wrong");
})

//
$.get("url goes here", {

}).done(function (data){
    // do something with the data that you got back from api
})

$.post("url", {
    title: "my title",

})

// TODO: