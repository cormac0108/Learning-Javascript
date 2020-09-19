// change everything below to the newer Javascript!

// let + const
var a = 'test';
var b = true;
var c = 789;
a = 'test2';

let a = "test"
const b = true;
const c = 789;


// Destructuring
var person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

var firstName = person.firstName;
var lastName = person.lastName;
var age = person.age;
var eyeColor = person.eyeColor;

const person2 = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"

}

let {firstName, lastName,age,eyeColor} = person2;

const guyname = "simon";
const guyMarriage = true;
const status = {};

const thisGUy = {
    guyname,
    guyMarriage,
    status,
}


// Object properties
var a = 'test';
var b = true;
var c = 789;

var okObj = {
  a: a,
  b: b,
  c: c
};

const a1 = 'test';
const b1 = true;
const c1 = 789;

const okObj2 = { a1, b1, c1,}


// Template strings
var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";

const firstName1 = "Jeremiah";
const age1 = 100; 

const messageBetter = `hello  ${firstName1} you look like you are ${age1 - 20}  years old!  `  


// default arguments
// default age to 10;
function isValidAge(age) {
    return age
}

function isValidAgeGood (age=18) {
    return age
}
// sets the default value of the age to 18 in case no argument is entered. 


// Symbol
// Create a symbol: "This is my first Symbol"
let sym1 = Symbol("This is my first symbol");

// Arrow functions
function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}




// default arguments
// default age to 10;
const isValidAge = (age = 10) => age;
const isValidAgeOlder = (age1 = 100) => age1;

// Symbol
// Create a symbol: "This is my first Symbol"
const sym = Symbol('This is my first Symbol');

// Arrow functions
const whereAmI = (username, location) => {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}