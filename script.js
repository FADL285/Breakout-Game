const rulesBtn = document.getElementById("rules-btn");
const closeBtn = document.getElementById("close-btn");
const rules = document.getElementById("rules");
const canvas = document.getElementById("canvas");
// Create canvas context
const ctx = canvas.getContext("2d");

// bricks info
const bricksRowCount = 9;
const bricksColCount = 5;

// Score
let score = 0;

//  creat ball props
const ball = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  size: 10,
  speed: 4,
  dx: 4,
  dy: -4,
};

// create paddle props
const paddle = {
  x: canvas.width / 2 - 50,
  y: canvas.height - 20,
  w: 100,
  h: 10,
  speed: 8,
  dx: 0,
};

// create brick props
const brickInfo = {
  w: 70,
  h: 20,
  padding: 10,
  offsetX: 45,
  offsetY: 60,
  visible: true,
};

// create bricks
let bricks = [];
for (let i = 0; i < bricksRowCount; i++) {
  bricks[i] = [];

  for (let j = 0; j < bricksColCount; j++) {
    const x = i * (brickInfo.w + brickInfo.padding) + brickInfo.offsetX;
    const y = j * (brickInfo.h + brickInfo.padding) + brickInfo.offsetY;
    bricks[i][j] = { x, y, ...brickInfo };
  }
}

// ! Functions
// 1- draw ball on canvas function
function drawBall() {
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.size, 0, Math.PI * 2);
  ctx.fillStyle = "#0095dd";
  ctx.fill();
  ctx.closePath();
}

// 2- draw paddle on canvas function
function drawPaddle() {
  ctx.beginPath();
  ctx.fillStyle = "#0095dd";
  ctx.fillRect(paddle.x, paddle.y, paddle.w, paddle.h);
  ctx.closePath();
}

// 3- draw score on canvas function
function drawScore() {
  ctx.font = "22px Arial";
  ctx.fillText(`Score: ${score}`, canvas.width - 100, 30);
}

// 4- draw bricks on canvas function
function drawBricks() {
  bricks.forEach((column) => {
    column.forEach((brick) => {
      ctx.beginPath();
      ctx.fillRect(brick.x, brick.y, brick.w, brick.h);
      ctx.fillStyle = brick.visible ? "#0095dd" : "transparent";
      ctx.fill();
      ctx.closePath();
    });
  });
}

// 4- Move Paddle function
function movePaddle() {
  paddle.x += paddle.dx;

  // Wall detection
  if (paddle.x + paddle.w > canvas.width - 2) {
    paddle.x = canvas.width - paddle.w - 2;
  } else if (paddle.x < 2) {
    paddle.x = 2;
  }
}

// Main draw function
function drawCanvas() {
  // clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  drawPaddle();
  drawScore();
  drawBricks();
}

// update function
function update() {
  movePaddle();

  drawCanvas();

  requestAnimationFrame(update);
}

// keyDown event Function
function keyDown(e) {
  if (e.keyCode === 39) {
    paddle.dx = paddle.speed;
  } else if (e.keyCode === 37) {
    paddle.dx = -paddle.speed;
  }
}
// keyUp event Function
function keyUp(e) {
  paddle.dx = 0;
}

// ////////////////////////////////////////
// ! Event Listener

// keyboard events
window.addEventListener("keydown", keyDown);
window.addEventListener("keyup", keyUp);

// toggle rules container events
rulesBtn.addEventListener("click", () => {
  rules.classList.add("show");
});

window.addEventListener("mouseup", (e) => {
  if (!rules.contains(e.target)) {
    rules.classList.remove("show");
  }
});

closeBtn.addEventListener("click", () => {
  rules.classList.remove("show");
});
// ///////////////////////////////////////

update();
