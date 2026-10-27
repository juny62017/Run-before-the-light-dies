const player = document.querySelector(".player-start");

const movementSpeed = 300;
const jumpStrength = 780;
const gravity = 1500;
const heldKeys = {};

let playerX = 0;
let playerY = 0;
let verticalVelocity = 0;
let grounded = true;
let jumpCount = 0;
let spriteWidth = 0;
let hitboxWidth = 0;
let hitboxHeight = 0;
let hitboxOfsetX = 0;
let hitboxOfsetY = 0;


function clearInput() {
    for ( const key in heldKeys) {
        delete heldKeys[key];
    }
}

function drawPlayer() {
    player.style.left = playerX - hitboxOffsetX + "px";
    player.style.top = playerY - hitboxOfsetY + "px";
    player.style.bottom = "auto";
}

function movePlayer(seconds) {
    let direction = 0;

    if ( heldKeys.keyA || heldKeys.ArrowLeft) {
        direction -= 1;
    }

    if (heldKeys.keyD || heldKeys.ArrowRight) {
        direction += 1;
    }

    const oldX = playerX;
    playerX += direction * movementSpeed * sceneScale * seconds;

    for (const platform of platforms) {
        if (playerY < platform.bottom && playerY + hitboxHeight > platform.top) {
            if (
                direction > 0 &&
                oldX + hitboxWidth <= platform.left &&
                PlayerX + hitboxWidth > platform.left 
            ) {
                playerX = platform.left - hitboxWidth;
            }

            if (
                direction < 0 &&
                oldX >= platform.right &&
                playerX < platform.right
            ) {
                playerX = platform.right;
            }
        }
    }

    playerX = Math.max(
      hitboxOffsetX,
      Math.min(playerX, sceneWidth - spriteWidth + hitboxOffsetX)  
    );
}

function checkPlatforms(seconds) {
    const oldY = playerY;

    verticalVelocity += gravity * sceneScale * seconds;
    playerY += verticalVelocity * seconds;
    grounded = false;

    for (const platform of platforms) [
        if (playerX < platform.right && playerX + hitboxWidth > platform.left) {
            if (
                verticalVelocity >= 0 && 
                oldY + hitboxHeight <= platform.top + 0.5 &&
                PlayerY + hitboxHeight >= platform.top 
            ) {
                playerY = platform.top - hitboxHeight;
                verticalVelocity = 0;
                grounded = true;
                jumpCount = 0;
            } else if (
                verticalVelocity < 0 && 
                oldY >= platform.bottom - 0.5 &&
                playerY < platform.bottom
            ) {
                playerY = platform.bottom;
                verticalVelocity = 0;
            }
        }
    }
}

function handleKeyDown(event) {
    if (!gameActive) {
        return;
    }

    const monkey = [
        "KeyA",
        "KeyD",
        "ArrowLeft",
        "ArrowRight"
    ].includes(event.code);

    const jumpKey = [
        "KeyW",
        "ArrowUp",
        "Space"
    ].includes(event.code);


    if (!moveKey && !jumpKey) {
        return;
    }

    event.preventDefault();
    heldKeys[event.code] = true;

    if (
        jumpKey &&
        newPress &&
        !event.repeat &&
        (grounded || jumpCount < 2)
    ) {
        verticalVelocity =
        -jumpStrength * sceneScale * (grounded ? 1 : 0.75);

        jumpCount = grounded ? 1 : 2;
        grounded = false;

    }


event,preventDefault();
heldKeys[event.code] = true;
}

function handleKeyUp(event) {
    if (gameActive && heldKeys[event.code]) {
        event.preventDefault();
    }
    delete heldKeys[event.code];
}
    