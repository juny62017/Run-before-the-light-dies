
const introScreen = document.querySelector("#intro-screen");
const introText = document.querySelector("#intro-text");

let introrRunning = false;

function pause(milliseconds) {
    return new promise(function (resolve) {
        setTimeout(resolve, milliseconds);
    });
}

async function showIntroLine(text, duration, style) {
    introText.textContent = text;
    introText.className = "intro-text " + style;
    introText.getBoundingClientRect();
    introText.classList.add("is-visible");
    await pause(duration - 100);
    introText.classList.remove("is-visible");
    await pause(100);
}


async function startNewRun() {
    if  (introRunning) {
        return;
    }


    introRunning = true;
    gameActive = false;
    cancelAnimationFrame(animationFrame);
    gameScreen.hidden = true;
    playButton.disabled = true;
    homeScreen.inert = true;
    introScreen.hidden = false;
    introScreen.getBoundingClientRect();
    introScreen.classList.add("is-visible");
    await pause(450);
    homeScreen.hidden =  true;
    introText.focus({ preventScroll: true });

  await showIntroLine("3:07 AM", 1200, "intro-time");
  await pause(300);
  await showIntroLine("You took the wrong path home.", 1600, "");
  await pause(300);
  await showIntroLine("There is only one rule.", 1500, "intro-rule");
  await pause(450);
  await showIntroLine("KEEP THE CANDLE ALIVE.", 2000, "intro-warning");

  gameScreen.hidden = false;
  gameScreen.inert = true;
  resetPlayer();
  await pause(550);
  introScreen.classList.add("is-revealing");
  introScreen.classList.remove("is-visible");
  await pause(350);

  introScreen.hidden = true;
  introScreen.classList.remove("is-revealing");
  introText.textContent = "";
  gameScreen.inert = false;
  homeScreen.inert = false;
  playButton.disabled = false;
  introRunning = false;

  gameActive = true;
  previousTime = 0;
  animationFrame = requestAnimationFrame(updateGame);

  homeButton.focus({ preventScroll: true });
}

