// BREAK AND CONTINUE 4/23/2021

// EX.

// var numberToStopAt = 5;

// for (var i = 1; i < 100; i++) {
//
//     console.log('Loop counter is: ' + i);
//
//     if (i === numberToStopAt) {
//         console.log('We have reached the stopping point: break!');
//         // use the break keyword to exit from the while loop
//         break;
//         // nothing after the break will get processed
//         console.log('You will never see this line.');
//     }
// }

// .2 Prompt the user for an odd number between 1 and 50.
//    Use a loop and a break statement to continue prompting
//    the user if they enter invalid input.


for (var i = 1; i < 100; i += 2) {
    if(i === 27) {
        continue;
    }
    console.log("Here's an odd number: " + i)

    if(i === 49) {
        break;
    }

}

