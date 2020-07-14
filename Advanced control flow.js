// Advanced control flow.   14 07  the ternary operator. is this true? otherwise .... if false...
// condition ? expr1 : expr2;

function isUserValid (bool) {
    return bool;
}

var answer = isUserValid(true) ? "You may enter" : "Access Denied";
// if this is true then do this expression, if this is false then do this expression

var automatedAnswer = "Your account # is " + (isUserValid(false) ? "1234 " : "not available");

// these are basically doing the same thing

function condition() {
    if (isUserValid(true)) {
        return "you may enter";
    } else { 
        return "Acess denied";
    }
}

var answer2 = condition();

// its just that one way is more nice. (the ternary.)  next lets learn the switch statement.
//  switch, case, break  keywords. switch(variable) i want you to check whatever the variable is
// the switch statement is useful, when you have alot of conditions - instead of using if else. return whatHappens;
// break is just saying break out of the switch statement it then goes straight to return. 
// each JS conditional is good for its own case. if , else, else if, ternary operator, switch

function moveCommand(direction) {
    var whatHappens;
    switch(direction) {
        case "forward":
            whatHappens = "you encounter a dog";
            break;
        case "back":
            whatHappens = "you went home" ;
            break;
        case "right":
            whatHappens = "you found a horse" ;
            break;
        case "left":
            whatHappens = "you fell from a cliff top" ;
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}


// window.moveCommand("forward");   try these in the console. remember you window object? . 
