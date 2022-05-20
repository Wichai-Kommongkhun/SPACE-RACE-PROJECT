function Healths(x,y,width,height,type){
    this.x = x;
    this.y = y;
    this.framex = 0;
    this.framey = 0;
    this.width = width;
    this.height = height;
    this.type = type;
    
    this.draw = function(){
        drawSprite(healthbar, this.width * this.framex, this.height * this.framey, this.width, this.height , this.x, this.y, this.width, this.height);
    }
}

function Staminas (x,y,w,h,maxST, color){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.maxST = maxST;
        this.maxWidth = w;
        this.health = maxST;
        this.color = color;
        
    }

  
