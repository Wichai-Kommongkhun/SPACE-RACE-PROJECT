//Create drawing variables
var canvas;
var ctx;


const footStep = new Audio('sound/footstep.mp3');
const huntSound = new Audio('sound/hunting.mp3');
const dooropens = new Audio('sound/opendoor.mp3');
const elevatoropens = new Audio('sound/elevator.mp3');
const pick = new Audio('sound/pickup.mp3');
const questsound = new Audio('sound/questcomplete.mp3');
const endingsound = new Audio('sound/endsound.mp3');
const lockerhide = new Audio('sound/locker.mp3');
const bushhide = new Audio('sound/bush.mp3');
const mapopen = new Audio('sound/openmap.mp3')
const openingsong = new Audio('sound/opmusic.mp3')
openingsong.volume = 0.05;
mapopen.volume = 0.5;
lockerhide.volume = 0.1;
endingsound.volume = 0.1;
questsound.volume = 0.3;
pick.volume = 0.2;
elevatoropens.volume = 0.5;
dooropens.volume = 0.1;
huntSound.volume = 0.1;
footStep.volume = 0.2;
openingsong.play();

//Create input variables
var upKey;
var rightKey;
var downKey;
var leftKey;
var sprint; 
var interact;
var paused = false;

var pic = 0


//Create game variables
var gameLoop;
var player;
var dog;
var stage = 0;
var locker = [];
var borders = [];
var health;
var stamina;
var doors = [];
var locker = [];
var ladders = [];
var item1,item2,item3;
var Esign;
var leftarrow;
var rightarrow;
var downarrow;
var panel;
var fullrocket

var allBlueprint = 0;
var allPart = 0;
var soundstep = 0;


var showmap = false;
var havemap = true; 

const backgroundlayer1 = new Image();
const playerSprite = new Image();
    playerSprite.src = 'img/playersprite.png';
const dogSprite = new Image();
    dogSprite.src = 'img/dogsprite.png';
const healthbar = new Image();
    healthbar.src = 'img/DisplayHPV.1.png';
const staminabar = new Image();
    staminabar.src = 'img/DisplayStaminaV.1.png';
const blueprint = new Image();
    blueprint.src = 'img/blueprint1.png';
const blueprint2 = new Image();
    blueprint2.src = 'img/blueprint2.png';
const blueprint3 = new Image();
    blueprint3.src = 'img/blueprint3.png';
const pause = new Image();
    pause.src = 'img/p.png';
const gameover = new Image();
    gameover.src = 'img/gameover.png';
const doorpicture = new Image();
    doorpicture.src = 'img/door.png';
const picrocket1 = new Image();
    picrocket1.src = 'img/rocket1.png';
const picrocket2 = new Image();
    picrocket2.src = 'img/rocket2.png';
const picrocket3 = new Image();
    picrocket3.src = 'img/rocket3.png';
const picfullrocket = new Image();
    picfullrocket.src = 'img/rockstart.png';
const medi = new Image();
    medi.src = 'img/hp.png';
const map = new Image();
    map.src = 'img/Displaymap.png'
const interactbar = new Image()
    interactbar.src = 'img/w.png'
const leftbar = new Image()
    leftbar.src = 'img/leftarrow.png'
const rightbar = new Image()
    rightbar.src = 'img/rightarrow.png'
const down = new Image();
    down.src = 'img/downarrow.png'

let QuestBP = document.querySelector("#QBP");
let Namequest = document.querySelector("#Quest-name");
let numbermission = document.querySelector("#mission")

let plusTask = (value,number) => {
    value.innerHTML = number + "/3";
    if(allBlueprint < 3){
        numbermission.innerHTML = "Missions 1/2";
        changeTask(Namequest, "-Blueprints: ")
    }else if(allBlueprint <= 3 && allPart < 3){
        numbermission.innerHTML = "Missions 2/2";
        changeTask(Namequest, "-Rocket Parts: ")
        value.innerHTML = allPart + "/3";

    }else{
        changeTask(Namequest, "-Launch a rocket")
        numbermission.innerHTML = "Missions Complete";
        QuestBP.innerHTML = "";
    }
}
let changeTask = (value,text) => {
    value.innerHTML = text;
}



