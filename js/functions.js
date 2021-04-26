"use strict"; // *** UPDATED ON 4/24/2021 ***

(
    function(){
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
                        // function sayHello(Ricardo) {
                        //     return "Hello, " + Ricardo;
                        // }
                        // console.log(sayHello("Ricardo"))"

                        // CLASS EXAMPLE //

                        // sayHello( "Laura");
                        // 2. pass on 1 param
                        // 3. return hello + param


        /**
         * TODO:
         * Call the function 'sayHello' and pass your name as a string literal argument.
         * Store the result of the function call in a variable named 'helloMessage'.
         *
         * console.log 'helloMessage' to check your work
         */
                        // var helloMessage = sayHello("Ricardo");
                        // console.log(helloMessage);

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


                        // var myName = "Ricardo";
                        // console.log(sayHello(myName));


                //            *** CLASS EXAMPLE  ***
                // function nameYourFunction(param1, param2){
                //         // code goes here
                //                 return param1 + param2;
                //         }


                        // var myName = "Ricardo";
                        // sayHello(myName)
                        // console.log(sayHello(myName));


// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
        // var random = Math.floor((Math.random() * 3) + 1);

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


                        // function isTwo(number) {
                        //         if (number === 2) {
                        //                 return true;
                        //         } else {
                        //                 return false;
                        //         }
                        //         console.log(isTwo(1));

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

                //write a function - calculate tip
                //         function calculateTip(tip, billTotal){
                //              return tip * billTotal;
                //            }
                        // console.log(calculateTip(0.20, 20).toFixed(2));
                        // console.log(calculateTip (0.25 , 25.50).toFixed(2));
                        // console.log(calculateTip (0.15 , 33.42).toFixed(2));


        /**
         * TODO:
         * Use prompt and alert in combination with your calculateTip function to
         * prompt the user for the bill total and a percentage they would like to tip,
         * then display the dollar amount they should tip
         */
                        // var billTotal = 20 || 25.50 || 33.42;
                        // calculateTip(tip, billTotal)
                        //     alert(`Your total is $ ${20}`)
                        //     var tip = prompt("How much would you like to tip?", 0.20 );
                        //     alert(`Your bill is ${tip * billTotal}`)


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
         * > var discountPercent = .2; // 20%
         * > applyDiscount(originalPrice, discountPercent) // 80
         *
         * > applyDiscount(45.99, 0.12) // 40.4712
         */


                    // function applyDiscount(originalPrice, discountPercent){
                    //     var discountAmount = originalPrice * discountPercent
                    //     return(originalPrice - discountAmount).toFixed(2);
                    // }
                    //
                    //     console.log(applyDiscount(100,0.2));


    }())

