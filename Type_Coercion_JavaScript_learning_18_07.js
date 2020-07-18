
// Type coercion in Javascript. 
// this concept is quite frustrating :D  funky things. when the operants the thingsd to the
// left or the right of the operator are different types. JS engine converts into type. 

1 == '1'

// all languages have type coercion   JS has a heavy type coercion 
// try to coerce one into the same type.  always use === instead of ==

1 === '1'

if (1) {
    console.log(5)
}
if (0) {
    console.log(5)
}

// see - JS engine coerces 1 to true and 0 to false, because of machine code "on or off"
// it coerces 0 or 1 into a boolean.  with === things make sense. == is confusing as flip.
// so stick with ===    . Object.is  is interesting

-0 === +0  

Object.is(-0, +0);

// will get true. but they are technically different things in Javascript
// object.is works pretty much the same as the === except for +0 -0    also for NaN - its weird

NaN === NaN

// takeaway : use === instead of == because type coercion can be really tricky
// bugs are inebitible, do your best   even the mighty NetFlix has the odd few bugs