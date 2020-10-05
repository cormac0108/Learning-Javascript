// 04 10 2020 
// Advanced Arrays

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
 
