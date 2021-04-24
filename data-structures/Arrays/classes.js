//reference type
var object1 = {value: 10};
var object2 = object1;
var object3 = {value: 10};

console.log(object1 === object2); //true
console.log(object1.value === object3.value); //true
console.log(object1 === object3); //false

console.log([]===[]);//false

//context vs scope
function b(){
    let a = 4;
}
//a is inaccessible outside of this function. a has block scope

console.log(this); //window obj

const object4 = {
    a: function(){
        console.log(this);
    }
}
object4.a(); //logs object 4

//instantiation 
class Player {
    constructor(name, type){
        console.log(this);
        this.name = name;
        this.type = type;
    }

    introduce(){
        console.log(`Hi I am ${this.name}, I am a ${this.type}`);
    }
}

class Wizard extends Player{
    constructor(name, type){
        super(name, type);
    }
    play(){
        console.log(`WEEEEEE I'm a ${this.type}`);
    }
}

const wizard1 = new Wizard('Shelly', 'Healer'); //instantiating an object from the wizard class
const wizard2 = new Wizard('Sean', 'Dark Magic');

wizard1.play();
wizard1.introduce();