var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

// BUTTON START ?
// var launchBtn = document.getElementById("btn-go");
// launchBtn.onclick = requestAnimationFrame(gameLoop);

// CLEAR WHEN MOVING
function clearArea() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

var snake = {
  direction: "R", // right side
  speed: 20,
  body: [
    { x: 80, y: 100 },
    // { x: 60, y: 100 },
    // { x: 40, y: 100 },
    // { x: 20, y: 100 },
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

var food = {
  x: Math.round(Math.random() * 19) * 20,
  y: Math.round(Math.random() * 19) * 20
};

function drawFood() {
  ctx.fillStyle = "red";
  ctx.fillRect(food.x, food.y, 20, 20);
}

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

function eatFood() {
  if (snake.body[0].x === food.x && snake.body[0].y === food.y){
    currentScore += 10;
    console.log("MIAAAAM");
    score.innerHTML = `${currentScore} points`;
    snake.body.push({x: 0, y:0});

    // for (let i = 1; i < snake.body.length; i++) {
    //   switch (snake.direction) {
    //     case "R":
    //       snake.body.push({
    //         x: snake.body[snake.body.length - 1].x - 20,
    //         y: snake.body[snake.body.length - 1].y
    //       });
    //       break;
    //     case "L":
    //       snake.body.push({
    //         x: snake.body[snake.body.length - 1].x + 20,
    //         y: snake.body[snake.body.length - 1].y
    //       });
    //       break;
    //     case "T":
    //       snake.body.push({
    //         x: snake.body[snake.body.length - 1].x,
    //         y: snake.body[snake.body.length - 1].y + 20
    //       });
    //       break;
    //     case "B":
    //       snake.body.push({
    //         x: snake.body[snake.body.length - 1].x,
    //         y: snake.body[snake.body.length - 1].y - 20
    //       });
    //       break;
    //   }
    // }
    console.log(snake.body);
  }
}

// SNAKE EATS ITS OWN TAIL
function ouroboros() {
  for (let i = 1; i < snake.body.length; i++) {
    if (
      snake.body[0].x === snake.body[i].x &&
      snake.body[0].y === snake.body[i].y
    ) {
      console.log("OUROBOROS", snake.body);
    }
  }
}

// FUNCTION STOPGAME : DOESN'T WORK FOR NOOOOOOOW
// function stopGame() {
//   for (let i = 0; i < snake.body.length; i++) {
//     if (
//       snake.body[i].x < 0 ||
//       snake.body[i].x > 380 ||
//       snake.body[i].y < 0 ||
//       snake.body[i].y > 400
//     ) {
//       snake.isOut = true;
//       console.log("YOU LOOOOOSE !!!");
//     }
//   }
// }


function moveSnake(){
    switch (snake.direction) {
        case "T":
            for (let i = snake.body.length === 1 ? snake.body.length : snake.body.length - 1; i > 0; i--) {
              snake.body.length === 1 ? "" : snake.body[i].x = snake.body[i - 1].x;
              snake.body.length === 1 ? "" : snake.body[i].y = snake.body[i - 1].y;
              snake.body[0].y -= snake.speed;
              snake.body[0].y < 0 ? (snake.body[0].y = 380) : console.log("GOING TOP");
            }
          break;
        case "B":
            for (let i = snake.body.length === 1 ? snake.body.length : snake.body.length - 1; i > 0; i--) {
              snake.body.length === 1 ? "" : snake.body[i].x = snake.body[i - 1].x;
              snake.body.length === 1 ? "" : snake.body[i].y = snake.body[i - 1].y;
              snake.body[0].y += snake.speed;
              snake.body[0].y > 380 ? (snake.body[0].y = 0) : console.log("GOING BOT");
            }
          break;
        case "L":
            for (let i = snake.body.length === 1 ? snake.body.length : snake.body.length - 1; i > 0; i--) {
              snake.body.length === 1 ? "" : snake.body[i].x = snake.body[i - 1].x;
              snake.body.length === 1 ? "" : snake.body[i].y = snake.body[i - 1].y;
              snake.body[0].x -= snake.speed;
              snake.body[0].x < 0 ? (snake.body[0].x = 380) : console.log("GOING LEFT");
            }
          break;
        case "R":
            for (let i = snake.body.length === 1 ? snake.body.length : snake.body.length - 1; i > 0; i--) {
                snake.body.length === 1 ? "" : snake.body[i].x = snake.body[i - 1].x;
                snake.body.length === 1 ? "" : snake.body[i].y = snake.body[i - 1].y;
                snake.body[0].x += snake.speed;
                snake.body[0].x > 380 ? (snake.body[0].x = 0) : console.log("GOING RIGHT");
              }
          break;
      }
}

function gameLoop() {
  moveSnake();
  clearArea();
  snakeDirection();
  drawSnake();
  drawFood();
  eatFood();
  ouroboros();
  // stopGame();
  // console.log("oooooooo");
  // console.log(food);
  // console.log(snake.body[0]);
  // requestAnimationFrame(gameLoop);
}
setInterval(gameLoop, 250);