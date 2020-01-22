var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

// BUTTON START ?
// var launchBtn = document.getElementById("btn-go");
// launchBtn.onclick = requestAnimationFrame(gameLoop);

// CLEAR WHEN MOVING
function clearArea(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
};

var snake = {
    direction: "R", // right side
    speed: 20,
    body: [
        {x:60, y:100},
        {x:40, y:100},
        {x:20, y:100},
    ],
};

function drawSnake(){
    // IMAGE OR DRAW SNAKE
    // ctx.drawImage(snakeImg, snake.x, snake.y, 40, 40);
    // ctx.fillStyle = "green";
    // ctx.fillRect(snake.x, snake.y, 20, 20);
    for (let i = 0; i < snake.body.length; i++){
        ctx.strokeStyle = "black";
        ctx.strokeRect(snake.body[i].x, snake.body[i].y, 20, 20)
        ctx.fillStyle = (i == 0) ? "darkgreen" : "green";
        ctx.fillRect(snake.body[i].x, snake.body[i].y, 20, 20);
    };
};

var food = {
    x: Math.round(Math.random()*19) * 20,
    y: Math.round(Math.random()*19) * 20,
};

function drawFood(){
    ctx.fillStyle = "red";
    ctx.fillRect(food.x, food.y, 20, 20);
};

function moveSnake() {
    document.onkeydown = function(event){
        switch (event.keyCode) {
            case 38: // up arrow
            snake.direction = "T"; // top
            console.log("Going up!");
            break;
            case 40: // down arrow
            snake.direction = "B"; // bottom
            console.log("Going bot!");
            break;
            case 37: // left arrow
            snake.direction = "L"; // left
            console.log("Going left!");
            break;
            case 39: // right arrow
            snake.direction = "R"; // right
            console.log("Going right!");
            break;
        };
    };
};

var score = document.getElementById("points");
var currentScore = 0;

function eatFood(){
    if(snake.body[0].x === food.x && snake.body[0].y === food.y){
        currentScore += 10;
        console.log("MIAAAAM");
        console.log("I WANT ANOTHER ONE !!!");
        score.innerHTML = `${currentScore} points`;
        snake.body.push({x: snake.body[snake.body.length - 1].x - 20, y:snake.body[snake.body.length - 1].y});
        console.log(snake.body);
        drawFood();
    }
}

// SNAKE EATS ITS OWN TAIL
function ouroboros(){
    for (let i = 0; i < snake.body.length; i++){
        if (snake.body[0].x === snake.body[i].x && snake.body[0].y === snake.body[i].y){
            console.log("OUROBOROS");
            
        }
    }
}


// DOESN'T STOP
function stopGame(){
    for(let i = 0; i < snake.body.length; i++){
        if (snake.body[i].x < 0 || snake.body[i].x > 380 || snake.body[i].y < 0 || snake.body[i].y > 400){
            snake.isOut = true;
            console.log("YOU LOOOOOSE !!!");
        };
    };
};

function gameLoop(){
    moveSnake();
    switch(snake.direction){
        case "T":
            // snake.y -= snake.speed;
            for (let i = 0; i < snake.body.length; i++){
                snake.body[i].y -= snake.speed;
                snake.body[i].y < 0 ? snake.body[i].y = 380 : void(0);
            }
            break;
        case "B":
            // snake.y += snake.speed;
            for (let i = 0; i < snake.body.length; i++){
                snake.body[i].y += snake.speed;
                snake.body[i].y > 380 ? snake.body[i].y = 0 : void(0);
            }
            break;
        case "L":
            // snake.x -= snake.speed;
            for (let i = 0; i < snake.body.length; i++){
                snake.body[i].x -= snake.speed;
                snake.body[i].x < 0 ? snake.body[i].x = 380 : void(0);
            }
            break;
        case "R":
            // snake.x += snake.speed;
            for (let i = 0; i < snake.body.length; i++){
                snake.body[i].x += snake.speed;
                snake.body[i].x > 380 ? snake.body[i].x = 0 : void(0);
            }
            break;
    };
    clearArea();
    drawSnake();
    drawFood();
    stopGame();
    eatFood();
    // console.log("oooooooo");
    // console.log(food);
    // console.log(snake.body[0]);
    // requestAnimationFrame(gameLoop);
};
// requestAnimationFrame(gameLoop);

setInterval(gameLoop, 100);