class paper{
    constructor(x,y,r){
        var options={
            isStatic:false,

            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        
        this.body=Bodies.circle(x,y,r,options);
        this.r=r;
        this.x=x;
        this.y=y;
        this.paperball=loadImage("sprites/paper.png");
        World.add(world,this.body);
    }
    display(){
        //image(this.paperball,50,650);
        imageMode(RADIUS);
        image(this.paperball,this.x,this.y,this.r);
        //ellipseMode(RADIUS);
        //ellipse(this.body.position.x,this.body.position.y,this.r);
    }
}
