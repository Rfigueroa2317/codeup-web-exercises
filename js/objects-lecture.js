"use strict";

// *** OBJECTS *** //

// // What is an object?
////

// var laptop = {
//     color: 'space gray',
//     make: 'mac',
//     size: 13,
//     turnsOn: function(){
//         return 'turn the computer on';
//     }
//}

// var string = "hello world";
//   console.log(string.length);

//  //  New Object Instance

    // var losSpurs = new Object("losSpurs");
    // console.log(losSpurs)

//      //


//  // TODO: create an empty 'aboutMe' object using
//  // --> the `new` keyword and the Object() constructor

//  // Object Literal:
//     var thisIsMe = {
//         // name: 'Ricardo',
//         // age: 30,
//         // hobby: 'Musician',
//     };
//console.log(typeof thisIsMe);

   // dot method //

     //aboutMe ["Hobby"] =





//  // what is a custom Object?
//  //


//  // Setting properties within object
//  // okay, now let's add some information to our objects

//  // Object Literal:
// var thisIsMe = {
//     name: 'Ricardo',
//     age: 30,
//     hobby: 'Musician',
// };
// console.log(typeof thisIsMe);



//  // USING DOT NOTATION (losSpurs) // //

// var losSpurs = new Object();
// console.log(losSpurs);

//  // nameOfObject.nameOfProperty = value
// losSpurs.coach = "Gregg";
// losSpurs.mascot = "coyote";
// losSpurs.fans = "the best";
// console.log(losSpurs);

//  // bracket notation
// var daMavs = [];

//  // brackets and quotes
//  // nameOfObject[nameOfProperty];

// daMavs["city"] = "Dallas";
// daMavs["wins"] = 1;
// console.log(daMavs);


// DON'T DO THIS //
// var Federer = {
//     name: "Roger",
//     city: "Bern",
//     "number of times he's won opens": 15
// }
// console.log(Federer)
// This is considered bad practice as "strings" can --
//  make code hard to read //

// INSTEAD DO IT LIKE THIS //
// var Federer = {
//     name: "Roger",
//     city: "Bern",
//     opensWon: 15
// }
// console.log(Federer)



//syntax:
//  nameOfObjects.nameOfProperty --> this creates the property within the object

// var theSpurs = {
//     city:"San Antonio",
//     coach: "Greg Popovich",
//     wins: 5,
//     isBestTeam: true
// }

// TODO: create an empty 'yourFaveSportsTeam' object using object literals

        // var favoriteTeam = {
        //
        // };

// TODO: let's add a 'city', 'coach', and 'sport' property
//  to our 'team' object using dot


        // favoriteTeam.city = "Seattle";
        // favoriteTeam.coach = "Some old guy idk...";
        // favoriteTeam.sport = "Basketball";
        //
        // console.log(favoriteTeam);

// TODO: let's add 'numOfPlayers', 'numOfChampsWon', and 'isBestTeam' properties
//  to our same 'teams' object using bracket notation


        // favoriteTeam["numOfPlayers"] = 15;
        // favoriteTeam["numsOfChampsWon"] = 1;
        // favoriteTeam["isBestTeam"] = false;
        //
        // console.log(favoriteTeam);

// TODO: write a function that returns the sport and numOfPlayers from your 'team' object

        // function favoriteTeamInfo(obj) {
        //
        //     var data1 = obj.sport;
        //     var data2 = obj.numOfPlayers;
        //     console.log(`The sport is ${favoriteTeam.sport}`)
        //
        //     return "sport" && "numOfPlayers";
        // }
        //
        //     console.log(favoriteTeam)


//  // Accessing Information within Objects
//  // DOT NOTATION

//  // return just the value of the spurs coach
// var losSpurs = {};
//         losSpurs.city = "San Antonio";
//         losSpurs.coach = "Gregg";
//         losSpurs.sport = "Basketball";
// console.log(losSpurs);
//
// console.log(losSpurs.coach);
// console.log(typeof losSpurs.city);



//  // Re-assigning values inside of objects
// losSpurs.coach = "Gregg";
//console.log(losSpurs)


//  // Nested Values

// var theSpurs = {
//         city: "SA",
//         coach: "gregg",
//         wins: 5,
//         players: ["one", "two", "Tim Duncan", "Manu", "David Robinson"],
//         playersInfo: [
//                 {
//                         name: "Tim",
//                         age: 40,
//                         mvp: 3,
//                 },
//                 {
//                         name: "Manu",
//                         age: 38,
//                         mvp: 6
//                 }
//         ],
//         otherNBATeams: {
//                 Jazz: {
//                         city: "Salt Lake City",
//                         mascot: "Jazz Bear",
//                         champsWon: 0
//                 },
//                 Mavs: {
//                         city: "Dallas",
//                         mascot: "Mavsman & Champ",
//                         champsWon: 1
//                 }
//         }
// }
//
// console.log(theSpurs.otherNBATeams.Mavs);

