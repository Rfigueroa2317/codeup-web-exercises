"use Strict";

// var num = 7;
// function showMultiplicationTable(num){
//     for (num = 7; num < 10 ; num++){
//         showMultiplicationTable(console.log(num));
//
//     }
// }

function showMultiplicationTable(num){
    // starting at 1, stopping at 10, iterate 1 by 1
    for (var i = 1; i <= num; i++) {
        // solution variable holding result of num * 1
        console.log(`${num} * ${i} = ${num * i}`);
        var solution = num * i;
        console.log(`${num} * {i} = ${solution}`);
    }
}

console.log(showMultiplicationTable(9));

// TODO: Loop through a set of numbers (0-30), if the number
//  you're currently at is even, add 2 to it. If it's an
//  odd number, print "odd"
// // HINT: remember the remainder operator (modulo %)

// for(var i = 0; i <= 30; i ++ ){
//
//     if (i % 2 === 0){
//         console.log(i + 2);
//     } else {
//         console.log(i + " odd");
//     }
// }
// console.log(i);

// remainder opertor : will return any remainders;
// if it's divisible by 2 and the output of that division is 0;

// if(condition){
//     code;
// } else {
//     code;
// }

// if(condition){
//     code;
// } else if (another condition){
//     code;
// } else if (yet another condition){
//     code;
// } else {
//     code;
// }

//-------------------


// // TODO: loop through numbers 1 - 40. Print "marco"
//      if it's divisible by 3. Print "polo" if it's divisible by 5.
//  If it's neither print "I'm not playing"
//  Print "marco polo" if it's divisible by 3 and 5.


// for(var i = 1; i <= 40; i++){
//
//     if (i % 3 === 0){
//         console.log(i + "marco");
//     }
//
//     if (i % 5 === 0);{
//        console.log("polo")
//     }
// }
// console.log(i);

// for (var i = 1; i <= 40; i++) {
//     console.log(i);
//
//     if (i % 3 === 0) {
//         for (var i2 = 5; i2 >= 40; i++) {
//             if (i2 % 5 === 0) {
//             }
//         }
//         console.log("marco " + i);
//         console.log("polo " + i2);
//     }
// }

