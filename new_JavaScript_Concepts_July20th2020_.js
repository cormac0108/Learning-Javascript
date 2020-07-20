
// Debugging
//complex functions? figure out what is does. The steps you would use. To understand.
// 1. Read it.  

const flattened = [[0,1], [2,3], [4, 5]].reduce(
    (a , b) => a.concat(b), []); 

    //read over it and see what you can recognize. 

    const flattened = [[0,1], [2,3], [4, 5]].reduce(
        (accumulator , b) => accumulator.concat(b), []); 


        
    const flattened = [[0,1], [2,3], [4, 5]].reduce(
        (accumulator , array) => accumulator.concat(array), []); 

        //concat attaches the contents of an array into whatever is being concated

        const flattened = [[0,1], [2,3], [4, 5]].reduce(
            (accumulator , array) => {
                console.log("array", array);
                console.log("accumulator", accumulator);

                return accumulator.concat(array)
            }, []); 

//we have 3 loopings.  - we are just usoing the concat function to flatten the arrays.
 
//also instead of using console.log  we can use something called debugger. its a js keyword. 
// when the browser js engine encounters debugger then it just stops. now you can go through
// step by step

const flattened = [[0,1], [2,3], [4, 5]].reduce(
    (accumulator , array) => {
        debugger;

        return accumulator.concat(array)
    }, []); 

    // it also tells us variables in scope. -context (this value). you can keep stepping through. 
    //with time and using console and debugger you will be able to understand what a 
    //complex function does. 

//How does Javascript Work?  re-visit this video. 
// what is a program?   -allocate memory   -read parse and execute commands. 
// javascript engine in chrome.  is called the V8 engine. The JS engine consists of two parts
// the Memory Heap -now this is where the memory allocation happens. 
// and the Call Stack -  this is where your code is read and executed. 

// allocate memory const a = 1;      issue?  a memory leak. global variables. limited amount of
// memory. memory leaks happen when we have unused memory just laying around. 

const a = 1;
const b = 10;
const c = 100;


// call stack - what reads and executes our commands.

console.log("1");
console.log("2");
console.log("3");

const one = () => {
    const two = () => {
        console.log("4");
    } 
    two();
}

console.log("4")
two()
one()

// CALL STACK - it stacks up and then executes the commands (it pops them) from the stack
// it runs the commands and then it removes them from the call stack.

// Javascript is a single-threaded language that can be non-blocking? 
// single-threaded meaning it executes one command at a time. one call stack. it can only
//do one thing at a time. Call Stack - meaning first in last out. SOme other languages , 
//can have multiple call stacks - this is called "multi-threaded." with mutli-threaded 
//languages you can get what are known as deadlocks. 

// synchronous means code is executed line by line. one by one. 
// stack overflow?  when a stack is overflowing. when the call stack has no more space. 

//recursion - a function that calls itself. (looping over and over.) cause a stack overflow?

function foo() {
    foo()
}

foo()
// run this in your console and you will get a stack overflow. this is something called recursion
// foo runs foo again 

//running code on a single thread can be easier. synchronous - line 1 then line 2 the etc...

// the JS engine which is the v8 engine in chrome has a memory heap and a call stack. 
// what if there is a line holding up in the call stack. synchronous can get slow. 

console.log("1");
setTimeout(() => {
    console.log("2");
}, 2000)
console.log("3");

//so we need something more.  Asynchronous programming? set timeout allows us to set a time out
// for the command. its like we just skiped a whole step. JS run-time enviroment.

// set time out is part of the web API

// CALL STACK

setTimeout(), 2000
// WEB API -  set timout is saying wait 2 seconds. 

callback()
// CALLBACK QUEUE

//EVENT LOOP

console.log("1");
setTimeout(() => {
    console.log("2");
}, 0)
console.log("3");


//for example loading tweets. synchronouus - calling the teacher. vs asynchronous
// leaving a text so you can do stuff in between

// remember event listeners? 
element.addEventListener('click', () => {
    console.log('click')
})

// callback function which console logs click



// the concept of modules?   confusing. 
// inline script tags - remember in html? this could get messy if there is alot of code. 
// code reusability. pollution of the global nameSpace. you dont want to pollute the
// window object with all these different names. 

//2nd attempt next is script tags - src =" " , outside of the html. lack of dependency resolution.
// what if our other source file hasnt loaded yet? - and it still pollutes the global name space

// 3rd attempt is IIFE - -Immediately Invoked Function Expression. It wraps a function in
// brackets ()   that reduced the global namespace pollution problem. There is still an issue 
// the file order. lack of dependency reolution.

// next we have Browserify. its a module bundler. it runs before you put the website online
// it bundles all your script files into a single file. aslong as you use the common JS 
// synthax it will know what to do and then create a one script file. BOOM! 
// which will usually be called something like <script src="bundle.js"></script>
// so all our scripts will just be on one massive file. so run it thorugh Browserify 
// before you deploy - and put your app out to the public. 

// a module system.  kind of like building blocks. importing and exporting modules. 
// destructuring {add} remember?  import / export.  in ES6 , ES6 + Webpack2 

ES6 + Webpack2

//js1 
export const add = {a, b} => a +b;
// or
export default function add () {
    return a + b;
}


// js2 
import { add } from './add';
//or 
import add from './add'; 

//see how everything is clean. Browsers arent supporting everything yet - that is what webpack
// is for.. it bundles your exports and imports. webpack has a config file. 
// it bundles everything (our modules) - similar to how browserify did. We will be using
// web pack alot when we are working with react .. it creates a nice "bundle.js" file
// keeping everything clean and simple. Good job! 
// we just covered some really hard JS concepts and topics. So well done! 