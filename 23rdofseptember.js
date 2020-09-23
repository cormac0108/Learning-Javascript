// Javascript Introduction revision
// keep the actions between the like types. log in the console. 

10 + "34" //"1034"
10 - "3" // 7  (you cant subtract a string.)
"hello" - "bye" //NaN - Not a Number
// Booleans - true or false. Binary - 1 or 0
true 
false 
5 > 10 //false
3 > 2 //true 

// javascript comparisons 
3 === 3 // === to compare two things
3 !== 3 // gives false because 3 is equal to 3 
5 >= 4 // true because 5 is greater than or equal to 4
50 < 100 // true 
100 >= 200 // false 100 is not greater than or equal to 200

// VARIABLES - to catch and hold values. 
// use let and const and var only for legacy purposes. 
/* variables have a few rules: it needs to start with a letter.
 it cant start with a symbol. It can end in a number. it can start with a $ or _ 
 We use camel case e.g . var firstName = "dog"  prompt() asks for something and returns. 
 asks the user for input
 then store those values inside of variables. Number() to change a string to a number  */

 "These pretzels are making me thirsty" + "!";
 "These pretzels are making me thirsty" + "!";
 var george = "These pretzels are making me thirsty" + "!";
 george
 var camelCase = "good";
 var firstNumber = prompt("pleas provide the first number")
 prompt() // prompts the user fr an input. store that value in a variable. 
 var first = prompt("enter first number");
 var second = prompt("enter second number");
 first
 second
 Number(first) // turns a string into a number
 var sum = Number(first) + Number(second);
 sum

//calculator
var first = prompt("enter first number");
var second = prompt ("enter second number");
var sum = Number(first) + Number(second);
alert(sum);
alert("the sum is" + sum);

var a = true;
a = "hello"; //reassigning a new value to var a. 
a // gives "hello"

var b; // gives undefined
b 
var password; // if no value has been assigned we will get undefined. 



