function sketch(p5) {
  const dots = [];
  var density = Math.floor(window.innerWidth/15);
  var distanceLine = 150;

  let STOP_LOOPING = false;

  p5.setup = () => {
    p5.createCanvas(window.innerWidth, window.innerHeight);

    p5.pixelDensity(1);
    if(window.innerWidth < 600) {
      density = Math.floor(window.innerWidth/20);
      distanceLine = 300;
    }
    
    for(let i=0; i<density; i++){
      dots.push(new Dot());
    }
  };

  p5.draw = () => {
    if(STOP_LOOPING) {
      return;
    }
    if(window.location.pathname != "/") {
      STOP_LOOPING = true;
    }

    p5.background(20, 30, 42);
    
    for(let i=0; i<density; i++){
      dots[i].update();
      dots[i].draw();
      dots[i].drawConnects(i);
    }
  };

  class Dot {
    constructor() {
      this.pos = p5.createVector(p5.random(p5.width), p5.random(p5.height));
      this.vel = p5.createVector(p5.random(-2,2), p5.random(-2,2));
      this.size = p5.random(5, 15);
    }

    update() {
      this.hitwalldetector();
      this.pos.add(this.vel);
    }

    draw() {
      p5.noStroke();
      let rgbaString = 'rgba(30, 185, 114, ' + this.size/30 + ')';
      p5.fill(rgbaString);
      p5.circle(this.pos.x, this.pos.y, this.size); 
    }

    hitwalldetector() {
      if(this.pos.x <= 0 || this.pos.x >= p5.width) {
        this.vel.x = this.vel.x * -1;
      }
      if(this.pos.y <= 0 || this.pos.y >= p5.height) {
        this.vel.y = this.vel.y * -1;
      }
    }

    drawConnects(j) {
      for(let i=j; i<density; i++) {
        const distanceBetwen = p5.dist(this.pos.x, this.pos.y, dots[i].pos.x, dots[i].pos.y);
        
        if(distanceBetwen < distanceLine) {
          let rgbaString = 'rgba(30, 185, 114, ' + (this.size + dots[i].size)/(2*30) + ')';
          p5.stroke(rgbaString);
          p5.line(this.pos.x, this.pos.y, dots[i].pos.x, dots[i].pos.y);
        }
      }
    }
  };
};

export default sketch;


