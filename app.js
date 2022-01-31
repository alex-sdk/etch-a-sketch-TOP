function makeGrid() {
    let width = 32;
    let height = 32;
    
    const container = document.querySelector('.container')
    for (let i = 0; i < width; i++){
        const column = document.createElement('div')
        column.className = 'column';
        for (let j = 1; j <= height; j++){
            let cell = document.createElement('div');
            cell.className = 'gridsquare';
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
function clearCanvas() {
    
}
makeGrid()
changeColor()