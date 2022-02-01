function makeGrid(height=50, width=50) {
    let squareSizeHeight = 700 / height -2;
    let squareSizeWidth = 700 / width - 2;
    
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
    gridSquare.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = "grey";
        });
    });
}
function resetCanvas() {
    let width = Number(prompt("How many squares in width?"));
    let height = Number(prompt("How many squares in height?"));
    if (width > 100 || height > 100) {
        return alert("Please enter numbers only no bigger than 100.");
    }
    makeGrid(height, width)
    changeColor()
}
function etchASketch() {
    makeGrid()
    changeColor()
    let btn = document.querySelector(".reset");
    btn.addEventListener("click", resetCanvas); 
}
etchASketch()
