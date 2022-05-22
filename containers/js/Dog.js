var distance = 1280;

function Dog(x,y) {
    this.x = x;
    this.y = y;
    this.xspeed = 1;
    this.yspeed = 0;
    this.friction = 0;
    this.maxSpeed = 10;
    this.framex = 0;
    this.framey = 0;
    this.width = 150;
    this.height = 250;
    this.active = true;
    this.moving = false;
    this.maxhp = 3;
    
    this.draw = function() {
        drawSprite(dogSprite, this.width * this.framex, this.height * this.framey,this.width, this.height, this.x, this.y, this.width, this.height);
    } 
}


function huntPlayer(){
    // if(paused || player.maxhp == 0){//add
    //     return
    // }
    // if(dog.active){
    //     distance = Math.abs(player.x - dog.x);
    //     if(dog.x > player.x){
    //         dog.moving = true
    //         dog.framey = 1;
    //         dog.x -= 8;
    //     }else{
    //         dog.framey = 0;
    //         dog.x += 8;
    //     }

    //     if(checkIntersection(player,dog)){
    //         if(dog.x > player.x){
    //             player.x -= 200;
    //         }else{
    //             player.x += 200;
    //         }
    //         player.maxhp--;
    //     }
    // }
}




