const blockSize = 10;
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");



export function Snake(body, direction) {

    this.body = body;
    this.direction = direction;
    this.eatApple = false;


    this.draw = function() {
        ctx.save();
        for (let i = 0; i < this.body.length; i++) {
            ctx.fillStyle = "green";
            ctx.fillRect(this.body[i][0] * blockSize, this.body[i][1] * blockSize, blockSize, blockSize);
        }
        ctx.restore();
    }


    this.advance = function() {

        const nextPosition = this.body[0].slice();

        switch (this.direction) {

            case "left":
                nextPosition[0] = nextPosition[0] - 1;
                break;
            case "right":
                nextPosition[0] = nextPosition[0] + 1;
                break;
            case "up":
                nextPosition[1] = nextPosition[1] - 1;
                break;
            case "down":
                nextPosition[1] = nextPosition[1] + 1;
                break;
            default:
                throw ("Invalid direction");
        }

        this.body.unshift(nextPosition);
        this.body.pop();
        ctx.clearRect(0, 0, 900, 600);
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