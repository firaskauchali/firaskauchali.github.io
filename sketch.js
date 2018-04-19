var maxImages = 23; // Total # of images
var imageIndex = Math.floor(Math.random() * maxImages);
var images = new Array(maxImages);

var drawImage; // Draws Image after first click
var renderer; // Fixes canvas size/scroll bar issue

var funk; // Plays alert sound on click

function preload() {
    for (var i = 0; i < images.length; i ++ ) {
        images[i] = loadImage("images/underconstruction" + i + ".jpg" );
    }
    funk = loadSound("funkalicious.mp3");
}

function setup() {
    renderer = createCanvas(windowWidth, windowHeight);
    renderer.canvas.style.display = 'block';
}

function windowResized() {
    renderer = resizeCanvas(windowWidth, windowHeight);
    renderer.canvas.style.display = 'block';
}

function draw() {
    var r = random(800);
    if (drawImage) {
        image(images[imageIndex], mouseX, mouseY);
    }
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