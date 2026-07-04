// ===============================
// Puzzle Game - script.js
// ===============================

// Reset score when the home page loads
if (
    window.location.pathname.endsWith("index.html") ||
    window.location.pathname === "/" ||
    window.location.pathname.endsWith("/")
) {
    localStorage.setItem("score", 0);
}

// Get current score
function getScore() {
    return Number(localStorage.getItem("score")) || 0;
}

// Increase score
function addScore() {
    let score = getScore();
    score++;
    localStorage.setItem("score", score);
}

// Restart the game
function restartGame() {
    localStorage.setItem("score", 0);
    window.location.href = "index.html";
}

// Display score on score.html (if the element exists)
window.onload = function () {
    const scoreElement = document.getElementById("score");

    if (scoreElement) {
        scoreElement.innerHTML = getScore() + " / 4";
    }
};
