function sketch(p5) {
  let font
  let fSize // font size
  let msg // text to write
  let pts = [] // store path data

  let speed = 2;

  let ptBefore = {x:0, y:0}
  let i = 0

  let donePts = []

  var r
  var angle 
  var step
  let circlePoints = []

  let STOP_LOOPING = false;
  
  p5.preload = () => {
    font = p5.loadFont('./NothingYouCouldDo-Regular.ttf')
  }

  p5.setup = () => {
    p5.createCanvas(100, 100)
    
    p5.frameRate(60)

    fSize = 40
    p5.textFont(font)
    p5.textSize(fSize)
    msg = 'AS'
    pts = font.textToPoints(msg, 0, 0, fSize, {
        sampleFactor: 0.8, // increase for more points
        simplifyThreshold: 0.0 // increase to remove collinear points
    })
    p5.reverse(pts);
    
    //create circle
    r = 40;
    angle = -32*p5.TWO_PI/180;
    step = p5.TWO_PI/180;

    for(let p=0; p<180; p++) {
      var x = r * p5.sin(angle);
      var y = r * p5.cos(angle);
      circlePoints.push({x: x, y: y})
      angle = angle + step;
    }

    p5.stroke(30, 185, 114)
    p5.strokeWeight(3);
    p5.background(19, 30, 42)
  };

  var t = 1;
  p5.draw = () => {
    if(STOP_LOOPING) {
      return;
    }
    if(window.location.pathname != "/project-details") {
      STOP_LOOPING = true;
    }


    if(t>=180) {
      p5.noLoop();
    } else {
      p5.translate(p5.width/2, p5.height/2);
      if(i>=pts.length) {
        for(let k=0; k<=speed+2; k++) {
          if(t<180) {
            const p_c = circlePoints[t]
            p5.point(p_c.x, p_c.y);
            t++;
          }
        }
      }
  
      p5.translate(-32, 12);
      for(let k=0; k<=speed+1; k++) {
        if(i>=pts.length) {
          break;
        }
        const p = pts[i]
        if(ptBefore.x != 0) {
          p5.point(p.x, p.y);
          p5.point(ptBefore.x, ptBefore.y);
        }
        ptBefore = pts[i]
        i++
      }
    }
  };
};

export default sketch;


