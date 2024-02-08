/* Momentum on Two Axes */
window.onload = () => {
    const CANVAS = document.getElementById("image-canvas");
    const CTX = CANVAS.getContext("2d");

    const NUM_OF_BALLS = 10;
    const BALLS = [];
    for (let i = 0; i < NUM_OF_BALLS; i++) {
        let radius = getRandomInt(10, 25);
        let ball = new Ball(radius);
        ball.centerX = getRandomInt(radius, CANVAS.width - radius);
        ball.centerY = getRandomInt(radius, CANVAS.height - radius);
        ball.mass = radius;
        ball.ctx = CTX;
        /* Velocity */
        ball.velX = getRandomInt(0, 20) - 10;
        ball.velY = getRandomInt(0, 20) - 10;
        ball.draw();
        BALLS.push(ball);
    }

    requestAnimationFrame(animationLoop);
    function animationLoop() {
        /* Clear Canvas */
        CTX.clearRect(0, 0, CANVAS.clientWidth, CANVAS.height);
        /* Update */
        moveBalls(BALLS);
        checkEdges(BALLS);
        checkCollisions(BALLS);
        /* Draw */
        drawBalls(BALLS);
        /* Animate */
        requestAnimationFrame(animationLoop);
    }

    function moveBalls(balls) {
        balls.forEach(ball => {
            ball.centerX += ball.velX;
            ball.centerY += ball.velY;
        });
    }

    function drawBalls(balls) {
        balls.forEach(ball => {
            ball.draw();
        });
    }

    function checkEdges(balls) {
        balls.forEach(ball => {
            if (ball.centerX + ball.radius > CANVAS.width || ball.centerX - ball.radius < 0) {
                ball.velX *= -1;
            }
            if (ball.centerY + ball.radius > CANVAS.height || ball.centerY - ball.radius < 0) {
                ball.velY *= -1;
            }
        });
    }

    function collision(ball1, ball2) {
        return Math.abs(ball1.centerX - ball2.centerX) < ball1.radius + ball2.radius && Math.abs(ball1.centerY - ball2.centerY) < ball1.radius + ball2.radius;
    }

    function checkCollisions(balls) {
        for (let i = 0; i < balls.length; i++) {
            let ball1 = balls[i];
            for (let j = i + 1; j < balls.length; j++) {
                let ball2 = balls[j];
                if (collision(ball1, ball2)) {
                    // console.log("collision");
                    /* Horizontal */
                    let velX1 = ((ball1.mass - ball2.mass) / (ball1.mass + ball2.mass)) * ball1.velX + ((2 * ball2.mass) / (ball1.mass + ball2.mass)) * ball2.velX;
                    let velX2 = ((ball2.mass - ball1.mass) / (ball1.mass + ball2.mass)) * ball2.velX + ((2 * ball1.mass) / (ball1.mass + ball2.mass)) * ball1.velX;
                    ball1.velX = velX1;
                    ball2.velX = velX2;
                    /* Vertical */
                    let velY1 = ((ball1.mass - ball2.mass) / (ball1.mass + ball2.mass)) * ball1.velY + ((2 * ball2.mass) / (ball1.mass + ball2.mass)) * ball2.velY;
                    let velY2 = ((ball2.mass - ball1.mass) / (ball1.mass + ball2.mass)) * ball2.velY + ((2 * ball1.mass) / (ball1.mass + ball2.mass)) * ball1.velY;
                    ball1.velY = velY1;
                    ball2.velY = velY2;
                }
            }
        }
    }

}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //maximum exclusive minimum inclusive
}