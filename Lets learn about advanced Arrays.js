

// Lets learn about Advanced Arrays

// do you remember how the for each loop works? 
// for each says im going to loop over these elements and its not changing them. 
// so we need to create a new varuable to store these new values. well call it double

const array = [ 1, 2, 10, 16];

const double = []

// const newArray = array.forEach((num) => {
//     num * 2;
    
// });

// but we want to store things So

const newArray = array.forEach((num) => {
    double.push(num * 2) ;
    
});

console.log(newArray);
console.log(double);

// lets talk about the methods:  Map, filter , reduce

// with map we always need to return something. each things gets returned and added to the array

// const mapArray = array.map((num) => {
//     return num * 2;
// })

// console.log(mapArray);

// we refresh the browser because we are using const and the brwser says the var has already
//  been declared


// console.log( "map",mapArray);
console.log( "For each",double);

// there is a diff between map and for each whenever you want to do a simple loop on an array
//  you want to use map instead of for each. Map has a restriction it expects a return element.
// map transforms the array. it creates a new array 
// for each does a whole bunch of actions based on the array ... remember side effects? 
// with map we have to return, so best practice it is a pure function. we want to write pure functions.
// so that was map 

// we can make it cleaner because we are only doing 1 param and one line

const mapArray = array.map(num => num * 2);

console.log( "map",mapArray);
console.log(mapArray);

// this does the same thing. its just alot cleaner looking


// next lets look at - filter
// it iterates through the array and asks is each value greater then 5? 
// if so it adds it into filterArray array. since its a single line we can do shortform.

// const filterArray = array.filter((num) => {
//     return num > 5
// });

const filterArray = array.filter(num => num > 5);

// you can put any condition you want in here. for example num === "hello"

// const filterArray = array.filter(num => num === "hello");

// if it returns false it wont go into the array. if it returns true then it will 

console.log( "filter",filterArray);

// next is reduce  - reduce is really powerful. it take s accumulator.
// accumulator is something where you can store the info of something that 
// happens in the function's body.  accumulator remembers what was there previously. 
// we have a second parameter after the function where we can set the value of where we want 
// the accumulator to start from 

// const filterArray = array.filter(num => num > 5);

// console.log("reduce", reduceArray);

// 0 sets our acc's initial value to 0 . with this well get 29. lets try with 5
// this will give us 34

const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num
} , 5);

console.log("reduce", reduceArray);

// remember these 3 pure methods. they always return values - map, filter, reduce