/*=====================================Exercise: Reverse a String==================================================*/

//My Solution
function reverse(str){
    if(!str || str.length < 2 || typeof str !== 'string'){
        return false;
    }
    return str.split('').reverse().join('');
}

//simplified version
const reverse2 = str => str.split('').reverse().join('');

//Andrei's solution
function reverse3(str){
    //check input
    if(!str || str.length < 2 || typeof str !== 'string'){
        return 'hmmm that is not good';
    }

    //insert each char of string in reverse order into backwards array
    const backwards = [];
    const totalItems = str.length - 1;
    for(let i = totalItems; i >= 0; i--){
        backwards.push(str[i]);
    }

    //return backwards array as string
    return backwards.join('');
}

console.log(reverse("hi my name is dylan"));
console.log(reverse2('hi my name is dylan'));

/*=====================================Exercise: Merge Sorted Arrays==================================================*/
//Given 2 arrays that are sorted, merge the two arrays into one larger sorted array

//My Solution
function mergeSortedArrays(arr1, arr2){
    //Check inputs
    if(!Array.isArray(arr1) || !Array.isArray(arr2) || arr1.some(item => isNaN(item)) || arr2.some(item => isNaN(item))){
        return "Invalid inputs";
    }
    if(arr1.length === 0){
        return arr2;
    }
    if(arr2.length === 0){
        return arr1;
    }
    //merge two arrays
    const mergedArrays = [...arr1, ...arr2];
    return mergedArrays.sort((a, b) => a-b);
}

//Andrei's solution
function mergeSortedArrays2(arr1, arr2){
    const mergedArray = [];
    let i = 1
    let j = 1;
    let arr1Item = arr1[0];
    let arr2Item = arr2[0];
    
    //Check inputs
    if(arr1.length === 0){
        return arr2;
    }
    if(arr2.length === 0){
        return arr1;
    }

    while(arr1Item || arr2Item){
        
        if(!arr2Item || arr1Item < arr2Item){
            mergedArray.push(arr1Item);
            arr1Item = arr1[i];
            i++;
        }else{
            mergedArray.push(arr2Item);
            arr2Item = arr2[j];
            j++;
        }
    }

    return mergedArray;
}

console.log(mergeSortedArrays([0,3,4,31], [3,4,6,30]));
console.log(mergeSortedArrays(['a','b','c',31], ['a',4,6,30]));
console.log(mergeSortedArrays2([0,3,4,31], [3,4,6,30]));


//Returns [0,3,3,4,4,6,30,31]