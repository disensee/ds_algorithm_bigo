class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
  }
  
  class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    peek(){//returns first element
        return this.first;
    }
    enqueue(value){//adds element to end of queue
        const newNode = new Node(value);
        if(this.isEmpty()){
            this.first = newNode;
            this.last = newNode;
        }else{
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;
    }
    dequeue(){//removes first element
        if(this.isEmpty()){
            return null;
        }

        if(this.first === this.last){
            this.last = null;
        }
        let holdingPointer = this.first; //hold first item and return if we want to keep dequeued item in memory
        this.first = this.first.next;
        this.length--;
        return this;
    }
    isEmpty(){
        return this.first === null;
    }
  }
  
const myQueue = new Queue();
console.log(myQueue.peek());
console.log(myQueue.isEmpty());

myQueue.enqueue('Joy');
myQueue.enqueue('Matt');
myQueue.enqueue('Pavel');
myQueue.enqueue('Samir');

console.log(myQueue);
console.log(myQueue.isEmpty());

myQueue.dequeue();
console.log(myQueue.peek());

myQueue.dequeue();
console.log(myQueue.peek());

myQueue.dequeue();
console.log(myQueue.peek());

myQueue.dequeue();
console.log(myQueue);
console.log(myQueue.isEmpty());