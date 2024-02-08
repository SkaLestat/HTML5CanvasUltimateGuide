/* Horizontal and Angular Projection */
window.onload = () => {
    const CANVAS = document.getElementById("image-canvas");
    const CTX = CANVAS.getContext("2d");

    const gravity = 0.098;
    const BALL1 = new Ball(20, "blue");
    BALL1.centerX = 90;
    BALL1.centerY = 50;
    BALL1.ctx = CTX;
    /* Velocity */
    BALL1.velX = 5;
    BALL1.velY = 0;
    BALL1.draw();

    const BALL2 = new Ball(20, "red");
    BALL2.centerX = 90;
    BALL2.centerY = 550;
    BALL2.ctx = CTX;
    /* Velocity */
    BALL2.velX = 4;
    BALL2.velY = -9;
    BALL2.draw();



    requestAnimationFrame(animationLoop);
    function animationLoop(){
        /* Clear Canvas */
        CTX.clearRect(0, 0, CANVAS.clientWidth, CANVAS.height);
        /* Update */
        BALL1.velY += gravity;
        BALL1.centerX += BALL1.velX; 
        BALL1.centerY += BALL1.velY; 

        BALL2.velY += gravity;
        BALL2.centerX += BALL2.velX; 
        BALL2.centerY += BALL2.velY; 
        /* Draw */
        BALL1.draw();
        BALL2.draw();
        /* Animate */
        requestAnimationFrame(animationLoop);
    }
    
}