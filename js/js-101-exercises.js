"use strict"; // leave this line here :)

// Keep this function definition in order to test expected vs. actual results
const assert = function (actual, expected, message = "") {

    // This compares primitive values and collections. If they differ, throw an error.
    if (JSON.stringify(actual) !== JSON.stringify(expected)) {
        console.error('[assert] expected:    ' + JSON.stringify(expected))
        console.error('[assert] instead got: ' + JSON.stringify(actual))

        throw Error("Assert failed in " + message);
    }
};


// Keep this function here in order to add correct questions to the counter
function addToDone(message) {
    var node = document.createElement("LI");                 // Create a <li> node
    var textnode = document.createTextNode(message);         // Create a text node
    node.appendChild(textnode);                              // Append the text to <li>
    node.classList.add("finished");
    document.querySelector(".correct ul").appendChild(node);
    document.querySelector("#count").innerHTML = document.querySelectorAll('.finished').length + " of 101";
}


// Welcome to 101 Exercises in JS
// If you get "ReferenceError: someVariableName is not defined", that means you need to create a variable

// Exercise #0, Example Problem:
// Example problem setup: Create a variable named doingJSRightNow and assign it the boolean true.
// The line below creates the variable named doingJSRightNow and assigns the boolean value true
// To complete Exercise #0, uncomment the following line of JS
var doingJSRightNow = true

// The lines below will test your answer. If you see an error, then it means that your answer is incorrect or incomplete.
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Not_defined to understand this error message.
assert(doingJSRightNow, true, "Exercise 0");


//  Exercise 1
// On the line below, create a variable named onMarsRightNow and assign it the boolean value of false
// For more on variables, see https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables

var onMarsRightNow = false;

assert(onMarsRightNow, false, "Exercise 1");
addToDone("Exercise 1 is correct.");


// Exercise 2
// For more on arrays, see https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays
// Create a variable named fruits and assign it an array of strings containing the following fruits.
// mango, banana, guava, kiwi, and strawberry.

var fruits = ['mango', 'banana', 'guava', 'kiwi', 'strawberry'];

assert(fruits, ["mango", "banana", "guava", "kiwi", "strawberry"], "Exercise 2");
addToDone("Exercise 2 is correct.");


// Exercise 3
// Create a variable named vegetables and assign it an array of strings containing the following vegetables.
// eggplant, broccoli, carrot, cauliflower, and zucchini

var vegetables = ['eggplant', 'broccoli', 'carrot', 'cauliflower', 'zucchini'];

assert(vegetables, ["eggplant", "broccoli", "carrot", "cauliflower", "zucchini"], "Exercise 3");
addToDone("Exercise 3 is correct.");


// Exercise 4
// Create a variable named numbers and assign it an array of numbers, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

assert(numbers, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "Exercise 4");
addToDone("Exercise 4 is correct.");


// Exercise 5
// Add the string "tomato" to the end of the fruits array.
// *Hint* Recommend finding and using a built-in JS operation to add to an array rather than recreating the array.

fruits.push('tomato');

assert(fruits, ["mango", "banana", "guava", "kiwi", "strawberry", "tomato"], "Exercise 5");
addToDone("Exercise 5 is correct");


// Exercise 6
// add the string "tomato" onto the end of the vegetables array.
// Recommend using the built-in JS operation to add to an array.

vegetables.push('tomato');

assert(vegetables, ["eggplant", "broccoli", "carrot", "cauliflower", "zucchini", "tomato"], "Exercise 6");
addToDone("Exercise 6 is correct")


// Exercise 7
// Given the array of numbers defined below, reverse the array of numbers that you created above.
var someNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

someNumbers.reverse();

assert(someNumbers, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1], "Exercise 7")
addToDone("Exercise 7 is correct")


// Exercise 8
// Sort the vegetables in alphabetical order. Recommend finding a way to sort the array with a built-in method

vegetables.sort();

assert(vegetables, ['broccoli', 'carrot', 'cauliflower', 'eggplant', 'tomato', 'zucchini'], "Exercise 8")
addToDone("Exercise 8 is correct.")


// Exercise 9
// Write the code necessary to sort the fruits in reverse alphabetical order

fruits.sort();
fruits.reverse();

assert(fruits, ['tomato', 'strawberry', 'mango', 'kiwi', 'guava', 'banana'], "Exercise 9")
addToDone("Exercise 9 is correct.")


// Exercise 10
// Write the code necessary to produce a single array that holds all fruits then all vegetables in the order as they were sorted above.
// Assign the result to a variable named fruitsAndVeggies.
// *hint* the search engine search here would be "how to combine two arrays in JavaScript", for example.

var fruitsAndVeggies = fruits.concat(vegetables);

assert(fruitsAndVeggies, ['tomato', 'strawberry', 'mango', 'kiwi', 'guava', 'banana', 'broccoli', 'carrot', 'cauliflower', 'eggplant', 'tomato', 'zucchini'], "Exercise 10")
addToDone("Exercise 10 is correct")

// This function generates a random number that is both positive and even
function randomPositiveEvenNumber() {
    var randomNumber = Math.ceil(Math.random() * 100) + 10;
    if (randomNumber % 2 !== 0) {
        return randomPositiveEvenNumber()
    }

    return randomNumber;
}

// this function generates a random number that is both positive and odd
function randomPositiveOddNumber() {
    var randomNumber = Math.ceil(Math.random() * 100) + 10;
    if (randomNumber % 2 === 0) {
        return randomPositiveOddNumber();
    }

    return randomNumber;
}

// this function generates a random number that is both negative and even.
function randomNegativeEvenNumber() {
    var randomNumber = Math.ceil(Math.random() * -100) - 10;
    if (randomNumber % 2 === 0) {
        return randomNumber;
    }

    return randomNegativeEvenNumber();
}

// this function generates a random number that is both negative and odd.
function randomNegativeOddNumber() {
    var randomNumber = Math.ceil(Math.random() * -100) - 10;
    if (randomNumber % 2 === 0) {
        return randomNegativeOddNumber();
    }

    return randomNumber;
}

