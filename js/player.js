const player = document.querySelector(".player-start");

const movementSpeed = 300;
const heldKeys = {};

let playerX = 0;
let playerY = 0;
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

    playerX = Math.max(
      hitboxOffsetX,
      Math.min(playerX, sceneWidth - spriteWidth + hitboxOffsetX)  
    );
}


function handleKeyDown(event) {
    if (
        !gameActive ||
        !["KeyA", "KeyD", "ArrowLeft", "ArrowRight"].includes(event.code)
    ) {
        return;
    }

event,preventDefault();
heldKeys[event.code] = true;
}

function handleKeyUp(event) {
    delete heldKeys[event.code];
}
    