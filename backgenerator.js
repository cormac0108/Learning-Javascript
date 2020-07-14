
// we are going to be making a background generator web page

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

// console.log(css);
// console.log(color1);
// console.log(color2);

// what do we want to happen? listen for an event. input.  the background is in the body tag

// color1.addEventListener("input", function () {
//     console.log(color1.value);
// })

// color2.addEventListener("input", function () {
//     console.log(color2.value);
// })

// body.style.background = "red";
// console.log(body);

// now lets make it change 

// color1.addEventListener("input", function () {
//     body.style.background = 
//         "linear-gradient(to right, "
//         + color1.value
//         +", "
//         + color2.value
//         + ")";
// })

// do the same for the second color picker

// color2.addEventListener("input", function () {
//     body.style.background = 
//         "linear-gradient(to right, "
//         + color1.value
//         +", "
//         + color2.value
//         + ")";
// })

// we just copy and pasted code. remember DRY.So make a function. 

// function setGradient () {
//     body.style.background = 
//     "linear-gradient(to right, "
//     + color1.value
//     +", "
//     + color2.value
//     + ")";

// }


function setGradient () {
    body.style.background = 
    "linear-gradient(to right, "
    + color1.value
    +", "
    + color2.value
    + ")";
    
    css.textContent = body.style.background + ";";

}

// the second parameter gets called automatically with the event so 
// we dont need to call the function. we get nothing otherwise. We want the function
// to be called every time the input is selected

// color1.addEventListener("input", setGradient());

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

// .innerHTML
// .createTextNode
// .textContent  -   also you can do oninput="setGradient()" attribute in HTML
// these are different methods .texrt content can be used for css. as follows. 

