const blockSize = 10;
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

export function Apple(position) {

    this.position = position;

    // fonction de dessiner une pomme
    this.draw = function() {
        ctx.fillStyle = "red";
        ctx.arc((this.position[0] * 10) + 5, (this.position[1] * 10) + 5, 5, 0, 2 * Math.PI);
        ctx.fill();
    }

    // Fonction qui determine une nouvelle position


    // Fonction qui vérifie si le serpent l'a mangé

}