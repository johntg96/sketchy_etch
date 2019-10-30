// sketch.js
var container = document.querySelector('#gridContainer');
var gridSize = 16;

function createGrid(gridSize) {
	const dynamicSize = 45 / gridSize + "em";

	for (boxNum = 0; boxNum < gridSize * gridSize; boxNum++) {
		var square = document.createElement('div');
		square.style.cssText = 'height: ' + dynamicSize + '; width: ' + dynamicSize + ';';
		square.classList.add('gridSquare');
		square.id = "square" + boxNum;
		square.setAttribute('onmouseover', 'draw(this.id)');
		container.appendChild(square);
	}
}

createGrid(gridSize);

function draw(id) {
	document.querySelector('#' + String(id)).classList.add('drawn');
}

function newGrid(sizeOfGrid) {
	document.querySelectorAll('.gridSquare').forEach(e => e.remove());
	createGrid(gridSize);
}

document.querySelector('#reset').addEventListener('click', function(){
	document.querySelectorAll('.gridSquare').forEach(e => e.classList.remove('drawn'));
});

document.querySelector('#new').addEventListener('click', function(){
	var newGridSize = prompt('Size of new grid will be "x * x"\n\nEnter size of new grid (x): ');
	gridSize = newGridSize;
	newGrid(gridSize);
});

// TO DO
// Optimize! The goal of this project has been acheived..
// however, extreme lag when resetting grid is apparent.
// Figure out how to refactor code to be more efficient.