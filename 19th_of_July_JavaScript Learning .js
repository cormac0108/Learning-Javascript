

// lets learn about ES10   2019  new features.
//flat is a method that we can use on arrays. if it had nested arrays. no more nested arrays.
// you can flatten different levels.  enter these in the console

.flat()

const array = [1,2,3,4,5]
array.flat()

const array2 = [1,[2,3],[4,5]]
array2.flat()

const array3 = [1,2,[3,4,[5]]]
array3.flat()
// you see that 5 was only flattened one level. wwe can tell flat how many layers to flatten
// the array by doing  .flat(2) for example would flatten the array 2 layers

array3.flat(2)

// how would you flatten the jurassic park array enough to let the t-rex loose? 
jurassicPark.flat(4); 
// you could also go with 50 because we have less than 50 nested arrays obviously
jurassicPark.flat(50); 
//cool trick to flatten to the utmost level. 

const entries = ['bob', 'sally',,,,,'louie']
entries.flat()

// flat function and the map method on an array.  the map function to it. 
// flatmap allows us to use the basic map function and flatten the array to a depth of 1
.flatMap()

const jurassicParkChaos = jurassicPark.flatMap(creature => creature + "T-rex");
jurassicParkChaos

const userEmail = '            eddtheeagle:gmail.com'
const userEmail2 = 'jimmydanger@gmail.com     '

userEmail.trimStart()
userEmail2.trimEnd()

console.log(userEmail.trimStart())
console.log(userEmail2.trimEnd())

// next is fromEntries  -  user profiles of a game?  .fromEntries()  is going to receive 
// an array  -  it creates an object. from the array.   check it in console
// back in ES8 Object.entries() allowed us to do the exact opposite thing. 
// it turns them back into an array list with string and number values .  ["hansel", 18]

userProfiles = [["commander Tom", 41 ] , ["DerekZLander", 47] , ["hansel", 18]]

Object.fromEntries(userProfiles);

const obj = Object.fromEntries(userProfiles);
Object.entries(obj)

// Object.fromEntries() makes our array into an object.  Object.entries() does the opposite

// next is the try and catch blck. It allows us to try a peice of code and then catch 
// any errors.   type coercion it will turn true into a string

try {
    true + "hi"
} catch {
    console.log ( " you messed up")
}

try {
    4 + 5
} catch {
    console.log ( " you messed up")
}

4+5

// what if we do it with undefined variable "bob" for example 

try {
    bob + "hi"
} catch {
    console.log ( " you messed up")
}

// we will get the console.log message, because it threw an error. you can optionally
// use the catch (error) {} parameter aswell to display the error. This is optional in ES10

try {
    bob + "hi"
} catch (error) {
    console.log ( " you messed up" + error)
}