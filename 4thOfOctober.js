// 04 10 2020 
// Advanced Arrays

const { memory } = require("console");

// with map you always have a return element. 
// very important , we want to keep things acting in an expected way. 
/* with arrow function if we only have one parameter we dont need the () 
 for example  const mapArray = array.map(num => num*2);   this is so clean
 filter  .filter(condition) iterating through the array an seeing if an item matches our 
 condition for example array.filter((num) => {num === 5}; , or we can (num => num === 5);
 map, filter, reduce : these 3 methods are very useful and they are pure. always returns a value 
 and there are no sideffects.   Also lets remember how the forEach works. for each number in the 
 array. we need to store it somewhere.  */

 const array = [1, 2, 10, 16];
 const double = [];
 const newArray = array.forEach((num) => {
     double.push(num * 2);
 })

 const array = [2,3,4,5];
 const triple = []
 const newArray = array.forEach((num) => {
     triple.push(num * 3);
 })
 console.log(newArray, "forEach")
 console.log(triple, "forEach")

 const array2 = [2,3,4,5,10];
 const double = []
 const newArray2 = array.forEach((num) => {
     double.push(num * 2);
 });
 console.log(double);

 
 console.log( "forEach",double); // what will double give use?  map , filter ,reduce. the 3 best methods. 
 // use these 3 for looping.
 
const mapArray = array.map((num) => {
    return num *2;
})
const array3 = [2,4,60];
const arrayMapper = array3.map((num) => {
    return num * 2;
})
console.log("map", arrayMapper)

console.log("Map",mapArray);

const arrayMap = array.map( (num) => {
    return num * 2;
})

const mapArray = array.map((num) => {
    return num * 2; 
})
console.log(mapArray)  // map creates a new array with the function. 

//cleaner when having one param and one return value
const mapArray = array.map(num => num * 2);
const mapArray = array.map(num => num*2);
console.log( 'map' , mapArray);
const mapArray = array.map((num) => {
    return num * 2;
})
console.log(mapArray)
const reducerArray = array.reduce ((acc, num) => {
    return acc + num;
}, 10);

const fileter = array.filter((num) => { 
    num === 5
})
const filter4 = array.filter( num => num === 10); // filters the array for the condition


//filter 
const filterArray = array.filter(num => num === 5);
const filteredArray = array.filter((num) => num === 10);
const arrayFiltered = array.filter( (num) => num !== 10);
const arrayFilter = array.filter((num) => num >= 2);

console.log("filter" , filterArray);

 //reduce is really powerful we can do filtering and mapping with reduce. 
 //we want to write pure simple functions.   accumulator stores the previous value

 const reduceArray = array.reduce((accumulator, num) => {
     return accumulator + num
 } , 0); // 0 meaning our accumulator value will start from 0

const reducedArray = array.reduce((acc,num) => {
    return acc + num;
}, 10);
console.log(reducedArray, "starting from 10")

 console.log("reduce", reduceArray)

 const reduceArray = array.reduce((acc, num) => {
     return acc + num;
 }, 10);

 console.log(reduceArray, "reduce");

 const mapArray = array.map((num) => {
     return num * 2;
 })
 let arrayMap3 = array.map ((num) => {
     return num*3
 })
 console.log(arrayMap3);

 console.log("map", mapArray);
 // i am content. Gratitude. 

 const filteredArray = array.filter(num => num === 10);
 console.log(filteredArray, "filtered array. ")
 const filter2Array = array.filter((num) => {
     return num === 100;
 })
 const filter100 = array.filter((num) => num === 100 || num > 4); 
 // num equalt to 100 or greater than 4

 console.log('filter', filter2Array)

 // Next up is advanced Objects ... reference type
 //reference type
 var number1 = 1
 var number2 = 1 // how objects are stored in memory. 
 var object1 = {value : 10}; //Box1;
 var object2 = object1;
 var object3 = {value : 10};//Box3;
 object1 === object2 // gives true
 object1 === object3 // gives false. because of how they are stored in memory. 
 //objects are reference types in javascript.  js types are primitive types. defined by the 
 // programming language. 
 // context
 // instantiation
 const mapped = array.map(num => num*2);
 const filtered = array.filter((num) => num === 100);
 const reduced = array.reduce((acc, num) => {
     return acc + num
 }, 0);
 console.log(mapped, filtered, reduced)
