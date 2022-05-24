function Paused (x,y,width,height,type){ 
    this.x = x;
    this.y = y;
    this.framex = 0;
    this.framey = 0;
    this.width = width;
    this.height = height;
    this.type = type;

        this.draw = function(){
            drawSprite(pause, this.width * this.framex, this.height * this.framey, this.width, this.height , this.x, this.y, this.width, this.height);
        }
        
}
function Gameover (x,y,width,height,type){ 
    this.x = x;
    this.y = y;
    this.framex = 0;
    this.framey = 0;
    this.width = width;
    this.height = height;
    this.type = type;

        this.draw = function(){
            drawSprite(gameover, this.width * this.framex, this.height * this.framey, this.width, this.height , this.x, this.y, this.width, this.height);
        }
        
}
function Minimap(x,y,width,height,type){ 
    this.x = x;
    this.y = y;
    this.framex = 0;
    this.framey = 0;
    this.width = width;
    this.height = height;
    this.type = type;

        this.draw = function(){
            drawSprite(map, this.width * this.framex, this.height * this.framey, this.width, this.height , this.x, this.y, this.width, this.height);
        }
        
}
function display(){
    if(pic == 0){
        controll.style.background = "url('img/2.png')"
        pic++
    }else if(pic == 1){
        controll.style.background = "url('img/3.png')"
        pic++
    }else if(pic == 2){
        controll.style.top = '27%'
        controll.style.left = '8%'
        controll.style.width = '1090px'
        controll.style.height = '374px'
        controll.style.background = "url('img/tip.png')"
        pic++
    }else if(pic == 3){
        controll.style.background = "url('img/tip2.png')"
        pic++
    }else{
        openingsong.currentTime = 0;
        openingsong.pause();
        quest.style.display = 'flex'
        controll.style.display = 'none';
        player.active = true
    }
}