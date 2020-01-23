var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

// BUTTON START ?
// var launchBtn = document.getElementById("btn-go");
// launchBtn.onclick = requestAnimationFrame(gameLoop);

// CLEAR WHEN MOVING
function clearArea() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// FUNCTIONS FOR THE SNAKE DECLARATION
var snake = {
  direction: "R", // right side
  speed: 20,
  body: [
    { x: 80, y: 100 }
  ]
};
function drawSnake() {
  // IMAGE OR DRAW SNAKE
  // ctx.drawImage(snakeImg, snake.x, snake.y, 40, 40);
  // ctx.fillStyle = "green";
  // ctx.fillRect(snake.x, snake.y, 20, 20);
  for (let i = 0; i < snake.body.length; i++) {
    ctx.strokeStyle = "black";
    ctx.strokeRect(snake.body[i].x, snake.body[i].y, 20, 20);
    ctx.fillStyle = i == 0 ? "darkgreen" : "green";
    ctx.fillRect(snake.body[i].x, snake.body[i].y, 20, 20);
  }
}

// FUNCTIONS FOR THE FOOD
var food = {
  x: Math.round(Math.random() * 19) * 20,
  y: Math.round(Math.random() * 19) * 20,
  isEaten: false,
};
function drawFood(){
  ctx.fillStyle = "red";
  ctx.fillRect(food.x, food.y, 20, 20);
}
function newFood(){
  food.isEaten === true ? ctx.fillRect(food.x, food.y) : "";
}
function eatFood(){
  if (snake.body[0].x === food.x && snake.body[0].y === food.y) {
    food.isEaten = true;
    snake.body.push({});
    console.log("MIAAAAM");

    snake.body.length < 20 ? currentScore += 10 : currentScore += 20;

    score.innerHTML = `${currentScore} points`;
  }
}

// FUNCTION FOR THE SNAKE DIRECTION : N/E/S/W
function snakeDirection() {
  document.onkeydown = function(event) {
    switch (event.keyCode) {
      case 38: // up arrow
        snake.direction = "T"; // top
        console.log("Direction North!");
        break;
      case 40: // down arrow
        snake.direction = "B"; // bottom
        console.log("Direction South!");
        break;
      case 37: // left arrow
        snake.direction = "L"; // left
        console.log("Direction West!");
        break;
      case 39: // right arrow
        snake.direction = "R"; // right
        console.log("Direction East!");
        break;
    }
  };
}
var score = document.getElementById("points");
var currentScore = 0;


// FUNCTION TO CHECK IF THE SNAKE EATS ITS OWN TAIL
function ouroboros() {
  for (let i = 1; i < snake.body.length; i++) {
    if (
      snake.body[0].x === snake.body[i].x &&
      snake.body[0].y === snake.body[i].y
    ) {
      console.log("OUROBOROS", snake.body);
      snake.speed = 0;
    }
  }
}

// FUNCTION MOVE SNAKE WITH
function moveSnake() {
  switch (snake.direction) {
    case "T":
      for (let i = snake.body.length === 1 ? snake.body.length : snake.body.length - 1; i > 0; i--){
        snake.body.length === 1 ? "" : (snake.body[i].x = snake.body[i - 1].x);
        snake.body.length === 1 ? "" : (snake.body[i].y = snake.body[i - 1].y);
        snake.body[0].y < 0 ? (snake.body[0].y = 380) : "";
      }
      snake.body[0].y -= snake.speed;
      break;
    case "B":
      for (let i = snake.body.length === 1 ? snake.body.length : snake.body.length - 1; i > 0; i--){
        snake.body.length === 1 ? "" : (snake.body[i].x = snake.body[i - 1].x);
        snake.body.length === 1 ? "" : (snake.body[i].y = snake.body[i - 1].y);
        snake.body[0].y > 380 ? (snake.body[0].y = 0) : "";
      }
      snake.body[0].y += snake.speed;
      break;
    case "L":
      for (let i = snake.body.length === 1 ? snake.body.length : snake.body.length - 1; i > 0; i--){
        snake.body.length === 1 ? "" : (snake.body[i].x = snake.body[i - 1].x);
        snake.body.length === 1 ? "" : (snake.body[i].y = snake.body[i - 1].y);
        snake.body[0].x < 0 ? (snake.body[0].x = 380) : "";
      }
      snake.body[0].x -= snake.speed;
      break;
    case "R":
      for (let i = snake.body.length === 1 ? snake.body.length : snake.body.length - 1; i > 0; i--){
        snake.body.length === 1 ? "" : (snake.body[i].x = snake.body[i - 1].x);
        snake.body.length === 1 ? "" : (snake.body[i].y = snake.body[i - 1].y);
        snake.body[0].x > 380 ? (snake.body[0].x = 0) : "";
      }
      snake.body[0].x += snake.speed;
      break;
  }
}

// FUNCTION TO CHECK THE POSITION OF THE SNAKE
// function logBody() {
//   for (let i = 0; i < snake.body.length; i++) {
//     console.log(i, snake.body[i]);
//   }
// }

function gameLoop() {
  clearArea();
  snakeDirection();
  eatFood();
  drawFood();
  moveSnake();
  ouroboros();
  drawSnake();
  // requestAnimationFrame(gameLoop);
  // logBody();
}
setInterval(gameLoop, 100);
// buttonEasy.onclick = setInterval(gameLoop, 300);
// buttonMedium.onclick = setInterval(gameLoop, 100);
// buttonPython.onclick = setInterval(gameLoop, 50);
