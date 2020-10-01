// 30th of september

// var button = document.getElementsByTagName("button")[0]
// var button = document.getElementById("userinput");
// var ul = document.querySelectorAll("ul")

// button.addEventListener("click", function () {
//     var li = document.createElement("li");
//     li.appendChild(document.createTextNode("testing"));
// })

// button.addEventListener("mouseleave", function () {
//     console.log("CLICK!!!");

// })

// 1st of october. keycodes. DRY - make your code exstensible. Cache queries to save power.

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
//caching the queries for the browser

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
