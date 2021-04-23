//This file corresponds to Big O section in Master the Coding Interview: Data Structures + Algorithms with Andrei Neagoie
//Big O allows us to measure the scalability of our code. 

/*===================================TIME COMPLEXITY===================================*/
const fish = ['dory', 'bruce', 'marlin', 'nemo'];
const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];

//Creates array that has nemo 100 times
const large = new Array(100000).fill('nemo');

function findNemo(array){
    for(let i = 0; i < array.length; i++){
        console.log(i);
        if(array[i] === 'nemo'){
            console.log('Found Nemo!');
            break; //Break when nemo is found for efficiency -> function is still O(n) as worst case needs to be assumed
        }
    }
}

findNemo(everyone); //O(n) --> Linear Time

const boxes = [0,1,2,3,4,5];
function logFirstTwoBoxes(boxes){
    console.log(boxes[0]); //O(1)
    console.log(boxes[1]); //O(1)
}

//logFirstTwoBoxes(boxes); //O(2)

/*===================================EXERCISE 1===================================*/
// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
    let a = 10; //O(1)
    a = 50 + 3; //O(1)
  
    for (let i = 0; i < input.length; i++) { //O(n)
      anotherFunction(); //O(n)
      let stranger = true; //O(n)
      a++; //O(n)
    }
    return a; //O(1)
  }

//O(3+4n) => O(n)

/*===================================EXERCISE 2===================================*/
// What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
    let a = 5; //O(1)
    let b = 10; //O(1)
    let c = 50; //O(1)
    for (let i = 0; i < input; i++) {
      let x = i + 1; //O(n)
      let y = i + 2; //O(n)
      let z = i + 3; //O(n)
  
    }
    for (let j = 0; j < input; j++) {
      let p = j * 2; //O(n)
      let q = j * 2; //O(n)
    }
    let whoAmI = "I don't know"; //O(1)
  }

//O(4+5n) => O(n)
/*===================================Big O Rules===================================*/
/*
Rule 1: Always worst Case
Rule 2: Remove Constants
Rule 3: Different inputs should have different variables. O(a+b). A and B arrays nested would be
O(a*b)
+ for steps in order
* for nested steps
Rule 4: Drop Non-dominant terms
*/


//Rule 1: Assume worst case
function findNemo(array){
    for(let i = 0; i < array.length; i++){
        console.log(i);
        if(array[i] === 'nemo'){
            console.log('Found Nemo!');
            break; //Break when nemo is found for efficiency -> even if nemo was first item in input, performance is O(n)
        }
    }
}

//Rule 2: Remove constants
function printFirstItemThenFirstHalfThenSayHi100Times(items) {
    console.log(items[0]);//O(1)

    var middleIndex = Math.floor(items.length / 2);
    var index = 0;

    while (index < middleIndex) { //O(n/2)
        console.log(items[index]);
        index++;
    }

    for (var i = 0; i < 100; i++) {//O(100)
        console.log('hi');
    }
}
//O(1 + n/2 + 100) => O(n + 1) => O(n)

//Rule 3: Different terms for different inputs
function compressBoxesTwice(boxes/*input 1*/, boxes2/*input 2*/){
    boxes.forEach(function(boxes){
        console.log(boxes);
    });

    boxes2.forEach(function(boxes2){
        console.log(boxes);
    });
}
//O(a+b)
//if loops were nested, perfornace would be O(a*b)

//Log all pairs of an array
const letters = ['a', 'b', 'c', 'd', 'e'];
function findPairs(arr){
   for(let i = 0; i < arr.length; i++){
       for(let j = 0 ; j < arr.length; j++){
           console.log(arr[i], arr[j]);
       }
   }
}

//findPairs(letters);
//When loops are nested, n is multiplied
//O(n * n)=>O(n^2)  --> Quadratic Time

//Rule 4: Drop non dominant terms
function printAllNumbersThenAllPairSums(numbers) {

    console.log('these are the numbers:'); 
    numbers.forEach(function(number) { //O(n)
      console.log(number);
    });
  
    console.log('and these are their sums:');
    numbers.forEach(function(firstNumber) { //O(n)
      numbers.forEach(function(secondNumber) { //nested O(n)
        console.log(firstNumber + secondNumber);
      });
    });
}
  
//printAllNumbersThenAllPairSums([1,2,3,4,5])

//O(n + n^2) => O(n^2)
//Drop non dominant term -- as size of input increases, n is far less important than n^2

/*
Example of simplifying
O(x^2 + 3x + 100 + x/2)=>O(x^2)
if x = 500
x^2 = 250000
3x = 1500
100 = 100
x/2 = 250 
x^2 is the dominant term, therefore this simplifies to O(x^2)
*/

/*===================================SPACE COMPLEXITY===================================*/

/*
When a program executes there are two ways to remember things, the heap and the stack. 

The heap is usually where variables are stored.
The stack keeps track of function calls.

-What causes Space complexity?-
Variables
Data Structures
Function Call
Allocations
*/

/*===================================EXERCISE 1===================================*/
//Space complexity O(1)
function boooo(n) {
    for (let i = 0; i < n.length; i++) {
        console.log('booooo');
    }
}
boooo([1,2,3,4,5]);
//The only variable created here is i. Other than i we are not taking up any more memory, so 
//performance is O(1).


//Space complexity O(n)
function arrayOfHiNTimes(n) {
    var hiArray = [];
    for (let i = 0; i < n; i++) {
        hiArray[i] = 'hi';
    }
    return hiArray;
}

arrayOfHiNTimes(6);
//this function will create an array with 6 items. Because this function takes space for each iteration
//of the loop, it is O(n)