// The next 4 lines create variables that hold these generated random numbers
var positiveEvenNumber = randomPositiveEvenNumber()
var positiveOddNumber = randomPositiveOddNumber();
var negativeEvenNumber = randomNegativeEvenNumber();
var negativeOddNumber = randomNegativeOddNumber();

// Writing functions
// See https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions for help with writing functions
// Be sure to return values from your function definitions. The assert statements will call/run your function(s) for you.


// Example function defintion:
// Write a sayHello function that adds the string "Hello, " to the beginning and "!" to the end of any given input.
function sayHello(name) {
    return "Hello, " + name + "!";
}

assert(sayHello("Jane"), "Hello, Jane!");
assert(sayHello("Pat"), "Hello, Pat!");
assert(sayHello("Astrud"), "Hello, Astrud!");
assert(sayHello("June"), "Hello, June!");
assert(sayHello("World"), "Hello, World!");


// Heres another example function definition
// This plusTwo function takes in a variable and adds the number 2 to it.
function plusTwo(x) {
    return x + 2;
}

assert(plusTwo(3), 5, "3 plus 2 is five")
assert(plusTwo(-2), 0, "-2 plus 2 is zero")
assert(plusTwo(0), 2, "zero plus 2 is two")


// Exercise 11
// Write a function definition for a function named addOne that takes in a number and returns that number plus one

function addOne(num) {
    return num + 1;
}

assert(addOne(2), 3, "Exercise 11");
assert(addOne(0), 1, "Exercise 11");
assert(addOne(positiveEvenNumber), positiveEvenNumber + 1, "Exercise 11");
assert(addOne(negativeOddNumber), negativeOddNumber + 1, "Exercise 11");
addToDone("Exercise 11 is correct.")


// The next exercises will be focusing on basic operators in JS
// Exercise 12
// Write a function definition named isPositive that takes in a number and returns true or false if that number is positive.
// Think about the definition of a number that is positive.
// Is 5 positive? Is 0.25 positive? Is 0.00001 positive? Is -0.001 positive?
// Is zero itself positive? What about infinity? What about negative infinity?
// Documentation for comparison operators https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#relational_operators
// HINT - here are example functions using comparison operators https://gist.github.com/ryanorsinger/e843c7d0966993bd8193f0afabe16ae0
// If you get stuck, be sure to check the example code and documentation listed above


function isPositive(num) {
    if (num > 0) {
        return true;
    } else {
        return false;
    }
}

assert(isPositive(0.25), true, "Exercise 12");
assert(isPositive(0.00001), true, "Exercise 12");
assert(isPositive(Infinity), true, "Exercise 12");
assert(isPositive(0), false, "Exercise 12");
assert(isPositive(-0.001), false, "Exercise 12");
assert(isPositive(positiveOddNumber), true, "Exercise 12");
assert(isPositive(positiveEvenNumber), true, "Exercise 12");
assert(isPositive(negativeOddNumber), false, "Exercise 12");
assert(isPositive(negativeEvenNumber), false, "Exercise 12");
assert(isPositive(-Infinity), false, "Exercise 12");
addToDone("Exercise 12 is correct.")

// Exercise 13
// Write a function definition named isNegative that takes in a number and returns true or False if that number is negative.

function isNegative(num) {
    if (num < 0) {
        return true;
    } else {
        return false;
    }
}

assert(isNegative(positiveOddNumber), false, "Exercise 13");
assert(isNegative(positiveEvenNumber), false, "Exercise 13");
assert(isNegative(negativeOddNumber), true, "Exercise 13");
assert(isNegative(negativeEvenNumber), true, "Exercise 13");
addToDone("Exercise 13 is correct.")


// Exercise 14
// Write a function definition named isOdd that takes in a number and returns true or false if that number is odd.

function isOdd(num) {
    if (num % 2 !== 0) {
        return true;
    } else {
        return false;
    }
}

assert(isOdd(positiveOddNumber), true, "Exercise 14");
assert(isOdd(positiveEvenNumber), false, "Exercise 14");
assert(isOdd(negativeOddNumber), true, "Exercise 14");
assert(isOdd(negativeEvenNumber), false, "Exercise 14");
addToDone("Exercise 14 is correct.")

// Exercise 15
// Write a function definition named isEven that takes in a number and returns true or false if that number is even.

