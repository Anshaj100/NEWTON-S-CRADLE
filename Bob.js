class Bob
{
	constructor(x,y)
	{
		var options={
			
			restitution:0.4,
			frictionAir:0.005,
			density:0.8
			}
		this.x=x;
		this.y=y;
		this.r=15;
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			// rectMode(CENTER)
			// rotate(this.body.angle)
			fill(255,0,255)
			
			ellipseMode(RADIUS)
			ellipse( 0,0,this.r*2, this.r*2)
			pop()
			
	}

}