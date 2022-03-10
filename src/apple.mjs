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
        //this.clear = ctx.clearRect(0, 0, 900, 600);

    // Fonction qui determine une nouvelle position


    // Fonction qui vérifie si le serpent l'a mangé

}