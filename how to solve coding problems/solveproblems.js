/*
Given 2 arrays, create a function that lets a user know (true/false)
whether these two arrays contain any common items
For Example:
const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'i'];
returns false
-------------------------------------
const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'x'];
returns true
*/

//CHECK INPUTS & OUTPUTS:
//two parameters - in this case these two parameters will always be arrays with no size limit
//returns true or false

const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'i'];
const array3 = ['z', 'y', 'x'];


//Brute force -- not to be used in an interview 
function checkForCommonItems(arr1, arr2){
   for(let i = 0; i < arr1.length; i++){
       for(let j = 0; j < arr2.length; j++){
           if(arr1[i] === arr2[j]){
               return true;
           }
       }
   }
   return false;
}
console.log(checkForCommonItems(array1, array2));
console.log(checkForCommonItems(array1, array3));
//This approach is not the best beacuse of a nested for loop. This causes time complexity
//O(a*b) (different inputs, not n^2)