function makeGrid(height = 50, width = 50) {
    let squareSizeHeight = 700 / height;
    let squareSizeWidth = 700 / width;
    
    const container = document.querySelector('.container')
    container.replaceChildren();
    for (let i = 0; i < width; i++){
        const column = document.createElement('div')
        column.className = 'column';
        for (let j = 1; j <= height; j++){
            let cell = document.createElement('div');
            cell.className = 'gridsquare';
            cell.style.height = `${squareSizeHeight}px`
            cell.style.width = `${squareSizeWidth}px`
            column.appendChild(cell)
        }
        container.appendChild(column);
    }
}
function changeColor() {
    const gridSquare = document.querySelectorAll(".gridsquare")
    
    let mouseDown = false;
    gridSquare.forEach((square) => {
        square.addEventListener('mousedown', () => {
            mouseDown = true;
        });
        square.addEventListener('mouseup', () => {
            mouseDown = false; 
        });
        square.addEventListener('mousemove', () => {
            const rgbButton = document.querySelector(".rgb");
            const eraserButton = document.querySelector(".eraser")
            const dropDown = document.getElementById("colors")

            if (mouseDown) {
                if (eraserButton.innerText == "ON") {
                    square.style.backgroundColor = "white";
                }
                else if (rgbButton.innerText == "ON") {
                    square.style.backgroundColor = randomRGB();
                }
                else {
                    square.style.backgroundColor = dropDown.value;
                }
            }
        });
    });
}
function changeSize() {
    let width = Number(prompt("How many pixels in width?"));
    let height = Number(prompt("How many pixels in height?"));
    
    if (width > 100 || height > 100){
        return alert("Please enter numbers only no bigger than 100.");
    }
    makeGrid(height, width)
    changeColor()
}
function randomRGB(){
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    return `rgb(${r},${g},${b})`;
}
function rgbOnOrOff() {
    const bool = document.querySelector(".rgb");
    if (bool.innerText == "OFF") {
        bool.innerText = "ON";
    } else {
        bool.innerText = "OFF";
    }
}
function erase() {
    const bool = document.querySelector(".eraser");
    if (bool.innerText == "OFF") {
        bool.innerText = "ON";
    } else {
        bool.innerText = "OFF";
    }
}
function etchASketch() {
    makeGrid()
    changeColor()
    const btn = document.querySelector(".changeSize");
    btn.addEventListener("click", changeSize); 
    
    const rgbButton = document.querySelector(".rgbBtn");
    rgbButton.addEventListener("click", rgbOnOrOff)

    const eraserButton = document.querySelector(".eraserBtn");
    eraserButton.addEventListener("click", erase)

    const clearButton = document.querySelector(".reset");
    clearButton.addEventListener("click", etchASketch)
}
etchASketch()