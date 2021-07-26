class paper{
    constructor(x, y){
        var options={
            'resolution':0.3,
            'friction':0,
            'density':1.2
        }
        //var maxSides = 100;
        //this.x = x;
        //this.y = y;
        this.width = 50;
        this.height = 50;
        this.image = loadImage("paper.png");
        this.body = Bodies.rectangle(x, y, 50, 50, options);
        World.add(world, this.body);
    }
    display(){

        var paperPos=this.body.position;

        push();
        translate(paperPos.x, paperPos.y);
        //rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();

        // I can't get this to work
        
    }
}