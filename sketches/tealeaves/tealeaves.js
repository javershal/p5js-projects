var drops = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
	background(0, 0, 0);
	fill(random(0,255),random(0,255),random(0,255))
  for (var i=0; i<windowHeight/5; i++) {
    drops.push(new tea_drop());
  }
}

function draw() {
if (!keyIsPressed==true){
  for (var i=0; i<drops.length; i++) {
    drops[i].move();
    drops[i].display();}
  }
}

// tea_drop class
function tea_drop() {
  this.x = 0;
  this.y = random(height);
  this.diameter = 2;
  this.xspeed = 5;
  this.yspeed = 2;


  this.move = function() {
		if (this.x > windowWidth) {
			this.x = 0;
			fill(random(0,255),random(0,255),random(0,255))}
		else {
    this.x += random(0, this.xspeed);
    this.y += random(-this.yspeed, this.yspeed);
		}
  };

  this.display = function() {
   rect(this.x, this.y, this.diameter, this.diameter);
  };
}
