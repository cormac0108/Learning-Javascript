//Solve these problems:

//#1 Create a one line function that adds adds two parameters
const sum = (a,b) => a + b;

//Closure: What does the last line return?
const addTo = x => y => x + y
var addToTen = addTo(10)
addToTen(3)

13

//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1)

31


//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)
add5(12)

// you are giving the a value of 5 then you are giving the b function a value of 12
// so it returns 17

//Composing: What does the last line return?
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10)

// returns 16

//What are the two elements of a pure function?

// 1. functional purity. deterministic - the input always returns the same value. 
// 2. avoiding side effects - make your fuctions deterministic, they always return the same value 
// no matter what

1. Deterministic --> always produces the same results given the same inputs
2. No Side Effects -->  It does not depend on any state, or data, change during a program’s execution. 
It must only depend on its input elements.
