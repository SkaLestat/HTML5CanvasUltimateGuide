window.onload = () => {
    const CANVAS = document.getElementById("image-canvas");
    const CTX = CANVAS.getContext("2d");

    /**
     * Velocity is the rate of change in an object's position
     * has a magnitud(speed) and a direction
     * is a vector quantity
     * is represented by the formula: Velocity = ^x/^t
     */

    const BALL = new Ball(30, "red");
    BALL.centerX = 100;
    BALL.centerY = 150;
    BALL.ctx = CTX;
    BALL.draw();
    // Velocity
    BALL.velX = 1;
    BALL.velY = 1;

    requestAnimationFrame(animationLoop);
    function animationLoop(){
        /* Clear Canvas */
        CTX.clearRect(0, 0, CANVAS.clientWidth, CANVAS.height);
        /* Update */
        BALL.centerX += BALL.velX; 
        BALL.centerY += BALL.velY; 
        /* Draw */
        BALL.draw();
        /* Animate */
        requestAnimationFrame(animationLoop);
    }
    
}