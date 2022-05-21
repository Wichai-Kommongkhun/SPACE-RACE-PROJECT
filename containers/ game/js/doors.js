function Door(x,y,width,height,type){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.type = type;
    
    this.draw = function(){
        ctx.fillStyle = "black";
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}

function Ladder(x,y,width,height,type){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.type = type;
    
    this.draw = function(){
        ctx.fillStyle = "transparent";
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}

function Locker(x,y,width,height,type){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.type = type;
    
    this.draw = function(){
        ctx.fillStyle = "red";
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}

function Border(x,y,width,height,type){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.type = type;
    
    this.draw = function(){
        ctx.fillStyle = "transparent";
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}