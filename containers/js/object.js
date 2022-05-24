var countBlueprint = 0;

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
        ctx.fillRect(this.x,this.y + 20,this.width,10);
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
    this.draw7 = function(){
        drawSprite(picfullrocket, 0, 0, this.width, this.height , this.x, this.y, 425, 425);
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
function Panel(x,y,width,height,type){
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


function Arrow(x,y,width,height,type){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.type = type;
    
    this.draw1 = function(){
        drawSprite(leftbar, 0, 0, this.width, this.height , this.x, this.y, 45, 45);
    }
    this.draw2 = function(){
        drawSprite(rightbar, 0, 0, this.width, this.height ,this.x, this.y, 45, 45);
    }
    this.draw3 = function(){
        drawSprite(down, 0, 0, this.width, this.height ,this.x, this.y, 45, 45);

    }
}



function Used(){
    if(checkIntersection(player,item1) && interact && item1.type && stage == 11.1){
        pick.play();
        allBlueprint++;
        item1.type = 0;
        plusTask(QuestBP, allBlueprint);
    }else if(checkIntersection(player,item2) && interact && item2.type && stage == 22.2){
        pick.play();
        allBlueprint++;
        item2.type = 0;
        plusTask(QuestBP, allBlueprint);
    }else if(checkIntersection(player,item3) && interact && item3.type && stage == 21.1){
        pick.play();
        allBlueprint++;
        item3.type = 0;
        plusTask(QuestBP, allBlueprint);
    }
    if(allBlueprint >= 3 && countBlueprint == 0){
        rocket1.type = 1;
        rocket2.type = 1;
        rocket3.type = 1;
        countBlueprint = 1;
    

    }
    if(checkIntersection(player,rocket1) && interact && rocket1.type && stage == 2.2){
        pick.play();
        allPart++;
        rocket1.type = 0;
        plusTask(QuestBP, allPart);
    }else if(checkIntersection(player,rocket2) && interact && rocket2.type && stage == 2.1){
        pick.play();
        allPart++;
        rocket2.type = 0;
        plusTask(QuestBP, allPart);
    }else if(checkIntersection(player,rocket3) && interact && rocket3.type && stage == 12.1){
        pick.play();
        allPart++;
        rocket3.type = 0;
        plusTask(QuestBP, allPart);
    }
    if(checkIntersection(player,med1) && interact && med1.type && stage == 12.2){
        pick.play();
        player.maxhp = 3;
        player.stamina = 122;
        med1.type = 0;
    }else if(checkIntersection(player,med2) && interact && med2.type && stage == 1.1){
        pick.play();
        player.maxhp = 3;
        player.stamina = 122;
        med2.type = 0;
    }else if(checkIntersection(player,med3) && interact && med3.type && stage == 22.1){
        pick.play();
        player.maxhp = 3;
        player.stamina = 122;
        med3.type = 0;
    }
    if(checkIntersection(player,panel) && interact && stage == 0 && fullrocket.type == 0 && allPart >= 3){//  
        fullrocket.type = 1;
        player.active = false;
        endingsound.play();
    }
    if(fullrocket.y == -500){
        endingsound.pause();
        window.location.href='./timelinePage.html'
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
            left.x += 1;
            right.x -= 1;
            downarrow.y += 1;
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
            left.x -= 1;
            right.x += 1;
            downarrow.y -= 1;
            count--;
            if(count <= 0){
                up = true;
            }
        }
    }
    
function Questionbar(x,y,width,height){
    this.draw = function(){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        ctx.fillStyle = "black";
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}
    

