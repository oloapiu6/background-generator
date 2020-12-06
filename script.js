var body = document.getElementsByTagName('body')[0];
var color1 = document.getElementById('color1');
var color2 = document.getElementById('color2');
var colorPrint = document.getElementById('colorPrint');
var randomButton = document.getElementById('randomButton')

function updateBackground() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
}

// function printColor() {
// 	console.log(colorPrint.children)
// 	if (colorPrint.children.length > 0) {
// 		colorPrint.children[0].remove();	
// 	}
// 	var div = document.createElement("div")
// 	div.appendChild(document.createTextNode(color1.value + " " + color2.value))
// 	colorPrint.appendChild(div)
// }

function printColor() {
	colorPrint.textContent = body.style.background + ";";
}


function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
return color;
}

function setRandomBackground() {
	color1.value = getRandomColor();
	color2.value = getRandomColor();
	updateBackground()
	printColor()
}

updateBackground()
printColor()
color1.addEventListener('input', updateBackground);
color2.addEventListener('input', updateBackground);
color1.addEventListener('input', printColor);
color2.addEventListener('input', printColor);
randomButton.addEventListener('click', setRandomBackground);
