let x=0;

function setup() {
  createCanvas(1280, 720)
  // line(15, 25, 700, 600);
  // background(100);
}

function draw() {
  background(0);
  noStroke();
  frameRate(10);

  // stroke(255);
  // point(width * 0.5, height * 0.5);
  // point(width * 0.5, height * 0.25);
  //
  // stroke(0, 153, 255);
  // line(0, height * 0.33, width*0.75, height * 0.8);
  //
  // stroke(255, 153, 0);
  // aa = rect(width * 0.5, height * 0.2, width * 0.5, height * 0.5);


  for (let i = 0; i < height; i += 20) {
    fill(0, 206, 15);
    rect(0, i, width, 10);

    fill(255);
    rect(i, 0, 10, height);
  }
}
