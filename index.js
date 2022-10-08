

const content = document.querySelector('.content');
const squares = document.getElementsByClassName(`x`);
const squaresColor = document.getElementsByClassName(`xactive`);

const grid = document.createElement('div');
const bg = document.createElement('div');
const gridContainer = document.createElement('div');
const uiElements = document.createElement('div');
const sizeSlider = document.createElement('input');
const eraseButton = document.createElement('button');
const randomButton = document.createElement('button');
const mosaicButton = document.createElement('button');

bg.classList.add('bg');
gridContainer.classList.add('gridContainer');
uiElements.classList.add('ui');
sizeSlider.classList.add('sizeSlider');
eraseButton.classList.add('erase');
randomButton.classList.add('random');
mosaicButton.classList.add('mosaic');
mosaicButton.setAttribute("id", "mosaic");



content.appendChild(bg);
bg.appendChild(gridContainer);
bg.appendChild(uiElements);
gridContainer.appendChild(grid);

uiElements.appendChild(sizeSlider);
uiElements.appendChild(eraseButton);
uiElements.appendChild(randomButton);
uiElements.appendChild(mosaicButton);



//initialize
let canvasWidth;
canvasSizePx();
console.log(canvasWidth);

let mosaicMode = false;
let userColor = randomColor();
const xy = 10;
newGridSettings(xy);
createGrid(xy * xy);

//slider
sizeSlider.type = "range";
sizeSlider.value = "10";
sizeSlider.step = "1";
sizeSlider.min = 1;
sizeSlider.max = 50;
sizeSlider.onchange = () => { newCanvas(); }

//erase btn
eraseButton.textContent = `Reset`;
eraseButton.onclick = () => { newCanvas(); }


//random btn
randomButton.innerText = `Random`;
randomButton.onclick = () => {
    mosaicMode = false;
    userColor = randomColor();
    mosaicToggle();
}

//mosaic btn
mosaicButton.innerText = `Mosaic`;
mosaicButton.onclick = () => {
    mosaicMode = !mosaicMode;
    mosaicToggle();
}

const mosaicToggle = () => {
    if (mosaicMode) { mosaicButton.classList.add('on') }
    else { mosaicButton.classList.remove('on') }
}



function randomColor() {
    let rgb = new Array;
    for (i = 0; i <= 2; i++) {
        rgb.push(Math.random() * 255);
    }
    let rgbToStr = `rgb(${rgb.toString()})`;
    return rgbToStr;
}

//new canvas
function newCanvas() {
    removeGrid();
    newGridSettings(sizeSlider.value);
    createGrid(sizeSlider.value ** 2);
    gridToArray();
}


//sqr size 

//setup grid
function canvasSizePx() {
    if (window.innerWidth <= 1280) { canvasWidth = 300; }
    else { canvasWidth = 450; }
}



window.onresize = () => {
    canvasSizePx();
    grid.style.gridTemplateColumns = (`repeat(${sizeSlider.value}, ${canvasWidth / sizeSlider.value}px)`);
    grid.style.gridTemplateRows = (`repeat(${sizeSlider.value}, ${canvasWidth / sizeSlider.value}px)`);
}

function newGridSettings(rowCol) {
    grid.classList.add(`gridArea`);
    grid.style.gridTemplateColumns = (`repeat(${rowCol}, ${canvasWidth / rowCol}px)`);
    grid.style.gridTemplateRows = (`repeat(${rowCol}, ${canvasWidth / rowCol}px)`);
}



//create grid
function createGrid(num) {
    for (i = 0; i <= num; i++) {
        const newDiv = document.createElement(`div`)
        newDiv.setAttribute("id", i);
        newDiv.classList.add("x");
        grid.appendChild(newDiv);
    }
}

//mouseclick check
let mouseClicked = false;
document.body.onmousedown = () => mouseClicked = true;
document.body.onmouseup = () => mouseClicked = false;

//mosaic mode
const colorCheck = () => {
    if (mosaicMode == true) { userColor = randomColor(); }
    return userColor;
}

//drawing
const firstClick = (e) => {
    e.target.setAttribute("class", "x xactive");
    e.target.style.backgroundColor = `${colorCheck()}`;
}
const drawOn = (e) => {
    if (mouseClicked == true) {
        e.target.setAttribute("class", "x xactive");
        e.target.style.backgroundColor = `${colorCheck()}`;
    }
}

//grid listeners
function gridToArray() {
    Array.from(squares).forEach(function (squares) {
        squares.addEventListener('mousedown', firstClick);
        squares.addEventListener('mouseenter', drawOn);
    });
}
gridToArray();

//remove grid
function removeGrid() {
    document.querySelectorAll(`.x`).forEach(e => { e.parentNode.removeChild(e) });
}



