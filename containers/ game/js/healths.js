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

function Staminas (x,y,width,height,type){
    this.x = x;
    this.y = y;
    this.framex = 0;
    this.framey = 0;
    this.width = width;
    this.height = height;
    this.type = type;

        this.draw = function(){
            ctx.fillStyle = 'yellow';
            ctx.fillRect(65,117,player.stamina,5);
            drawSprite(staminabar, this.width * this.framex, this.height * this.framey, this.width, this.height , this.x, this.y, this.width, this.height);
    }
        
}

  
