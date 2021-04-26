"use strict";


function isBoolean(input) {
    return typeof input == "boolean" ;
}

// "IIFE's"

var billTotal = 20 || 25.50 || 33.42;
var tip = 0.20 || 0.25 || 0.15;

if (calculateTip (tip, billTotal)){
    var prompt=("how much do you want to tip?, ")
    prompt("Would you like to tip?")
} else if (){

}

var tip = prompt( "What percentage is your tip?");
var total= prompt ("What is your total bill?");

console.log(typeof tip);

console.log(calculateTip(tip, total));





 // (function(){
//  "use strict";
//
// }()