//Runs once page has loaded
window.onload = function() {
    //Assign canvas and context varriables
    canvas = document.getElementById("game-canvas");
    ctx = canvas.getContext("2d");
    changRoomBG = document.querySelector("#ChangeBG");
    pauseBG = document.querySelector("#pauseBG")



    setupInputs();
    //Create Player
    player = new Player(640,470);
    dog = new Dog(1400, 420);
    health = new Healths(50,50,200,35,0);
    stamina = new Staminas(60,90,200,100,0);
    item1 = new Item(630,460,100,100,1);
    item2 = new Item(1160,420,100,100,1);
    item3 = new Item(0,440,100,100,1);
    displayPaused = new Paused(380,150,500,500,0) //add
    displayGameover = new Gameover(380,150,800,800,0)
    displayMap = new Minimap(250,150,800,800,0);//add
    rocket1 = new Rocket(1050,350,1000,1000,0);
    rocket2 = new Rocket(900,350,1000,1000,0);
    rocket3 = new Rocket(100,350,1000,1000,0);
    med1 = new Med(1030,420,1000,1000,1) // 12.2
    med2 = new Med(510,400,1000,1000,1) //1.1
    med3 = new Med(650,400,1000,1000,1) //22.1
    panel = new Panel(370,470,160,150,0);
    left = new Arrow(20,520,100,100,0);
    right = new Arrow(1210,520,100,100,0);
    fullrocket = new Rocket(460,150,1000,1000,0);
    //Create Borders for each stage
    for(let i = 0; i < 100; i++){
        borders.push(new Border(-5000 + 100*i,670,100,100,1));
    }
    downarrow = new Arrow(1000,320,70 ,70,1)
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
    countStage();
    changeStage();
    hpPlayer();
    imageFramePlayer();
    Tiktok();
    spawnDog();
    
    for(let i = 0; i<borders.length;i++){ borders[i].draw();}
    for(let i = 0; i<doors.length;i++){doors[i].draw();}
    for(let i = 0; i<locker.length;i++){locker[i].draw();}  
    for(let i = 0; i<ladders.length;i++){ladders[i].draw();}
   
    editMap();
    dog.draw();
    health.draw();
    stamina.draw();
    MovingItem();
    Used()
    if(player.active){ // add if
        player.draw();

    }
    if(paused){ //add
        player.moving = false;
        dog.moving = false;
    }
    if(player.maxhp == 0){
        displayGameover.draw();
        player.moving = false;
        dog.moving = false;
    }
    if(showmap && havemap){// add
        displayMap.draw()
    }
    MovingItem();
    Soundplay();
    huntPlayer();
}

function setupInputs(){
    document.addEventListener("keydown", function(event){
        if(event.key === "w" || event.key === "ArrowUp" || event.key === "W") {
            upKey = true;
        }else if(event.key === "a" || event.key === "ArrowLeft" || event.key === "A") {
            player.moving = true;
            leftKey = true;
        }else if(event.key === "d" || event.key === "ArrowRight" || event.key === "D") {
            player.moving = true;
            rightKey = true;
        }else if(event.key === "s" || event.key === "ArrowDown" || event.key === "S") {
            downKey = true;
        }else if(event.key === "Shift") {
            sprint = true;
        }else if(event.key === "e" || event.key === "E") {
            interact = true;
        }else if((event.key === "r" || event.key === "R") && player.maxhp == 0){
            this.location.reload();
        }
        else if(event.key === "p" || event.key === "P"){//add
            if(paused){
                pauseBG.style.display = 'none';
                canvas.style.filter = 'brightness(1)';
                paused = false
            }
            else{
                pauseBG.style.display = 'grid';
                canvas.style.filter = 'brightness(0.2)';
                paused = true
            }
        }else if(event.key === "m" || event.key === "M"){
            if(showmap){
                showmap = false
            }
            else{
                mapopen.play();
                showmap = true
            }
        }
    });
    document.addEventListener("keyup", function(event){
        player.moving = false;
        if(event.key === "w" || event.key === "ArrowUp" || event.key === "W") {
            upKey = false;
        }else if(event.key === "a" || event.key === "ArrowLeft" || event.key === "A") {
            leftKey = false;
        }else if(event.key === "d" || event.key === "ArrowRight" || event.key === "D") {
            rightKey = false;
        }else if(event.key === "s" || event.key === "ArrowDown" || event.key === "S") {
            downKey = false;
        }else if(event.key === "Shift") {
            sprint = false;
        }else if(event.key === "e" || event.key === "E") {
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
    if(leftKey || rightKey){
        if(player.framex < 5) {
            player.framex++;
        }
        else {
            player.framex = 0;
        }
    }else{
        if(player.framey == 2 || player.framey == 3){
            if(player.framex < 5) {
                player.framex++;
            }else player.framex = 0;
        }
    }
    if(dog.moving){
        if(dog.framex < 5) {
            dog.framex++;
        }
        else {
            dog.framex = 0;
        }
    }else{
        if(player.framey == 2 || player.framey == 3){
            if(player.framex < 5) {
                player.framex++;
            }else player.framex = 0;
        }
    }
    if(paused || player.maxhp == 0){//add
        player.framex = 0;
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

function Soundplay(){
    if((leftKey || rightKey) && player.active){
        footStep.play();
    }else{
        footStep.pause();
        footStep.currentTime = 0;
    }
    if(dog.active && (Math.abs(player.x - dog.x) <= 1280)){
        huntSound.play();
    }else{
        huntSound.pause();
        huntSound.currentTime = 0;
    } 
    if(player.maxhp == 0 || paused){
        footStep.pause();
        huntSound.pause();
        dooropens.pause();
    }
    if(allBlueprint == 3 && soundstep === 0){
        questsound.play();
        soundstep++;
    }else if(allPart == 3 && soundstep === 1){
        questsound.play();
        soundstep++;
    }
}




