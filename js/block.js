class Block{
    constructor(x,y,width,height){
        this.body= Bodies.rectangle(x,y,width,height);
        this.width=width;
        this.height=height;
        this.image= loadImage("./block.png");
        World.add( world, this.body);
        this.Visibility =255;
    }
    display(){
        if(this.body.speed < 4 ){
       //     console.log(this.body.speed)
        push();
        imageMode(CENTER)
        translate(this.body.position.x, this.body.position.y)
       strokeWeight(2);
       stroke("brown")
        image(this.image,0,0, this.width, this.height);
        pop();
    }
    else{
        push();
        World.remove(world, this.body);
        this.Visibility = this.Visibility - 5;
        tint(255, this.Visibility)
       pop()
    }
}
}