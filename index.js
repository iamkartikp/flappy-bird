// const starBtn = document.getElementById("start-btn");
// const buttonContainer = document.querySelector(".button-container");
// const scoreContainer = document.querySelector(".score-container");
// const score = document.getElementById("score");
// const bird = document.querySelector(".bird");
// const gameContainer = document.querySelector(".game-container");
// const highScore = document.getElementById("high-score");

// let highScoreLS = localStorage.getItem("highScore");
// // highScoreLS ? highScore.innerText = highScoreLS : highScore.style.display = "none";

// bird.addEventListener("click", () => {
//     let count = 0;

//     // setInterval(() => {
//     //     score.innerText = count;
//     //     count++;
//     // }, 1000)
// })

// function createObstacle() {
//     let obstacleLeft = 480;
//     const gap = 450;
//     let randomHeight = (Math.round(Math.random() * 100));

//     let obstacle = document.createElement('div');
//     let topObstacle = document.createElement('div');

//     obstacle.classList.add("obstacle");
//     topObstacle.classList.add("topObstacle");

//     gameContainer.appendChild(obstacle);
//     gameContainer.appendChild(topObstacle);

//     obstacle.style.left = obstacleLeft + "px";
//     topObstacle.style.left = obstacleLeft + "px";

//     obstacle.style.bottom = randomHeight + "px";
//     topObstacle.style.bottom = (randomHeight + gap) + "px";

//     function moveObstacle() {
//         obstacleLeft -= 2
//         obstacle.style.left = obstacleLeft + "px";
//         topObstacle.style.left = obstacleLeft + "px";


//         console.log(bird.style.bottom)
//         if (
//             obstacleLeft > 200 && obstacleLeft < 280 &&
//             (Number(bird.style.bottom.splice(0, -2)) < randomHeight + 153 || Number(bird.style.bottom.splice(0, -2)) > randomHeight + gap - 200) ||
//             birdBottom === 0
//         ) {
//             reset()
//         }
//     }

//     setInterval(moveObstacle, 20)
// }

// gameContainer.addEventListener("click", () => {
//     bird.style.bottom = (Number(bird.style.bottom.slice(0, -2)) + 20) + "px";

//     // if (bird.style.bottom.slice(0, -2) == "-450") {
//     //     reset();
//     // }
// })

// bird.addEventListener('click', startGame);

// function startGame() {
//     let interval = setInterval(createObstacle, 2000);
//     setInterval(() => {
//         bird.style.bottom = Number(bird.style.bottom.slice(0, -2)) - 15 + "px";
//         if (Number(bird.style.bottom.slice(0, -2)) <= -10) {
//             reset();
//         }

//         if ((bird.style.bottom.slice(0, -2) == document.querySelector('.obstacle').style.bottom.slice(0, -2))) {
//             reset();
//         }
//     }, 500)
//     // bird.style.bottom = Number(bird.style.bottom.slice(0, -2)) + 20 + "px";
// }

// function reset() {
//     // bird.style.bottom = Number(bird.style.bottom.slice(0, -2)) + 0 + "px";
//     // let highScore = localStorage.getItem("highScore");
//     // Number(highScore) && Number(score) > Number(highScore) ? localStorage.setItem("highScore", score) : localStorage.setItem("highScore", score.innerText);
//     bird.style.bottom = "40px";
//     alert(`Game over, score: `);
//     window.location.reload();
// }

const bird = document.querySelector('.bird')
const gameDisplay = document.querySelector('.game-container')
const ground = document.querySelector('.ground-moving')

let birdLeft = 220
let birdBottom = 100
let gravity = 3
let isGameOver = false
let gap = 430
let score = 0;

function startGame() {
    birdBottom -= gravity;
    bird.style.bottom = birdBottom + 'px'
    bird.style.left = birdLeft + 'px'
}
let gameTimerId = setInterval(startGame, 20)

function jump() {
    if (birdBottom < 500) birdBottom += 50
    bird.style.bottom = birdBottom + 'px'
}

document.addEventListener('click', jump)

function generateObstacle() {
    let obstacleLeft = 500
    let randomHeight = Math.random() * 60
    let obstacleBottom = randomHeight
    const obstacle = document.createElement('div')
    const topObstacle = document.createElement('div')
    if (!isGameOver) {
        obstacle.classList.add('obstacle')
        topObstacle.classList.add('topObstacle')
        score++
    }
    gameDisplay.appendChild(obstacle)
    gameDisplay.appendChild(topObstacle)
    obstacle.style.left = obstacleLeft + 'px'
    topObstacle.style.left = obstacleLeft + 'px'
    obstacle.style.bottom = obstacleBottom + 'px'
    topObstacle.style.bottom = obstacleBottom + gap + 'px'

    function moveObstacle() {
        obstacleLeft -= 2
        obstacle.style.left = obstacleLeft + 'px'
        topObstacle.style.left = obstacleLeft + 'px'

        if (obstacleLeft === -60) {
            clearInterval(timerId)
            gameDisplay.removeChild(obstacle)
            gameDisplay.removeChild(topObstacle)
        }
        if (
            obstacleLeft > 200 && obstacleLeft < 280 && birdLeft === 220 &&
            (birdBottom < obstacleBottom + 153 || birdBottom > obstacleBottom + gap - 200) ||
            birdBottom === 0
        ) {
            gameOver()
            clearInterval(timerId)
        }
    }
    let timerId = setInterval(moveObstacle, 20)
    if (!isGameOver) {
        setTimeout(generateObstacle, 3000)
    }
}
generateObstacle()


function gameOver() {
    clearInterval(gameTimerId)
    isGameOver = true
    document.removeEventListener('click', jump)
    ground.classList.add('ground')
    ground.classList.remove('ground-moving')
    if(confirm(`Game Over!! Score: ${Math.floor(score-1)}`))
        window.location.reload();
}