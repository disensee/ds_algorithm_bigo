//recursion is not an algorithm but a concept
// a function that refers to itself inside the function
let counter = 0;
function inception(){
    if(counter > 3){
        return 'done!';
    }
    counter++;
    return inception(); //added 'return' keyword after leaving note on line 13
}

console.log(inception());
//returns undefined because the only
//inception call that returns 'done' is popped
//off the call stack. Return needs to bubble up

//3 rules of recursion
//  1: Identify base base
//  2: Identify recursive case
//  3: Get clolser and closer and return when needed. usually have 2 returns
/*======================EXERCISES======================*/
// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop
function findFactorialRecursive(number){
    if(number === 2){
        return number;
    }
    return number * findFactorialRecursive(number - 1);
}

function findFactorialIterative(number){
    let answer = 1;
    for(let i = 2; i <= number; i++){
        answer *= i;
    }
    return answer;
}


console.log(findFactorialIterative(5));
console.log(findFactorialRecursive(5));
  