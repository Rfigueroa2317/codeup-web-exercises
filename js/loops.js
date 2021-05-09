"use Strict"; // 4/22/2021

// LOOPS //

// ITERATION

// // INFINITE LOOPS
// // *** AVOID THEM AT ALL COST!!! ***
// if the condition is set to true or the condition won't ever meet false,
// then you might encounter an infinite loop

// WHILE LOOPS

// a while loop will continue to run code until the condition is FALSE
// be careful with while loops, make sure that the condition WILL meet false
// checks condition before running code

// SYNTAX:
// while: js keyword that says "hey, let's start a while loop
// (the condition you are checking against will go inside of these parentheses)
// { the code to be executed WHILE (as long as) the condition is true, will live inside your curly brackets}

// while (/*condition*/) {
// body
// code to be executed as long as the condition continues to be true;
// }

// numOfSteps = 0;
// while (numOfSteps <= 10){
//     console.log(`starting iteration at: ${numOfSteps}`); // template literals
//     console.log("Keep walking, you're currently at: " + numOfSteps + " steps");
//     numOfSteps = numOfSteps + 10; //10 //20 //30 //40
//     console.log(`ending iteration at: ${numOfSteps}`);
//     console.log(`---------------------------------`);
// }

// examples: 8- until we reach 10
// start at 25 until we reach 50, and it's going to add 30 at each iteration // iterating by 30s
// var num = 25; // starting point
//
// while(num <= 50){ // stopping point
    // code to be executed at each iteration
// }


// DO WHILE LOOPS

// similar to while loop, but executes the code once before checking the conditional
// after running the code once, it will continue to execute code if condition is true or exit if it's false,
// just like the while loop

 // do {
 //     // execute code
 // } while (condition);

// // EXAMPLES:

// // print "we have ___ amount of desks left"
// // variable that holds amount of students; --> our starting point (start at 0)
// // define amount of desks available
// // start our do loop
// // increment amount of students
// // execute code: log the sentence inside do {}
// //

// var numStudents = 0; // variable holding amt of students starting at 0
//
// do{ // execute once and then again ONLY IF the condition in the while parenthesis is true
//     var desksAvailable = 20 - numStudents; // 20 // 20 -1 = 19 //
//     console.log(`we have ${desksAvailable} amount of desks left`); //20 // 19
//     numStudents++; // 1 // 2
// } while(numStudents <= 20)
//
// console.log(numStudents);

//

// ex: sing happy birthday every year and when they reach 16 say "I got you a car"

//     var age = 0; // age starting point
//
// do {
//     //sing a song
//     console.log(`Happy birthday! you're now ${age} years old`)
//     // increment
//     age++;
// }while(age < 16) // ==> output from loop is going to be your starting point at the following iteration
//
// // log onto old no more celebrations
// console.log(`sorry you're too old for songs, got you a car instead, happy ${age}th birthday`);


// FOR LOOPS 4/23/2021

// for(let i = 0; i <= 10; i++){
// //      code to be executed
//     console.log('hello world' + i);
// }

// for(let i = 0; i >=0; i--){
//     // -10 // 9 // ... // 0
//     console.log(`hello world ${i}`)
// }

// for(let x = 10; x <=25; x = x++){
//     console.log(x * 2)
// }

// // Example:
// // if statement inside a for loops
// // initialize cartons
// // fir with eggs as the iterating variable
// counter cartons

// var carton = 0;
// for(let eggs = 1; eggs <=72; eggs++ ) {
//     console.log('eggs' + eggs);
//     if (eggs % 12 == 0) {
//         carton++;
//         console.log(`We've filled ${carton} amount of egg cartons with ${eggs} number of eggs`);
//     }
// }


// BREAK AND CONTINUE

// // we've seen break in switch statements
// // break: helps avoid infinite loops
// // break: leaves the switch statement if it meets a certain condition


// var dozens = 0;
// for(var i =0; i <= 36; i++){
//     if(i % 12 === 0){
//         console.log(`startin with: ${dozens} dozen eggs`);
//         dozens++;
//         console.log(dozens)
//             break; // exits out of the loop
//         console.log(`we now have ${dozens} dozen eggs`);
//     }
// }
//
// for(let i = 0; i <=10; i++){
//     console.log(`first: ${i}`); // 0
//     continue; // --> continues to the next iteration; exit current iteration and move onto the next iteration
//     i = i*2; // 0 // 2
//     console.log(`second ${i}`); // 0 // 2
// }

// 0

// // EXTRA: NESTED FOR LOOPS ****

// write a (nested) for loop that counts from 1 to 5 and then from 5 to 1

// // loop to count from 1 to 5;
// // starting point
// // return a value
// // increment
// // variable that will hold count;
// // logging the current count
// // conditional - stopping point


// for (var counter = 1; counter <= 5; counter++){
//      console.log("first: " + counter);
//
//     // nested loop: another for loop
//     // // count from 5 to 1
//     // // log those numbers
//     if(counter === 5){
//         for(var counterTwo = 5; counterTwo > 0; counterTwo--){
//             // console.log(`inner counter: ${counter}`);
//             console.log(`inner counterTwo: ${counterTwo}`);
//         }
//     }
//
// }

console.log('----------------------');
// // * wrap inner loop in a function *

function innerLoop(){
    for(var counterTwo = 5; counterTwo > 0; counterTwo--){
        // console.log(`inner counter: ${counter}`);
        console.log(`inner counterTwo: ${counterTwo}`);
    }
}

for (var counter = 1; counter <= 5; counter++){
    console.log("first: " + counter);

    // nested loop: another for loop
    // // count from 5 to 1
    // // log those numbers
    if(counter === 5){
        innerLoop();
    }

}

// function outerLoop(){
//     for(var counter = 1; counter <= 5; counter++){
//         console.log(counter);
//
//         if(counter === 5){
//             innerLoop();
//         }
//     }
// }
//
// console.log();


// // *** ROBERTS EXAMPLE ***

// function countDown() {
//     for(let i = counter; i > 0; i--) {
//         console.log("second: " + i);
//     }
// }
// for(let i = 0; i <= 5; i++) {
//     console.log("first: " + i);
//     var counter = i;
//     if(i === 5) {
//         countDown();
//     }
// }



