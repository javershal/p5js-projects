var bugs = []; // array of Jitter objects

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
	background(0, 0, 0);
	fill(random(0,255),random(0,255),random(0,255))
  for (var i=0; i<windowHeight/5; i++) {
    bugs.push(new tea_drop());
  }
}

function draw() {
  for (var i=0; i<bugs.length; i++) {
    bugs[i].move();
    bugs[i].display();
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