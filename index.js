const content = document.querySelector('.content');
const x = 16;
const y = 16;



const makedivs = (parent, num, cn) => {
    return Array.from(Array(num)).map((e, i) => {
        const nd = document.createElement('div');
        nd.className = i;
        nd.classList.add(cn);
        parent.append(nd);
        return nd;
    });
}

const r = makedivs(content, x, 'x');

for (const topLevelDiv of r) {
    makedivs(topLevelDiv, y, 'y');
}

console.log(r[0][0]);