const reduced = array.reduce((acc,num) => {
    return num + acc
}, 0);
console.log(reduced)
const methodFiltered = array.filter((num) => num > 4);
console.log(methodFiltered)
const mapped = array.map(num => num * 2);
console.log(mapped)

let namesArray = ["pet", "Michael", "Jeremy"]

const mapperd = namesArray.map((num) => {
    return num + "Hello Michael"
})

const reducer = namesArray.reduce((acc,num) => {
    return num + acc + "dodo";
}, 10)

const filterMethod = namesArray.filter((i) => i > 10 || i === "Michael")

 // 05 10 2020  ADVANCED OBJECTS
 //reference types (creted by the programmer.)
 // arrays are just objects at the end of the day. 
 /* this means what is to the left of the .
 the this keyword in javascript. reference type. also context vs scope. scope is created
 when we create a function. a function is its own universe.  this refers to what object 
 it is inside of. to create a new value for this you create iit inside of an object. Objects are
 hard to understand but they give us a lot of power. constext vs scope,  and instantiation 
 when we want to make copies of an object. we use class. get used to constructor and calling super. 
 to access the constructor, when exctending from another class. Instantiation - when you make 
 a copy of an object and you reuse the code. */

 // reference type
 var object1 = {value: 10};
 var object2 = object1;
 var object3 = {value: 10};

 var object6 = object1;
 var objectDifferent = {value:10};
 var object2 = object1
 var object3 = {value:10}

 var object1 = {value: 10}
 var object2 = object1;
 var object3 = {value:10}



 // context vs scope - uderstanding this.  enter these on the console. 

 console.log(this);
 console.log(this === window);
 this.alert("hello"); // this refers to what object it is inside of. it has to be what 
 // object we are isnide of right now
 function a () {
     console.log(this);
 }
a()
window.a()


 //to create a new this
const object4 = {
    a: function () {
        console.log(this)
    }
}

consst object4 = {
    a: function() {
        console.log(this)
    }
}
 object4.a()

 const object5 = {
     a: function() {
         console.log(this)
     }
 }
 object5.a()

 // instantiation. copies of an object. remember to call super. get used to this syntax. 
 // with classes we start witha  capital letter.  
 class Player {
     constructor (name, type){
         console.log('player', this);
         this.name = name;
         this.type = type;
     }
     introduce() {
         console.log(`Hello I am ${this.name}, i'm a ${this.type}!`)
         // remember template strings? , use this. with them
     }
 }

 class Player { 
     constructor(name,type) {

        console.log('player', this)
        this.name = name;
        this.type = type;

     }
     introduce() {
        console.log(`Hello i am ${this.name } i am a ${this.type}`)
        // using template strings
     }
         
     

 }

 class Wizard extends Player {
     constructor(name,type) {
         super(name,type);
         console.log('wizard' , this)
     }
     runnner() {
         console.log(`${this.name} is a ${this.type} now run`)
     }
 }
 const wizard1 = new Wizard('Jim', 'Snake')
 const wizard2 = new Player('Jim', 'Limbo')
 wizard1.introduce()

 class Wizard extends Player {
     constructor(name, type) {
         super(name, type) // remember to call super()
         console.log('wizard', this)
     }
     play() {
         console.log(`Weeee I am a ${this.type}`);
         // we are adding the play() function 
     }
 }

 const wizard1 = new Wizard('Sheila' , 'Tank'); // using the new keyword
 const wizard2 = new Wizard('John', 'Runner');
 const wizard3 = new Wizard('Jeremy', 'Backslapper');

 //enter these on the console.
 wizard1.play()
 wizard1.introduce()
 wizard2.play()
 // you have to call super to access the other classes consructor. 
 // new keyword says make an instance of wizard. Of the object. class - we will make copies of this. 

 class Player2 {
     constructor(name, type) {
         console.log(this, "player")
         this.name = name;
         this.type = type;
     }
     hello() {
         console.log(`HI i am a ${this.name}, i exist as a ${this.type}`)
     }
 }

 class Animal extends Player2 {
     constructor(name, type) {
         super(name, type) 
         console.log("Animal", this)
     }
     roar(){
         console.log(`roar i am a ${this.name} also i am a ${this.type}`)
     }
 }

 const animal1 = new Animal ("James", "Tiger");
 const animal2 = new Animal ("Tony", "Shark");
 animal1.hello()
 animal2.roar()

 class Player3 {
     constructor(name, type, level, age) {
         console.log("player", this)
         this.name = name;
         this.type = type;
         this.level = level;
         this.age = age;
     }
     batter () {
         console.log(`Hello i am ${this.name} i am a good ${this.type} also i am 
         level ${this.level}`);
     }
     age () {
         console.log(`my age is ${this.age}`)
     }
 }

 class Player {
     constructor (name, type) {
         console.log("player", this) ;
         this.type = type;
         this.name = name;

     }
     play() {
         console.log(`${this.name} is the winner for ${this.type}`)
     }
 }

 const monster = new Player ("james", "horse")
 monster.play()
 monster.play()

 class Monster extends Player3 {
     constructor (name, type,level, age) {
         super(name, type, level, age) 
         console.log("Monster", this);
     }
     run () {
         console.log(`i can run as fast as ${this.type} on a level ${this.level}`)
     }
 }

