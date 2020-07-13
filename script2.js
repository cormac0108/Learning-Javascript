var button = document.getElementsByTagName("button")[0];

// button.addEventListener("click", function() {
//     console.log("Click!!!");
// })

// button.addEventListener("mouseenter", function() {
//     console.log("Click!!!");
// })

// button.addEventListener("mouseleave", function() {
//     console.log("Click!!!");
// })

var button = document.getElementById("enter");
var input = document.getElementById("userinput");

// button.addEventListener("click", function() {
//     console.log("Click is working!!!");
// })

var ul = document.querySelector("ul");


// we create an Element. this element needs text inside it so what you do in document is 
// you do createTextNode to create text for your element that you have created. 
// put whatever you wanr inside of it. then you want it to appear in you vp so,
// we get in this case our unordered list and we use the appendChild method to add out li to it

// button.addEventListener("click", function() {
//     var li = document.createElement("li");
//     li.appendChild(document.createTextNode("testing"));
//     ul.appendChild(li);
// })

// to get the value from an input we do input.value
//
//  button.addEventListener("click", function() {
//     var li = document.createElement("li");
//     li.appendChild(document.createTextNode(input.value));
//     ul.appendChild(li);
// })

// make it so the person has to type something. when adding to the list. 

// button.addEventListener("click", function() {
//    if(input.value.length > 0) {
//         var li = document.createElement("li");
//         li.appendChild(document.createTextNode(input.value));
//         ul.appendChild(li);
//    }   
// })

// lets make some functions to do DRY. 

function inputLength () {
    return input.value.length;
}

function createListElement () {
   var li = document.createElement("li");
   li.appendChild(document.createTextNode(input.value));
   ul.appendChild(li);
   input.value = "";
}

function addListAfterClick () {
    if(inputLength() > 0 ) {
        createListElement ();
    }   
}

// function addListAfterKeypress () {
//     function(event) {
//         if(inputLength() > 0 && event.keyCode === 13) {
//             createListElement ();
//         }   
//     }
 
// }

function addListAfterKeypress (event) {
    if(inputLength() > 0 && event.keyCode === 13) {
            createListElement ();
          
    }
 
}



// now make it so that they have to type something new again

// button.addEventListener("click", function() {
//     if(inputLength() > 0) {
//         createListElement ();
//     }   
//  })

//  now lets listen for the enter key. Keypress. key character codes. js char codes. key code: 13



// input.addEventListener("keypress", function(event) {
//     console.log(event);
//     if(input.value.length > 0) {
//          var li = document.createElement("li");
//          li.appendChild(document.createTextNode(input.value));
//          ul.appendChild(li);
//          input.value = "";
//     }   
//  })

 input.addEventListener("keypress", function(event) {
    if(inputLength() > 0 && event.keyCode === 13) {
        createListElement ();
    }   
 })


 button.addEventListener("click", function() {
    if(inputLength() > 0) {
        createListElement ();
    }   
 })


 button.addEventListener("click", addListAfterClick)
 input.addEventListener("keypress", addListAfterKeypress)


