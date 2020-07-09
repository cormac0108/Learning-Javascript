var dogBones = 100;
var first = prompt("enter first number");
var second = prompt("enter second number");

// Number(first) is a function that makes your string a number
alert ("hi there!");

var sum = Number(first) + Number(second);
alert(sum);

var a = true;

var a = "hello";
// you can reassign a value to a variable

var password;
// would give undefined if no value was assigned, for example.

// Make a calculator! 
var firstNumber = prompt("Enter your first number")
var secondNumber = prompt("Enter your second number")
var operation = prompt("enter an operation")
var sum = Number(firstNumber) + Number(secondNumber)
var minus = Number(firstNumber) - Number(secondNumber)

alert(sum)


if operation === "+";
    alert(sum);
else operation === "-";
    alert(minus)


// Javascript Types:
// 1. Number 
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null
// <!-- 6. Symbol (new in ECMAScript 6) -->
// 7. Object

// javascript conditionals practice o7 07

if (name === "Billy") {
    alert("hi Billy!")
} else { 
    alert("hmmm i don't know you")
}

name = "Susy"
name = "Billy"

if (name === "Billy") {
    alert("hi Billy!")
} else if (name === "Susy") { 
    alert("hi Susy!")
} else {
    alert("hmmm i don't know you")
}

name = "Billy"
name = "Susy"

// Javascript logical operators:
// && = and
// || = or
// ! = not

// || or operator
if (name === "Billy" || name === "Ann") {
    alert("hi Billy or Ann!")
}
// &&  the and operator
if (name === "Billy" && name === "Ann") {
    alert("hi Billy or Ann!")
}
// you will get undefined becase a variable name cant have two values at the same time. you can do this though
if (firstName === "Bob" && lastName === "Smith") {
    alert("hi Bob Smith!")
}
var firstName = "Bob"
var lastName = "Smith"

// ! the not operator
!true  would be false
!false would be true

if (!(name === "Bob")) {
    alert ("hi Billy!")
}
name = "Billy"

// Make a keyless car challenge
var Age = prompt("Enter Your Age Please!")
if (Number(Age) < 18 ) {
    alert("Sorry your too young for this activity mate!")
} else if (Number(Age) === 18) {
    alert("Congratulations on your first year of driving. Enjoy the ride!") 
} else if(Number(Age) > 18) {
    alert("Powering On. Enjoy the ride!")
}



// 08 07 javascript practice. Make an even better keyless Car!


function checkDriverAge() {
    prompt("please enter your age");
}

var age2 = function checkDriverAge2() {
    prompt ("please enter your age")
}

// 1. function declaration
function checkDriverAge() {
	var age = prompt("What is your age?");
	if (Number(age) < 18) {
		alert("Sorry, you are too yound to drive this car. Powering off");
	} else if (Number(age) > 18) {
		alert("Powering On. Enjoy the ride!");
	} else if (Number(age) === 18) {
		alert("Congratulations on your first year of driving. Enjoy the ride!");
	}
}

// 2. function expression
var checkDriverAge2 = function() {
	var age = prompt("What is your age?");
	if (Number(age) < 18) {
		alert("Sorry, you are too yound to drive this car. Powering off");
	} else if (Number(age) > 18) {
		alert("Powering On. Enjoy the ride!");
	} else if (Number(age) === 18) {
		alert("Congratulations on your first year of driving. Enjoy the ride!");
	}
}

// bonus console.log way
function checkDriverAge(age) {
	if (Number(age) < 18) {
		return "Sorry, you are too yound to drive this car. Powering off";
	} else if (Number(age) > 18) {
		return "Powering On. Enjoy the ride!";
	} else if (Number(age) === 18) {
		return "Congratulations on your first year of driving. Enjoy the ride!";
	}
}

// an introduction to data structures in javascript. first Arrays. square brackets []. a way to organize information

var list = ["tiger" , "horse" , "bonobo", "deer"] ; 
console.log(list[1]);  
console.log(list[0]);  

var numbers = [1,2,3,4];
var booleans = [true,false,true];
var functionList = [function apple() {
	console.log("Apple") ;
}]
functionList();

var mixedList = ["apples" , 3, undefined, true, function apple() {
	console.log("Apples")
}]
// this is not advised though. you want to try and keep all the same data types in the one array
// you can have an array inside of an array! check this out. when we look at the numbers
// for example 0 1 2 3 they are called index in the arrays. EEach item has an index number

var list2 = [ 
	["tiger" , "Bear", "cat", "bird", "mouse"] 
];

console.log(list2[0][2]);

list2.shift();
list2.pop();
list2.push("macaques");
list2.concat(["bee", "deer"]);

list2.sort();
// notice how this only sorts the original array not the new one we made from the concat method
// you need to store the new concated array in, assign it to its own variable. Capture the value of the new array. 
// so there are some methods that create a new list such as concat and there are methods 
// that just modify the list.

var myList = [ "cat" , "bear", "elephant", "bee", "deer"];

var myNewList = myList.concat(["Monkey"]);
myList
myNewList

// exercises for arrays 08 07
var array = ["Banana", "Apples", "Oranges", "Blueberries"];

array.shift();
array.sort();
array.push("Kiwi");
array.shift();
array.reverse();
console.log(array)

var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

console.log(array2[1][1][0]);