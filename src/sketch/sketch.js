function sketch(p5) {
  var points = [];
  var angleCurveMult = p5.random(0.005, 0.015);

  var time = 0;

  var rDown, rUp;
  var gDown, gUp;
  var bDown, bUp;

  let STOP_LOOPING = false;
  
  p5.setup = () => {
    p5.createCanvas(window.innerWidth, window.innerHeight);
    p5.background(19, 30, 42);
    p5.angleMode(p5.DEGREES);
    p5.noiseDetail(1);

    //help on mobile
    p5.pixelDensity(1);
    //
    
    var dens = 55;
    if(window.innerWidth < 1000) {
      dens = 20;
    }
    if(window.innerWidth < 500) {
      dens = 10;
    }
    var space = p5.width / dens;
    
    for(var x = p5.width/2-(0.35*p5.width); x <= p5.width/2+(0.35*p5.width); x += space) {
      for(var y = p5.height/2-(0.35*p5.height); y <= p5.height/2+(0.35*p5.height); y += space) {
        var randomizeStartX = p5.random(-15, 15);
        var randomizeStartY = p5.random(-15, 15);
        var p = p5.createVector(x + randomizeStartX, y + randomizeStartY);
        points.push(p);
      }
    }
    
    p5.shuffle(points, true);

    rDown = p5.int(p5.random(100, 255));
    rUp = p5.int(p5.random(100, 255));
    gDown = p5.int(p5.random(100, 255));
    gUp = p5.int(p5.random(100, 255));
    bDown = p5.int(p5.random(100, 255));
    bUp = p5.int(p5.random(100, 255));
  };

  p5.draw = () => {
    if(STOP_LOOPING) {
      return;
    }
    if(window.location.pathname != "/") {
      STOP_LOOPING = true;
    }

    p5.noStroke();
    
    for(var i = 0; i < points.length; i++) {
        var r = p5.map(points[i].x, 0, p5.width/2-(0.35*p5.width), rDown, rUp);
        var g = p5.map(points[i].y, 0, p5.height/2-(0.35*p5.height), gDown, gUp);
        var b = p5.map(points[i].y, 0, p5.width/2-(0.35*p5.width), bDown, bUp);
  
        p5.fill(r, g, b);
        
        var angle = p5.map(p5.noise(points[i].x * angleCurveMult, points[i].y * angleCurveMult), 0, 1, 0, 720);
        
        points[i].add(p5.createVector(p5.cos(angle), p5.sin(angle)))
        
        p5.ellipse(points[i].x, points[i].y, 1);
    }
  };
};

export default sketch;


