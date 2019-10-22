// sketch.js
const container = document.querySelector('#gridContainer');

function createGrid(x) {
	for (rows = 0; rows < x; rows++) {
		for (columns = 0; columns < x; columns++) {
			var square = document.createElement('div');
			square.classList.add('gridSquare');
			var dynamicW = 50 / x + "em";
			var dynamicH = 50 / x + "em";
			square.style.width = dynamicW;
			square.style.height = dynamicH;
			container.appendChild(square);
		}
	}
}

createGrid(40);


// TO DO:
// figure out how to dynamically size squares in grid..
// The *container* grid should be staying the same size, while the squares inside change width + height based on how many squares are being created *x*
// currently the squares ignore the container and will outgrow their container
// the squares are being given a calculated height and width based on the amount of squares being created, but not in relation to how big the -
// grid containers dimensions are