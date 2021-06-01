"use strict";


    // jquery syntax
// let document = {
//     getElementById: function (){
//         console.log("find element with id of x")
//     },
// }
// document.getElementById()

// tapping into objects
let school = {
    students: 36,
    name: "high school one",
    teachers: ["Casey","Tristan"],
    geLunchMoney: function(){
        console.log("you have X dollars left");
    }
}
//school.geLunchMoney();

// dollar sign - tapping into jQuery library
// selector - the element that you're selecting from the dom
// $("selector").methods("any arguments required");

// syntax - select by className
// $("h1") //... --> select by tagName
// $("p").hide(); <-- this will hide all the paragraph elements
$("#change-text").hide(); //<-- this will change the specified text

// syntax - selecting by id
// $("#change-text") //


// syntax - selecting by class
// $(".lead")
console.log("-- before hiding purple")
$(".purple").hide();
// .show()
console.log("-- after hiding purple")
//$(".purple").show();

console.log("--before showing purple")
$(".purple")



// selecting children/parent/sibling elements
