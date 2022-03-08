const blockSize = 10;
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");


export function Snake(body, direction) {

    this.body = body;
    this.direction = direction;
    this.eatApple = false;

    // ctx.fillStyle = "green";
    // ctx.fillRect(this.body[0[0]], this.body[0[1]], blockSize, blockSize);



    for (let i = 0; i < this.body.length; i++) {

        ctx.fillStyle = "green";
        ctx.fillRect(this.body[i][0] * blockSize, this.body[i][1], blockSize, blockSize);

    }




    // Body

    // Direction
    // Mange une pomme
    // Fonction Draw
    // Fonction avance
    // Fonction suppression de la derniere position
    // Fonction de direction
    // Fonction de collision
    // Fonction de manger une pomme

}