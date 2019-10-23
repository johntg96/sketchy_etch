// sketch.js
const container = document.querySelector('#gridContainer');

function createGrid(gridSize) {
	const dynamicSize = 50 / gridSize + "em";

	for (boxNum = 0; boxNum < gridSize * gridSize; boxNum++) {
		var square = document.createElement('div');
		square.style.cssText = 'height: ' + dynamicSize + '; width: ' + dynamicSize + ';';
		square.classList.add('gridSquare');
		square.id = "square" + boxNum;
		square.setAttribute('onmouseover', 'draw(this.id)');
		container.appendChild(square);
	}	
}

createGrid(16);

function draw(id) {
	document.querySelector('#' + String(id)).classList.add('drawn');
}

// TO DO:
// add grid size creation button
// add grid reset button
