class Stack {
    constructor(){
        this.array = [];
    }
    peek() {
      return this.array[this.array.length - 1];
    }
    push(value){
        this.array.push(value);
        return this;
    }
    pop(){
      this.array.pop();
      return this;
    }
    isEmpty(){
        return this.array.length === 0;
    }
}
  
const myStack = new Stack();
myStack.push('google.com');
myStack.push('udemy.com');
myStack.push('discord.com');
console.log(myStack.peek());
console.log(myStack);
console.log(myStack.isEmpty());

myStack.pop();
myStack.pop();
myStack.pop();
console.log(myStack.isEmpty());
console.log(myStack);