//      // Assigning Functionality

//         var laptop ={
//                 color: 'space gray',
//                 make: 'mac',
//                 size: 13,
//                 // method
//                 // property name bacomes the name of the function
//                 shutDown: function () {
//                         return "laptop is shutting down";
//                 }
//         }
//         //      // let's shut our laptops off
//         console.log(laptop.shutDown());
//
//         // turn your laptop back on
// laptop.turnOn = function (){
//         return"laptop is now starting";
// }
// console.log(laptop.turnOn());




// from 4/26/2021//
// ** array **
// var arr = [3,6,8,9];
// arr.forEach(num => {
//         console.log(num)
// })

//      // "THIS" keyword

        // var laptop = {
        //         color: 'space gray',
        //         make: 'mac',
        //         size: 13,
        //         whatSize: function (width){
        //                 return `A laptop is ${width} inches wide`;
        //
        //         }, // or return `A laptop is ${laptop.size} inches wide`;
        //         keyboard:{
        //                 spacebar: {
        //                     size: 15,
        //                         whatSize: function(){
        //                                 console.log(this);
        //                                 return  `a ${this.size}-inches wide laptop is great!`
        //                         }
        //                 }
        //         }
        // }


        // var inches = laptop.size;
        // console.log(laptop.whatSize(inches));

// var theSpurs = {
//         city: "SA",
//         coach: 'gregg',
//         wins: 5,
//         players: ["one", "two", "tim duncan", "manu", "david robinson"],
//         playerInfo: [
//                 {
//                         name: "Tim",
//                         age: 40,
//                         mvp: 3
//                 },
//                 {
//                         name: "manu",
//                         age: 38,
//                         mvp: 6
//                 }
//         ],
//         otherNBATeams: {
//                 Jazz: {
//                         city: "Salt Lake City",
//                         mascot: "Jazz Bear",
//                         champsWon: 0
//                 },
//                 Mavs: {
//                         city: "Dallas",
//                         mascot: "MavsMan & Champ",
//                         champsWon: 1
//                 },
//                 Pistons: {
//                         city: "Detroit",
//                         mascot: "Hooper the Horse",
//                         champsWon: 3
//                 }
//         }
// }
// console.log(theSpurs.otherNBATeams.Mavs);
// console.log(theSpurs.playerInfo[0].age);
// console.log(theSpurs);
// TODO: using above nested object, log the mascot of the "otherNBATeams", change "manu's" name
//  from "manu" to "Ginobli", print out the 3rd element in the 'players' array, add another
//  'otherNBATeam' team object.

                // console.log(theSpurs.otherNBATeams.Jazz.mascot);
                // console.log(theSpurs.otherNBATeams.Mavs.mascot);
                // console.log(theSpurs.otherNBATeams.Pistons.mascot);






/** Mini Exercises */
  // TODO: Create a zoo object that contains basic info about the zoo (name, city,
  //     isOpen, ranking, yearOpened), as
  //     well as, information about at least 5 different animals (think nested objects). For each
  //     Each animal must contain 3 identifiers (examples: hasFur, isMammal, animalSound, canFly,
  //      livingPlace). Each animal must also contain a method that returns the sound of that
  //       animal using the THIS keyword.
  //      hint: Each animal should have at least 5 properties (one of them being animalSound);


                // var zoo = {
                //      name: 'San Diego Zoo',
                //      city: 'San Diego, CA',
                //
                //
                //
                //
                // }


//      // *** MATH *** //

//      // Math.random():

//      // random num between 0 and 1;
// var random = Math.random();
// console.log(random);
// //
// //      // now let's remove the decimals using toFixed - an existing js method
// var fixed = random.toFixed(2);
// console.log(fixed);
// //
// //      // now let's get a whole number between 20 and 40
// var inBetween = Math.floor(Math.random() * (40 - 20 + 1) + 20);
// console.log(inBetween);
// //
// //      //let's break it down:
// console.log(40 - 20 + 1); // 21
// console.log(21 + 20); // 41
// console.log(Math.random() * 41);
// //      // make sure to replace what's being passed in to floor with actual random num;
// console.log(Math.floor(2.8));
// //
// console.log(inBetween);

//  // MATH.ROUND();   //  //

// console.log(Math.round(8.245));
// console.log(Math.round(9.87123));
//console.log(Math.round(Math.round()));// This will give you...

// //  //  // Math.floor();
// console.log(Math.floor(7.90));
//
// //  // Math.ceil();
// console.log(Math.ceil(7.90));
//
// //  // Math.pow();
// console.log(Math.pow( 4, 12)); // 4^12
//
// //  // Math.sqrt();
// console.log(Math.sqrt( 100));

//  // Math Constants
//
//  // Euler's Number
console.log(Math.E);

//  // Pi
console.log(Math.PI);












