// Creating variables
let myX = 0, myY = 0, mySize = 30, updates=0;

function update() {
	// Napisanoto tuk se izpulnqva otnovo i otnovo mnogo puti v sekunda
	myX = myX+(mouseX-myX)/10;
	myY = myY+(mouseY-myY)/10;
}

function draw() {

	context.fillStyle = getRandomColor();
	context.fillRect(myX, myY, mySize, mySize)

}

function keyup(key) {
	// Show the pressed keycode in the console
	console.log("Pressed", key);
}

function mouseup() {
	// Show coordinates of mouse on click
	console.log("Mouse clicked at", mouseX, mouseY);
}
