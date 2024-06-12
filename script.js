var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var color3 = document.querySelector(".color3");
var color1Value = document.getElementById("color1-value");
var color2Value = document.getElementById("color2-value");
var color3Value = document.getElementById("color3-value");
var body = document.getElementById("gradient");
var randomButton = document.getElementById("random");
var toggleThreeColor = document.getElementById("toggle-three-color");

function setGradient() {
    if (toggleThreeColor.checked) {
        body.style.background = 
        "linear-gradient(to right, " 
        + color1.value 
        + ", " 
        + color2.value 
        + ", " 
        + color3.value 
        + ")";
        color3Value.style.display = "inline";
        color3.style.display = "inline";
    } else {
        body.style.background = 
        "linear-gradient(to right, " 
        + color1.value 
        + ", " 
        + color2.value 
        + ")";
        color3Value.style.display = "none";
        color3.style.display = "none";
    }

    css.textContent = body.style.background + ";";
    color1Value.textContent = color1.value;
    color2Value.textContent = color2.value;
    if (toggleThreeColor.checked) {
        color3Value.textContent = color3.value;
    }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function setRandomColors() {
    color1.value = getRandomColor();
    color2.value = getRandomColor();
    if (toggleThreeColor.checked) {
        color3.value = getRandomColor();
    }
    setGradient();
}

// Set the initial gradient when the page loads
setGradient();

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
color3.addEventListener("input", setGradient);
randomButton.addEventListener("click", setRandomColors);
toggleThreeColor.addEventListener("change", setGradient);
