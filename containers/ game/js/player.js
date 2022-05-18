function Player(x,y) {
    this.x = x;
    this.y = y;
    this.xspeed = 0;
    this.yspeed = 0;
    this.friction = 0;
    this.maxSpeed = 10;
    this.width = 100;
    this.height = 200;
    this.active = true;

    this.step = function() {
        //movement
        if(this.active){
            //Horizontal Movement
            if(!leftKey && !rightKey || leftKey && rightKey){
                //slow down
                this.xspeed *= this.friction;
            }else if(rightKey){
                //เดินขวา
                this.xspeed = 5;
                //scrolling object
                
                
            }else if(leftKey){
                //เดินซ้าย
                this.xspeed = -5;
                //scrolling object
                
            }

            //gravity
            this.yspeed += 5;

            //Correct speed 
            if(this.xspeed > this.maxSpeed){
                this.xspeed = this.maxSpeed;
            }else if (this.xspeed < -this.maxSpeed){
                this.xspeed = -this.maxSpeed;
            }
            if(this.xspeed > 0){
                this.xspeed = Math.floor(this.xspeed);
            }else{
                this.xspeed = Math.ceil(this.xspeed);
            }

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
        ctx.fillStyle = "green";
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}