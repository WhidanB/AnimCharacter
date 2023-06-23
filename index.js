const player = document.getElementById("player");
const moveSize = 24;
let playerWalkX = 0;
let playerWalkY = 0;
const gameWall = document.getElementById("gameContainer");
let moveX = 800;
let moveY = 800;

for (let i = 0; i < 10; i++) {
    const spawn = document.createElement("div");
    gameWall.appendChild(spawn);
    spawn.classList.add("enemy");
    spawn.style.top = Math.floor(Math.random() * 800) + "px";
    spawn.style.left = Math.floor(Math.random() * 800) + "px";
  }
  
  const enemies = document.querySelectorAll(".enemy");
  console.log(enemies);
  
  function enemyMove(enemy) {

    let checkMove = Math.floor(Math.random() * 4 + 1);
    let enemyTop = parseInt(enemy.style.top);
    let enemyLeft = parseInt(enemy.style.left);
  
    if (checkMove === 1 && enemyTop < 800 - moveSize) {
      enemy.style.top = enemyTop + moveSize + "px";
    } else if (checkMove === 2 && enemyTop > 0) {
      enemy.style.top = enemyTop - moveSize + "px";
    } else if (checkMove === 3 && enemyLeft < 800 - moveSize) {
      enemy.style.left = enemyLeft + moveSize + "px";
    } else if (checkMove === 4 && enemyLeft > 0) {
      enemy.style.left = enemyLeft - moveSize + "px";
    }
  }
  
  enemies.forEach((enemy) => {
    setInterval(() => {
      enemyMove(enemy);
    }, 1500); // Adjust the interval duration as needed
  });


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
