// sketch.js
const container = document.querySelector('#gridContainer');

function createGrid(gridSize) {
	const dynamicW = 50 / gridSize + "em";
	const dynamicH = 50 / gridSize + "em";

	for (boxNum = 0; boxNum < gridSize * gridSize; boxNum++) {
		var square = document.createElement('div');
		square.style.cssText = 'height: ' + dynamicH + '; width: ' + dynamicW + ';';
		square.classList.add('gridSquare');
		square.id = "square" + boxNum;
		square.setAttribute('onmouseover', 'changeColor(this.id)');
		container.appendChild(square);
	}	
}

createGrid(60);

function changeColor(id) {
	document.querySelector('#' + String(id)).style.backgroundColor = "green";
}

// TO DO:
// figure out how to dynamically size squares in grid..
// The *container* grid should be staying the same size, while the squares inside change width + height based on how many squares are being created *x*
// currently the squares ignore the container and will outgrow their container
// the squares are being given a calculated height and width based on the amount of squares being created, but not in relation to how big the -
// grid containers dimensions are