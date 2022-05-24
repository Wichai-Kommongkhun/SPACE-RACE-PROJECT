
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
    this.left = false;
    this.right = false;
    
    this.draw = function() {
        drawSprite(dogSprite, this.width * this.framex, this.height * this.framey,this.width, this.height, this.x, this.y, this.width, this.height);
    } 
}


function huntPlayer(){
    dog.moving = true
    if(paused || player.maxhp == 0){//add
        return
    }
    if(dog.active && player.active){//add player.active
        distance = Math.abs(player.x - dog.x);
        if(dog.x > player.x){
            dog.framey = 1;
            dog.x -= 10;
            dog.right = false;
            dog.left = true;
        }else{
            dog.framey = 0;
            dog.x += 10;
            dog.right = true;
            dog.left = false;
        }

        if(checkIntersection(player,dog) && player.active){//add player.active
            if(dog.x > player.x){
                player.x -= 200;
            }else{
                player.x += 200;
            }
            player.maxhp--;
        }
    }
    else if(player.active == false && dog.active && stage == Math.floor(stage) && stage != 0){ 
        if(dog.left){
            if(dog.x >= -200){
                dog.x -= 5
            }else{
                dog.left = false
                dog.active = false;
            }
        }else if(dog.right){
            if(dog.x <= 1480){
                dog.x += 5
            }else {
                dog.right = false;
                dog.active = false;
            }
        }
    }

}

function spawnDog(){
    if(stage == Math.floor(stage)){
        dog.active = true;
        if(stage == 0){
            dog.active = false;

        }
    }else{
        dog.active = false;
    }
}




