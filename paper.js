class Paper{
    constructor(x, y, diameter){
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 5,
            density: 1.2,
        }
        this.body = Bodies.circle(x, y, diameter, options);
        World.add(world, this.body);
        this.diameter = diameter;
    }

    display(){
       ellipseMode(RADIUS);
       ellipse(this.body.position.x, this.body.position.y, this.diameter, this.diameter); 
    }
}