class Rubber {
    constructor(x, y) {
      var options = {
          restitution:0.8,
          friction:5,
          density:1
      }
  
      this.width
      this.body = Bodies.circle(x, y, 40 ,  options);
      this.radius =40
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      fill("white");

      ellipse(0, 0, this.radius, this.radius);
    
      pop();
    }
  }