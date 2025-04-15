const dino = document.querySelector(".dino");
const cactus = document.querySelector(".cactus");
const scoreDisplay = document.querySelector(".score");

let score = 0;
let speed = 2000; 
let gameInterval;
let scoringInterval;


document.addEventListener("keydown", function (event) {
  if (event.code === "Space" || event.key === "ArrowUp") {
    jump();
  }
});

function jump() {
  if (!dino.classList.contains("jump")) {
    dino.classList.add("jump");
    setTimeout(() => {
      dino.classList.remove("jump");
    }, 500);
  }
}


function startMove() {
  cactus.style.animation = `cactusMove ${speed}ms linear infinite`;
}

function updateSpeedAndScore() {
  score += 1;
  scoreDisplay.innerText = `Score: ${score}`;

 
  if (score % 100 === 0 && speed > 600) {
    speed -= 100;
    cactus.style.animation = "none"; 
    void cactus.offsetWidth; 
    startMove(); 
  }
}

let collisionCheck = setInterval(function () {
  let Top = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  let Left = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

  if (Left < 90 && Left > 50 && Top >= 140) {
    alert("Game Over! Your score: " + score);
    reset();
  }
}, 10);

function reset() {
  clearInterval(scoringInterval);
  cactus.style.animation = "none";
  score = 0;
  speed = 2000;
  scoreDisplay.innerText = "Score: 0";
  setTimeout(() => {
    startMove();
    startScoring();
  }, 500);
}

function start() {
  scoringInterval = setInterval(updateSpeedAndScore, 100);
}


startMove();
start();
