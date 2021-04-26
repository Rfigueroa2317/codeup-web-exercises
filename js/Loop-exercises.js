"use strict";

// // TODO: MINI EXERCISES
// // TODO: print all even numbers between 0 and 25;
// // TODO: using prompt() and alert(), write a loop that will continue to ask for the correct password until the
// // correct password is given.
// hint: start by defining the correct password and don't forget to link your html file
// *** i = iteration or something idk....

// .1
//         var count = 0;
//
//         while ( count !== 25){
//             if (count % 2 === 0)
//             console.log("This should be an even number " + count)
//             count++;
// }
//         while (count <= 25){
//             console.log(`startin num: ${count}`);
//             if(count % 2 === 0){
//                 console.log(count)
//             }
//             count += 1;
//         }
// .2

        // var correctPassword = "Guest";
        // var wrongPassword;
        //
        // while (correctPassword) {
        //     prompt("What is the password?")
        //     if (correctPassword === "Guest") {
        //         alert("password is correct")
        //     } else (wrongPassword); {
        //         prompt("password is incorrect")
        //         break;
        //     }
        //
        // }
        //         var password = "Guest";
        //         while(prompt("What is password?") != password){
        //             console.log("Sorry that's not the right password.")
        //         }



//*** This is the way to do it ***


//         var correctPassword = "Guest";
//         var myChoice;
//
//         do {
//             myChoice = prompt("What is the password?");
//         }while(myChoice != correctPassword)




        // var password = "Guest";
        // var myChoice = prompt("Please enter a valid password");
        // while(myChoice != password){
        //     myChoice = prompt("Sorry, wrong password. Try again");
        // }


    // var num = 2;
    //
    // function multiplyBy2(){
    //
    //     while(num <= 65536) {
    //         console.log(num);
    //         num *= 2;
    //     }
    // }
    // multiplyBy2(num);


// DO WHILE EXERCISE

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
var wantedCones = getWantedCones();

// function getWantedCones(){
//     return Math.floor(Math.random() * 5) + 50;
//}
// This expression will generate a random number between 1 and 5
function getWantedCones() {
    return Math.floor(Math.random() * 5) + 1;
}
function sellIceCreamCones(conesToSell){

}do{

    // we do not have enough cones to sell, skip to next iteration
    if (wantedCones > allCones){
        console.log(`I'm sorry, you wanted ${wantedCones}, but we only have ${allCones}`)
        continue;
    }

    console.log(`Here are ${wantedCones}. Enjoy!`);
    // at this point, we have enough cones and should subtract wantedCones from allCones
    allCones -= wantedCones;

    console.log(`We have ${allCones} remaining`);

}while(allCones > 0)

console.log("We've sold out of cones for the day!");