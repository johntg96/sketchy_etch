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

createGrid(40);

function draw(id) {
	document.querySelector('#' + String(id)).classList.add('drawn');
}

function reset(newGridSize) {
	// reset grid using this function..
	// delete all squares and re-run 'createGrid' function
}

document.querySelector('#reset').addEventListener('click', function(){
	const newGrid = prompt('Enter size of grid: ');
	reset(newGridSize);
});

// TO DO:
// add grid size creation button
// add grid reset button
