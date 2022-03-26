const canvas = document.getElementById("board");
const ctx = canvas.getContext("2d");

let speed = 7;

let tileCount = 20;
let tileSize = canvas.width / tileCount - 2;

// Initial snake position in the center
let headX = 10;
let headY = 10;

let appleX = Math.floor(Math.random() * tileCount);
let appleY = Math.floor(Math.random() * tileCount);

let xVelocity = 0;
let yVelocity = 0;

function drawGame() {
  clearScreen();
  changeSnakePosition();

  if (checkAppleCollision()) {
    growSnake();
  }
  drawApple();
  drawSnake();
  setTimeout(drawGame, 1000 / speed);
}

function changeSnakePosition() {
  headX = headX + xVelocity;
  headY = headY + yVelocity;
}
function clearScreen() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawSnake() {
  ctx.fillStyle = "green";
  ctx.fillRect(headX * tileCount, headY * tileCount, tileSize, tileSize);
}

function drawApple() {
  ctx.fillStyle = "red";
  ctx.fillRect(appleX * tileCount, appleY * tileCount, tileSize, tileSize);
}

function checkAppleCollision() {
  if (appleX == headX && appleY == headY) {
    appleX = Math.floor(Math.random() * tileCount);
    appleY = Math.floor(Math.random() * tileCount);
    return true;
  }
  return false;
}

function growSnake() {}
document.body.addEventListener("keydown", keyDown);

function keyDown(event) {
  // Up key
  if (event.keyCode == 38) {
    if (yVelocity == 1) return;
    yVelocity = -1;
    xVelocity = 0;
  }
  // Down key
  else if (event.keyCode == 40) {
    if (yVelocity == -1) return;
    yVelocity = 1;
    xVelocity = 0;
  }

  // Left key
  else if (event.keyCode == 37) {
    if (xVelocity == 1) return;
    yVelocity = 0;
    xVelocity = -1;
  }

  // Right key
  else if (event.keyCode == 39) {
    if (xVelocity == -1) return;
    yVelocity = 0;
    xVelocity = 1;
  } else {
  }
}
drawGame();
