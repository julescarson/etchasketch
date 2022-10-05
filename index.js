const content = document.querySelector('.content');
const gridContainer = document.getElementsByClassName('content');
const x = 256;
const userColor = `black`;



for (i = 0; i <= x; i++) {
    const newDiv = document.createElement(`div`)
    newDiv.setAttribute("id", i)
    newDiv.classList.add("x")
    content.appendChild(newDiv);
}

const squares = document.getElementsByClassName(`x`);

let mouseClicked = false;
document.body.onmousedown = () => mouseClicked = true;
document.body.onmouseup = () => mouseClicked = false;

const makeActive = (e) => {
    if (mouseClicked == true) {
        e.target.setAttribute("class", "xactive");
    }
}

Array.from(squares).forEach(function (squares) {
    squares.addEventListener('mouseenter', makeActive);
});





// color picker

// canvas size changer (presets)

// erase (clear) drawing

// page style

// save/send paste image??















