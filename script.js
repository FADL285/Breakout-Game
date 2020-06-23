const rulesBtn = document.getElementById("rules-btn");
const closeBtn = document.getElementById("close-btn");
const rules = document.getElementById("rules");
const canvas = document.getElementById("canvas");
// Create canvas context
const ctx = canvas.getContext("2d");

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
  x: canvas.width / 2 - 40,
  y: canvas.height - 20,
  w: 80,
  h: 10,
  speed: 8,
  dx: 0,
};

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

// Main draw function
function drawCanvas() {
  drawBall();
  drawPaddle();
  drawScore();
}

// ////////////////////////////////////////
// ! Event Listener
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

drawCanvas();
