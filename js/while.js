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
 */ // Use a do While loop for this one //

// This is how you get a random number between 50 and 100
    var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
//     var conesSold = Math.floor(Math.random() * 5) + 1;

        // console.log("This is how many cones I started with " + allCones);

    do  {
        console.log("This is how many cones you have left " + allCones);
        var conesSold = Math.floor(Math.random() * 5) + 1;
        if(conesSold <= allCones){
            console.log("I've sold this many ",conesSold)
            allCones -= conesSold;
        }else{
            console.log("I can't sell you that many");
        }
    }while (allCones !== 0);
            console.log("I sold them all");



    // generate a random number
        // *this is already taken care of on line 46 (math.random)

    // random number must be between 50 and 100
        // already taken care of in variable allCones

    // generate another random number
        // already done in line 48

    // that second number should be 1 and 5
        // already done in variable conesSold

    // write a do while loop
        // done in line 42

    // write a console log inside that do while loop
        // already taken care of in line 53

    // what you're login is the number of cones being sold
    //


    // print out how many cones are being sold if AND ONLY IF there's enough cones anything > 0

    // if you have more cones being asked for than cones remaining then cannot sell you any more

    // If this is the case, then print a string that says: 'cannot sell (x) cones, I only have (y) - x = amount
    //  of cones asked for and y = amount of cones left

    // print out a string that says 'Yay! I sold them all' but ONLY IF: amount of cones left (allCones) is equal(===) to 0




// in a do while loop: first evaluate the body of the
// loop and then check the condition

// **in ternary**
// customCones <= allCones ? console.log("I've Sold this many: ",allCones = allCones - customCones) : console.log("Ive sold them all");