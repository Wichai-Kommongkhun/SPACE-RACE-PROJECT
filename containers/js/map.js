var timmer = false;
var countTimmer = 0;
var distance = 1280;
var previous_pos = 620;
var previous_pos_dog = 620;

function countStage(){
    if(player.x < -100){
        stage++;
        player.x = 1280;
        dog.x = 1280 + distance;
    }else if (player.x > 1280){
        stage--;
        player.x = -50;
        dog.x = 0 - distance;
    }
}

function editMap(){
    doors = [];
    locker = [];
    ladders = [];
    

    if(stage == 0){
        locker.push(new Locker(1070,370,160,250,0));
        locker.push(new Locker(90,370,160,250,1));
        locker.push(new Locker(800,370,160,250,1));
        dog.x = 1600;
        if(fullrocket.type){
            fullrocket.draw7()
            fullrocket.y -= 10
        }
        if(checkIntersection(player,panel)){
            downarrow.x = panel.x + 40;
            downarrow.draw3();}
        panel.draw()
        left.draw1();
        Hide();
        collisionRight();
    }
    else if(stage === 1){
        doors.push(new Door(1065,370,160,250,1));
        locker.push(new Locker(830,370,160,250,1));
        left.draw1();
        right.draw2();
        Hide();
        ChangeRoom();
    }else if(stage === 1.1){
        doors.push(new Door(1065,370,160,250,1));
        if(med2.type){
            med2.draw();
        }
        collisionRight();
        collisionLeft();
        ChangeRoom();
    }else if(stage === 2){
        doors.push(new Door(30,370,160,250,2.2));
        doors.push(new Door(1090,370,160,250,2.1));
        locker.push(new Locker(680,370,160,250,1));
        left.draw1();
        right.draw2();
        Hide();
        ChangeRoom();
    }else if(stage === 2.1){
        doors.push(new Door(55,370,160,250,2));
        if(rocket2.type){
            rocket2.draw5();
        }
        collisionRight();
        collisionLeft();
        ChangeRoom();
    }else if(stage === 2.2){
        doors.push(new Door(65,370,160,250,2.22));
        if(rocket1.type){
            rocket1.draw4();
        }
        collisionRight();
        collisionLeft();
        ChangeRoom();
    }else if(stage === 3){
        ladders.push(new Ladder(10,620,150,30,1));
        right.draw2();
        ChangeFloor();
        collisionLeft();
    }else if(stage === 11){
        doors.push(new Door(1070,370,160,250,11.1));
        left.draw1();
        ChangeRoom();
        collisionRight();
    }else if(stage === 11.1){
        doors.push(new Door(50,370,160,250,11));
        ChangeRoom();
        collisionLeft();
        collisionRight();
        if(item1.type){
            item1.draw1();
        }
    }else if(stage === 12){
        doors.push(new Door(30,370,160,250,12.1));
        doors.push(new Door(1090,370,160,250,12.2));
        locker.push(new Locker(280,370,160,250,1));
        locker.push(new Locker(850,370,160,250,1));
        left.draw1();
        right.draw2();
        Hide();
        ChangeRoom();
    }else if(stage === 12.1){
        doors.push(new Door(1060,370,160,250,12));
        locker.push(new Locker(570,370,160,250,0));
        if(rocket3.type){
            rocket3.draw6();
        }
        Hide();
        collisionRight();
        collisionLeft();
        ChangeRoom();
    }else if(stage === 12.2){
        doors.push(new Door(90,370,160,250,12.22));
        if(med1.type){
            med1.draw();
        }
        collisionRight();
        collisionLeft();
        ChangeRoom();
    }else if(stage === 13){
        ladders.push(new Ladder(10,620,150,30,1));
        right.draw2();
        ChangeFloor();
        collisionLeft();
    }else if(stage === 21){
        doors.push(new Door(1070,370,160,250,21.1));
        locker.push(new Locker(624,370,160,250,0)); //add locker
        locker.push(new Locker(435,370,160,250,0));
        locker.push(new Locker(246,370,160,250,0));
        locker.push(new Locker(57,370,160,250,0));
        left.draw1();
        Hide()
        collisionRight();
        ChangeRoom();
    }else if(stage === 21.1){
        doors.push(new Door(440,370,160,250,21));
        ChangeRoom();
        collisionLeft();
        collisionRight();
        if(item3.type){
            item3.draw3();
        }
    }else if(stage === 22){
        doors.push(new Door(30,370,160,250,22.1));
        doors.push(new Door(1090,370,160,250,22.2));
        locker.push(new Locker(763,370,160,250,0));
        locker.push(new Locker(575,370,160,250,0));
        locker.push(new Locker(386,370,160,250,0));
        left.draw1();
        right.draw2();
        Hide();
        ChangeRoom();
    }else if(stage === 22.1){
        doors.push(new Door(30,370,160,250,22.1));
        if(med3.type){
            med3.draw();
        }
        ChangeRoom();
        collisionRight();
        collisionLeft();
    }else if(stage === 22.2){
        doors.push(new Door(80,370,160,250,22.22));
        ChangeRoom();
        collisionRight();
        collisionLeft();
        if(item2.type){
            item2.draw2();
        }
    }else if(stage === 23){
        ladders.push(new Ladder(10,620,150,30,1));
        locker.push(new Locker(600,370,160,250,1));
        right.draw2();
        Hide();
        ChangeFloor();
        collisionLeft();
    }
}

