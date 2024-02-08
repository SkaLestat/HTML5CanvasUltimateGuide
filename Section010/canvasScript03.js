window.onload = () => {
    const CANVAS = document.getElementById("image-canvas");
    const CTX = CANVAS.getContext("2d");

    /**
     * Acceleration is the rate of change of velocity of an object with respect to time
     * is a vector quantiti
     * is represented by the formula: Acceleration = ^v/^t
     */

    const BALL = new Ball(20, "green");
    BALL.centerX = 100;
    BALL.centerY = 250;
    BALL.ctx = CTX;
    BALL.draw();
    /* Velocity */
    BALL.velX = 1;
    BALL.velY = 1;
    /* Acceleration */
    let accX = 0.05;
    let accY = -0.02;


    requestAnimationFrame(animationLoop);
    function animationLoop(){
        /* Clear Canvas */
        CTX.clearRect(0, 0, CANVAS.clientWidth, CANVAS.height);
        /* Update */
        BALL.velX += accX;
        BALL.velY += accY;
        BALL.centerX += BALL.velX; 
        BALL.centerY += BALL.velY; 
        /* Draw */
        BALL.draw();
        /* Animate */
        requestAnimationFrame(animationLoop);
    }
    
}