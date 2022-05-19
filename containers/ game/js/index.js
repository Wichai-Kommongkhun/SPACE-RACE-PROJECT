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
var borders = [];

const backgroundlayer1 = new Image();
backgroundlayer1.src = 'https://wallpaperaccess.com/full/7225449.png';
const playerSprite = new Image();
    playerSprite.src = 'https://cdn.discordapp.com/attachments/936169548019826688/976903143940034631/playersprite.png';
const block = new Image();
    block.src = 'https://cdn.discordapp.com/attachments/957761424233463818/976904776845496320/TEST.png';


//Runs once page has loaded
window.onload = function() {
    //Assign canvas and context varriables
    canvas = document.getElementById("game-canvas");
    ctx = canvas.getContext("2d");

   

    //Setup key listeners
    setupInputs();
    //Create Player
    player = new Player(640,360);

    //Create Borders
    for(let i = 0; i < 100; i++){
        borders.push(new Border(-2000 + 100*i,620,100,100,1));
    }
    for(let i = 0; i < 7; i++){
        borders.push(new Border(0,320 - 100*i ,100,100,2));
    }
    for(let i = 0; i < 7; i++){
        borders.push(new Border(1190,520 - 100*i ,100,100,2));
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
    ctx.drawImage(backgroundlayer1,0,0, canvas.width, canvas.height);
    player.draw();
    //Draw the border
    for(let i = 0; i<borders.length;i++){
        borders[i].draw();
    }
    imageFrame();
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

function imageFrame(){
    if(player.framex < 2 && player.moving) player.framex++;
    else player.framex = 0;
}


