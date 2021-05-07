// EXTRA FUNCTIONS PRACTICE //


// .1   Make a function named isOdd(number)

        // function isOdd(input){
        //     if (input % 2 === 1){
        //         return true;
        //     }else{
        //         return false;
        //     }
        // }
        //     console.log(isOdd(11));


// .2   Make a function named `isEven(number)

        // function isEven(input){
        //     if (input % 2 === 0){
        //         return true;
        //     }else{
        //         return false;
        //     }
        // }
        // console.log(isEven());


// .3    Make a function named `identity(input)` that returns the input exactly as
//       provided.

        // function identity(input){
        //     return input;
        // }
        //
        // console.log(identity('NaN'));


// .4   Make a function named isFive(input)

        // function isFive(input){
        //     if (input === 5){
        //         return true;
        //     }else{
        //         return false;
        //     }
        // }
        // console.log(isFive(5));


// .5   Make a function named `addFive(input)`
//      that adds five to some input.

        // function addFive(input){
        //         return input + 5;
        // }
        // console.log(addFive());


// .6   Make a function named `isMultipleOfFive(input)`

        // function isMultipleOfFive(input){
        //     if(input % 5 === 0){
        //         return true;
        //     }else{
        //         return false;
        //     }
        // }
        // console.log(isMultipleOfFive(10));


// .7   Make a function named `isThree(input)`

        // function isThree(input){
        //     if (input === 3){
        //         return true;
        //     }else{
        //         return false;
        //     }
        // }
        // console.log(isThree());


// .8   Make a function named `isMultipleOfThree(input)`

        // function isMultipleOfThree(input){
        //         if(input % 3 === 0){
        //                 return true;
        //         }else{
        //                 return false;
        //         }
        // }
        //


// .9   Make a function named `isMultipleOfThreeAndFive(input)`

        // function isMultipleOfThreeAndFive(input){
        //         if(input % 5 === 0 && input % 3 === 0){
        //                 return "AIN'T NUTHIN BUT A PEANUT!";
        //         }else if(input % 5 ===0){
        //                 return "YEAH BUDDY!";
        //         }else if(input % 3 ===0){
        //                 return "LIGHTWEIGHT BABY!";
        //         }else{
        //                 return 'no gains...';
        //         }
        // }
        //         console.log(isMultipleOfThreeAndFive(35));


// .10  Make a function named `isMultipleOf(target, n)` which checks if target is
//      evenly divisible by `n`

        function isMultipleOf(target, n){
                if(target / n){
                        return Math.floor(target / n);
                }else{
                        return false;
                }
        }
        console.log(isMultipleOf(8,2));