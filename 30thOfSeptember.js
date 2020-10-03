// 30th of september

// var button = document.getElementsByTagName("button")[0]
// var button = document.getElementById("userinput");
// var ul = document.querySelectorAll("ul")

// button.addEventListener("click", function () {
//     var li = document.createElement("li");
//     li.appendChild(document.createTextNode("testing"));
// })

// button.addEventListener("mouseleave", function () {
//     console.log("CLICK!!!");

// })

// 1st of october. keycodes. DRY - make your code exstensible. Cache queries to save power.

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
//caching the queries for the browser

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);


// 2nd of october - lets make a background generator. 
// input type and css linear gradient. we want it to be interactive. 
// document.queryselector is a class selector. listen to an event. input. 

/* DOM manipulation. JQuery library that solves that problem.  $(document).ready(function()) ....
but Jquery made the code very imperative which was an issue. imperative means you have to tell
the code exactly whatto do line by line. this can result in the pyramid of doom. 
 then came more libraries that made javascript more
fun and easier to work with.  React is a great library it is declarative. 
Developer funcamentals V: accessing the DOM.  Minimize the amount of back-end requests that
we make, makes our website more performant. Minimize theh amount of DOM manipulation needed
that is why React was created. The flash painting rendering tab on the dev tools. 

Lets learn about the concept of Scope. Variable access. 03 10 2020 . rot scope - window object.
the last check is always the root scope (window) , also the child scope of a function. A naming 
conflict causes us to loose access to a variable in the root scope. */

//Root Scope (window)
var fun = 5;

function funFunction() {
  //child scope
  var fun ="Helloooo"; 
  console.log(1, fun);
}

function funerFunction () {
  //child scope
  var fun = "Bye";
  console.log(2, fun);
}

function funestFunction() {
  //child scope
  fun = "hahaha";
  console.log(3, fun);
}

console.log("window", fun);
funFunction()
funerFunction()
funestFunction()
//call the functions

// the scope within each function. 
/*  Advanced control flow. switch and ternary operator. switch is good if we have alot 
of else ifs. the switch statement.  default: gives a default else value. */

// condition? expr1 : expr2;

//ternary operators
function isUserValid(bool) {
  return bool;
}

var answer = isUserValid(true) ? "You may enter" : "Access Denied"

function isUserValidAgain(bool) {
  return bool;
}
const answerAgain = isUserValidAgain(true)? "hello user" : "Access Denied"
//basically saying is uservalif true? iff so return "hello user" else return "access denied"

var automatedAnswer = 
  "Your account # is " + (isUserValid(false) ? "1234" : "not available")

let otherAnswer = "your account no. is" + (isUserValid(true) ? "12345" : "access deniied"); 

function condition() {
  if (isUserValid(true)) {
    return "You may Enter";
  } else {
    return "Access Denied!";
  }
}

var answer2 = condition();

// the trnary operator is great for if else. nice one line. 
// next is the Switch Statement. Break breaks out of the statement. 

function moveCommand(direction) {
  var whatHappens;
  switch(direction) {
    case "forward":
      whatHappens = "you encounter A monster";
      break;
    case "back":
      whatHappens = "you encounter A monster";
      break;
    case "right":
      whatHappens = "you fall off a cliff";
      break;
    case "left":
      whatHappens = "you run into a troll";
      break;
    default: 
      whatHappens = "please enter a valid direction";
      
  }
  return whatHappens;
}
//now log these on the console. 
window.moveCommand("forward");
window.moveCommand("back");
window.moveCommand("left");
window.moveCommand("right");
window.moveCommand(1234553); // will return the default. 
// if we say break the program goes out of the switch statement. 

function babals (direction) {
  var whatHappens;
  switch(direction) {
    case "forward":
      whatHappens = "babals is cool"
      break;
    default: 
      whatHappens = "hello"

  }
  return whatHappens;
}

window.babals("forward");

var answer = isUserValid(true) ? "you are logged in" : "access denied";

// ES5 and ES6   3rd of october
// libraries are peices of code. ECMA international. Use babel. 
// es5 and es6 what the industry is using right now. with let variable in a function it creates 
// a new scope. unlike var. Dont use var. with const you cant reassign to the variable. 

//destructuring.

//Object properties. 

//template strings. add dynamically. default arguments. 

// a Symbol. is special. create completely unique types. 

// arrow functions () => {}  short hand form. 

// write better cleaner code. 

//ECMA international. ECMAScript === Javascript
// babel 
const a = (x,z) => x+z; // returning one value you can one line it
const b = (a,b) => a*b;


//let + const 

const player = "bobby";
let experience = 100;
let wizardLevel = false; // check how the scope changes when we use var instead. 
// var wizardLevel = true;

if (experience > 90) {
  let wizardLevel = true;
  console.log("inside", wizardLevel);
}

console.log("outside", wizardLevel)

const obj = {
  player: "bobby",
  experience: 100,
  wizardLevel: false
}

// one way of assigning properties
const player = obj.player;
const experience = obj.experience;
let wizardLevel = obj.wizardLevel;

//this does the same thing. Destructuring
const {player, experience} = obj;
const {player, experience, wizardLevel} = obj;

const name = "Jon Snow"

// this allows dynamic properties
const obj2 = {
  [name]: "hello",
  [1 + 2]: "hi hi"
}

const obj100 = {
  [100+10]: "how do",
  [name]: "how are you?"
}

// Object Properties 
const a = "Simon"
const b = true;
const c = {};

const obj = {
  a:a,
  b:b,
  c:c
}

//this will do the same thing. which is faster. 
const obj = {a , b ,c};
const obj3 = { a, b, c};

// Template strings 

const name = "Sally";
const age = 33;
const animal = "horse";

const greeting = "hello" + name + "you seem to be doing" + age + "!";
// the back ticks allow us to dynamically add stuff with ${} which is cool
const greetingBest = `Hello ${name} i hope your time ${age} is like a ${animal}, you only 
look about ${age-10}`

// add this to the console. within the back ticks. add dynamically using the dollar sign. 
// and expressions 

// default arguments
function greet( name = " ", age = 30, animal = "cat") {
  return `Hello ${name} you seem only ${age-10}, and are a ${animal}`
}
function how (name="tommy") {
  return `Hello ${name} you are ${100 * 2}`
}
// if the arguments have no value they will go to and use  the default arguments for the fuction. 

// Symbol. (data type)

let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');
let sym4 = Symbool("bannana");

sym1 
sym2
sym3
sym === sym3 // equals to false because symbol ccreates a unique type 

// arrow functions. shorthand form

function add (a, b) {
  return a + b;
}

//you get the same thing and it looks cleaner. gt familiar with the syntax. 
const add2 = (a,b) => a+b;  // if its one line we can do this
const add = (a,b ) => {
  return a + b;
}

const multiply = (a, b) => a *b;
const divide = (a,b) => {
  return a/b; 
  
}
const age2 = 150;
const name2 = "Juan";
let greeting = ` Hello ${name2} it is nice to meet you! ${age2 - 100 + 30} `

function heartyGreeting ( name="Mick", age = 100) {
  return `Hello ${name} you are ${age}`
}

// Next up is advanced functions 