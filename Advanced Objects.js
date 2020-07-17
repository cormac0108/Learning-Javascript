

// Advanced Objects - use the videos as a reference. 

// reference type 
[] === []
[1] === [1]

// enter all these things in the console 
var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };
object1 === object2
object1 === object3
object1.value = 15;
object2.value 
object3.value
// objects are reference types in JS. A primitive type is defined by the programming language
// for example in JS we have undefined "hello" null false etc as primitives
// a reference type is created by the programmer.  creaing an array is just an object
// at the end of the day  so you are esentially creating a box that is a data structure


// context 
// context vs scope  - scope is created when it sees {} function ( ) {} example

function b ( ) {
    let a = 4;
}
console.log(a);   
// that is scope. og a wont work. 
// context tells you where we are within the object.  this is a keyword in javascript.
// "this" is quite a confusing thing in JS

console.log(this);
console.log(this === winbdow);
this.alert("hello");

// this - means what object or enviroment are we in right now? what object it is inside of. 
// whatever is to the left of the dot  . 

function a() {
    console.log(this);
}
a()
window.a()

const object4 = {
    a: function() {
    console.log(this);
    }
}
object4.a()



// instantiation
// instantiation is when you make a copy of an object and reuse the code. making instances
// or multile copies of an object  get used to the synthax.  the constructor function. 

class Player {
    constructor(name, type) {
        console.log(this);
        this.name = name;
        this.type = type;
    } 
    introduce () {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`)
    }
}

// we run a constructor to create all the properties and methods we want the player to have
// anytime we want to access a property in the constructor we use this.name for example
// extends is a JS keyword. anytime we extend something we also need to call the constructor
// function of the player  - this is the tricky part to understand. we run super(). so you
//  have access

class Wizard extends Player {
    constructor(name, type) {
        super(name, type)
    }
    play () {
        console.log(`Weee i am a ${this.type}`)
    }
}

// now here is where the power comes in ! 

const wizard1 = new Wizard("Shelly" , "Healer");
const wizard2 = new Wizard("Shawn" , "Dark Magic");

// lets use a console log to get a grasp. we get wizard. the "new" keyword tells us that
// we are creating a new wizard with two parameters. 


wizard1.introduce();
wizard2.play();
wizard1.play();