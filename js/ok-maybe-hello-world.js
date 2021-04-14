"use strict";

// alert("I swear I won't make you see 'hello world'");
//
// alert("I hope my dogs don't get out again :/");

// alert("How much can I fit");
//
// alert("Into a Haiku format");
//
// alert("Oh no I'm out of");

// CONFIRM

// var userChoice = confirm("Would you like to continue?");
//
//
// if (userChoice) {
//     console.log("Let's continue");
// } else{
//     console.log("Alright, be like that..");
// }
// console.log("The user chose: " + userChoice);

// PROMPT

var userInput = prompt("What is your favorite movie?").toUpperCase();

if (userInput ==="The Room".toUpperCase()){
    alert("Oh, hi Mark.");
}else{
    alert("You chose: " + userInput);
}
alert(userInput);