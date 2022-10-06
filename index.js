

const content = document.querySelector('.content');

let xy = 10;

// Grid container
const grid = document.createElement('div');
function newGridSettings(rowCol) {
    grid.classList.add(`gridArea`);
    grid.style.gridTemplateColumns = (`repeat(${rowCol}, ${500 / rowCol}px)`);
    grid.style.gridTemplateRows = (`repeat(${rowCol}, ${500 / rowCol}px)`);
}
newGridSettings(xy);
content.appendChild(grid);

// UI
const uiElements = document.createElement('div');
uiElements.classList.add('ui');
content.appendChild(uiElements);

// UI slider
let sizeSlider = document.createElement('input');
sizeSlider.type = "range";
sizeSlider.step = "1";
sizeSlider.min = 1;
sizeSlider.max = 100;
sizeSlider.classList.add('sizeSlider');
uiElements.appendChild(sizeSlider);

//grid squares
function createGrid(num) {
    for (i = 0; i <= num; i++) {
        const newDiv = document.createElement(`div`)
        newDiv.setAttribute("id", i);
        newDiv.classList.add("x");
        grid.appendChild(newDiv);
    }
}
createGrid(xy * xy);

//access grid squares
const squares = document.getElementsByClassName(`x`);

//mouse clicked or unclicked
let mouseClicked = false;
document.body.onmousedown = () => mouseClicked = true;
document.body.onmouseup = () => mouseClicked = false;


//draw when clicked
const firstClick = (e) => {
    e.target.setAttribute("class", "x xactive");
}
const drawOn = (e) => {
    if (mouseClicked == true) {
        e.target.setAttribute("class", "x xactive");
    }
}

//listeners for when to draw - array of grid squares
function gridToArray() {
    Array.from(squares).forEach(function (squares) {
        squares.addEventListener('mousedown', firstClick);
        squares.addEventListener('mouseenter', drawOn);
    });
}
gridToArray();

function removeGrid() {
    document.querySelectorAll(`.x`).forEach(e => { e.parentNode.removeChild(e) });
}

// erase (clear) drawing
const eraseButton = document.createElement('button');
eraseButton.classList.add('erase');
eraseButton.textContent = `Reset`;
eraseButton.onclick = () => {
    document.querySelectorAll(`.x`).forEach(e => { e.classList.remove('xactive') });
}
uiElements.appendChild(eraseButton);

//button change grid size test
const gridSizeButton = document.createElement('button');
gridSizeButton.classList.add('gridSizeButton');
gridSizeButton.textContent = `Resize`;


gridSizeButton.onclick = () => {
    removeGrid();
    newGridSettings(sizeSlider.value);
    createGrid(sizeSlider.value ** 2);
    gridToArray();
}





uiElements.appendChild(gridSizeButton);

