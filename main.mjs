import { Apple } from './src/apple.mjs';
import { Snake } from "./src/snake.mjs";


/* Windows.onload */

// Déclaration des constantes
let Jules;
let apple;
let timeout;
let delay = 200;


launch();

function launch() {

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
    Jules.draw();
    apple.draw();
    timeout = setTimeout(refreshCanvas, delay);
    let x = Math.round(Math.random() * 5); //29
    let y = Math.round(Math.random() * 5); //14
    //LOSE
    if (Jules.checkCollision()) {
        clearTimeout(timeout);
        launch();
    } else {
        if (Jules.appleCollision(apple)) {
            Jules.eatApple = true;
            apple.position = [x, y];
            console.log(apple.onSnake(Jules))
        }
    }
}




// gestion des directions
document.onkeydown = function(e) {
    const key = e.keyCode;
    let newDirection;
    switch (key) {
        case 37:
            newDirection = "left";
            break;
        case 39:
            newDirection = "right";
            break;
        case 38:
            newDirection = "up";
            break;
        case 40:
            newDirection = "down";
            break;
        case 32:
            launch();
        default:
            return;
    }
    Jules.direction = newDirection;
    window.addEventListener('keyup', onkeydown);
}

// Création d'un fonction de lancement

// Création d'une fonction de rafraichissement du canva (fonction principale)

// Création d'une fonction game over


// if (Jules.checkCollision) {
//     ctx.clearRect(0, 0, canvasWidth, canvasHeight);
// }


// Création d'une fonction d'affichage des scores

// Création d'une fonction d'augmentation de la vitesse

// Gérer les touches du clavier