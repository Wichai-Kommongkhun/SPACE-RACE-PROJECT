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



const backgroundlayer1 = new Image();
backgroundlayer1.src = 'https://cdn.discordapp.com/attachments/936169548019826688/977216175064879174/START_1_1.png';
const playerSprite = new Image();
    playerSprite.src = 'https://cdn.discordapp.com/attachments/936169548019826688/976903143940034631/playersprite.png';
const healthbar = new Image();
    healthbar.src = 'https://cdn.discordapp.com/attachments/936169548019826688/977264896972582932/DisplayHpV.1.png';
const staminabar = new Image();
    staminabar.src = 'https://cdn.discordapp.com/attachments/936169548019826688/977322427380031508/DisplayStaminaV.1.png';





//Runs once page has loaded
window.onload = function() {
    //Assign canvas and context varriables
    canvas = document.getElementById("game-canvas");
    ctx = canvas.getContext("2d");

   

    //Setup key listeners
    setupInputs();
    //Create Player
    player = new Player(640,360);
    health = new Healths(50,50,200,35,0);
    stamina = new Staminas(60,90,200,100,0);

    //Create Borders for each stage
    for(let i = 0; i < 100; i++){
        borders.push(new Border(-5000 + 100*i,620,100,100,1));
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
    //Draw the border
    for(let i = 0; i<borders.length;i++){
        borders[i].draw();
    }
    
    for(let i = 0; i<doors.length;i++){
        doors[i].draw();
    }
    for(let i = 0; i<locker.length;i++){
        locker[i].draw();
    }
    player.draw();
    health.draw();
    stamina.draw();

}

function setupInputs(){
    document.addEventListener("keydown", function(event){
        player.moving = true;
        if(event.key === "w" || event.key === "ArrowUp") {
            upKey = true;
        }else if(event.key === "a" || event.key === "ArrowLeft") {
            leftKey = true;
        }else if(event.key === "d" || event.key === "ArrowRight") {
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
    if(player.framex < 2 && player.moving) player.framex++;
    else player.framex = 0;
}

function countStage(){
    if(player.x < -100){
        stage++;
        player.x = 1280;
        console.log(stage);
    }else if (player.x > 1280){
        stage--;
        player.x = -50;
        console.log(stage);
    }
}

function editMap(){
    doors = [];
    locker = [];
    if(stage == 0){
        locker.push(new Locker(1070,370,160,250,1));
    
        collisionRight();
    }
    else if(stage === 1){
       
        doors.push(new Door(1065,370,160,250,1));

    }else if(stage === 2){
       
        doors.push(new Door(30,370,160,250,1));
        doors.push(new Door(1090,370,160,250,1));
    }else if(stage === 3){
       
        doors.push(new Door(185,370,160,250,1));
        collisionLeft();
    }
}

function changeStage(){
    if(stage === 0){
        backgroundlayer1.src = "https://cdn.discordapp.com/attachments/936169548019826688/977232211315142657/START_1.png";
    }else if(stage === 1){
        backgroundlayer1.src = 'https://cdn.discordapp.com/attachments/936169548019826688/977246037049770044/F1-1.png';
    }else if(stage === 2){
        backgroundlayer1.src = 'https://cdn.discordapp.com/attachments/936169548019826688/977242783452647454/F1-2.png';
    }else if(stage === 3){
        backgroundlayer1.src = 'https://cdn.discordapp.com/attachments/936169548019826688/977242783196790814/F1-3.png';
    }
}

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

function collisionRight(){
    if(player.x + player.width > 1280){
        player.x = 1280 - player.width;
    }
}
function collisionLeft(){
    if(player.x < 0){
        player.x = 0;
    }
}