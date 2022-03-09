// import { Apple } from './src/apple.mjs'
import { Snake } from "./src/snake.mjs";


/* Windows.onload */

// Déclaration des constantes
let Jules;
let timeout;
let delay = 1000;


launch();

function launch() {
    Jules = new Snake([
        [6, 5],
        [5, 5],
        [4, 5],
    ], "right");

    refreshCanvas()

}



function refreshCanvas() {

    Jules.advance();

    Jules.draw();
    timeout = setTimeout(refreshCanvas, delay);
    console.log(Jules);

}





// Création d'un fonction d'initialisation

// Création d'un fonction de lancement

// Création d'une fonction de rafraichissement du canva (fonction principale)

// Création d'une fonction game over

// Création d'une fonction d'affichage des scores

// Création d'une fonction d'augmentation de la vitesse

// Gérer les touches du clavier