const monster1 = new Monster ("Jeremy", "Tank", 100, 84);
const monster2 = new Monster ("John", "Turtle", 45, 274);

const monster3 = new Monster("james", "teacher", 45,100);
monster.run()
monster2.run()
monster1.batter()

class Player {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    play() {
        console.log(`this guy can play likea  ${this.name} for many ${this.type}`)
    }
}

class DOg extends Player {
    constructor(name,type) {
        super(name, type) 
            console.log("Dog", this)
        

    }
    backflip() {
        console.log(`${this.name} can run a marathon`)
    }
}
const bigDog = new DOg("ben", "jamaica")

class Player {
    constructor(name,type) {
        this.type = type;
        this.name = name;
    }
    playerBalls(){
        console.log(`i am a ${this.name} and i ${this.type}`)
    }
}

const player20 = new Player ("michael", "Balls" )

// Advanced Javascript concepts
// 07 10 2020
// pass by Value vs Pass By Reference. Primitive types are immutable. 
// with primitive types we copy the value, they dont have any connection. Pass by value. 

// Objects are different. Objects in javascript are pass by reference. We dont copy the values. 
// this is where the objecy is in memory. 
// cloning an array is wasy sing concat. Arrays are basically objects. 
// with object.assign we are able to clone the object. or using th espread operator {...obj}
// what if we want to deep clone? an object witin an array. 
// remember pass by reference with objects.  to deep clone we use JSON. superclone can do a deep clone. 
// the idea of pass by reference, shallow cloning and deep cloning


var a = 5;
var b = a;
b++;
console.log(b);
console.log(a);

let obj1 = {name : 'Yao', password: '12345'}
let obj2 = obj1;

obj2.password = 'easypeasy'

console.log(obj1);
console.log(obj2);  // with objects we have pass by reference. (the same location (shelf ) in 
// memory)

var c = [1,2,3,4,5] ;
var d = c;
d.push(17978);
console.log(c)

// if we want to clone an array we do [].concat

var d = [].concat(c);
console.log(d)

let obj = {a: 'a', b: 'b', c: 'c'}
let obj2 = obj;
let clone = {...obj} // spread operator to copy the object

let clone = Object.assign({}, obj);
let clone2 = {...obj}  // spread operator. 
let obj3 = Object.assign({}, obj);

obj.c = 5;
console.log(obj)
console.log(clone)
console.log(clone2)

// what if we have an object inside of an object? Deep cloning

let obj = {
    a: 'a',
    b: 'b',
    c: {
        deep: 'try and copy me!',
    }
};
let obj = {
    a:"a",
    b:"b",
    c: {
        deep: "c",
    }
}
let superClone = JSON.parsify(JSON.stringify(obj))

