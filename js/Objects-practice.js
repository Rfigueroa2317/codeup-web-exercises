"use strict";

    // var car = {};
    //
    // car.make = "Toyota";
    //
    // car["model"] = "Camry";

    //another way to do it (and probably better) //

    // var car = {
    //     make: "Toyota",
    //     model: "Camry"
    // };

    // DON'T DO IT LIKE THIS:

    //  car = {
    //     "number of wheels": 4
    // };
    //
    //  // do it like this instead:
    //
    // car = {
    //     numberOfWheels: 4
    // }
    //
    // // NOT LIKE THIS!!!
    //
    // car["number of wheels"] = 4;
    //
    // // but do it like this...
    //
    // car.numberOfWheels = 4;


    // NESTED VALUES //
    // This is a way to do a nested value //

    // var cars = [
    //     {
    //         make: "Toyota",
    //         model: "Camry",
    //         features: ["Automatic Windows", "Bluetooth Connectivity", "GPS Navigation"],
    //         owner: {
    //             name: "Jane Doe",
    //             age: 30
    //         }
    //     },
    //     {
    //         make: "Honda",
    //         model: "Accord",
    //         features: ["Automatic Windows", "Great Gas Mileage", "AM/FM Radio"],
    //         owner: {
    //             name: "John Doe",
    //             age: 31
    //         }
    //     }
    // ];
    //
    // console.log("The first car is a " + cars[0].make + " " + cars[0].model + " .");
    // console.log("The owner of the second car is " + cars[1].owner.name + ".");
    //
    // console.log("Here are all the features of all the cars:");
    // cars.forEach(function(car) {
    //     car.features.forEach(function (feature) {
    //         console.log(feature);
    //     });
    // });

    // ASSIGNING FUNCTIONALITY TO AN OBJECT //

    // var car = {};
    //
    // car.make = "Toyota";
    // car.model = "Camry";

    // create a honk method on the car object
    // an object can also have functions known as object methods.

    // car.honk = function () {
    //     alert("Honk! Honk!");
    // };
    // // honk the horn
    // car.honk();
    //
    // THE "THIS" KEYWORD
    // The "this" method in JS can refer to a different object
    // based on how a function is called. However, the intricacies
    // of "this" are a more advanced topic.

    // Example of "this":

    // var car = {};
    // car.make = "Toyota";
    // car.model = "Camry";
    //
    // // create a logMakeModel on the car object
    // car.logMakeModel = function () {
    //     console.log("Car make/model is:" + this.make + " " + this.model);
    // };
    // // log the make/model
    // car.logMakeModel();

var theSpurs = {
    city: "SA",
    coach: 'gregg',
    wins: 5,
    players: ["one", "two", "tim duncan", "manu", "david robinson"],
    playerInfo: [
        {
            name: "Tim",
            age: 40,
            mvp: 3
        },
        {
            name: "manu",
            age: 38,
            mvp: 6
        }
    ],
    otherNBATeams: {
        Jazz: {
            city: "Salt Lake City",
            mascot: "Jazz Bear",
            champsWon: 0
        },
        Mavs: {
            city: "Dallas",
            mascot: "MavsMan & Champ",
            champsWon: 1
        },
        Pistons: {
            city: "Detroit",
            mascot: "Hooper the Horse",
            champsWon: 3
        }
    }
}
console.log(theSpurs.otherNBATeams.Mavs);
// console.log(theSpurs.playerInfo[0].age);
// console.log(theSpurs);
// TODO: using above nested object, log the mascot of the "otherNBATeams", change "manu's" name
//  from "manu" to "Ginobli", print out the 3rd element in the 'players' array, add another
//  'otherNBATeam' team object.