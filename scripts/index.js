var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

// ------------------------------
// // CREATE SNAKE OBJECT
// const snakeImg = new Image();
// snakeImg.src = "/images/snake2.png";
// // set the start position of our image
// let snakeX = 50;
// let snakeY = 50;
// ctx.drawImage(snakeImg, snakeX, snakeY, 40, 40);
// ctx.stroke();
// ------------------------------

const snakeImg = new Image();
snakeImg.src = "/images/snake2.png";
var snakeX = 50;
var snakeY = 50;
var speedX = 3;
var speedY = 1;
{
    im: new Image()
}
document.onkeydown = function(event){

    switch (event.keyCode) {
        case 38: // up arrow
        snakeY -= 10;
        break;
        case 40: // down arrow
        snakeY += 10;
        break;
        case 37: // left arrow
        snakeX -= 10;
        break;
        case 39: // right arrow
        snakeX += 10;
        break;
    };

};

// ctx.drawImage(snakeImg, snakeX, snakeY, 40, 40);
// function animateSnake(){
//     requestAnimationFrame(animateSnake);
//     console.log("Foo"); // Test frame
//     // clearRect to remove past positions
//     ctx.clearRect(0, 0, innerWidth, innerHeight); 
    
//     ctx.drawImage(snakeImg, snakeX, snakeY, 40, 40);

//     if(snakeX + 40 > canvas.width || snakeX < 0){
//         speedX = -speedX;
//     }
//     snakeX += speedX;

//     if(snakeY + 40 > canvas.height || snakeY < 0){
//         speedY = -speedY;
//     }
//     snakeY += speedY;
// }
// animateSnake();


function gameLoop(){
    console.log("oooooooo")
    // snakeX++;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(snakeImg, snakeX, snakeY, 40, 40);
    requestAnimationFrame(gameLoop);
}
requestAnimationFrame(gameLoop)

// var goButton = document.querySelector("#btn-go");
// goButton.onclick = animateSnake();
