function dogwalk(x,y) {
    this.x = x;
    this.y = y;
    this.xspeed = 1;
    this.yspeed = 0;
    this.friction = 0;
    this.maxSpeed = 10;
    this.framex = 0;
    this.framey = 0;
    this.width = 100;
    this.height = 200;
    this.active = true;
    this.moving = false;
    this.maxhp = 3;
    
    this.draw = function() {
        console.log(this.x)
        drawSprite(playerSprite, player.width , player.height ,this.width, this.height, this.x--, this.y, this.width, this.height);
    } 
}
