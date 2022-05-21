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

var previous_pos = 620;

function editMap(){
    doors = [];
    locker = [];
    ladders = [];
    if(stage == 0){
        locker.push(new Locker(1070,370,160,250,1));
        collisionRight();
    }
    else if(stage === 1){
        doors.push(new Door(1065,370,160,250,1));
        ChangeRoom();
    }else if(stage === 1.1){
        doors.push(new Door(1065,370,160,250,1));
        collisionRight();
        collisionLeft();
        ChangeRoom();
    }else if(stage === 2){
        doors.push(new Door(30,370,160,250,2.2));
        doors.push(new Door(1090,370,160,250,2.1));
        ChangeRoom();
    }else if(stage === 2.1){
        doors.push(new Door(55,370,160,250,2));
        collisionRight();
        collisionLeft();
        ChangeRoom();
    }else if(stage === 2.2){
        doors.push(new Door(65,370,160,250,2.22));
        collisionRight();
        collisionLeft();
        ChangeRoom();
    }else if(stage === 3){
        ladders.push(new Ladder(0,370,160,250,1));
        ChangeFloor();
        collisionLeft();
    }else if(stage === 11){
        doors.push(new Door(1070,370,160,250,11.1));
        ChangeRoom();
        collisionRight();
    }else if(stage === 11.1){
        doors.push(new Door(50,370,160,250,11));
        ChangeRoom();
        collisionLeft();
        collisionRight();
        item[0].draw();
    }else if(stage === 12){
        doors.push(new Door(30,370,160,250,12.1));
        doors.push(new Door(1090,370,160,250,12.2));
        ChangeRoom();
    }else if(stage === 12.1){
        doors.push(new Door(1060,370,160,250,12));
        collisionRight();
        collisionLeft();
        ChangeRoom();
    }else if(stage === 12.2){
        doors.push(new Door(90,370,160,250,12.22));
        collisionRight();
        collisionLeft();
        ChangeRoom();
    }else if(stage === 13){
        ladders.push(new Ladder(0,370,160,250,1));
        ChangeFloor();
        collisionLeft();
    }else if(stage === 21){
        doors.push(new Door(1070,370,160,250,12.2));
        collisionRight();
        ChangeRoom();
    }else if(stage === 22){
        doors.push(new Door(30,370,160,250,12.1));
        doors.push(new Door(1090,370,160,250,12.2));
        ChangeRoom();
    }else if(stage === 23){
        ladders.push(new Ladder(0,370,160,250,1));
        ChangeFloor();
        collisionLeft();
    }else if(stage === 31){
        collisionRight();
    }else if(stage === 32){
    }else if(stage === 33){
        ladders.push(new Ladder(0,370,160,250,1));
        ChangeFloor();
        collisionLeft();
    }
}

function changeStage(){
    if(stage === 0){
        backgroundlayer1.src = "img/START.png";
    }else if(stage === 1){
        backgroundlayer1.src = 'img/F1-1.png';
    }else if(stage === 1.1){
        backgroundlayer1.src = 'img/1-3.png';
    }else if(stage === 2){
        backgroundlayer1.src = 'img/F1-2.png';
    }else if(stage === 2.1){
        backgroundlayer1.src = 'img/1-2.png';
    }else if(stage === 2.2){
        backgroundlayer1.src = 'img/1-1.png';
    }else if(stage === 3){
        backgroundlayer1.src = 'img/F1-3.png';
    }else if(stage === 11){
        backgroundlayer1.src = 'img/F2-1.png';
    }else if(stage === 11.1){
        backgroundlayer1.src = 'img/2-3.png';
    }else if(stage === 12){
        backgroundlayer1.src = 'img/F2-2.png';
    }else if(stage === 12.1){
        backgroundlayer1.src = 'img/2-1.png';
    }else if(stage === 12.2){
        backgroundlayer1.src = 'img/2-2.png';
    }else if(stage === 13){
        backgroundlayer1.src = 'img/F2-3.png';
    }else if(stage === 21){
        backgroundlayer1.src = 'img/F3-1.png';
    }else if(stage === 22){
        backgroundlayer1.src = 'img/F3-2.png';
    }else if(stage === 23){
        backgroundlayer1.src = 'img/F3-3.png';
    }else if(stage === 31){
        backgroundlayer1.src = 'img/F4-1.png';
    }else if(stage === 32){
        backgroundlayer1.src = 'img/F4-2.png';
    }else if(stage === 33){
        backgroundlayer1.src = 'img/F4-3.png';
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

function ChangeFloor(){
    for(let i = 0; i<ladders.length;i++){
        if(checkIntersection(player,ladders[i])){
            if(upKey && stage < 33){
                player.x = 40;
                stage += 10;
            }else if(downKey && stage >= 13){
                player.x = 40;
                stage -= 10;
            }
        }
    }
}
function ChangeRoom(){
    for(let i = 0; i<doors.length;i++){
        if(checkIntersection(player,doors[i])){
            if(upKey && stage == Math.floor(stage)){
                changRoomBG.style.animation = 'wipwup 3s';
                previous_pos = player.x;
                if(doors[i].type == 2.1){
                    stage += 0.1;
                    player.x = 90;
                }else if(doors[i].type == 2.2){
                    stage += 0.2
                    player.x = 90;
                }else if(doors[i].type == 11.1){
                    stage += 0.1
                    player.x = 90;
                }else if(doors[i].type == 12.1){
                    stage += 0.1
                    player.x = 1100;
                }else if(doors[i].type == 12.2){
                    stage += 0.2
                    player.x = 120;
                }else{
                    stage += 0.1;
                }
                console.log(stage)
            }else if(downKey && stage != Math.floor(stage)){
                changRoomBG.style.animation = 'wipwup 3s';
                player.x = previous_pos;
                if(doors[i].type == 2){
                    stage -= 0.1;
                }else if(doors[i].type == 2.22){
                    stage -= 0.2;
                }else if(doors[i].type == 12.22){
                    stage -= 0.2;
                }else{
                    stage -= 0.1;
                }
                console.log(stage)
            }
        }
    }
}