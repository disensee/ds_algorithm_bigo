const strings = ['a', 'b', 'c', 'd'];
//                0    1    2    3
//32 bit system
//4*4 = 16 bytes of storage

//push: add item to end of array -- O(1)****can be O(n) if memory needs to be reallocated
strings.push('e');

console.log(strings);

//pop: remove last item from end of array -- O(1)
strings.pop();
strings.pop();

console.log(strings);

//unshift: add item to beginning of array -- O(n), has to go through array to shift everything
strings.unshift('x');

console.log(strings);

//splice: add or delete item(s) at specified index -- O(n/2)=>O(n)
strings.splice(2, 0, 'alien');

console.log(strings);

/*
=================================================================Static vs. Dynamic arrays============================================================================
static arrays are fixed in size
dynamic arrays allow us to copy array and reallocate memory in order to expand/add new items
*/