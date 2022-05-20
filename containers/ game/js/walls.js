function Wall(x,y,width,height,type){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.type = type;
    
    this.draw = function(){
        drawSprite(block, 0, 0, this.width, this.height, this.x, this.y, this.width, this.height);
    }
    
}