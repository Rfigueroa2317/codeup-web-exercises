"use strict"; // 4/20/2021      **** FINISHED ON 4/25/2021 ****

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */


               // function analyzeColor(color) {
    //
    //             if (color === "blue"){
    //                 console.log("blue is the color of the sky")
    //                  } else if(color === "red") {
    //                         console.log("Strawberries are red");
    //                  } else if (color === "cyan") {
    //                         console.log("Idk anything about that color")
    //                  }
    //                  return color;
    //             }
    //             console.log(analyzeColor("blue"));


    //              *** THE RIGHT WAY TO DO IT ***
    //              ***function analyzeColor(color){
    //                  if (color === "blue") {
    //                  return "blue is the color of the sky";
    //                  }else if (color === "red") {
    //                  return "strawberries are red";
    //                  }else{
    //                  return " I don't know anything about that color";
    //                     }
    //                  }
    //                  console.log(analyzeColor("blue"));***


// Don't change the next two lines!
// These lines create two variables for you:

    // - `colors`: a list of the colors of the rainbow
    // - `randomColor`: contains a single random color value from the list (this

//will contain a different color every time the page loads)

    // var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    // var randomColor = colors[Math.floor(Math.random() * colors.length)];

     /**
     * TODO:
     * Pass the `randomColor` variable to your function and console.log the results.
     * You should see a different message every time you refresh the page
     */

            // analyzeColor(randomColor)
            // console.log(randomColor);



/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
        // *** SHORT VERSION ***
        // switch (colors) {
        //     case "colors":
        //         break;
        // }
        //     console.log(analyzeColor(randomColor));

         // function analyzeColorSwitch(colors) {
         //     switch (color) {
         //     case "blue":
         //         return "blue is the color of the sky";
         //     case "red":
         //         return "strawberries are red";
         //     default:
         //         return "I don't know anything about " + color;
         //             }
         //         }
         //     console.log(analyzeColorSwitch("blue"));


                // *** LONGER VERSION ***
                // function analyzeColorSwitch(colors) {
                //     switch (colors) {
                //         case "blue":
                //         break;
                //         case "red":
                //             break;
                //         case "green":
                //             break;
                //         case "yellow":
                //             break;
                //         case "orange":
                //             break;
                //         case "indigo":
                //             break;
                //         case "violet":
                //             break;
                //     }
                //     return colors;
                // }
                // console.log(analyzeColorSwitch(randomColor));

/**
 * TODO:
git * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */



        // function analyzeColor(color) {
        //     return color;
        //     }
        // console.log((analyzeColor("The color is " + randomColor)));




/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

    // 100 - (100 * .10)
    // total - (total * discount percentage)
    // if (luckynumber == 0 "discount percentage is zero"

            // var total = 100;
            //
            //     function calculateTotal(luckyNumber, total) {
            //                 if(luckyNumber === 1){
            //                     return total - (total * 0.1);
            //                 }else if(luckyNumber === 2){
            //                     return total - (total * 0.25)
            //                 }else if(luckyNumber === 3) {
            //                     return total - (total * 0.35)
            //                 }else if(luckyNumber === 4){
            //                     return total - (total * 0.5)
            //                 }else if(luckyNumber === 5){
            //                     return 0;
            //                 }else{
            //                     return  total;
            //                 }
            //           }
                    //  console.log(calculateTotal(luckyNumber, total));

//function call
// console.log(calculateTotal(0, 100)); // returns 100
// console.log(calculateTotal(4, 100)); // returns 50
// console.log(calculateTotal(5, 10));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6


    // var luckyNumber = Math.floor(Math.random() * 6);
    //
    //     console.log(`your total is ${100}, you drew ${luckyNumber},
    //      congrats! your new total is ${calculateTotal(luckyNumber,total)}`)




/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
        //var playCheck
        function numberTest() {
            if(confirm("Would you like to enter a number?")=== true){
                return true;
            }else{
                alert("Ok then have a nice day");
                return false;
            }

        }
        console.log(numberTest());

    var number;

        function inputNumber(num){
            return prompt("What number do you want to type in?");
            if (number % 2 === 0){
                return alert("That's an even Number!");

            }else if(number % 2 === 1){
                alert("That's an odd number!");
                return false;
            }
        }
            console.log(inputNumber(number));











