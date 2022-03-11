import { Apple } from './src/apple.mjs';
import { Snake } from "./src/snake.mjs";


// Déclaration des constantes
let Jules;
let apple;
let timeout;
let delay = 200;
let newScore = 0;
let btn = document.getElementById('btn');
let score = document.getElementById('score');


btn.addEventListener('click', function() {

    launch();
})


function launch() {
    score.style.color = "black";
    newScore = 0;
    score.textContent = "Ton score: " + newScore;

    Jules = new Snake([
        [10, 5],
        [9, 5],
        [8, 5],

    ], "right");

    apple = new Apple([15, 10]);

    clearTimeout(timeout);
    refreshCanvas()
}



function refreshCanvas() {

    Jules.advance();


    //LOSE
    Jules.draw();
    apple.draw();
    timeout = setTimeout(refreshCanvas, delay);

    if (Jules.checkCollision()) {
        clearTimeout(timeout);
        score.style.color = "red";
        score.textContent = "Tu as perdu (looser), ton score est de : " + newScore;
    } else {
        if (Jules.appleCollision(apple)) {
            Jules.eatApple = true;
            newScore++;
            score.textContent = "Ton score: " + newScore;
            do {
                let x = Math.round(Math.random() * 29);
                let y = Math.round(Math.random() * 14);
                apple.position = [x, y];
                console.log('Hello');
            } while (apple.onSnake(Jules));
            apple.draw();
        }
    }
}



// gestion des directions
document.onkeydown = function(e) {
    const key = e.keyCode;
    let newDirection;
    switch (key) {
        case 37:
        case 81:
            newDirection = "left";
            break;
        case 39:
        case 68:
            newDirection = "right";
            break;
        case 38:
        case 90:
            newDirection = "up";
            break;
        case 40:
        case 83:
            newDirection = "down";
            break;
        case 13:
            launch();
        default:
            return;
    }
    Jules.direction = newDirection;
    window.addEventListener('keyup', onkeydown);
}