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

function Item(x,y,width,height,type){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.type = type;
    this.color = "rgba(0,0,0,0.8)";
    
    this.draw = function(){
        drawSprite(blueprint, 0, 0, this.width, this.height , this.x, this.y, 50, 50);
    }
}

var up = true;
let count = 0;
function MovingItem(){
    for(let i = 0;i <= item.length;i++){
        if(up){
            item[i].y += 1;
            count++;
            if(count >= 20){
                up = false;
            }
        }else{
            item[i].y -= 1;
            count--;
            if(count <= 0){
                up = true;
            }
        }
    }
}
