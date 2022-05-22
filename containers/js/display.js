function Paused (x,y,width,height,type){ 
    this.x = x;
    this.y = y;
    this.framex = 0;
    this.framey = 0;
    this.width = width;
    this.height = height;
    this.type = type;

        this.draw = function(){
            drawSprite(pause, this.width * this.framex, this.height * this.framey, this.width, this.height , this.x, this.y, this.width, this.height);
        }
        
}
function Gameover (x,y,width,height,type){ 
    this.x = x;
    this.y = y;
    this.framex = 0;
    this.framey = 0;
    this.width = width;
    this.height = height;
    this.type = type;

        this.draw = function(){
            drawSprite(gameover, this.width * this.framex, this.height * this.framey, this.width, this.height , this.x, this.y, this.width, this.height);
        }
        
}
function Minimap(x,y,width,height,type){ 
    this.x = x;
    this.y = y;
    this.framex = 0;
    this.framey = 0;
    this.width = width;
    this.height = height;
    this.type = type;

        this.draw = function(){
            drawSprite(map, this.width * this.framex, this.height * this.framey, this.width, this.height , this.x, this.y, this.width, this.height);
        }
        
}