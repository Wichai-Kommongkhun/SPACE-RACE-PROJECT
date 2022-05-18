//Create drawing variables
var canvas;
var ctx;

//Create input variables
var upKey;
var rightKey;
var downKey;
var leftKey;
var sprint;

//Create game variables
var gameLoop;
var player;
var borders = [];

const backgroundlayer1 = new Image();
backgroundlayer1.src = 'https://cdn.akamai.steamstatic.com/steam/apps/791200/ss_d87fd18b426f9d38908672787504680ba74a2e22.1920x1080.jpg?t=1649362507';


//Runs once page has loaded
window.onload = function() {
    //Assign canvas and context varriables
    canvas = document.getElementById("game-canvas");
    ctx = canvas.getContext("2d");

   

    //Setup key listeners
    setupInputs();
    //Create Player
    player = new Player(950,400);

    //Create Borders
    for(let i = 0; i < 13; i++){
        borders.push(new Border(0 + 100*i,620,100,100,1));
    }
    for(let i = 0; i < 7; i++){
        borders.push(new Border(0,320 - 100*i ,100,100,2));
    }
    for(let i = 0; i < 7; i++){
        borders.push(new Border(1190,520 - 100*i ,100,100,2));
    }

    //Start game loop
    gameLoop = setInterval(step, 1000/30);

}

function step(){
    //step player
    player.step();

    //Draw everything
    draw();
}

function draw(){
    //Clear the canvas

    
    ctx.fillStyle = "white";
    ctx.drawImage(backgroundlayer1,0,0);
    

    //Draw the player
    player.draw();

    //Draw the border
    for(let i = 0; i<borders.length;i++){
        borders[i].draw();
    }
}

function setupInputs(){
    document.addEventListener("keydown", function(event){
        if(event.key === "w" || event.key === "ArrowUp") {
            upKey = true;
        }else if(event.key === "a" || event.key === "ArrowLeft") {
            leftKey = true;
        }else if(event.key === "d" || event.key === "ArrowRight") {
            rightKey = true;
        }else if(event.key === "s" || event.key === "ArrowDown") {
            downKey = true;
        }else if(event.shiftKey) {
            sprint = true;
        }
    });
    document.addEventListener("keyup", function(event){
        if(event.key === "w" || event.key === "ArrowUp") {
            upKey = false;
        }else if(event.key === "a" || event.key === "ArrowLeft") {
            leftKey = false;
        }else if(event.key === "d" || event.key === "ArrowRight") {
            rightKey = false;
        }else if(event.key === "s" || event.key === "ArrowDown") {
            downKey = false;
        }else if(event.shiftKey) {
            sprint = false;
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

