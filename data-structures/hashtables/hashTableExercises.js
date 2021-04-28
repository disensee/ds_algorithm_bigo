//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//Find the first recurring number in the array
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

/*=======================================My Solution===========================================*/
function firstRecurringCharacter(arr){
    if(!Array.isArray(arr) || arr.length === 0 || arr.some((item)=>isNaN(item))){
        return "Invalid input!";
    }

    const map = {};
    for(let i = 0; i < arr.length; i++){
        let item = arr[i];

        if(!map[item]){
            map[item] = true;
        }else{
            return item;
        }
    }
    return undefined;
}

/*=======================================Andrei's Solution===========================================*/
//Naive approach
function firstRecurringCharacter2(array){ 
    for(let i = 0; i < array.length; i++){
        for(let j = i+1; j < array.length; j++){
            if(array[i] === array[j]){
                return array[i];
            }
        }
    }
    return undefined;
}//O(n^2)

//better approach
function firstRecurringCharacter3(input){
    let map = {};
    for(let i = 0; i < input.length; i++){
        if(map[input[i]] !== undefined){
            return input[i];
        }else{
            map[input[i]] = i;
        }
    }
    return undefined;
} //O(n)

console.log(firstRecurringCharacter([2,5,1,2,3,5,1,2,4]));
console.log(firstRecurringCharacter([2,1,1,2,3,5,1,2,4]));
console.log(firstRecurringCharacter([2,3,4,5]));
//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
console.log(firstRecurringCharacter([2,5,5,2,3,5,1,2,4]));
// return 5 because the pairs are before 2,2