const player = document.getElementById("player");
const moveSize = 24;
let playerWalkX = 0;
let playerWalkY = 0;
const gameWall = document.getElementById("gameContainer");
let moveX = 800;
let moveY = 800;

function enemySpawn(){
for (let i = 0; i < 10; i++) {
    const spawn = document.createElement("div");
    gameWall.appendChild(spawn);
    spawn.classList.add("enemy");
    spawn.style.top = Math.floor(Math.random() * 800) + "px";
    spawn.style.left = Math.floor(Math.random() * 800) + "px";
  }
  enemies = document.querySelectorAll(".enemy");
}

enemySpawn();
const spawn = setInterval(enemySpawn, 10000);



function getPlayerCoordinates() {
  const playerRect = player.getBoundingClientRect();
  return {
    top: playerRect.top + playerRect.height / 2,
    left: playerRect.left + playerRect.width / 2
  };
}

function enemyMove(enemy) {
  const playerCoordinates = getPlayerCoordinates();
  const playerTop = playerCoordinates.top;
  const playerLeft = playerCoordinates.left;
  console.log(enemies);
  
    let enemyTop = parseInt(enemy.style.top);
    let enemyLeft = parseInt(enemy.style.left);
  
    if (enemyTop < playerTop) {
      enemyTop += moveSize;
    } else if (enemyTop > playerTop) {
      enemyTop -= moveSize;
    }
  
    if (enemyLeft < playerLeft) {
      enemyLeft += moveSize;
    } else if (enemyLeft > playerLeft) {
      enemyLeft -= moveSize;
    }
  
    // Vérifier les limites du cadre
    enemyTop = Math.max(0, Math.min(moveY - moveSize, enemyTop));
    enemyLeft = Math.max(0, Math.min(moveX - moveSize, enemyLeft));
  
    enemy.style.top = enemyTop + "px";
    enemy.style.left = enemyLeft + "px";
  }

  setInterval(() => {
    enemies = document.querySelectorAll(".enemy");
  enemies.forEach((enemy) => {
      enemyMove(enemy);
    })}, 400); // Adjust the interval duration as needed
  ;

// document.body.addEventListener("click", enemyMove())

// if(enemy.style.top == player.style.top){
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
      getPlayerCoordinates();
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
    getPlayerCoordinates();
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
    getPlayerCoordinates();
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
  getPlayerCoordinates();
});
