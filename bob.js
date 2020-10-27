class Bob {
    constructor(x,y) {
        var options = { 
            'restitution':0.3,
            'friction':0.5,
            'density':1.2,
            isStatic:false
        }
        this.body = Bodies.circle(x, y,this.radius,options);
       this.radius=70;
        
        World.add(world, this.body);
      }
      display(){
  
        push();
        translate(this.body.position.x, this.body.position.y);
        
        ellipseMode(RADIUS)
        ellipse(this.body.x,this.body.y,this.radius)
        pop();
      }
}