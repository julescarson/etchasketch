const content = document.querySelector('.content');
const x = 256;
const userColor = `black`;


for (i = 0; i <= x; i++) {
    const newDiv = document.createElement(`div`)
    newDiv.setAttribute("id", i)
    newDiv.classList.add("x")
    content.appendChild(newDiv);
}

const squares = document.getElementsByClassName(`x`);
const makeActive = (e) => {
    e.target.setAttribute("class", "xactive");
}

Array.from(squares).forEach(function (squares) {
    squares.addEventListener('mousedown', makeActive);
});


















