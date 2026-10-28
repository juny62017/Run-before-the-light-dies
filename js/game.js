const playButton = document.querySelector(#play-playButton);
const homeButton = document.querySelector("#home-button");
const homeScreen = document.querySelector("#home-screen");
const gameScreen = document.querySelector("#game-screen");

const world = document.querySelector(#game-world);
const startingPlatforms =
document.querySelector("#starting-platforms");


let gameActive = false;
let animationFrame;
let previousTime = 0;

let sceneWidth = 0;
let sceneHeight = 0;
let sceneScale = 1;
let groundY = 0;
let platforms = [];
let worldWidth = 0;


function goHome() {
    gameActive = false;
    cancelAnimationFrame(animationFrame);
    resetPlayer();

    gameScreen.hidden = true;
    homeScreen.hidden = false;

    playButton.focus({ preventScroll: true});
}

function addScenery(positions, source) {
  for (const decoration of positions) {
    const image = document.createElement('img');

    image.src = "assets/" + source;
    image.className = "level-sceneary";
    image.alt = "";
    image.draggable = false;

    image.style.left = decoration.x * sceneScale + "px";
    image.style.width = decoration.width * sceneScale + "px";

    addScenery.append(image);
  }
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
  hitboxWidth = playerBounds.width * 0.4;
  hitboxHeight = playerBounds.height * 0.95;
  hitboxOffsetX = playerBounds.width * 0.38;
  hitboxOffsetY = playerBounds.height * 0.03;

  world.style.width = worldWidth + "px";

  const groundBounds = world.querySelector(".ground").getBoundingClientRect();

  groundY =
    groundBounds.top -
    sceneBounds.top +
    groundBounds.height * 0.2;

    startingPlatforms.style.width = sceneWIDTH + "px";
    world.querySelector(".ground").style.width = sceneWidth + "px";

   const backgroundWidth = 
   Math.max(sceneWidth, 1280 * sceneScale);

   world.style.backgroundSize = 
   backgroundWidth + "px auto";

   world.style.backgroundPosition = 
   (sceneWidth - backgroundWidth) / 2 + "px center"

    platforms = Array.from(
       world.querySelectorAll(".stone-platform, .ground"),
       function (image) {
        const bounds = image.getBoundingClientRect();

        if ( image.classList.contains("ground")) {
          return {
            left: bounds.left - sceneBounds.left,
            right: bounds.right - sceneBounds.left,
            top: groundY,
            bottom: sceneHeight + hitboxHeight * 2,
            ground: true
          }
        }
       }
    )

    return {
      left: bounds.left - sceneBounds.left + bounds.width * 0.07,
      right: bounds.right - sceneBounds.left - bounds.width * 0.07,
      top: bounds.top - sceneBounds.top + bounds.height * 0.15,
      bottom: bounds.top - sceneBounds.top + bounds.height * 0.8,
    };
  }
};



  const startPosition = sceneWidth <= 700 ? 0.03 : 0.11;

  playerX = sceneWidth * startPosition + hitboxOffsetX;
  playerY = groundY - hitboxHeight;

  verticalVelocity = 0;
  grounded = true;
  jumpCount = 0;

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

  if (playerY > sceneHeight +  hitboxHeight) {
    respawnAtCheckpoint();
  }

  drawPlayer();

  animationFrame = requestAnimationFrame(updateGame);
}

playButton.addEventListener("click", startNewRun);
homeButton.addEventListener("click", goHome);

document.addEventListener("keydown", handleKeyDown);
document.addEventListener("keyup", handleKeyUp);

window.addEventListener("blur", clearInput);

document.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    clearInput();
    previousTime = 0;
  }
});

window.addEventListener("resize", function () {
  if (!gameScreen.hidden) {
    respawnAtCheckpoint();
  });

  