// now for  ES5 and ES6  there is nothing static about being a web dev.
// Features are supported thanks to Babel. Babel lets us use 
// new features in JS right away. It changes it into a version of JS that all browsers know.

// no new scope is created inside the curly brackets because this isnt a function 
// let + const  to declare a variable. Dont use variable use let. const is even cooler. 
// you cant reassign a constant. it will make sure it always has the same value. 
// use const if your using a variable that doesnt change use let when your using a 
// variable that you will reassign something to. with const you can change
//  the properties of the object you just cant reassign the variable. no more var. 
// we let we created a wizrd level with scope only inside the if statement . 
// with var no new scope is created within the curly brackets because the if is not a function
// think of let as the new way of creating variables.

const player = 'bobby'
let experience = 100;
let wizardLevel = false;

// if ( experience > 90) {
//     let wizardLevel =true;
// }

if ( experience > 90) {
    let wizardLevel =true;
    console.log('inside', wizardLevel);
}
console.log('outside', wizardLevel)





const obj = {
    player: 'bobby',
    experience: 100,
    wizardLevel: false,
}

obj.wizardLevel = true;

// put these in the console. 
// destructuring


const player = obj.player;
const experience = obj.experience;
let wizardLevel = obj.wizardLevel;

// this synthax does the same thing as the first two lines over here. much cleaner

const {player, experience} = obj;
let { wizardLevel} = obj;

// another cool thing. object properties. dynamic property values.

const name = "john snow";

const obj2 = {
    [name]: 'hello',
    ['ray' + 'smith']: "hi hi",
    [1 + 4]: "winner!",
}

// even cooler

const a = "simon";
const b = "true";
const c = {};

// const obj3 = {
//     a:a,
//     b:b,
//     c:c,
// }

// you can do this instead, this will come in useful in the reacts section
const obj3 = {
    a,
    b,
    c,
}


// more function. Template strings 

// const age =34;
// const name = "sally";
// const pet = "horse";


// const greeting = "hello" + name + "you seem to be doing" + greeting + "!"
// we can do this instead. ` `using back ticks, we can add dynamically. 
// const greetingBest = `hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have.`;

// greetingBest

// default arguments . the way you made the parameters you gave them default arguments.

function greet (name='', age=30, pet='cat') {
    return `hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have.`;
}

// try these in console 
greet();
greet("john",50,"monkey");


// another JS type is a symbol.  symbols are used because they create 
// this completely unique type. usually used as an identifier for object properties.


let sym1 = Symbol();
let sym2 = Symbol("foo");
let sym3 = Symbol("foo");
sym1
sym2 
sym3
sym2 === sym3
// this will give you false. enter these into the console. 


// arrow functions - shorthand form. its alot easier to write. (if you have 1 return)

function add (a,b) {
    return a + b;
}

const add2 = (a,b) => a + b;

add(4,2);
add2(4,2);

// now we have covered everything in the section outline , hurray! 
