"use strict"; //4/16/2021

// var num = 5;
//
// num = num + 5;
// console.log(num);

// creating an interface for other code to use without knowing what happens inside add()
// returns the result of adding num1 and num2 together --v
//     function add(num1, num2, num3){ // <-- parameters here
//          return num1 + num2 + num3;
// }
 //returning the value is not the same as logging the value**

// ***These are some void and undefined examples*** ---v
// function logSomeStuff(){
//     console.log("The result of add() is: " + add(-5, 10, 10)); // <- arguments here
//
// }
//
// var log = logSomeStuff();
//     console.log(logSomeStuff());


// console.log("The result of add() is: " + add(-5, 10, 10)); // <- arguments here
//
// var myNum =12;
// var myNum2 = 21;
//
// console.log("The result of add() is: " + add(myNum, myNum, myNum2)); // <- arguments here
//
//
// // Returns the difference of subtracting num2 from num1
// function subtract(num1, num2){
//     return num1 - num2;
// }
//
// console.log("The result of subtract() is: " + subtract(10, 2));

// ----MINI EXERCISE
//TODO: Create functions which will return the product(*) of two numbers
// and the dividend (/) of two numbers, respectively.

// function multiply (num1, num2) {
//     return num1 * num2;
// }
//
// console.log(multiply(10, 10));
//
// function divide (num1, num2) {
//     return num1 / num2
// }
//
// console.log(divide (20, 10));

// OVERLOADING

// function addWithDefaults(num1 , num2 = 0){
//     return num1 + num2;
// }
//
// console.log(addWithDefaults(2, 2));

// SCOPING

{
    {
        let number = 2;
        {
            console.log(number);
        }
    }
}

var number2 =10;

function scopingFun(){
    var number = 2;

    console.log(number + number2);
}

scopingFun();

// look up Hoisting***