function changeStage(){
    if(stage === 0){
        backgroundlayer1.src = "img/START.png";
        map.src = "img/map1.png"
    }else if(stage === 1){
        backgroundlayer1.src = 'img/F1-1.png';
        map.src = "img/map2.png"
    }else if(stage === 1.1){
        backgroundlayer1.src = 'img/1-3.png';
    }else if(stage === 2){
        backgroundlayer1.src = 'img/F1-2.png';
        map.src = "img/map3.png"
    }else if(stage === 2.1){
        backgroundlayer1.src = 'img/1-2.png';
    }else if(stage === 2.2){
        backgroundlayer1.src = 'img/1-1.png';
    }else if(stage === 3){
        backgroundlayer1.src = 'img/F1-3.png';
        map.src = "img/map4.png"
    }else if(stage === 11){
        backgroundlayer1.src = 'img/F2-1.png';
        map.src = "img/map5.png"
    }else if(stage === 11.1){
        backgroundlayer1.src = 'img/2-3.png';
    }else if(stage === 12){
        backgroundlayer1.src = 'img/F2-2.png';
        map.src = "img/map6.png"
    }else if(stage === 12.1){
        backgroundlayer1.src = 'img/2-1.png';
    }else if(stage === 12.2){
        backgroundlayer1.src = 'img/2-2.png';
    }else if(stage === 13){
        backgroundlayer1.src = 'img/F2-3.png';
        map.src = "img/map7.png"
    }else if(stage === 21){
        backgroundlayer1.src = 'img/F3-1.png';
        map.src = "img/map8.png"
    }else if(stage === 21.1){
        backgroundlayer1.src = 'img/3-3.png';
    }else if(stage === 22){
        backgroundlayer1.src = 'img/F3-2.png';
        map.src = "img/map9.png"
    }else if(stage === 22.1){
        backgroundlayer1.src = 'img/3-1.png';
    }else if(stage === 22.2){
        backgroundlayer1.src = 'img/3-2.png';
    }else if(stage === 23){
        backgroundlayer1.src = 'img/F3-3.png';
        map.src = "img/map10.png"
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
    changRoomBG.style.animation = 'wipwup 4s';
    previous_pos = player.x;
    for(let i = 0; i<ladders.length;i++){
        if(checkIntersection(player,ladders[i])){
            if(upKey && stage < 23){
                changRoomBG.style.animation = 'running';
                dog.x = 0 - distance;
                player.x = previous_pos;
                player.y -= 70;
                stage += 10;
                elevatoropens.play();
            }else if(downKey && stage >= 13){
                changRoomBG.style.animation = 'running';
                dog.x = 0 - distance
                player.x = previous_pos;
                player.y -= 70;
                stage -= 10;
                elevatoropens.play();
            }
        }
    }
}

function ChangeRoom(){
    changRoomBG.style.animation = 'wipwup 4s';
    for(let i = 0; i<doors.length;i++){
        if(checkIntersection(player,doors[i])){
            doors[i].framex = 1;

            if(upKey && stage == Math.floor(stage)){
                changRoomBG.style.animation = 'running';
                previous_pos = player.x;
                previous_pos_dog = dog.x;
                timmer = true;
                //หมา
                dog.x = 1500;
                countTimmer++;
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
                }else if(doors[i].type == 22.2){
                    stage += 0.2
                    player.x = 120;
                }else if(doors[i].type == 21.1){
                    stage += 0.1
                    player.x = 470;
                }else{
                    stage += 0.1;
                }
                dooropens.play();
            }else if(downKey && stage != Math.floor(stage)){
                changRoomBG.style.animation = 'running';
                player.x = previous_pos;
                //หมา
                if(previous_pos_dog < previous_pos){
                    dog.x = previous_pos_dog + countTimmer;
                }else{
                    dog.x = previous_pos_dog - countTimmer;
                }
                timmer = false
                if(doors[i].type == 2){
                    stage -= 0.1;
                }else if(doors[i].type == 2.22){
                    stage -= 0.2;
                }else if(doors[i].type == 12.22){
                    stage -= 0.2;
                }else if(doors[i].type == 22.22){
                    stage -= 0.2;
                }else{
                    stage -= 0.1;
                }
                dooropens.play();
            }
        }
    }
}

function Hide(){//add funct
    for(let i = 0; i<locker.length;i++){
        if(checkIntersection(player,locker[i]) && upKey){
            player.active = false
            if(locker[i].type == 0){
                lockerhide.play();
            }else{
                bushhide.play();
            }
        }
        if(checkIntersection(player,locker[i]) && downKey){
            player.active = true
            dog.active = true;
        }
        if(checkIntersection(player,locker[i])){
            downarrow.x = locker[i].x + locker[i].width/2.5;
            downarrow.draw3();
        }else{
            downarrow.x = 9999;
        }
    }
}

function Tiktok(){
    if(timmer){
        countTimmer += 30;
    }else   
        countTimmer = 0;
    
}


