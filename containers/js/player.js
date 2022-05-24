
function Player(x,y) {
    this.x = x;
    this.y = y;
    this.xspeed = 0;
    this.yspeed = 0;
    this.friction = 0;
    this.maxSpeed = 10;
    this.framex = 0;
    this.framey = 0;
    this.width = 100;
    this.height = 200;
    this.active = false;
    this.moving = false;
    this.stamina = 122;
    this.maxhp = 3;

    this.step = function() {
        if(paused || player.maxhp == 0){//add
            return
        }
        //movement
        if(this.active){
            //Horizontal Movement
            if(rightKey){
                this.framey = 0;
                this.xspeed = 9;
                if(sprint && this.stamina > 0){
                    this.xspeed = 12;
                    this.stamina -= 1;
                }
            }else if(leftKey){
                this.framey = 1;
                this.xspeed = -9;
                if(sprint && this.stamina > 0){
                    this.xspeed = -12;
                    this.stamina -= 1;
                }
            }else{
                this.xspeed = 0;
            }
            

            if(this.framey == 0 && rightKey == false){
                this.framey = 2
            }else if(this.framey == 1 && leftKey == false){
                this.framey = 3
            }

            // Stamina regenaretion
            if(sprint == false && this.stamina < 122){
                this.stamina += 0.5;
            }

           
           this.yspeed += 5;

            //horizontal collision rect
            let horizontalRect = {
                x: this.x + this.xspeed,
                y: this.y,
                width: this.width,
                height: this.height
            }
            //Vertical collision rect
            let verticalRect = {
                x: this.x,
                y: this.y + this.yspeed,
                width: this.width,
                height: this.height
            }
            //Check for intersection
            for(let i = 0; i<borders.length;i++){
                let borderRect = {
                    x: borders[i].x,
                    y: borders[i].y,
                    width: borders[i].width,
                    height: borders[i].height
                }
                if(checkIntersection(horizontalRect,borderRect)){
                    while(checkIntersection(horizontalRect,borderRect)){
                        horizontalRect.x -= Math.sign(this.xspeed);
                    }
                    this.x = horizontalRect.x;
                    this.xspeed = 0;
                   
                }
                if(checkIntersection(verticalRect,borderRect)){
                    while(checkIntersection(verticalRect,borderRect)){
                        verticalRect.y -= Math.sign(this.yspeed);
                    }
                    this.y = verticalRect.y;
                    this.yspeed = 0;
                }
            }
            this.x += this.xspeed;
            this.y += this.yspeed;
        }
    }

    this.draw = function() {
        drawSprite(playerSprite, player.width * player.framex, player.height * player.framey, this.width, this.height, this.x, this.y, this.width, this.height);
    }
}