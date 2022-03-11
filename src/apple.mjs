import { Snake } from "./snake.mjs";


const blockSize = 10;
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

export function Apple(position) {

    this.position = position;

    // fonction de dessiner une pomme
    this.draw = function() {
        ctx.save();
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.arc((this.position[0] * 10) + 5, (this.position[1] * 10) + 5, 5, 0, 2 * Math.PI);
        ctx.fill();
        ctx.restore();
    }

    // Fonction qui interdit l'apparition de pomme sur le serpent
    this.onSnake = function(snakeToCheck) {
        let onSnake = false;

        for (let i = 0; i < snakeToCheck.body.length; i++) {
            if (this.position[0] === snakeToCheck.body[i][0] && this.position[1] === snakeToCheck.body[i][1]) {
                return true;
            }
        }
        return onSnake;

    }
}