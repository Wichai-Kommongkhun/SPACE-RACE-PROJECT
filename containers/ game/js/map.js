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
    ladders = [];
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
        ladders.push(new Ladder(185,370,160,250,1));
        ChangeFloor();
        collisionLeft();
    }else if(stage === 11){
        collisionRight();
    }else if(stage === 13){
        ladders.push(new Ladder(185,370,160,250,1));
        ChangeFloor();
        collisionLeft();
    }
}

function changeStage(){
    if(stage === 0){
        backgroundlayer1.src = "https://cdn.discordapp.com/attachments/936169548019826688/977232211315142657/START_1.png";
    }else if(stage === 1){
        backgroundlayer1.src = 'img/F1-1.png';
    }else if(stage === 2){
        backgroundlayer1.src = 'img/F1-2.png';
    }else if(stage === 3){
        backgroundlayer1.src = 'img/F1-3.png';
    }
    
    else if(stage === 11){
        backgroundlayer1.src = 'img/F2-1.png';
    }else if(stage === 12){
        backgroundlayer1.src = 'img/F2-2.png';
    }else if(stage === 13){
        backgroundlayer1.src = 'img/F2-3.png';
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
            if(upKey){
                stage += 10;
            }else if(downKey && stage >= 13){
                stage -= 10;
            }
        }
    }
}