var maxImages = 23; // Total # of images
var imageIndex = Math.floor(Math.random() * maxImages);
var images = new Array(maxImages);

var drawImage; // Draws Image after first click

var funk; // Plays alert sound on click

function preload() {
	for (var i = 0; i < images.length; i++) {
		images[i] = loadImage("images/underconstruction" + i + ".jpg");
	}
	funk = loadSound("funkalicious.mp3");
}

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	if (drawImage) {
		image(images[imageIndex], mouseX, mouseY);
	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function mouseReleased() {
	drawImage = !drawImage;
	noLoop(); // Stops constant drawing as mouse moves
}

function mousePressed() {
	imageIndex = int(random(images.length)); // Picks new image randomly when the mouse is clicked
	loop(); // Starts loop to draw another single image
	funk.play();
}
