

const content = document.querySelector('.content');

//grid
const grid = document.createElement('div');
grid.classList.add('grid16');
content.appendChild(grid);

// UI
const uiElements = document.createElement('div');
uiElements.classList.add('ui');
content.appendChild(uiElements);

//total grid squares (256 inital)
let x = 256;

//create divs for grid
for (i = 0; i <= x; i++) {
    const newDiv = document.createElement(`div`)
    newDiv.setAttribute("id", "sqr")
    newDiv.classList.add("x")
    grid.appendChild(newDiv);
}

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
Array.from(squares).forEach(function (squares) {
    squares.addEventListener('mousedown', firstClick);
    squares.addEventListener('mouseenter', drawOn);
});


// color picker
const userColor = `black`;
// canvas size changer (presets)

// erase (clear) drawing
const eraseButton = document.createElement('button');
eraseButton.classList.add('erase');
eraseButton.textContent = `Erase All`;
eraseButton.onclick = () => {
    document.querySelectorAll(`.x`).forEach(e => { e.classList.remove('xactive') });
}

uiElements.appendChild(eraseButton);


// page style

// save/send paste image??















