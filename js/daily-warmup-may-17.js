// Write a function named secondToLast(arr) that
// returns the data type
// of the second to last element of the array parameter.
// When you call the function, pass in an array of your choosing

function secondToLast(){
    var arr = ['apple', 'lemon', 'orange', 'mango']
    return typeof arr[arr.length -2];
}

console.log(secondToLast(arr))