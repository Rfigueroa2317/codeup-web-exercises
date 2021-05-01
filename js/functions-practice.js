"use strict"; // ***Notes and function practice***


// function isBoolean(input) {
//     return typeof input == "boolean" ;
// }
//
// // "IIFE's"
//
// var billTotal = 20 || 25.50 || 33.42;
// var tip = 0.20 || 0.25 || 0.15;
//
// if (calculateTip (tip, billTotal)){
//     var prompt=("how much do you want to tip?, ")
//     prompt("Would you like to tip?")
// } else{
//
// }
//
// var tip = prompt( "What percentage is your tip?");
// var total= prompt ("What is your total bill?");
//
// console.log(typeof tip);
//
// console.log(calculateTip(tip, total));


//  // PRACTICE FOR ASSESSMENT FOR 4/28/2021 //

// * Create a function called 'isTwo' that takes a number as a parameter.
// * The function should return a boolean value based on whether or not the passed
// * number is the number 2.
// *
// * Example
// * > isTwo(1) // returns false
// * > isTwo(2) // returns true
// * > isTwo(3) // returns false
// *
// * Call the function 'isTwo' passing the variable 'random' as a argument.
// *
// * console.log *outside of the function* to check your work (you should see a
// * different result everytime you refresh the page if you are using the random
// * number)
// */

    var num = Math.random(num);
    function isTwo(num){
        if (num === 2) {
            return true;
        }else if (num === 1 || 3){
            return false;
        }

    }
console.log(isTwo())














 // (function(){
//  "use strict";
//
// }()