//Make a function named trim(string) that removes empty spaces before and after the input, the returns that trimmed string

function trim(input){
    return input.replaceAll(" ","");

}

console.log(trim('s tring t hi s se nt ence'));
