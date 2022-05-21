//Create drawing variables
var canvas;
var ctx;

//audio
// var audioElem = new Audio('https://cdn.discordapp.com/attachments/957761424233463818/976912853028196422/A_Theme_For_Space_8bit_music.mp3');
// audioElem.volume = 0.05;
// audioElem.play();


//Create input variables
var upKey;
var rightKey;
var downKey;
var leftKey;
var sprint; 
var interact;


//Create game variables
var gameLoop;
var player;
var stage = 0;
var locker = [];
var borders = [];
var health;
var stamina;
var doors = [];
var locker = [];
var ladders = [];
var item = [];

const backgroundlayer1 = new Image();

const playerSprite = new Image();
    playerSprite.src = 'img/playersprite.png';
const healthbar = new Image();
    healthbar.src = 'img/DisplayHPV.1.png';
const staminabar = new Image();
    staminabar.src = 'img/DisplayStaminaV.1.png';
const blueprint = new Image();
    blueprint.src = 'img/blueprint.png';




//Runs once page has loaded
window.onload = function() {
    //Assign canvas and context varriables
    canvas = document.getElementById("game-canvas");
    ctx = canvas.getContext("2d");
    changRoomBG = document.querySelector("#ChangeBG");
   

    setupInputs();
    //Create Player
    player = new Player(640,470);
    health = new Healths(50,50,200,35,0);
    stamina = new Staminas(60,90,200,100,0);
    item[0] = new Item(630,460,100,100,0);

    //Create Borders for each stage
    for(let i = 0; i < 100; i++){
        borders.push(new Border(-5000 + 100*i,670,100,100,1));
    }
    
    //Start game loop
    gameLoop = setInterval(step, 50);

}

function step(){
    //step player
    player.step();
    
    //Draw everything
    draw();
}

function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH){
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}


function draw(){
    //Clear the canvas
    ctx.clearRect(0,0,canvas.width,canvas.height)
    ctx.drawImage(backgroundlayer1,0,0,canvas.width,canvas.height);
    editMap();
    countStage();
    changeStage();
    hpPlayer();
    imageFramePlayer();
    for(let i = 0; i<borders.length;i++){ borders[i].draw();}
    for(let i = 0; i<doors.length;i++){doors[i].draw();}
    for(let i = 0; i<locker.length;i++){locker[i].draw();}  
    for(let i = 0; i<ladders.length;i++){ladders[i].draw();}  
    player.draw();
    health.draw();
    stamina.draw();
    MovingItem();
}
function setupInputs(){
    document.addEventListener("keydown", function(event){
        if(event.key === "w" || event.key === "ArrowUp") {
            upKey = true;
        }else if(event.key === "a" || event.key === "ArrowLeft") {
            player.moving = true;
            leftKey = true;
        }else if(event.key === "d" || event.key === "ArrowRight") {
            player.moving = true;
            rightKey = true;
        }else if(event.key === "s" || event.key === "ArrowDown") {
            downKey = true;
        }else if(event.key === "Shift") {
            sprint = true;
        }else if(event.key === "e") {
            interact = true;
        }
    });
    document.addEventListener("keyup", function(event){
        player.moving = false;
        if(event.key === "w" || event.key === "ArrowUp") {
            upKey = false;
        }else if(event.key === "a" || event.key === "ArrowLeft") {
            leftKey = false;
        }else if(event.key === "d" || event.key === "ArrowRight") {
            rightKey = false;
        }else if(event.key === "s" || event.key === "ArrowDown") {
            downKey = false;
        }else if(event.key === "Shift") {
            
            sprint = false;
        }else if(event.key === "e") {
            interact = false;
        }
    });
}

function checkIntersection(r1,r2){
    if(r1.x >= r2.x + r2.width){
        return false;
    }else if( r1.x + r1.width <= r2.x){
        return false;
    }else if( r1.y >= r2.y + r2.height){
        return false;
    }else if( r1.y + r1.height <= r2.y){
        return false;
    }else{
        return true;
    }
}

function imageFramePlayer(){
    if(player.moving){
        if(player.framex < 2) {
            player.framex++;
        }
        else player.framex = 0;
    }else{
        if(player.framey == 2 || player.framey == 3){
            if(player.framex < 5) {
                player.framex++;
            }else player.framex = 0;
        }
    }
};

function hpPlayer(){
    if(player.maxhp == 3){
        health.framey = 0;
    }else if(player.maxhp == 2){
        health.framey = 1;
    }else if(player.maxhp == 1){
        health.framey = 2;
    }else if(player.maxhp == 0){
        health.framey = 3;
    }
}

