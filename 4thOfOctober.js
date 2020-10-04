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

 
 console.log( "forEach",double); // what will double give use?  map , filter ,reduce. the 3 best methods. 
 // use these 3 for looping.
 
const mapArray = array.map((num) => {
    return num *2;
})

console.log("Map",mapArray);

//cleaner when having one param and one return value
const mapArray = array.map(num => num * 2);
console.log( 'map' , mapArray);


//filter 
const filterArray = array.filter(num => num === 5);

console.log("filter" , filterArray);

 //reduce is really powerful we can do filtering and mapping with reduce. 
 //we want to write pure simple functions.   accumulator stores the previous value

 const reduceArray = array.reduce((accumulator, num) => {
     return accumulator + num
 } , 0); // 0 meaning our accumulator value will start from 0

 console.log("reduce", reduceArray)

 const reduceArray = array.reduce((acc, num) => {
     return acc + num;
 }, 10);

 console.log(reduceArray, "reduce");

 const mapArray = array.map((num) => {
     return num * 2;
 })

 console.log("map", mapArray);
 // i am content. Gratitude. 