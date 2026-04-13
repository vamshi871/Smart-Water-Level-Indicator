let lowLevel = 200;
let mediumLevel = 400;
let highLevel = 600;

let slider = document.getElementById("slider");
let valueDisplay = document.getElementById("value");

slider.addEventListener("input", updateLevel);

function updateLevel() {
    let value = slider.value;
    valueDisplay.innerText = value;

    let green = document.getElementById("green");
    let yellow = document.getElementById("yellow");
    let red = document.getElementById("red");
    let status = document.getElementById("status");

    // Reset LEDs
    green.classList.remove("active-green");
    yellow.classList.remove("active-yellow");
    red.classList.remove("active-red");

    if (value < lowLevel) {
        green.classList.add("active-green");
        status.innerText = "Status: LOW";
    } 
    else if (value >= lowLevel && value < mediumLevel) {
        yellow.classList.add("active-yellow");
        status.innerText = "Status: MEDIUM";
    } 
    else if (value >= mediumLevel && value < highLevel) {
        red.classList.add("active-red");
        status.innerText = "Status: HIGH";
    } 
    else {
        red.classList.add("active-red");
        status.innerText = "Status: FULL - ALERT!";
        playBuzzer();
    }
}

// Buzzer
