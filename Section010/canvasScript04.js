/* Vertical Projection */
window.onload = () => {
    const CANVAS = document.getElementById("image-canvas");
    const CTX = CANVAS.getContext("2d");

    const gravity = 0.098;
    const BALL1 = new Ball(20, "blue");
    BALL1.centerX = 100;
    BALL1.centerY = 80;
    BALL1.ctx = CTX;
    /* Velocity */
    BALL1.velY = 0;

    const BALL2 = new Ball(20, "green");
    BALL2.centerX = 300;
    BALL2.centerY = 80;
    BALL2.ctx = CTX;
    /* Velocity */
    BALL2.velY = 2;

    const BALL3 = new Ball(20, "red");
    BALL3.centerX = 500;
    BALL3.centerY = 500;
    BALL3.ctx = CTX;
    /* Velocity */
    BALL3.velY = -10;



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

        BALL3.velY += gravity;
        BALL3.centerX += BALL3.velX; 
        BALL3.centerY += BALL3.velY; 
        /* Draw */
        BALL1.draw();
        BALL2.draw();
        BALL3.draw();
        /* Animate */
        requestAnimationFrame(animationLoop);
    }
    
}