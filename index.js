const starBtn = document.getElementById("start-btn");
const buttonContainer = document.querySelector(".button-container");
const scoreContainer = document.querySelector(".score-container");
const score = document.getElementById("score");
const bird = document.querySelector(".bird");
const gameContainer = document.querySelector(".game-container");
const highScore = document.getElementById("high-score");

let highScoreLS = localStorage.getItem("highScore");
// highScoreLS ? highScore.innerText = highScoreLS : highScore.style.display = "none";

bird.addEventListener("click", () => {
    let count = 0;

    // setInterval(() => {
    //     score.innerText = count;
    //     count++;
    // }, 1000)
})

function createObstacle() {
    let obstacleLeft = 480;
    const gap = 450;
    let randomHeight = (Math.round(Math.random() * 100));

    let obstacle = document.createElement('div');
    let topObstacle = document.createElement('div');
    
    obstacle.classList.add("obstacle");
    topObstacle.classList.add("topObstacle");
    
    gameContainer.appendChild(obstacle);
    gameContainer.appendChild(topObstacle);

    obstacle.style.left = obstacleLeft + "px";
    topObstacle.style.left = obstacleLeft + "px";
    
    obstacle.style.bottom = randomHeight + "px";
    topObstacle.style.bottom = (randomHeight + gap) + "px";

    function moveObstacle() {
        obstacleLeft -= 2
        obstacle.style.left = obstacleLeft + "px";
        topObstacle.style.left = obstacleLeft + "px";
    }

    setInterval(moveObstacle, 20)
}

gameContainer.addEventListener("click", () => {
    bird.style.bottom = (Number(bird.style.bottom.slice(0, -2)) + 20) + "px";

    // if (bird.style.bottom.slice(0, -2) == "-450") {
    //     reset();
    // }
})

bird.addEventListener('click', startGame);

function startGame() {
    createObstacle();
    let interval = setInterval(createObstacle, 2000);
    setInterval(() => {
        bird.style.bottom = Number(bird.style.bottom.slice(0, -2)) - 15 + "px";
        if (bird.style.bottom.slice(0, -2) == "-40") {
            reset();
        }
        
        if((bird.style.bottom.slice(0, -2) == document.querySelector('.obstacle').style.bottom.slice(0, -2))) {
            reset();
        }
    }, 500)
    // bird.style.bottom = Number(bird.style.bottom.slice(0, -2)) + 20 + "px";
}

function reset() {
    // bird.style.bottom = Number(bird.style.bottom.slice(0, -2)) + 0 + "px";
    // let highScore = localStorage.getItem("highScore");
    // Number(highScore) && Number(score) > Number(highScore) ? localStorage.setItem("highScore", score) : localStorage.setItem("highScore", score.innerText);
    alert(`Game over, score: `);
    window.location.reload();
}