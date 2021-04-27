(function (){

    "use strict";

    // TODO:
    // -> .length - SUPER IMPORTANT!
    // -> .forEach() - ALSO IMPORTANT!
    // -> for loop - STILL IMPORTANT!

    // if you want to add an element you use.... //
    // .push()

    // var days = ["Monday", "Tuesday", "Wednesday"];
    // console.log(days.length);
    // var newLength = days.push("Thursday");
    // console.log(newLength);
    //
    // console.log("The max index of this array : " + days.indexOf("Thursday"));

    // but what if you want to take an element out ..... //
    // you use .pop()

    // var days = ["Monday", "Tuesday", "Wednesday"]
    // days.push("Thursday");
    //
    // var removedElement = days.pop();
    //
    // console.log(days);
    //
    // console.log("The removed element was: " + removedElement)


    // TODO: MINI-EXERCISE
    //  -> var days = ["Monday", "Tuesday" , "Wednesday"];
    //  -> Create an array with the remaining days of the week
    //  -> Call .forEach() on that NEW array
    //  -> Inside the inline function you pass into .forEach():
    //      -> add the remainingDay of the week to the old array
    //  -> When the loop completes, console.log() the completed day of the week array

        //  How I did it //

        // var days = ["Monday", "Tuesday", "Wednesday"];
        //
        // var array = ["Thursday", "Friday", "Saturday", "Sunday"];
        //
        // array.forEach(addedDays);
        //
        // function addedDays(days){
        //    return days += array;
        // }
        //
        // console.log(days += array);

    // *** The correct way to do it *** //

    // var days = ["Monday", "Tuesday", "Wednesday"];
    //
    // var array = ["Thursday", "Friday", "Saturday", "Sunday"];
    //
    //
    // array.forEach(function(day){
    //     days.push(day);
    // });
    //
    //     console.log(days)





    // .unshift(valueToAdd);

    // .unshift moves the places of the elements around
    // example: vvv

    // Start 0, 1, 2, 3
//  Unshift   , 0, 1, 2, 3
//  w/ New   0, 1, 2, 3, 4

    // var numArray = [1, 2, 3, 4, 5];
    //
    // console.log(numArray.indexOf(1)); // beggining index
    //
    // //numArray.unshift(6);
    //
    // console.log(numArray.indexOf(1)); // ending index
    //
    // console.log(numArray);
    //
    // var sortedArray = numArray.sort();
    // console.log(numArray.sort());


        // if you want to push... //

    // numArray.push(6);
    // var sortedArray = numArray.sort();
    // console.log(sortedArray);


    // var daysInMonth = [...Array(32).keys()];
    // console.log(daysInMonth);
    //
    //     var removedDay = daysInMonth.shift();
    //     console.log("This day was removed: " + removedDay);
    //     console.log(daysInMonth);
    //     daysInMonth.unshift(2); // This means we're adding to the beggining of it
    //     //console.log(daysInMonth.indexOf(1) === 0);


    // TODO - MINI EXERCISE
    //  -> Let's reverse engineer our days of the week array
    //  -> Make sure to console.log in order to see your code's behavior!
    //  -> Write a function which takes in your complete days of the week array
    //      -> It will eventually return your reverse-engineered array
    //  -> Using a FOR LOOP (not .forEach())
    //      -> pop() each item off the days array
    //      -> use the returned value from pop() to unshift the element
    //      -> on to the new array
    //  -> HINT: You may find that the loop doesn't behave as expected
    //      -> console.log EVERY possible thing which could change as your loop runs
    //          -> consider how the methods you are using change state of the array



            var days = ["Monday", "Tuesday", "Wednesday"];

            var array = ["Thursday", "Friday", "Saturday", "Sunday"];


            array.forEach(function(day){
                days.push(day);
            });

            //     console.log(days)


            function daysOfWeek(days){
                 return days;

            }
            console.log(days)

            var newArray = [];

                for(var i = days.length; i > 0; i-- ) {

                    newArray.unshift(days.pop())
                }
                console.log(newArray)










})()