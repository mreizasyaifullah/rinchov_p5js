// let x=0;
// let x=0;
// let y=0;

let r;

let theta, theta2, theta3, theta4, theta5, theta6, theta7, theta8, theta9, theta10, theta11, theta12, theta13, theta14, theta15, theta16;
let theta_vel;
let theta_acc;

function setup() {
  createCanvas(720, 720)
  // line(15, 25, 700, 600);
  // background(100);
  // stroke(255); // Set line drawing color to white
  // frameRate(60);
  // fill(100,0,0);
  noFill();

  r = 0;
  r2 = 24;
  r3 = 48;
  r4 = 72;
  // r5 = 72;
  // r6 = 72;
  // r7 = 72;
  // r8 = 72;
  // r9 = 72;
  // r10 = 72;
  // r11 = 72;
  // r12 = 72;
  // r13 = 72;
  // r14 = 72;
  // r15 = 72;
  // r16 = 72;
  theta = 0;
  theta2 = 0;
  theta3 = 0;
  theta4 = 0;
  theta5 = 0;
  theta6 = 0;
  theta7 = 0;
  theta8 = 0;
  theta9 = 0;
  theta10 = 0;
  theta11 = 0;
  theta12 = 0;
  theta13 = 0;
  theta14 = 0;
  theta15 = 0;
  theta16 = 0;
  theta_vel = 0.1;
  theta_acc = 0.0001;
}


