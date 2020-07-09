
// we are now looking at objects. in javascript we have two types of data structures
// 1. arrays and 2. objects.   objects store properties and values. whereas arrays store index numbers
// and values. 

var user = {
    name: "John",
    age: 34,
    hobby: "Soccer",
    isMarried: false,
    spells: ["abrakadabra" , "shazam" ,]
};

user.spells[1];
user.spells


// add an itemn to an Object..  you can also have a user (object) inside of an array
user.favoriteFood = "spinach";
user.isMarried = true;


var list = ["apple", "bannana", "orange"];

var list2 = [
    {
        username: "andy",
        password: "secret",
    },
    {
        username: "jess",
        password: "123",
    },
];

list2[0].password;
// so that is how you access things in objects. and how you acess objects in arrays


var user = {
    name: "John",
    age: 34,
    hobby: "Soccer",
    isMarried: false,
    spells: ["abrakadabra" , "shazam" ,],
    shout: function() {
        console.log("Ahhh!");
    }
};

user.shout();
// this is called a method. A function inside of an object is called a method.
//  you can add a function to an object. just like if we did list.pop() pop is a method of list.
// console is an object thats why console.log() works . here are some examples. 

console.error("ahhh");
console.info("hello");

// you can make lists and objects that are empty!   null is a javascript type 5.. 
// null means that there is nothing in this object. a null object is emptyObj, completely empty.
user2 = { }
list = []

var emptyObj = {}

var nullObj = null ;
emptyObj
nullObj

nullObj.name = "Andy";
// this will throw an error, you cant set property of an object with null value. this can be important.

emptyObj.name = "Andy"; 
// this will Work, the property of name and the value of "Andy" will be added to your object

// 09 07 Javascript objects practice. simplified Facebook

var facebookObject = {
    username: "jim",
    password:"epiphany",
}

var users = [{
    username: "jim",
    password:"epiphany",
}, {
    username: "jenna",
    password:"epiphany2",
},]


users[0].username;

var database = [ facebookObject , ]

var newsfeed = [{
    username: "jim",
    timeline:"epiphany bali",
}, {
    username: "jenna",
    timeline:"Mark Zuck",
}, {
    username: "jabenenna",
    timeline:"Mark Zuck is admirable",
},]

newsfeed[1].timeline;


var database = [
    {
        username: "andrei",
        password: "supersecret"
    }
];

var newsFeed = [
    {
        username: "Bobby",
        timeline: "So tired of all this learning!"
    },
    {
        username: "jen",
        timeline: "i love javascript!"

    }
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function signIn(user, pass) {
    if ( user === database[0].username &&
        pass === database[0].password) {
            console.log(newsFeed);
        } else {
            alert("Sorry , wrong username and password!");
        }
        
}

signIn(userNamePrompt, passwordPrompt);
// well done you just built a basic facebook!  
// quick terminology recap:

// function declaration
function newFunction () {

}
// function expression
var newFunction = function () {} ;
// anonymous function
var newFunction = function nameblah () {} ;
// named function expression

// expression
1+3;
var a = 2;
return true;

// calling or invoking a function
alert();
newFunction(param1 , param2);

// assign a variable
var a = true;

// method vs function

function thisIsAFunction ( {

})

var obj = {
    thisIsAMethod: function () {

    }
}

thisIsAFunction()
obj.thisIsAMethod()

// next we will learn about loops. wev covered straight coding. conditionals (if else, else if),
// now lets learn about looping. the for loop look weird at first but youll get used to it.
// i is common to be used in a loop, it stands for index. var i = 0 ; end of expression
// means the variable i is being assigned tot he value of 0 . i < todos.length; i++)
//  means if i is less than the length of the list todo the +1 to the value of the variable i
//  i++ means increment the variable i by 1. as long as i is less than 5 the add 1 to i
// todos.length would = to 5 because there is 5 items in the todos array. 
// .length tells us how many items are in the list.    




var todos = [ 
    "clean room", 
    "brush teeth",
    "exercise",
    "study javascript", 
    "eat healthy",
];

todos.length
"hellloooo".length

for (var i=0; i < todos.length; i++) {
    console.log(todos[1])
}

for (var i=0; i < todos.length; i++) {
    console.log(todos[i])
}

for (var i=0; i < todos.length; i++) {
    console.log(todos[i] + "!" );
}
todos

// clean room now = clean room + ! mark

for (var i = 0; i < todos.length; i++) {
    todos[i] = todos[i] + "!";
}

for (var i = 0; i < todos.length; i++) {
    todos[i].pop();
}

// this will throw and error. .pop() is an array method. todos[i].pop(); is not a function?
// why because  we are saying clean room .pop and thats a string. instead wed do this:

for (var i = 0; i < todos.length; i++) {
    todos.pop();
}



// this one will stop half way through because our todos list length changed due to pop. heres how to stop this.

var todosLength = todos.length;

for (var i = 0; i < todosLength; i++) {
    todos.pop();
}

