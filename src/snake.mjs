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
    };

    this.setDirection = function(newDirection) {
        let allowedDirections;
        switch (this.direction) {
            case "left":
            case "right":
                allowedDirections = ["up", "down"];
                break;
            case "up":
            case "down":
                allowedDirections = ["left", "right"];
                break;
            default:
                throw ("Invalid direction");
        }
        if (allowedDirections.indexOf(newDirection) > -1) {
            this.direction = newDirection;
        }
    };


    this.checkCollision = function() {
        let wallCollision = false;
        const headX = this.body[0][0];
        const headY = this.body[0][1];


        if (headX < 0 || headX > 29) {
            wallCollision = true;

        } else if (headY < 0 || headY > 14) {
            wallCollision = true;
        }
        return console.log(wallCollision);
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