function draw() {
  background(0);
  // noStroke(); // WITHOUT SHAPE STROKE
  // frameRate(10);

  // push();
  // fill(100);
  // translate(width * 0.2, height * 0.5);
  // rotate(frameCount / 60.0);
  // polygon(0, 0, 82, 3);
  // pop();
  //
  // // translate(width * 0.8, height * 0.5);
  // // rotate(frameCount / -30.0);
  // // for (let a=30; a<100; a+=1)  {
  // //   polygon(0, 0, a, 8);
  // // }
  // //
  // // pop();
  //
  // translate(width * 0.7, height * 0.5);
  // rotate(frameCount / 200.0);
  // star(0, 0, 30, 70, 5);
  // pop();

  //
  // for (let i = 0; i < 400; i += 20) {
  //   stroke(20 + i / 2.0);
  //   bezier(
  //     mouseX - i / 2.0,
  //     mouseY - i,
  //     410,
  //     20,
  //     440,
  //     300,
  //     240 - i / 4,
  //     300 + i / 2
  //   );
  // }

  // for (let i=0; i < mouseY; i+=20) {
  //   stroke(255);
  //
  //   rotate(cos(0));
  //   polygon(360, 360, 20+i, 6);
  //
  //
  // }

  // CIRCLE 1
  push();
  translate(width * 0.2, height * 0.2);
  let x = r * cos(theta);
  let y = r * sin(theta);
  ellipseMode(CENTER);
  noStroke();
  fill(200);

  ellipse(x, y, 20, 20);
  theta += theta_vel;
  pop();

  // CIRCLE 2
  push();
  translate(width * 0.4, height * 0.2);
  let x2 = r2 * cos(theta2);
  let y2 = 0;
  ellipseMode(CENTER);
  noStroke();
  fill(200);
  ellipse(x2, y2, 20, 20);
  theta2 += theta_vel;
  pop();

  // CIRCLE 3
  push();
  translate(width * 0.6, height * 0.2);
  let x3 = r3 * cos(theta3);
  let y3 = 0;
  ellipseMode(CENTER);
  noStroke();
  fill(200);
  ellipse(x3, y3, 20, 20);
  theta3 += theta_vel;
  pop();

  // CIRCLE 4
  push();
  translate(width * 0.8, height * 0.2);
  let x4 = r4 * cos(theta4);
  let y4 = 0;
  ellipseMode(CENTER);
  noStroke();
  fill(200);
  ellipse(x4, y4, 20, 20);
  theta4 += theta_vel;
  pop();

  // CIRCLE 5
  push();
  translate(width * 0.2, height * 0.4);
  let x5 = 0;
  let y5 = r2 * sin(theta5);
  ellipseMode(CENTER);
  noStroke();
  fill(200);
  ellipse(x5, y5, 20, 20);
  theta5 += theta_vel;
  pop();

  // CIRCLE 6
  push();
  translate(width * 0.4, height * 0.4);
  let x6 = r2 * cos(theta6);
  let y6 = r2 * sin(theta6);
  ellipseMode(CENTER);
  noStroke();
  fill(200);
  ellipse(x6, y6, 20, 20);
  theta6 += theta_vel;
  pop();

  // CIRCLE 7
  push();
  translate(width * 0.6, height * 0.4);
  let x7 = r3 * cos(theta7);
  let y7 = r2 * sin(theta7);
  ellipseMode(CENTER);
  noStroke();
  fill(200);
  ellipse(x7, y7, 20, 20);
  theta7 += theta_vel;
  pop();

  // CIRCLE 8
  push();
  translate(width * 0.8, height * 0.4);
  let x8 = r4 * cos(theta8);
  let y8 = r2 * sin(theta8);
  ellipseMode(CENTER);
  noStroke();
  fill(200);
  ellipse(x8, y8, 20, 20);
  theta8 += theta_vel;
  pop();

  // CIRCLE 9
  push();
  translate(width * 0.2, height * 0.6);
  let x9 = 0;
  let y9 = r3 * sin(theta9);
  ellipseMode(CENTER);
  noStroke();
  fill(200);
  ellipse(x9, y9, 20, 20);
  theta9 += theta_vel;
  pop();

  // CIRCLE 10
  push();
  translate(width * 0.4, height * 0.6);
  let x10 = r2 * cos(theta10);
  let y10 = r3 * sin(theta10);
  ellipseMode(CENTER);
  noStroke();
  fill(200);
  ellipse(x10, y10, 20, 20);
  theta10 += theta_vel;
  pop();

  // CIRCLE 11
  push();
  translate(width * 0.6, height * 0.6);
  let x11 = r3 * cos(theta11);
  let y11 = r3 * sin(theta11);
  ellipseMode(CENTER);
  noStroke();
  fill(200);
  ellipse(x11, y11, 20, 20);
  theta11 += theta_vel;
  pop();

  // CIRCLE 12
  push();
  translate(width * 0.8, height * 0.6);
  let x12 = r4 * cos(theta12);
  let y12 = r3 * sin(theta12);
  ellipseMode(CENTER);
  noStroke();
  fill(200);
  ellipse(x12, y12, 20, 20);
  theta12 += theta_vel;
  pop();

  // CIRCLE 13
  push();
  translate(width * 0.2, height * 0.8);
  let x13 = 0;
  let y13 = r4 * sin(theta13);
  ellipseMode(CENTER);
  noStroke();
  fill(200);
  ellipse(x13, y13, 20, 20);
  theta13 += theta_vel;
  pop();

  // CIRCLE 14
  push();
  translate(width * 0.4, height * 0.8);
  let x14 = r2 * cos(theta14);
  let y14 = r4 * sin(theta14);
  ellipseMode(CENTER);
  noStroke();
  fill(200);
  ellipse(x14, y14, 20, 20);
  theta14 += theta_vel;
  pop();

  // CIRCLE 15
  push();
  translate(width * 0.6, height * 0.8);
  let x15 = r3 * cos(theta15);
  let y15 = r4 * sin(theta15);
  ellipseMode(CENTER);
  noStroke();
  fill(200);
  ellipse(x15, y15, 20, 20);
  theta15 += theta_vel;
  pop();

  // CIRCLE 16
  push();
  translate(width * 0.8, height * 0.8);
  let x16 = r4 * cos(theta16);
  let y16 = r4 * sin(theta16);
  ellipseMode(CENTER);

  noStroke();
  fill(200);
  ellipse(x16, y16, 20, 20);
  theta16 += theta_vel;
  pop();



  // TRACING

  push();
  stroke(255);
  ellipse(width * 0.8, height * 0.8, 2*r4, 2*r4);
  pop();

  push();
  stroke(255);
  ellipse(width * 0.8, height * 0.8, 2*r4, 2*r4);
  pop();

  push();
  stroke(255);
  ellipse(width * 0.8, height * 0.8, 2*r4, 2*r4);
  pop();

  push();
  stroke(255);
  ellipse(width * 0.8, height * 0.8, 2*r4, 2*r4);
  pop();

  push();
  stroke(255);
  ellipse(width * 0.8, height * 0.8, 2*r4, 2*r4);
  pop();

  push();
  stroke(255);
  ellipse(width * 0.8, height * 0.8, 2*r4, 2*r4);
  pop();

  push();
  stroke(255);
  ellipse(width * 0.8, height * 0.8, 2*r4, 2*r4);
  pop();

  push();
  stroke(255);
  ellipse(width * 0.8, height * 0.8, 2*r4, 2*r4);
  pop();

  push();
  stroke(255);
  ellipse(width * 0.8, height * 0.8, 2*r4, 2*r4);
  pop();

  push();
  stroke(255);
  ellipse(width * 0.8, height * 0.8, 2*r4, 2*r4);
  pop();

  push();
  stroke(255);
  ellipse(width * 0.8, height * 0.8, 2*r4, 2*r4);
  pop();

  push();
  stroke(255);
  ellipse(width * 0.8, height * 0.8, 2*r4, 2*r4);
  pop();

  push();
  stroke(255);
  ellipse(width * 0.8, height * 0.8, 2*r4, 2*r4);
  pop();

  push();
  stroke(255);
  ellipse(width * 0.8, height * 0.8, 2*r4, 2*r4);
  pop();

  push();
  stroke(255);
  ellipse(width * 0.8, height * 0.8, 2*r4, 2*r4);
  pop();

  push();
  stroke(255);
  ellipse(width * 0.8, height * 0.8, 2*r4, 2*r4);
  pop();

  // stroke(255);
  // polygon(360, 360, mouseX, 6);
  //
  // // HORIZONTAL LINE
  // y = y - 1;
  // if (y < 0) {
  //   y = height;
  // }
  // line(0, y, width, y);
  //
  // // VERTICAL LINE
  // x = x - 1;
  // if (x < 0) {
  //   x = width;
  // }
  // line(x, 0, x, height);

  // BASIC SHAPE
  // fill(255);
  // arc(200, 200, 280, 280, PI*0.5, PI*0.5);

  // stroke(255);
  // point(width * 0.5, height * 0.5);
  // point(width * 0.5, height * 0.25);
  //
  // stroke(0, 153, 255);
  // line(0, height * 0.33, width*0.75, height * 0.8);
  //
  // stroke(255, 153, 0);
  // aa = rect(width * 0.5, height * 0.2, width * 0.5, height * 0.5);

  // SHAPE PATTERN
  // for (let i = 0; i < height; i += 20) {
  //   fill(0, 206, 15);
  //   rect(0, i, width, 10);
  //
  //   fill(255);
  //   rect(i, 0, 10, height);
  // }
}
