//10-->5--16

// let myLinkedList = {
//     head: {
//         value: 10, //data
//         next: { //pointer
//             value: 5,
//             next: {
//                 value: 16,
//                 next: null
//             }
//         }
//     }
// }

class LinkedList {
    constructor(value){
        this.head = {
            value: value,
            next: null
        }

        this.tail = this.head;
        this.length = 1;
    }

    append(value){
        const node = {
            value: value,
            next: null
        }
        
        this.head.next = node;
    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
console.log(myLinkedList);