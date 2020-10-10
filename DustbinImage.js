class DustbinImage{
    constructor(){
        this.image = loadImage("dustbingreen.png");
        this.x = 300;
        this.y = 300;
        this.width = 50;
        this.height = 50;
    }
    display(){
        this.image.scale = 0.5;
        image(this.image,450,300);
    }
}