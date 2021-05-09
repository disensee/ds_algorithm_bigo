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
} //O(number - 1) -> O(n)

function findFactorialIterative(number){
    let answer = 1;
    for(let i = 2; i <= number; i++){
        answer *= i;
    }
    return answer;
} //O(n)


console.log(findFactorialIterative(5));
console.log(findFactorialRecursive(5));
  
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8
function fibonacciIterative(n){ //O(n)
    let fib = [0, 1];
    for(i = 2; i <= n; i++){
        fib.push(fib[i-2] + fib[i - 1]);
        if(i === n){
            return fib[i];
        }
    }

    return -1;
}
  console.log(fibonacciIterative(6));
  
  let fib = [0, 1];
function fibonacciRecursive(n) {// O(2^n) exponential time
    if(n < 2){
        return n;
    }
    return fibonacciRecursive(n-1) + fibonacciRecursive(n-2);
}
  
console.log(fibonacciRecursive(8));

//Implement a function that reverses a string using iteration...and then recursion!
function reverseStringIterative(str) {
    return str.split('').reverse().join('');
}


//Implement a function that reverses a string using iteration...and then recursion!
let newString = '';
function reverseStringRecursive(str) {
    if(str === ""){
        return newString;
    }else{
        return reverseStringRecursive(str.substring(1)) + str.charAt(0);
    }
}

console.log(reverseStringIterative('yoyo mastery'));
//should return: 'yretsam oyoy'
console.log(reverseStringRecursive('yoyo mastery'));