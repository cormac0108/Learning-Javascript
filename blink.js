

// blinking html elements code. thanks to CS50

function blink() {
    let body = document.querySelector("body");
    if(body.style.visibility === "hidden") {
        body.style.visibility = "visible";
    } 
    else {
        body.style.visibility = "hidden";
    }
}

// blink every 500ms
window.setInterval(blink, 500);
// param 1 = function param 2 = how often should we run this?

// window.setinterval lets you make an interval for something to be run every few ms e.g 