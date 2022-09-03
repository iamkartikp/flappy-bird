const starBtn = document.getElementById("start-btn");
const buttonContainer = document.querySelector(".button-container");
const scoreContainer = document.querySelector(".score-container");
const score = document.getElementById("score");
const bird = document.getElementById("bird");
const gameContainer = document.getElementById("game-container");
const highScore = document.getElementById("high-score");

let highScoreLS = localStorage.getItem("highScore");
highScoreLS ? highScore.innerText = highScoreLS : highScore.style.display = "none";

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

        if (bird.style.marginTop.slice(0, -2) == "250") {
            reset();
        }
    }, 500)
})

gameContainer.addEventListener("click", () => {
    bird.style.marginTop = bird.style.marginTop.slice(0, -2) - 50 + "px";

    if (bird.style.marginTop.slice(0, -2) == "-450") {
        reset();
    }
})

function reset() {
    bird.style.marginTop = Number(bird.style.marginTop.slice(0, -2)) + 0 + "px";
    let highScore = localStorage.getItem("highScore");
    Number(highScore) && Number(score) > Number(highScore) ? localStorage.setItem("highScore", score) : localStorage.setItem("highScore", score.innerText) ;
    alert(`Game over, score: ${score.innerText}`);
    window.location.reload();
}