function isEven(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

assert(isEven(2), true, "Exercise 15");
assert(isEven(positiveOddNumber), false, "Exercise 15");
assert(isEven(positiveEvenNumber), true, "Exercise 15");
assert(isEven(negativeOddNumber), false, "Exercise 15");
assert(isEven(negativeEvenNumber), true, "Exercise 15");
addToDone("Exercise 15 is correct.")


// Exercise 16
// Write a function definition named identity that takes in any input and returns that input. Don't overthink this one!

function identity(num) {
    return num;
}

assert(identity(fruits), fruits, "Exercise 16");
assert(identity(vegetables), vegetables, "Exercise 16");
assert(identity(positiveOddNumber), positiveOddNumber, "Exercise 16");
assert(identity(positiveEvenNumber), positiveEvenNumber, "Exercise 16");
assert(identity(negativeOddNumber), negativeOddNumber, "Exercise 16");
assert(identity(negativeEvenNumber), negativeEvenNumber, "Exercise 16");
addToDone("Exercise 16 is correct.")


// Exercise 17
// Write a function definition named isPositiveOdd that takes in a number and returns true or false if the value is both greater than zero and odd

function isPositiveOdd(num) {
    if (num >= 0 && num % 2 !== 0) {
        return true;
    } else {
        return false;
    }
}

assert(isPositiveOdd(3), true, "Exercise 17");
assert(isPositiveOdd(positiveOddNumber), true, "Exercise 17");
assert(isPositiveOdd(positiveEvenNumber), false, "Exercise 17");
assert(isPositiveOdd(negativeOddNumber), false, "Exercise 17");
assert(isPositiveOdd(negativeEvenNumber), false, "Exercise 17");
addToDone("Exercise 17 is correct.")


// Exercise 18
// Write a function definition named isPositiveEven that takes in a number and returns true or false if the value is both greater than zero and even

function isPositiveEven(num) {
    if (num >= 0 && num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

assert(isPositiveEven(4), true, "Exercise 18");
assert(isPositiveEven(positiveOddNumber), false, "Exercise 18");
assert(isPositiveEven(positiveEvenNumber), true, "Exercise 18");
assert(isPositiveEven(negativeOddNumber), false, "Exercise 18");
assert(isPositiveEven(negativeEvenNumber), false, "Exercise 18");
addToDone("Exercise 18 is correct.")


// Exercise 19
// Write a function definition named isNegativeOdd that takes in a number and returns true or false if the value is both less than zero and odd.

function isNegativeOdd(num) {
    if (num <= 0 && num % 2 !== 0) {
        return true;
    } else {
        return false;
    }
}

assert(isNegativeOdd(-3), true, "Exercise 19");
assert(isNegativeOdd(positiveOddNumber), false, "Exercise 19");
assert(isNegativeOdd(positiveEvenNumber), false, "Exercise 19");
assert(isNegativeOdd(negativeOddNumber), true, "Exercise 19");
assert(isNegativeOdd(negativeEvenNumber), false, "Exercise 19");
addToDone("Exercise 19 is correct.")


// Exercise 20
// Write a function definition named isNegativeEven that takes in a number and returns true or false if the value is both less than zero and even.

function isNegativeEven(num) {
    if (num < 0 && num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

assert(isNegativeEven(-4), true, "Exercise 20");
assert(isNegativeEven(positiveOddNumber), false, "Exercise 20");
assert(isNegativeEven(positiveEvenNumber), false, "Exercise 20");
assert(isNegativeEven(negativeOddNumber), false, "Exercise 20");
assert(isNegativeEven(negativeEvenNumber), true, "Exercise 20");
addToDone("Exercise 20 is correct.")


// Exercise 21
// Write a function definition named half that takes in a number and returns half the provided number.

function half(num) {
    return num / 2;
}

assert(half(4), 2, "Exercise 21");
assert(half(5), 2.5, "Exercise 21");
assert(half(positiveOddNumber), positiveOddNumber / 2, "Exercise 21");
assert(half(positiveEvenNumber), positiveEvenNumber / 2, "Exercise 21");
assert(half(negativeOddNumber), negativeOddNumber / 2, "Exercise 21");
assert(half(negativeEvenNumber), negativeEvenNumber / 2, "Exercise 21");
addToDone("Exercise 21 is correct.")


// Exercise 22
// Write a function definition named double that takes in a number and returns double the provided number.

function double(num) {
    return num * 2;
}

assert(double(4), 8, "Exercise 22");
assert(double(5), 10, "Exercise 22");
assert(double(positiveOddNumber), positiveOddNumber * 2, "Exercise 22");
assert(double(positiveEvenNumber), positiveEvenNumber * 2, "Exercise 22");
assert(double(negativeOddNumber), negativeOddNumber * 2, "Exercise 22");
assert(double(negativeEvenNumber), negativeEvenNumber * 2, "Exercise 22");
addToDone("Exercise 22 is correct.")


// Exercise 23
// Write a function definition named triple that takes in a number and returns triple the provided number.

function triple(num) {
    return num * 3;
}

assert(triple(4), 12, "Exercise 23");
assert(triple(5), 15, "Exercise 23");
assert(triple(positiveOddNumber), positiveOddNumber * 3, "Exercise 23");
assert(triple(positiveEvenNumber), positiveEvenNumber * 3, "Exercise 23");
assert(triple(negativeOddNumber), negativeOddNumber * 3, "Exercise 23");
assert(triple(negativeEvenNumber), negativeEvenNumber * 3, "Exercise 23");
addToDone("Exercise 23 is correct.")


// Exercise 24
// Write a function definition named reverseSign that takes in a number and returns the provided number but with the sign reversed.

function reverseSign(num) {
    return num *= -1;
}

assert(reverseSign(4), -4, "Exercise 24");
assert(reverseSign(-5), 5, "Exercise 24");
assert(reverseSign(positiveOddNumber), positiveOddNumber * -1, "Exercise 24");
assert(reverseSign(positiveEvenNumber), positiveEvenNumber * -1, "Exercise 24");
assert(reverseSign(negativeOddNumber), negativeOddNumber * -1, "Exercise 24");
assert(reverseSign(negativeEvenNumber), negativeEvenNumber * -1, "Exercise 24");
addToDone("Exercise 24 is correct.")


// Exercise 25
// Write a function definition named absoluteValue that takes in a number and returns the absolute value of the provided number

function absoluteValue(num) {
    return Math.abs(num);
}

assert(absoluteValue(4), 4, "Exercise 25");
assert(absoluteValue(-5), 5, "Exercise 25");
assert(absoluteValue(positiveOddNumber), positiveOddNumber, "Exercise 25");
assert(absoluteValue(positiveEvenNumber), positiveEvenNumber, "Exercise 25");
assert(absoluteValue(negativeOddNumber), negativeOddNumber * -1, "Exercise 25");
assert(absoluteValue(negativeEvenNumber), negativeEvenNumber * -1, "Exercise 25");
addToDone("Exercise 25 is correct.")


// Exercise 26
// Write a function definition named isMultipleOfThree that takes in a number and returns true or false if the number is evenly divisible by 3.

function isMultipleOfThree(num) {
    if (num % 3 === 0) {
        return true;
    } else {
        return false;
    }
}

assert(isMultipleOfThree(3), true, "Exercise 26");
assert(isMultipleOfThree(15), true, "Exercise 26");
assert(isMultipleOfThree(9), true, "Exercise 26");
assert(isMultipleOfThree(4), false, "Exercise 26");
assert(isMultipleOfThree(10), false, "Exercise 26");
addToDone("Exercise 26 is correct.")


// Exercise 27
// Write a function definition named isMultipleOfFive that takes in a number and returns true or false if the number is evenly divisible by 5.

function isMultipleOfFive(num) {
    if (num % 5 === 0) {
        return true;
    } else {
        return false;
    }
}

assert(isMultipleOfFive(3), false, "Exercise 27");
assert(isMultipleOfFive(15), true, "Exercise 27");
assert(isMultipleOfFive(9), false, "Exercise 27");
assert(isMultipleOfFive(4), false, "Exercise 27");
assert(isMultipleOfFive(10), true, "Exercise 27");
addToDone("Exercise 27 is correct.")


// Exercise 28
// Write a function definition named isMultipleOfBothThreeAndFive that takes in a number and returns true or false if the number is evenly divisible by both 3 and 5.

function isMultipleOfBothThreeAndFive(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return true;
    } else {
        return false;
    }
}

assert(isMultipleOfBothThreeAndFive(15), true, "Exercise 28");
assert(isMultipleOfBothThreeAndFive(45), true, "Exercise 28");
assert(isMultipleOfBothThreeAndFive(3), false, "Exercise 28");
assert(isMultipleOfBothThreeAndFive(9), false, "Exercise 28");
assert(isMultipleOfBothThreeAndFive(4), false, "Exercise 28");
addToDone("Exercise 28 is correct.")


// Exercise 29
// Write a function definition named square that takes in a number and returns the number times itself.

function square(num) {
    return num * num;
}

assert(square(3), 9, "Exercise 29");
assert(square(2), 4, "Exercise 29");
assert(square(9), 81, "Exercise 29");
assert(square(positiveOddNumber), positiveOddNumber * positiveOddNumber, "Exercise 29");
addToDone("Exercise 29 is correct.")


// Exercise 30
// Write a function definition named add that takes in two numbers and returns the sum.

function add(num1, num2) {
    return num1 + num2;
}

assert(add(3, 2), 5, "Exercise 30");
assert(add(10, -2), 8, "Exercise 30");
assert(add(5, 7), 12, "Exercise 30");
addToDone("Exercise 30 is correct.")


// Exercise 31
// Write a function definition named cube that takes in a number and returns the number times itself, times itself.

function cube(num) {
    return num * num * num;
    // you can also use Math.pow(num, 3);
}

assert(cube(3), 27, "Exercise 31");
assert(cube(2), 8, "Exercise 31");
assert(cube(5), 125, "Exercise 31");
assert(cube(positiveOddNumber), positiveOddNumber * positiveOddNumber * positiveOddNumber, "Exercise 31");
addToDone("Exercise 31 is correct.")


// Exercise 32
// Write a function definition named squareRoot that takes in a number and returns the square root of the provided number

function squareRoot(num) {
    return Math.sqrt(num, 2);
}

assert(squareRoot(4), 2.0, "Exercise 32");
assert(squareRoot(64), 8.0, "Exercise 32");
assert(squareRoot(81), 9.0, "Exercise 32");
addToDone("Exercise 32 is correct.")


// Exercise 33
// Write a function definition named subtract that takes in two numbers and returns the first minus the second argument.

function subtract(num1, num2) {
    return num1 - num2;
}

assert(subtract(8, 6), 2, "Exercise 33");
assert(subtract(27, 4), 23, "Exercise 33");
assert(subtract(12, 2), 10, "Exercise 33");
addToDone("Exercise 33 is correct.")


// Exercise 34
// Write a function definition named multiply that takes in two numbers and returns the first times the second argument.

function multiply(num1, num2) {
    return num1 * num2;
}

assert(multiply(2, 1), 2, "Exercise 34");
assert(multiply(3, 5), 15, "Exercise 34");
assert(multiply(5, 2), 10, "Exercise 34");
addToDone("Exercise 34 is correct.")


// Exercise 35
// Write a function definition named divide that takes in two numbers and returns the first argument divided by the second argument.

function divide(num1, num2) {
    return num1 / num2;
}

assert(divide(27, 9), 3, "Exercise 35");
assert(divide(15, 3), 5, "Exercise 35");
assert(divide(5, 2), 2.5, "Exercise 35");
assert(divide(10, 2), 5, "Exercise 35");
addToDone("Exercise 35 is correct.")


// Exercise 36
// Write a function definition named quotient that takes in two numbers and returns the quotient of dividing the first argument by the second argument.

function quotient(num1, num2) {
    return Math.floor(num1 / num2);
}

assert(quotient(27, 9), 3, "Exercise 36");
assert(quotient(5, 2), 2, "Exercise 36");
assert(quotient(10, 3), 3, "Exercise 36");
addToDone("Exercise 36 is correct.")


// Exercise 37
// Write a function definition named remainder that takes in two numbers and returns the remainder of first argument divided by the second argument.

function remainder(num1, num2) {
    return num1 % num2;
}

assert(remainder(3, 3), 0, "Exercise 37");
assert(remainder(5, 2), 1, "Exercise 37");
assert(remainder(7, 5), 2, "Exercise 37");
addToDone("Exercise 37 is correct.")


// Exercise 38
// Write a function definition named sumOfSquares that takes in two numbers, squares each number, then returns the sum of both squares.

function sumOfSquares(num1, num2) {
    return Math.pow(num1, 2) + Math.pow(num2, 2);
}

assert(sumOfSquares(3, 2), 13, "Exercise 38");
assert(sumOfSquares(5, 2), 29, "Exercise 38");
assert(sumOfSquares(2, 4), 20, "Exercise 38");
addToDone("Exercise 38 is correct.")


// Exercise 39
// Write a function definition named timesTwoPlusThree that takes in a number, multiplies it by two, adds 3 and returns the result.

function timesTwoPlusThree(num) {
    return num * 2 + 3;
}

assert(timesTwoPlusThree(0), 3, "Exercise 39");
assert(timesTwoPlusThree(1), 5, "Exercise 39");
assert(timesTwoPlusThree(2), 7, "Exercise 39");
assert(timesTwoPlusThree(3), 9, "Exercise 39");
assert(timesTwoPlusThree(5), 13, "Exercise 39");
addToDone("Exercise 39 is correct.")


// Exercise 40
// Write a function definition named areaOfRectangle that takes in two numbers and returns the product.

function areaOfRectangle(num1, num2) {
    return num1 * num2;
}

assert(areaOfRectangle(1, 3), 3, "Exercise 40");
assert(areaOfRectangle(5, 2), 10, "Exercise 40");
assert(areaOfRectangle(2, 7), 14, "Exercise 40");
assert(areaOfRectangle(5.3, 10.3), 54.59, "Exercise 40");
addToDone("Exercise 40 is correct.")

// Exercise 41
// Write a function definition named areaOfCircle that takes in a number representing a circle's radius and returns the area of the circle

function areaOfCircle(num){
    return Math.PI * num * num;
}

assert(areaOfCircle(3), 28.274333882308138, "Exercise 41");
assert(areaOfCircle(5), 78.53981633974483, "Exercise 41");
assert(areaOfCircle(7), 153.93804002589985, "Exercise 41");
addToDone("Exercise 41 is correct.")


// Exercise 42
// Write a function definition named circumference that takes in a number representing a circle's radius and returns the circumference.

function circumference(num){
    return 2 * Math.PI * num;
}

assert(circumference(3), 18.84955592153876, "Exercise 42");
assert(circumference(5), 31.41592653589793, "Exercise 42");
assert(circumference(7), 43.982297150257104, "Exercise 42");
addToDone("Exercise 42 is correct.")


// In earlier exercises, the solution was to use a logical AND.
// In some of the future exercises, the solution will be to use a logical OR.
// The following two example functions are examples that provide a hint on how to as

// Example function where the function returns true if the input is one OR two.
function isOneOrTwo(x) {
    return x == 1 || x == 2
}

// Example function where the input is one of 3 possibilities
function isOneOrTwoOrThree(x) {
    return x == 1 || x == 2 || x == 3
}


// Exercise 43
// Review this code carefully https://gist.github.com/ryanorsinger/5627b954d119dabb3d8c44d56b38c354 if you want more guidance on Exercises 43, 44, and 45.
// Write a function definition named isVowel that takes in value and returns true if the value is a, e, i, o, u in upper or lower case.

function isVowel(value){
    return ('aeiouAEIOU'.indexOf(value) !== -1)
}

assert(isVowel("a"), true, "Exercise 43");
assert(isVowel("U"), true, "Exercise 43");
assert(isVowel("banana"), false, "Exercise 43");
assert(isVowel("Q"), false, "Exercise 43");
assert(isVowel("y"), false, "Exercise 43");
addToDone("Exercise 43 is correct.")

// Exercise 44
// Write a function definition named hasVowels that takes in value and returns true if the string contains any vowels.


function hasVowels(str){
    var vowels = 'aeiou';
    var numOfVowels = 0;
    for (var i = 0; i < str.length; i++ ){
        if(vowels.toLowerCase().indexOf(str[i]) !== -1){
            numOfVowels++;
        }
    }
    return numOfVowels > 0;
}


assert(hasVowels("banana"), true, "Exercise 44");
assert(hasVowels("ubuntu"), true, "Exercise 44");
assert(hasVowels("QQQQ"), false, "Exercise 44");
assert(hasVowels("wyrd"), false, "Exercise 44");
addToDone("Exercise 44 is correct.")


// Exercise 45
// Write a function definition named countVowels that takes in value and returns the count of the nubmer of vowels in a sequence.

function countVowels(str){
    var vowels = 'aeiou';
    var numOfVowels = 0;
    for (var i = 0; i < str.length; i++ ){
        if(vowels.toLowerCase().indexOf(str[i]) !== -1){
            numOfVowels++;
        }
    }
    return numOfVowels;
}

assert(countVowels("banana"), 3, "Exercise 45");
assert(countVowels("ubuntu"), 3, "Exercise 45");
assert(countVowels("mango"), 2, "Exercise 45");
assert(countVowels("QQQQ"), 0, "Exercise 45");
assert(countVowels("wyrd"), 0, "Exercise 45");
addToDone("Exercise 45 is correct.")


// Exercise 46
// Write a function definition named removeVowels that takes in string and returns the string without any vowels



function removeVowels(str){
    var newStr = "";
    for (var x = 0; x < str.length; x++) {
        if (!isVowel(str[x])) {
            newStr += str[x]
        }
    }
    return newStr;
}


assert(removeVowels("banana"), "bnn", "Exercise 46");
assert(removeVowels("ubuntu"), "bnt", "Exercise 46");
assert(removeVowels("mango"), "mng", "Exercise 46");
assert(removeVowels("QQQQ"), "QQQQ", "Exercise 46");
addToDone("Exercise 46 is correct.")


// Exercise 47
// Write a function definition named startsWithVowel that takes in string and true if the string starts with a vowel

function startsWithVowel(str){
    if(isVowel(str[0])){
        return true;
    }else {
        return false;
    }
}


assert(startsWithVowel("ubuntu"), true, "Exercise 47");
assert(startsWithVowel("banana"), false, "Exercise 47");
assert(startsWithVowel("mango"), false, "Exercise 47");
addToDone("Exercise 47 is correct.")


// Exercise 48
// Write a function definition named endsWithVowel that takes in string and true if the string ends with a vowel

function endsWithVowel(str){
    var newStr = str.split("");
    var reverseArray = newStr.reverse();
    var jString = reverseArray.join("");
    if(isVowel(jString[0])){
        return true;
    }else {
        return false;
    }
}

assert(endsWithVowel("ubuntu"), true, "Exercise 48");
assert(endsWithVowel("banana"), true, "Exercise 48");
assert(endsWithVowel("mango"), true, "Exercise 48");
assert(endsWithVowel("spinach"), false, "Exercise 48");
addToDone("Exercise 48 is correct.")


// Exercise 49
// Write a function definition named startsAndEndsWithVowel that takes in string and returns true if the string starts and ends with a vowel

function startsAndEndsWithVowel(str){
    if(startsWithVowel(str[0]) && endsWithVowel(str[0])){
        return true;
    }else {
        return false;
    }
}

assert(startsAndEndsWithVowel("ubuntu"), true, "Exercise 49");
assert(startsAndEndsWithVowel("banana"), false, "Exercise 49");
assert(startsAndEndsWithVowel("mango"), false, "Exercise 49");
addToDone("Exercise 49 is correct.")


// Exercise 50
// Write a function definition named first that takes in sequence and returns the first value of that sequence.

function first(input){
    return input[0];
}


assert(first("ubuntu"), "u", "Exercise 50");
assert(first([1, 2, 3]), 1, "Exercise 50");
assert(first(["JS", "is", "awesome"]), "JS", "Exercise 50");
addToDone("Exercise 50 is correct.")


// Exercise 51
// Write a function definition named second that takes in sequence and returns the second value of that sequence.

function second(arr){
    return arr[1];
}

assert(second("ubuntu"), "b", "Exercise 51");
assert(second([1, 2, 3]), 2, "Exercise 51");
assert(second(["JS", "is", "awesome"]), "is", "Exercise 51");
addToDone("Exercise 51 is correct.")


// Exercise 52
// Write a function definition named third that takes in sequence and returns the third value of that sequence.

function third(arr){
    return arr[2];
}

assert(third("ubuntu"), "u", "Exercise 52");
assert(third([1, 2, 3]), 3, "Exercise 52");
assert(third(["JS", "is", "awesome"]), "awesome", "Exercise 52");
addToDone("Exercise 52 is correct.")


// Exercise 53
// Write a function definition named forth that takes in sequence and returns the forth value of that sequence.

function forth(arr){
    return arr[3];
}

assert(forth("ubuntu"), "n", "Exercise 53");
assert(forth([1, 2, 3, 4]), 4, "Exercise 53");
assert(forth(["JS", "is", "awesome", "right?"]), "right?", "Exercise 53");
addToDone("Exercise 53 is correct.")


// Exercise 54
// Write a function definition named last that takes in sequence and returns the last value of that sequence.

function last(input){
    return input [input.length -1];
}

assert(last("ubuntu"), "u", "Exercise 54");
assert(last([1, 2, 3, 4]), 4, "Exercise 54");
assert(last(["JS", "is", "awesome"]), "awesome", "Exercise 54");
assert(last(["kiwi", "mango", "guava"]), "guava", "Exercise 54");
addToDone("Exercise 54 is correct.")


// Exercise 55
// Write a function definition named secondToLast that takes in sequence and returns the second to last value of that sequence.

function secondToLast (input){
    return input [input.length -2];
}


assert(secondToLast("ubuntu"), "t", "Exercise 55");
assert(secondToLast([1, 2, 3, 4]), 3, "Exercise 55");
assert(secondToLast(["JS", "is", "awesome"]), "is", "Exercise 55");
assert(secondToLast(["kiwi", "mango", "guava"]), "mango", "Exercise 55");
addToDone("Exercise 55 is correct.")


// Exercise 56
// Write a function definition named thirdToLast that takes in sequence and returns the third to last value of that sequence.

function thirdToLast(input){
    return input[input.length -3];
}


assert(thirdToLast("ubuntu"), "n", "Exercise 56");
assert(thirdToLast([1, 2, 3, 4]), 2, "Exercise 56");
assert(thirdToLast(["JS", "is", "awesome"]), "JS", "Exercise 56");
assert(thirdToLast(["strawberry", "kiwi", "mango", "guava"]), "kiwi", "Exercise 56");
addToDone("Exercise 56 is correct.")


// Exercise 57
// Write a function definition named firstAndSecond that takes in sequence and returns the first and second value of that sequence as an array

function firstAndSecond(input){
    return input.slice (0,2);
}

assert(firstAndSecond([1, 2, 3, 4]), [1, 2], "Exercise 57");
assert(firstAndSecond(["JS", "is", "awesome"]), ["JS", "is"], "Exercise 57");
assert(firstAndSecond(["strawberry", "kiwi", "mango", "guava"]), ["strawberry", "kiwi"], "Exercise 57");
addToDone("Exercise 57 is correct.")


// Exercise 58
// Write a function definition named firstAndLast that takes in sequence and returns the first and last value of that sequence as an array

function firstAndLast(input){
    return [first(input), last(input)];
}


assert(firstAndLast([1, 2, 3, 4]), [1, 4], "Exercise 58");
assert(firstAndLast(["JS", "is", "awesome"]), ["JS", "awesome"], "Exercise 58");
assert(firstAndLast(["strawberry", "kiwi", "mango", "guava"]), ["strawberry", "guava"], "Exercise 58");
addToDone("Exercise 58 is correct.")



// Exercise 59
// Write a function definition named firstToLast that takes in sequence and returns the sequence with the first value moved to the end of the sequence.

function firstToLast(array){
    var seq = [5,1,2,3,4];
    var arrShift = array.shift()
    array.push(arrShift)
    return array;
}


assert(firstToLast([1, 2, 3, 4]), [2, 3, 4, 1], "Exercise 59");
assert(firstToLast(["JS", "is", "awesome"]), ["is", "awesome", "JS"], "Exercise 59");
assert(firstToLast(["strawberry", "kiwi", "mango", "guava"]), ["kiwi", "mango", "guava", "strawberry"], "Exercise 59");
addToDone("Exercise 59 is correct.")



// Exercise 60
// Write a function definition named sumAll that takes in sequence of numbers and returns all the numbers added together.


function sumAll(input){
    var a = 0;
    var i;
    for(i = 0;i<input.length; i++){
        a += input[i]
    }
    return a;
}

assert(sumAll([1, 2, 3, 4]), 10, "Exercise 60");
assert(sumAll([3, 3, 3]), 9, "Exercise 60");
assert(sumAll([0, 5, 6]), 11, "Exercise 60");
addToDone("Exercise 60 is correct.")



//  Exercise 61
//  Write a function definition named mean that takes in sequence of numbers and returns the average value

function mean(input){
    var a = 0;
    var i;
    for(i=0;i<input.length;i++){
        a += input[i];
    }
    return a / input.length;
}


assert(mean([1, 2, 3, 4]), 2.5, "Exercise 61");
assert(mean([3, 3, 3]), 3, "Exercise 61");
assert(mean([1, 5, 6]), 4, "Exercise 61");
addToDone("Exercise 61 is correct.")



// Exercise 62
// Write a function definition named median that takes in sequence of numbers and returns the average value


function median(arr) {
    const mid = Math.floor(arr.length / 2),
        nums = [...arr].sort((a, b) => a - b);
    return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
}

//find a way to use a for loop or an easier way to understand it\\


assert(median([1, 2, 3, 4, 5]), 3.0, "Exercise 62");
assert(median([1, 2, 3]), 2.0, "Exercise 62");
assert(median([1, 5, 6]), 5.0, "Exercise 62");
assert(median([1, 2, 5, 6]), 3.5, "Exercise 62");
addToDone("Exercise 62 is correct.")


// Exercise 63
// Write a function definition named maxMinusMin that takes in an array of numbers and returns the difference of the maximum minus theminimum.

function maxMinusMin(input){
    input.sort();
    return input[input.length -1] -input[0];
}

assert(maxMinusMin([1, 2, 2, 8, 3, 4]), 7, "Exercise 63");
assert(maxMinusMin([1, 1, 2, 3, 9]), 8, "Exercise 63");
assert(maxMinusMin([2, 2, 3, 3, 3, 7]), 5, "Exercise 63");
addToDone("Exercise 63 is correct.")


// Exercise 64
// Write a function definition named productOfAll that takes in sequence of numbers and returns the product of multiplying all the numbers together

function productOfAll(input){
    var a = 1;
    var i;
    for(i=0;i<input.length;i++){
        a *= input[i];
    }
    return a;
}

assert(productOfAll([1, 2, 3]), 6, "Exercise 64");
assert(productOfAll([3, 4, 5]), 60, "Exercise 64");
assert(productOfAll([2, 2, 3, 0]), 0, "Exercise 64");
addToDone("Exercise 64 is correct.")


// Exercise 65
// Write a function definition named getHighestNumber that takes in sequence of numbers and returns the largest number.

function getHighestNumber(input){
    input.sort();
    return input[input.length -1];
}

assert(getHighestNumber([1, 2, 3]), 3, "Exercise 65");
assert(getHighestNumber([1, 5, 2, 3, 4]), 5, "Exercise 65");
assert(getHighestNumber([5, 1, 2, 4, 9]), 9, "Exercise 65");
addToDone("Exercise 65 is correct.")




// Exercise 66
// Write a function definition named getSmallestNumber that takes in sequence of numbers and returns the smallest number.

function getSmallestNumber(input){
    input.sort();
    return input[0];
}

assert(getSmallestNumber([1, 2, 3]), 1, "Exercise 66");
assert(getSmallestNumber([3, 5, 9, 8, 1]), 1, "Exercise 66");
assert(getSmallestNumber([8, 9, 4, 5, 7]), 4, "Exercise 66");
addToDone("Exercise 66 is correct.")


// Exercise 67
// Write a function definition named onlyOddNumbers that takes in sequence of numbers and returns the odd numbers in an array.

function onlyOddNumbers(input){
    var a = [];
    var i;
    for(i=0;i<input.length;i++){
        if(isOdd(input[i])){
            a.push(input[i]);
        }
    }
    return a;
}

assert(onlyOddNumbers([1, 2, 3]), [1, 3], "Exercise 67");
assert(onlyOddNumbers([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]), [-5, -3, -1, 1, 3, 5], "Exercise 67");
assert(onlyOddNumbers([-4, -3, 1]), [-3, 1], "Exercise 67");
addToDone("Exercise 67 is correct.")



// Exercise 68
// Write a function definition named onlyEvenNumbers that takes in sequence of numbers and returns the even numbers in an array.

function onlyEvenNumbers(input){
    var a = [];
    var i;
    for(i=0;i<input.length;i++){
        if(isEven(input[i])){
            a.push(input[i]);
        }
    }
    return a;
}

assert(onlyEvenNumbers([1, 2, 3]), [2], "Exercise 68");
assert(onlyEvenNumbers([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]), [-4, -2, 2, 4], "Exercise 68");
assert(onlyEvenNumbers([-4, -3, 1]), [-4], "Exercise 68");
addToDone("Exercise 68 is correct.")


// Exercise 69
// Write a function definition named onlyPositiveNumbers that takes in sequence of numbers and returns the positive numbers in an array.

function onlyPositiveNumbers(input){
    var a = [];
    var i;
    for(i=0;i<input.length;i++){
        if(input[i] > 0){
            a.push(input[i])
        }
    }
    return a;
}

assert(onlyPositiveNumbers([1, 2, 3]), [1, 2, 3], "Exercise 69");
assert(onlyPositiveNumbers([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]), [1, 2, 3, 4, 5], "Exercise 69");
assert(onlyPositiveNumbers([-4, -3, 1]), [1], "Exercise 69");
addToDone("Exercise 69 is correct.")


// Exercise 70
// Write a function definition named onlyNegativeNumbers that takes in sequence of numbers and returns the negative numbers in an array.

function onlyNegativeNumbers(input){
    var a = [];
    var i;
    for(i=0;i<input.length;i++){
        if(input[i] < 0){
            a.push(input[i]);
        }
    }
    return a;
}

// Exercise 71
// Write a function definition named hasEvens that takes in sequence of numbers and returns true if there are any even numbers in the sequence

function hasEvens(input){
    var a = [];
    var i;
    for(i=0;i<input.length;i++){
        if(input[i] % 2 === 0){
            return true;
        }
    }
    return false;
}

assert(hasEvens([1, 2, 3]), true, "Exercise 71");
assert(hasEvens([2, 5, 6]), true, "Exercise 71");
assert(hasEvens([3, 3, 3]), false, "Exercise 71");
assert(hasEvens([]), false, "Exercise 71");
addToDone("Exercise 71 is correct.");



// Exercise 72
// Write a function definition named countEvens that takes in sequence of numbers and returns the number of even numbers

function countEvens(input){
    var a = 0;
    var i;
    for(i=0;i<input.length;i++){
        if(input[i] % 2 === 0){
            a++;
        }
    }
    return a;
}


assert(countEvens([1, 2, 3]), 1, "Exercise 72");
assert(countEvens([2, 5, 6]), 2, "Exercise 72");
assert(countEvens([3, 3, 3]), 0, "Exercise 72");
assert(countEvens([5, 6, 7, 8] ), 2, "Exercise 72");
addToDone("Exercise 72 is correct.")


// Exercise 73
// Write a function definition named hasOdds that takes in sequence of numbers and returns true if there are any odd numbers in the sequence

function hasOdds(input){
    var a = 0;
    var i;
    for(i=0;i<input.length;i++){
        if(input[i] %2 !==0){
            return true;
        }
    }
    return false;
}

assert(hasOdds([1, 2, 3]), true, "Exercise 73");
assert(hasOdds([2, 5, 6]), true, "Exercise 73");
assert(hasOdds([3, 3, 3]), true, "Exercise 73");
assert(hasOdds([2, 4, 6]), false, "Exercise 73");
addToDone("Exercise 73 is correct.")


// Exercise 74
// Write a function definition named countOdds that takes in sequence of numbers and returns a count of the any odd numbers in the sequence

function countOdds(input){
    var a = 0;
    var i;
    for(i=0;i<input.length;i++){
        if(input[i] % 2 !== 0){
            a++;
        }
    }
    return a;
}

assert(countOdds([1, 2, 3]), 2, "Exercise 74");
assert(countOdds([2, 5, 6]), 1, "Exercise 74");
assert(countOdds([3, 3, 3]), 3, "Exercise 74");
assert(countOdds([2, 4, 6]), 0, "Exercise 74");
addToDone("Exercise 74 is correct.")


// Exercise 75
// Write a function definition named countNegatives that takes in sequence of numbers and returns a count of the number of negative numbers

function countNegatives(input){
    var a = 0;
    var i;
    for(i=0;i<input.length;i++){
        if(input[i] < 0){
            a++
        }
    }
    return a;
}

assert(countNegatives([1, -2, 3]), 1, "Exercise 75");
assert(countNegatives([2, -5, -6]), 2, "Exercise 75");
assert(countNegatives([3, 3, 3]), 0, "Exercise 75");
addToDone("Exercise 75 is correct.")


// Exercise 76
// Write a function definition named countPositives that takes in sequence of numbers and returns a count of the number of positive numbers

function countPositives(input){
    var a = 0;
    var i;
    for(i=0;i<input.length;i++){
        if(input[i] > 0){
            a++
        }
    }
    return a;
}

assert(countPositives([1, -2, 3]), 2, "Exercise 76");
assert(countPositives([2, -5, -6]), 1, "Exercise 76");
assert(countPositives([3, 3, 3]), 3, "Exercise 76");
assert(countPositives([-2, -1, -5]), 0, "Exercise 76");
addToDone("Exercise 76 is correct.")


// Exercise 77
// Write a function definition named onlyPositiveEvens that takes in sequence of numbers and returns an array containing all the positive evens from the sequence

function onlyPositiveEvens(input){
    var a = [];
    var i;
    for(i=0;i<input.length;i++){
        if(input[i] > 0 && input[i] % 2 ===0){
            a.push(input[i]);
        }
    }
    return a;
}


assert(onlyPositiveEvens([1, -2, 3]), [], "Exercise 77");
assert(onlyPositiveEvens([2, -5, -6]), [2], "Exercise 77");
assert(onlyPositiveEvens([3, 3, 4, 6]), [4, 6], "Exercise 77");
assert(onlyPositiveEvens([2, 3, 4, -1, -5]), [2, 4], "Exercise 77");
addToDone("Exercise 77 is correct.")


// Exercise 78
// Write a function definition named onlyPositiveOdds that takes in sequence of numbers and returns an array containing all the positive odd numbers from the sequence

function onlyPositiveOdds(input){
    var a = [];
    var i;
    for(i=0;i<input.length;i++){
        if(input[i] > 0 && input[i] % 2 ===1){
            a.push(input[i]);
        }
    }
    return a;
}

assert(onlyPositiveOdds([1, -2, 3]), [1, 3], "Exercise 78");
assert(onlyPositiveOdds([2, -5, -6]), [], "Exercise 78");
assert(onlyPositiveOdds([3, 3, 4, 6]), [3, 3], "Exercise 78");
assert(onlyPositiveOdds([2, 3, 4, -1, -5]), [3], "Exercise 78");
addToDone("Exercise 78 is correct.")


// Exercise 79
// Write a function definition named onlyNegativeEvens that takes in sequence of numbers and returns an array containing all the negative even numbers from the sequence

function onlyNegativeEvens(input){
    var a = [];
    var i;
    for(i=0;i<input.length;i++){
        if(input[i] < 0 && input[i] % 2 ===0){
            a.push(input[i]);
        }
    }
    return a;
}

assert(onlyNegativeEvens([1, -2, 3]), [-2], "Exercise 79");
assert(onlyNegativeEvens([2, -5, -6]), [-6], "Exercise 79");
assert(onlyNegativeEvens([3, 3, 4, 6]), [], "Exercise 79");
assert(onlyNegativeEvens([-2, 3, 4, -1, -4]), [-2, -4], "Exercise 79");
addToDone("Exercise 79 is correct.")


// Exercise 80
// Write a function definition named onlyNegativeOdds that takes in sequence of numbers and returns an array containing all the negative odd numbers from the sequence

function onlyNegativeOdds(input){
    var a = [];
    var i;
    for(i=0;i<input.length;i++){
        if(input[i] < 0 && input[i] % 2 !==0){
            a.push(input[i]);
        }
    }
    return a;
}

assert(onlyNegativeOdds([1, -2, 3]), [], "Exercise 80");
assert(onlyNegativeOdds([2, -5, -6]), [-5], "Exercise 80");
assert(onlyNegativeOdds([3, 3, 4, 6]), [], "Exercise 80");
assert(onlyNegativeOdds([2, -3, 4, -1, -4]), [-3, -1], "Exercise 80");
addToDone("Exercise 80 is correct.")


