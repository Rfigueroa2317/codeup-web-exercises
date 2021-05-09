"use strict"; // 4/22/2021

// WHILE LOOPS

// var numbers = 2;
//
//
//         // while ( numbers < 65536) {
//         //      numbers *= 2;
//         //         console.log("This should be an even number " + numbers)
//         // }
//
//while(numbers < 65536) console.log(numbers *= 2);


//  DO WHILE LOOPS

// // TODO: A parking lot with 30 parking spaces wants to display the amount of spaces available as it gets filled.
//  Let's assume that there are allowing two cars into the parking lot at a time. As those cars take up spaces,
//  write a do-while loop that prints the spaces available. If the parking lot gets filled, print "this parking lot
//  is now full" to the console.
// // HINT: think of a countdown, remember if statements can be used inside of your statements

    // var cars = 2;
    // var parkingSpace = 30;
    //
    // do {
    //     console.log(`there are ${parkingSpace - cars} parking spaces available in this parking lot`); // should print out 28
    //     cars+=2 ; // 3
    // }while(cars < 30)
    // console.log(`Space capacity is at ${cars}, this parking lot is full`);



// ICE CREAM SELLER
/* TODO: An ice cream seller can't go home until she sells all of her cones.
    First write enough code that generates a random number between 50 and 100
    representing the amount of cones to sell before you start your loop.
    Inside of the loop your code should generate another random number
    between 1 and 5, simulating the amount of cones being bought by her
    clients. Use a do-while loop to log to the console the amount of cones
    sold to each person. This is a way get the random numbers for this exercise.
 */

        var allCones = Math.floor(Math.random() * 50) + 50;

        function conesSold(min, max){
            min = Math.ceil(min);
            max = Math.floor(max);
            return allCones;
        }
        console.log(conesSold(allCones))


        var i = 5 + 1;

        do {
            console.log('i = ' + i);
        }while(i < 100);

        console.log(conesSold());


// return Math.floor(Math.random()* (max-min +1)) + min;