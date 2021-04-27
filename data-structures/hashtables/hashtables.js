//Hash Table Big O

let user = {
    age: 54,
    name: 'Kylie',
    magic: true,
    scream: function(){
        console.log('ahhhhhh!');
    }
}

console.log(user.age);//Lookup O(1)
user.spell = 'abra kadabra' //Insert O(1)
console.log(user);
user.scream(); //O(1)

//hash collision link https://www.cs.usfca.edu/~galles/visualization/OpenHash.html

//When collision occurs, operations slow down to O(n/k)=>O(n)

//Javascript Maps/Sets
const a = new Map(); //<---- Allows you to save any data type as a key. Maintains insertion order.
const b = new Set();//<---Only stores keys