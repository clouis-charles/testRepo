
function drawCircle(locX, locY, sizeW, sizeH, fillColor) {
    noStroke();
    fill(fillColor);
    ellipse(locX, locY, sizeW, sizeH);
}


function setup() {
 //   createCanvas(700, 800);
    createCanvas(windowWidth, windowHeight);
}
function draw() {

    //call the function
    //drawCircle(mouseX, mouseY, 100, 100);

    var randomX = random(windowWidth)
    var randomY = random(windowHeight)
    var randomSize = random(100);
    var myColor = color(51, 91, 185);

   // drawCircle(random(windowWidth), random(windowHeight), random(100), random(100) );
     drawCircle(randomX, randomY, randomSize, randomSize, myColor );


    myColor = (200, 0, 0)
    randomX = random(windowWidth)
    randomY = random(windowHeight)
    drawCircle(randomX, randomY, randomSize, randomSize, myColor );

    myColor = (0, 0, 170)
    myColor = color(random(255), random(255), random(255));
    randomX = random(windowWidth)
    randomY = random(windowHeight)
    drawCircle(randomX, randomY, randomSize, randomSize, myColor );



    myColor = color(100, 200, 27);
    drawCircle(mouseX, mouseY, 50, 75, myColor)
}
