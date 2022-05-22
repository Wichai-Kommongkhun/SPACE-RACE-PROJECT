function Door(x,y,width,height,type){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.type = type;
    this.framex = 0;
    this.framey = 0;
    
    this.draw = function(){
        drawSprite(doorpicture, this.width * this.framex, this.height * this.framey,this.width, this.height, this.x, this.y, 160, 280);
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
        ctx.fillStyle = "transparent";
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
    
    this.draw1 = function(){
        drawSprite(blueprint, 0, 0, this.width, this.height , this.x, this.y, 50, 50);
    }
    this.draw2 = function(){
        drawSprite(blueprint2, 0, 0, this.width, this.height , this.x, this.y, 50, 50);
    }
    this.draw3 = function(){
        drawSprite(blueprint3, 0, 0, this.width, this.height , this.x, this.y, 50, 50);
    }
}
function Rocket(x,y,width,height,type){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.type = type;
    this.color = "rgba(0,0,0,0.8)";
    this.draw4 = function(){
        drawSprite(picrocket1, 0, 0, this.width, this.height , this.x, this.y, 200, 200);
    }
    this.draw5 = function(){
        drawSprite(picrocket2, 0, 0, this.width, this.height , this.x, this.y, 100, 100);
    }
    this.draw6 = function(){
        drawSprite(picrocket3, 0, 0, this.width, this.height , this.x, this.y, 100, 100);
    }
}
function Med(x,y,width,height,type){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.type = type;
    this.color = "rgba(0,0,0,0.8)";
    this.draw = function(){
        drawSprite(medi, 0, 0, this.width, this.height , this.x, this.y, 100, 100);
    }
}

function Used(){
    if(checkIntersection(player,item1) && interact && item1.type && stage == 11.1){
        allBlueprint++;
        item1.type = 0;
    }else if(checkIntersection(player,item2) && interact && item2.type && stage == 22.2){
        allBlueprint++;
        item2.type = 0;
    }else if(checkIntersection(player,item3) && interact && item3.type && stage == 21.1){
        allBlueprint++;
        item3.type = 0;
    }
    if(checkIntersection(player,rocket1) && interact && rocket1.type && stage == 2.2){
        allPart++;
        rocket1.type = 0;
    }else if(checkIntersection(player,rocket2) && interact && rocket2.type && stage == 2.1){
        allPart++;
        rocket2.type = 0;
    }else if(checkIntersection(player,rocket3) && interact && rocket3.type && stage == 12.1){
        allPart++;
        rocket3.type = 0;
    }
    if(checkIntersection(player,med1) && interact && med1.type && stage == 12.2 && player.maxhp < 3){
        player.maxhp++
        med1.type = 0;
    }else if(checkIntersection(player,med2) && interact && med2.type && stage == 1.1 && player.maxhp < 3){
        player.maxhp++
        med2.type = 0;
    }else if(checkIntersection(player,med3) && interact && med3.type && stage == 22.1 && player.maxhp < 3){
        player.maxhp++
        med3.type = 0;
    }
}


var up = true;
let count = 0;
function MovingItem(){
    if(paused || player.maxhp == 0){//add
        return
    }
        if(up){
            item1.y += 1;
            item2.y += 1;
            item3.y += 1;
            rocket1.y += 1;
            rocket2.y += 1;
            rocket3.y += 1;
            med1.y += 1;
            med2.y += 1;
            med3.y += 1;
            count++;
            if(count >= 20){
                up = false;
            }
        }else{
            item1.y -= 1;
            item2.y -= 1;
            item3.y -= 1;
            rocket1.y -= 1;
            rocket2.y -= 1;
            rocket3.y -= 1;
            med1.y -= 1;
            med2.y -= 1;
            med3.y -= 1;
            count--;
            if(count <= 0){
                up = true;
            }
        }
        
        
}
