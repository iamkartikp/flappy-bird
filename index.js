const starBtn = document.getElementById("start-btn");
const buttonContainer = document.querySelector(".button-container");
const scoreContainer = document.querySelector(".score-container");
const score = document.getElementById("score");
const bird = document.getElementById("bird");
const gameContainer = document.getElementById("game-container");

starBtn.addEventListener("click", () => {
    let count = 0;
    buttonContainer.style.display = "none";
    // scoreContainer.style.display = "none";
    
    
    setInterval(() => {
        score.innerText = count;
        count++;
    }, 1000)

    setInterval(() => {
        bird.style.marginTop = Number(bird.style.marginTop.slice(0, -2)) + 50 + "px";
    }, 500)
})

gameContainer.addEventListener("click", () => {
    bird.style.marginTop = bird.style.marginTop.slice(0, -2) - 50 + "px";

    if (bird.style.marginTop.slice(0, -2) == "-450") {
        alert("Score", score);
        return;
    }
})