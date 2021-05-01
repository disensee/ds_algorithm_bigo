class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
class DoublyLinkedList {
    constructor(value){
        this.head = new Node(value);

        this.tail = this.head;
        this.length = 1;
    }

    append(value){
        const newNode = new Node(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;

        return this;
    }

    prepend(value){
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        
        return this;
    }

    insert(index, value){
        //Check params
        if(index === 0){
            return this.prepend(value);
        }
        if(index >= this.length) {
            return this.append(value);
        }
        
        const newNode = new Node(value);

        const leader = this.traverseToIndex(index-1);
        const follower = leader.next;

        leader.next = newNode;
        newNode.prev = leader;

        newNode.next = follower;
        follower.prev = newNode;

        this.length++;
        
        console.log(this);
        return this;
    }

    remove(index){
        if(isNaN(index) || index < 0){
            return false;
        }
        if(index === 0){
            this.head = this.head.next;
            this.head.prev = null;
            return this;
        }
        if(index >= this.length){
            index = this.length - 1;
        }

        const leader = this.traverseToIndex(index - 1);
        leader.next.next.prev = leader;
        leader.next = leader.next.next;
        this.length--;
        return this;
    }
      
    traverseToIndex(index) {
    //Check params
    if(isNaN(index)){
        return false;
    }
    let counter = 0;
    let currentNode = this.head;
    while(counter !== index){
        currentNode = currentNode.next;
        counter++;
    }
    return currentNode;
    }


    printList(){
        const array = [];
        let currentNode = this.head;
        while(currentNode !== null){
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(array);
    }
}

const myLinkedList = new DoublyLinkedList(2);
myLinkedList.append(3);
myLinkedList.prepend(1);

console.log(myLinkedList.insert(1, 4));
console.log(myLinkedList.remove(1));
myLinkedList.printList();