const rulesButton = document.querySelector("#rules-button");
const aboutButton = document.querySelector("#about-button");
const overlay = document.querySelector("#info-overlay");
const notice = overlay.querySelector(".notice");
const panelTitle = document.querySelector("#panel-title");
const panelContent = document.querySelector("#panel-content");
const backButton = document.querySelector("#back-button");

const rulesContent = [
    "A / D - MOVE",
    "SPACE - JUMP",
    "COLLECT FLAMES",
    "AVOID THE DEAD",
    "REACH THE GATE",
    "IF THE LIGHT DIES, SO DO YOU"
];


const aboutContent = [
    "3:07 AM.",
    "You took the wrong road home.",
    "The cementary should have ended a long time ago.",
    "Your candle is the only thing keeping the darkness away.",
    "Keep walking. Keep it alive.",
    "\"Don't turn around.\""
];

let closingOverlay = false;

function fillPanel(lines) {
    panelContent.replaceChildren();

    for (const line of lines) {
        const paragraph = document.createElement("p");
        paragraph.textContent = line;
        panelContent.appendChild(paragraph);
    }
}


function openPanel(title, lines) {
    if (overlay.open) {
        return;
    }

    panelTitle.textContent = title;
    fillPanel(lines);
    closingOverlay = false;
    overlay.shadowModal();

    requestAnimationFrame(() => {
        overlay.classList.add("is-visible");
    });
}
function closePanel(){
    if (!overlay.open || closingOverlay) {
        return;
    }

    closingOverlay = true;
    overlay.classList.remove("is-visible");

    window.setTimeout(() => {
        overlay.closest();
        closingOverlay = false;
    }, 240);
}

function openRules() {
    openPanel("THE RULES", rulesContent);
}

function openAbout() {
    openPanel("RUN BEFORE THE LIGHT DIES", aboutContent);
}

rulesButton.addEventListener("click", openRules);
aboutButton.addEventListener("click", openAbout);
backButton.addEventListener("click", closePanel);


overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
        closePanel();
    }
});

notice.addEventListener("click", (event) => {
    event.preventDefault();
    closePanel();
});


