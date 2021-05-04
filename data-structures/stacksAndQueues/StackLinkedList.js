class Node {
    constructor(value){
      this.value = value;
      this.next = null;
    }
  }
  
  class Stack {
    constructor(){
      this.top = null;
      this.bottom = null;
      this.length = 0;
    }
    peek() {
      return this.top;
    }
    push(value){
      const newNode = new Node(value);
      if(this.isEmpty()){
        this.top = newNode;
        this.bottom = newNode;
      }else{
        const holdingPointer = this.top;
        this.top = newNode;
        this.top.next = holdingPointer;
      }

      this.length++;
      return this;
    }
    pop(){
      if(this.isEmpty()){
        return null;
      }
      if(this.top === this.bottom){
        this.bottom = null;
      }
      const holdingPointer = this.top;
      this.top = this.top.next;
      this.length--;
      return holdingPointer;
    }
    isEmpty(){
        return this.bottom === null;
    }
  }
  
  const myStack = new Stack();
  myStack.push('google.com');
  myStack.push('udemy.com');
  myStack.push('discord.com');
  console.log(myStack);
  myStack.pop();
  console.log(myStack);
  console.log(myStack.peek());
  // console.log(myStack.peek());
  // myStack.pop();
  // console.log(myStack);
  // const emptyStack = new Stack();
  // console.log(myStack.isEmpty());
  // console.log(emptyStack.isEmpty());