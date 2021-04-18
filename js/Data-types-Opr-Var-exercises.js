"use strict";

// EXERCISES

// 1. For each of the following code blocks,
// read the code and predict what the result of evaluating it would be,
// then execute the statement(s) in the Chrome console.

// var a = 1; 1
// var b = a++; 2
// var c = ++a; 4

// var d = "hello"; NaN
// var e = false; Number

 // var perplexed; // perplexed is undefined (no value is assigned)
 // perplexed + 2; NaN

// var price = 2.7; undefined
// price.toFixed(2); 2.70

// var price = "2.7"; undefined
// price.toFixed(2); Not a Function. Might have something to do with the quotation marks...

// isNaN(0); false
//
// isNaN(1); false
//
// isNaN(""); false
//
// isNaN("string"); true
//
// isNaN("0"); false
//
// isNaN("1"); false
//
// isNaN("3.145"); false
//
// isNaN(Number.MAX_VALUE); false
//
// isNaN(Infinity); false
//
// isNaN("true"); true
//
// isNaN(true); false
//
// isNaN("false"); true
//
// isNaN(false); false
//
// // to illustrate why the isNaN() function is needed:
// NaN == NaN

// console.log(!isNaN("Empty String is a number: ")); // "" --> falsy -> false -> 0 -> number
// console.log("string is not a number: " + !isNaN( "Ricardo")) // "Ricardo" -> truthy -> has value -> is type of value -> value is a string



// !true; false
//
// !false; true
//
// !!true; true
//
// !!false; false
//
// !!0; false
//
// !!-0; false
//
// !!1; true
//
// !!-1; true
//
// !!0.1; true
//
// !!"hello"; true
//
// !!""; false
//
// !!''; false
//
// !!"false"; true
//
// !!"0"; true



// 2. Execute the following statement in the Chrome JavaScript console
// and then follow the directions below.

// var sample = "Hello Codeup";

// Use .length to find the number of characters in the string.; console.log("Hello Codeup".length); 12
//
//  Try to make the sample string all upper or all lower case.
//      console.log(sample.toUpperCase()); HELLO CODEUP
//      console.log(sample.toLowerCase()); hello codeup
//
// Update the variable sample via concatenation so that it contains "Hello Codeup Students".
//      const str1 = "Hello";
//      const str2 = "Codeup";
//      const str3 = "Students";
//      console.log(str1.concat(" ", str2, " ", str3));
//      console.log(sample += " " + "Students"); This is another way to do it

//
// Replace "Students" with "Class".
//      var sample = "Hello Codeup Students";
//      console.log(sample.replace("Students", "Class"));
//
// Find the index of "c" using .indexOf(). What do you observe?
//      var sample = "Hello Codeup";
//      console.log(sample.indexOf("c")); > -1
//
// Find the index of "C" using .indexOf().
//      var sample = "Hello Codeup";
//      console.log(sample.indexOf("C")); > 6
//
// Retrieve a substring that contains only the word "Codeup" by using indexOf() and substring().
//      var sample = "Hello Codeup";
//      console.log(sample.indexOf("Codeup")); 6
//      console.log(sample.substring(6));



// 3. Write some JavaScript code, that is, variables and operators,
//   to describe the following scenarios. Do not worry about the real
//   operations to get the values, the goal of these exercises is to understand
//   how real world conditions can be represented with code.

// You have rented some movies for your kids: The little mermaid (for 3 days),
// Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it).
// If price for a movie per day is $3, how much will you have to pay?
//     var theLittleMermaid = 3; var pricePerDay = 3;
//     var brotherBear = 5;
//     var hercules = 1;
//     console.log("The total cost of the movies is: " + "$" + ((theLittleMermaid * pricePerDay) + (brotherBear * pricePerDay) + (hercules * pricePerDay)));

//  Suppose you're working as a contractor for 3 companies:
//  Google, Amazon and Facebook, they pay you a different rate per hour.
//  Google pays $400, Amazon $380, and Facebook $350.
//  How much will you receive in payment for this week? You worked 10 hours for Facebook,
//  6 hours for Google and 4 hours for Amazon.
//         var google = 400; var hoursOnGoogle = 6;
//         var amazon = 380; var hoursOnAmazon = 4;
//         var facebook = 350; var hoursOnFacebook = 10;
//         console.log("This is how much you will get from... " + "$" + ((google * hoursOnGoogle) + (amazon * hoursOnAmazon) + (facebook * hoursOnFacebook)));

//  A student can be enrolled in a class only if the class is not full and the
//  class schedule does not conflict with her current schedule.
//         const fullClassroom = 20;
//         const numOfStudents = 19;
//         if(numOfStudents === 19){
//                 console.log("There's room in class!")
//         }else {
//                 (numOfStudents === 20);
//                 {
//                         console.log("Sorry, maybe next year!")
//                 }
//         }
//              var studentEnrollment = (classfull && noClassConflict)

//  A product offer can be applied only if a person buys more than 2 items,
//  and the offer has not expired. Premium members do not need to buy a specific amount of products.

        //var productOffer = premiumAccount) || (moreThan2Items && offerValid)

// 4. Use the following code to follow the instructions below:
//
//
// var username = 'codeup';
// var password = 'notastrongpassword';
// Create a variable that holds a boolean value for each of the following conditions:
//
// the password must be at least 5 characters
// the password must not include the username
// the username must be no more than 20 characters
// neither the username or password can start or end with whitespace