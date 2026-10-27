const playButton = document.querySelector(#play-playButton);
const homeButton = document.querySelector("#home-button");
const homeScreen = document.querySelector("#home-screen");
const gameScreen = document.querySelector("#game-screen");

const world = document.querySelector(#game-world);


let gameActive = false;
let animationFrame;
let previousTime = 0;

let sceneWidth = 0;
let sceneHeight = 0;
let sceneScale = 1;
let groundY = 0;
let worldWidth = 0;


function goHome() {
    gameActive = false;
    cancelAnimationFrame(animationFrame);
    resetPlayer();

    gameScreen.hidden = true;
    homeScreen.hidden = false;

    playButton.focus({ preventScroll: true});
}

function resetPlayer() {
    clearInput();

    const sceneBounds = gameScreen.getBoundingClientRect();
    const playerBounds = player.getBoundingClientRect();

    sceneWidth = sceneBounds.width;
    sceneHeight = sceneBounds.height;
    sceneScale = sceneHeight / 720;
    worldWidth = sceneWidth;

     spriteWidth = playerBounds.width;
  hitboxWidth = playerBounds.width;
  hitboxHeight = playerBounds.height;
  hitboxOffsetX = 0;
  hitboxOffsetY = 0;

  world.style.width = worldWidth + "px";

  const groundBounds = world.querySelector(".ground").getBoundingClientRect();

  groundY =
    groundBounds.top -
    sceneBounds.top +
    groundBounds.height * 0.2;

  const startPosition = sceneWidth <= 700 ? 0.03 : 0.11;

  playerX = sceneWidth * startPosition + hitboxOffsetX;
  playerY = groundY - hitboxHeight;

  previousTime = 0;

  drawPlayer();
}

function updateGame(time) {
  if (!gameActive) {
    return;
  }

  const elapsed = previousTime
    ? Math.max((time - previousTime) / 1000, 0)
    : 0;

  const seconds = Math.min(elapsed, 0.032);

  previousTime = time;

  movePlayer(seconds);
  drawPlayer();

  animationFrame = requestAnimationFrame(updateGame);
}

playButton.addEventListener("click", startNewRun);
homeButton.addEventListener("click", goHome);

document.addEventListener("keydown", handleKeyDown);
document.addEventListener("keyup", handleKeyUp);