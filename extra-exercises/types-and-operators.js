(function() {
    "use strict";
    // Make a function named isOdd(number)
    //     function isOdd(input) {  //(math expression) === (math value)
    //         var remainder = input % 2
    //             return remainder === 0;
    //     }
    //     console.log(isOdd());


    // - Make a function named isEven(number)

        // function isEven(input){
        //     return input;
        // }

    // Make a function named identity(input) that returns the input exactly as provided.







    // Make a function named `isTrue(boolean)`
    //Which takes an input and returns true if that input's VALUE is true

    // function isTrue(input) {
    //     return input === true;
    // }
    //
    //     console.log(isTrue(true));


    // Make a function named `isFalse(boolean)`
    // Which takes an input and returns true IF that input's VALUE is false

    // function isFalse(input){
    //     return input === false;
    // }
    //     console.log(isFalse(false))


    //console.log(testFalsy(undefined));

    //console.log(NaN == 0); // -0 -> falsy -> false -> 0


    //vWrite a function named subtract(a, b) that returns 'a' minus 'b'

        // function subtract(a, b) {
        //     return a - b;
        // }
        //
        // console.log(subtract(5, 8));

    // --------------------------------------- //
    //
    //         function subtract(a, b) {
    //             if (typeof a && b === "number" || !isNaN(a && b)) {
    //                 return a - b;
    //             }else{
    //                 return false;
    //             }
    //         }
    //
    //         console.log(subtract(3, 8));
    //         console.log(typeof 5);



    // Write a function named multiply(a, b) that returns the product of 'a' times 'b'

        // function multiply(a, b){
        //         return a * b;
        //     }
        //
        //     console.log(multiply(4, 3));


    //     function multiplyNumeric(input1, input2){
    //         var product = Number(input1) * Number(input2);
    //
    //          if (isNaN(product) ) {
    //              console.log("Product is NaN")
    //             return false;
    //         }else{
    //              console.log("Product is a number")
    //              return product;
    //          }
    //     }
    // console.log("bs string" * 2)
    //     //console.log(typeof NaN)
    //     console.log(multiplyNumeric("bs string",2));




   // Modify your math functions. If the both of the parameters are numbers OR numeric strings
    // (4 or "4"), then return the number value from the math operation. If not, just return false




        // TODO: write a function called Uppercase which takes in one input and
        //  returns that input in uppercase IF (and only if) the input is a non-numeric
        //  otherwise, return false


            // function uppercase(input){
            //     if (typeof input === 'string' && isNaN(input)) {
            //         return input.toUpperCase()
            //     }
            //     return false;
            // }
            //     console.log(uppercase('45'));







        // TODO: write a function called mockingCase which takes in an input and returns
        //  that input in mocking case.
        //  ie: dog -> dOg, software developer -> sOfTwArE dEvElOpEr
        //  -> You may be using a few different string methods



            function mockingCase(input){
                var array = array.toLowerCase();
                var mock = array.charAt(0);

            }
            console.log(mockingCase(mock));






})()
