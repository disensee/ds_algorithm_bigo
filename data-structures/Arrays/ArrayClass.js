class MyArray {
    constructor(){
        this.length = 0;
        this.data = {};
    }

    get(index){
        return this.data[index];
    }

    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    pop(){
        let lastItem = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        return lastItem;
    }

    delete(index){
        let item = this.data[index];
        this.shiftItems(index);
        return item;
    }

    shiftItems(index){
        for(let i = index; i < this.length-1; i++){
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
}

const newArray = new MyArray();
console.log(newArray);
console.log(newArray.get(0));
newArray.push('hi');
newArray.push('you');
console.log(newArray);
newArray.pop();
newArray.push('you');
newArray.push('!');
newArray.push('are');
newArray.push('nice');
newArray.delete(2);
newArray.delete(0);
console.log(newArray);