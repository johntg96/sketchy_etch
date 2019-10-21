// sketch.js
const grid = document.querySelector('#gridContainer');

for (i = 0; i < 16; i++) {
	var div = document.createElement('div');
	div.classList.add('gridSquare');
	console.log(i);
	grid.appendChild(div);
}

