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
//This approach is not the best beacuse of a nested for loop. This causes 
//time complexity: O(a*b) (different inputs, not n^2)
//space complexity: O(1)

//array1 ==> obj{
// a: true,
// b: true,
// c: true,
// x: true
//}
//array 2[index] === obj.properties

//better solution
function checkForCommonItems2(arr1, arr2){
    //loop through first array and create object where properties === items in the array
    let map = {};
    arr1.forEach((item)=>{
        if(!map[item]){
            map[item] = true;
        }
    });
    
    //loop through second array and check if item in second array exists on created object
    for(let i = 0; i < arr2.length; i++){
        if(map[arr2[i]]){
            return true;
        }
    }
    return false;
}

console.log(checkForCommonItems2(array1, array2));
console.log(checkForCommonItems2(array1, array3));
//This approach is better than the first example because there is no nested for loop
//O(a+b) time complexity
//O(a) space complexity

//we did not prevent errors in this function

//more readable version
function checkForCommonItems3(arr1, arr2){
   return arr1.some(item => arr2.includes(item));
}

console.log(checkForCommonItems3(array1, array2));
console.log(checkForCommonItems3(array1, array3));

//Google interview answer in JS
// Naive
function hasPairWithSum(arr, sum){
    var len = arr.length;
    for(var i =0; i<len-1; i++){
       for(var j = i+1;j<len; j++){
          if (arr[i] + arr[j] === sum)
              return true;
       }
    }
  
    return false;
  }
  
  // Better
  function hasPairWithSum2(arr, sum){
    const mySet = new Set();
    const len = arr.length;
    for (let i = 0; i < len; i++){
      if (mySet.has(arr[i])) {
        return true;
      }
      mySet.add(sum - arr[i]);
    }
    return false;
  }
  
  hasPairWithSum2([6,4,3,2,1,7], 9)