let clone = Object.assign({}, obj);
let clone2 = {...obj}
let clone = Object.assign({}, obj);

const obj = {
    a: 'a',
    b: 'b'
}

let clone = Object.assign(obj)
let clone2 = {...obj}
let clone3 = {...obj}

let d = [].concat(c)
let a = [].concat(d)
const a = 10;
const b = 100;
const c = "haha"
let obj = {a , b ,c }

let superClone = JSON.parse(JSON.stringify(obj)) // be careful with deep cloning

obj.c.deep = 'hahaha';

console.log(obj)
console.log(clone)
console.log(clone2)
console.log(superClone)

// next up is type coercion. 

var a = 5
var b = a;
b++
console.log(a , b)

let c = [1,2,3,4,5]
var d = [].concat(c);
d.push(19889);
var d = [].concat(c);
console.log(d)
const a = [1,2,3,4]
let d = c;
let d = [].concat(c); // to clone an array

let c = [1,2,3,4]
let d = [].concat(c);
console.log(d)
d.push(18979)



console.log(d)

// 08 10 2020

var a = 5;
var b = a;
b++;
console.log(b, a)
var a =5
var b = a;
console.log(a , b);
// pass by value

// cloning an array
let array = [1,2,3,4]
let d = array
d.push(1874)
console.log(d);

let obj = {
    a: 'a',
    b: 'b',
    c: {
        deep: 'deep clone me'
    }
}

let superClone = JSON.parse(JSON.stringify(obj)) // clones the object on all layers

obj.c.deep = 'hahah'
console.log(obj)
//pass by reference
console.log(superClone)
//type coercion..  operants. conversion. always use === dont use ==. ,
// type coercion can be confusing. NaN === Nan , is false. -0 and +0 in js. 
if (1) {
    console.log("yes")
}
if (0) {
    console.log(5);
}
Object.is(-0,+0)
Object.is(-0,+0)
//ES7. .includes() and the **
"hellloo".includes("h"); // returns true
const pets = ["cat", "dog", "horse"];
const house = ["big"];
pets.includes("dog")
pets.includes("bird")
const square = (x) => x**2;
const cube = (y) => y**3;
const square = (x) => x**2;
const cube = (y) => y**3;
"hellooo ".includes("h") // will return true
const pets = ["dog", "cat"]
pets.includes("dog");
const square = (x) => {
    return x**2;
}
console.log(square(2));
pets.includes("horse");

// es8 09 10 2020

.padStart()
.padEnd()
"password".padStart(20)
"password".padEnd(10)

"Turtle".padStart(10);
"Turtle".padEnd(10);

// when we have alot of parameters
const fun = ( 
    a,
    b,
    c,
    d,
) => {
    console.log(a);
}
fun(1,2,3,4);

//these two are very useful
Object.values
Object.entries 
 

 // organinzing parameters, lists

const fun = (
    a,
    b,
    c,
) => {
    console.log(a)
}
fun("banana", 1);

// 10 10 2020 ES8 --- learning and using that knowledge. Muscle memory repetition. 


array.includes("haha");
const funner = (
    a,
    b,
    c,
) => {
    return "I lover you " + a;
}
funner("name", )

function jumanji (name="james", age=10) {
    console.log(`you are ${name} and you are ${age}`)
}
jumanji()
jumanji("jamie", 100)

// the big excitment for the new function Async Await

Object.values
Object.entries
Object.keys

Object.values 
Object.entries // these are new use em with a forEach if you want

let obj = {
    username0: "Mr Grinch",
    username1: "James",
}

Object.keys(obj).forEach((key, index) => {
    console.log(key, obj[key]);

})

Object.values(obj).forEach(value => {
    console.log(value);
})

Object.entries(obj).forEach(value => {
    console.log(value)
})

Object.entries(obj).forEach((value) => {
    console.log(value)
})

Object.entries(obj).map(value => {
    return value[1] + value[0].replace('username', '') // replacing th eusername with blank
})

Async Await

Object.entries(obj).map((value) => {
    return value[1] + value[0].replace('username', ' ');
})