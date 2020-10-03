// 2nd of october - lets make a background generator.
// input type and css linear gradient. we want it to be interactive.
// document.queryselector is a class selector. listen to an event. input.
// everytime the input vlue changes we can do that.
//we want to change the backgriound color. body.style.background - to change background
// remember DRY,extract the function and make it cleaner.
// we can also use an oninput or onclick attribute in our html, same as the addeventlistener. But
// remember separation of concerns. use css.textContent to display the css code. on the browser.
// Reacthas extracted all this DOM manip out for us making it easier.

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
  body.style.background =
    "linear-gradient (to right, " + color1.value + ", " + color2.value + ")";

  css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
