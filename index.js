const player = document.getElementById("player");
const moveSize = 24;
let playerWalkX = 0;
let playerWalkY = 0;
const gameWall = document.getElementById("gameContainer");
let moveX = 800;
let moveY = 800;

for (i = 0; i < 5; i++) {
  const spawn = document.createElement("div");
  gameWall.appendChild(spawn);
  spawn.classList.add("ennemy");
  spawn.style.top = Math.floor(Math.random() * 800) + "px";
  spawn.style.left = Math.floor(Math.random() * 800) + "px";
}

const ennemy = document.querySelectorAll(".ennemy");
console.log(ennemy);

let ennemyMove = function () {
    let checkMove = Math.floor(Math.random() * 4 + 1);
    
    if (checkMove == 1) {
        ennemy.style.top = ennemy.style.top + moveSize + "px";
    } else if (checkMove == 2) {
        ennemy.style.top = ennemy.style.top - moveSize + "px";
    } else if (checkMove == 3) {
        ennemy.style.left = ennemy.style.left + moveSize + "px";
    } else if (checkMove == 4) {
        ennemy.style.left = ennemy.style.left - moveSize + "px";
    }
};


for(i=0; i<10; i++){
    ennemy.forEach(e => {
ennemyMove(e);
});
}


// document.body.addEventListener("click", ennemyMove())


// if(ennemy.style.top == player.style.top){
//     player.style.display = "none";
// }

document.addEventListener("keydown", function (event) {
  // console.log(player.offsetLeft, player.offsetTop);
  // console.log(gameWall);
  if (event.code == "ArrowUp") {
    if (playerWalkY > 0) {
      playerWalkY = playerWalkY - 1;
      player.style.top = player.offsetTop - moveSize + "px";
    }
    if (
      player.style.backgroundImage ==
      'url("img/heros/character_maleAdventurer_side.png")'
    ) {
      player.style.backgroundImage =
        'url("img/heros/character_maleAdventurer_walk1.png")';
    } else {
      player.style.backgroundImage =
        'url("img/heros/character_maleAdventurer_side.png")';
    }
  } else if (event.code == "ArrowRight") {
    if (playerWalkX < 32) {
      playerWalkX = playerWalkX + 1;
      player.style.left = player.offsetLeft + moveSize + "px";
    }
    if (
      player.style.backgroundImage ==
      'url("img/heros/character_maleAdventurer_side.png")'
    ) {
      player.style.backgroundImage =
        'url("img/heros/character_maleAdventurer_walk1.png")';
    } else {
      player.style.backgroundImage =
        'url("img/heros/character_maleAdventurer_side.png")';
    }
  } else if (event.code == "ArrowDown") {
    if (playerWalkY < 32) {
      playerWalkY = playerWalkY + 1;
      player.style.top = player.offsetTop + moveSize + "px";
    }
    if (
      player.style.backgroundImage ==
      'url("img/heros/character_maleAdventurer_side.png")'
    ) {
      player.style.backgroundImage =
        'url("img/heros/character_maleAdventurer_walk1.png")';
    } else {
      player.style.backgroundImage =
        'url("img/heros/character_maleAdventurer_side.png")';
    }
  } else if (event.code == "ArrowLeft") {
    if (playerWalkX > 0) {
      playerWalkX = playerWalkX - 1;
      player.style.left = player.offsetLeft - moveSize + "px";
    }
    if (
      player.style.backgroundImage ==
      'url("img/heros/character_maleAdventurer_side.png")'
    ) {
      player.style.backgroundImage =
        'url("img/heros/character_maleAdventurer_walk1.png")';
    } else {
      player.style.backgroundImage =
        'url("img/heros/character_maleAdventurer_side.png")';
    }
  }
});
