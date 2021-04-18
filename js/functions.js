"use strict";

// "IIFE's"

(
    function() {
            "use strict";

            /**
             * TODO:
             * Create a function called 'sayHello' that takes a parameter 'name'.
             * When called, the function should return a message that says hello to the passed in name.
             *
             * Example
             * > sayHello("codeup") // returns "Hello, codeup!"
             */
            // 1. write a function
            // function sayHello(name){
            //      return "Hello, " + name;
            // }
            // sayHello( "Laura");
            // 2. pass oin 1 param
            // 3. return hello + param

            function sayHello(name) {
                    return ("Hello " + name);

            }

            console.log(sayHello("Ricardo"));

            /**
             * TODO:
             * Call the function 'sayHello' and pass your name as a string literal argument.
             * Store the result of the function call in a variable named 'helloMessage'.
             *
             * console.log 'helloMessage' to check your work
             */
            var helloMessage = sayHello("Ricardo");
            console.log(helloMessage);

            // 1. call sayHello
            // var helloMessage = sayHello( "Ricardo");
            // console.log(helloMessage);

            /**
             * TODO:
             * Store your name as a string in a variable named 'myName', and pass that
             * variable to the 'sayHello' function. You should see the same output in the
             * console.
             */
                // 1. create a variable "myName"
                // 2. save name into that variable as a string
                // 3. call sayHello function and pass in the variable

                // var myName = "Laura";
                // console.log(sayHello(myName));

// function nameYourFunction(param1, param2){
//         // code goes here
//                 return param1 + param2;
//         }
//
//         nameYourFunction(8, 2);

            var myName = "Ricardo";
            sayHello(myName)
            console.log(sayHello(myName));


// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
            var random = Math.floor((Math.random() * 3) + 1);

            /**
             * TODO:
             * Create a function called 'isTwo' that takes a number as a parameter.
             * The function should return a boolean value based on whether or not the passed
             * number is the number 2.
             *
             * Example
             * > isTwo(1) // returns false
             * > isTwo(2) // returns true
             * > isTwo(3) // returns false
             *
             * Call the function 'isTwo' passing the variable 'random' as a argument.
             *
             * console.log *outside of the function* to check your work (you should see a
             * different result everytime you refresh the page if you are using the random
             * number)
             */

            // 1. create function
            // 2. name it isTwo
            // 3. take in 1 param - number


            // function isTwo(num){
            // console.log("random number is: " + num)
            // if(num === 2){
            // return true;
            // } else {
            //  return false:
            // }

            // console.log(isTwo(random));


            // function isTwo(num){  *** This is another way to do it ***
            // console.log ("random num is: " + num)
            //     return num === 2;
            //     }
            //     console.log(isTwo(random));

            function isTwo(number) {
                    if (number === 2) {
                            return true;
                    } else {
                            return false;
                    }
                    console.log(isTwo(1));

                    /**
                     * TODO:
                     * Create a function named 'calculateTip' to calculate a tip on a bill at a
                     * restaurant. The function should accept a tip percentage and the total of the
                     * bill, and return the amount to tip
                     *
                     * Examples:
                     * > calculateTip(0.20, 20) // returns 4
                     * > calculateTip(0.25, 25.50) // returns 6.375
                     * > calculateTip(0.15, 33.42) // returns 5.013
                     */

                        // write a function - calculate tip
                        // function calculateTip(tip, billTotal){
                        //      return tip * billTotal;
                        //    }
                        // console.log(calculateTip(0.20, 38.35).toFixed(2));

                        // (function(){
                    //          "use strict";
                    //
                    // }()

                    /**
                     * TODO:
                     * Use prompt and alert in combination with your calculateTip function to
                     * prompt the user for the bill total and a percentage they would like to tip,
                     * then display the dollar amount they should tip
                     */

                    /**
                     *
                     * TODO:
                     * Create a function named `applyDiscount`. This function should accept a price
                     * (before a discount is applied), and a discount percentage (a number between 0
                     * and 1). It should return the result of applying the discount to the original
                     * price.
                     *
                     * Example:
                     * > var originalPrice = 100;
                     * > var dicountPercent = .2; // 20%
                     * > applyDiscount(originalPrice, dicountPercent) // 80
                     *
                     * > applyDiscount(45.99, 0.12) // 40.4712
                     */


            }

    }


)()