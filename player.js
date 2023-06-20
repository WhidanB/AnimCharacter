const player = document.getElementById("player");
const moveSize = 24;
let playerWalkX = 0;
let playerWalkY = 0;
const gameWall = document.getElementById("gameContainer");
let moveX=800;
let moveY=800;





document.addEventListener("keydown", function (event) {
    // console.log(player.offsetLeft, player.offsetTop);
    // console.log(gameWall);
  if (event.code == "ArrowUp") {
    if(playerWalkY >0){
    playerWalkY = playerWalkY - 1;
    player.style.top = player.offsetTop - moveSize + "px";
    }
    if(player.style.backgroundImage == 'url("img/6.png")'){
        player.style.backgroundImage = 'url("img/5.png")';
    }else{
        player.style.backgroundImage = 'url("img/6.png")';
        }
    
  } else if (event.code == "ArrowRight") {
    if(playerWalkX<32){
        playerWalkX = playerWalkX + 1;
        player.style.left = player.offsetLeft + moveSize + "px";
    }
    if(player.style.backgroundImage == 'url("img/8.png")'){
        player.style.backgroundImage = 'url("img/7.png")';
    }else{
        player.style.backgroundImage = 'url("img/8.png")';
        }

  } else if (event.code == "ArrowDown") {
    if(playerWalkY <32){
        playerWalkY = playerWalkY + 1;
        player.style.top = player.offsetTop + moveSize + "px";
        
        }
    if(player.style.backgroundImage == 'url("img/2.png")'){
        player.style.backgroundImage = 'url("img/1.png")';
    }else{
        player.style.backgroundImage = 'url("img/2.png")';
        }
  } else if (event.code == "ArrowLeft") {
    if(playerWalkX >0){
        playerWalkX = playerWalkX - 1;
        player.style.left = player.offsetLeft - moveSize + "px";
    }
    if(player.style.backgroundImage == 'url("img/4.png")'){
        player.style.backgroundImage = 'url("img/3.png")';
    }else{
        player.style.backgroundImage = 'url("img/4.png")';
        }
  }
});
