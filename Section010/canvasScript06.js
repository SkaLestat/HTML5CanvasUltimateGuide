/* Momentum on One Axis */
window.onload = () => {
    const CANVAS = document.getElementById("image-canvas");
    const CTX = CANVAS.getContext("2d");

    /* Large Ball */
    const BALL1 = new Ball(50, "blue");
    BALL1.centerX = 290;
    BALL1.centerY = 250;
    BALL1.mass = 10;
    BALL1.ctx = CTX;
    /* Velocity */
    BALL1.velX = 6;
    BALL1.velY = 0;
    BALL1.draw();

    /* Small Ball */
    const BALL2 = new Ball(30, "red");
    BALL2.centerX = 550;
    BALL2.centerY = 250;
    BALL2.mass = 6;
    BALL2.ctx = CTX;
    /* Velocity */
    BALL2.velX = -3;
    BALL2.velY = 0;
    BALL2.draw();



    requestAnimationFrame(animationLoop);
    function animationLoop(){
        /* Clear Canvas */
        CTX.clearRect(0, 0, CANVAS.clientWidth, CANVAS.height);
        /* Update */
        BALL1.centerX += BALL1.velX; 
        BALL1.centerY += BALL1.velY; 

        BALL2.centerX += BALL2.velX; 
        BALL2.centerY += BALL2.velY;
        /* Detect Ball COllisions */
        if(Math.abs(BALL1.centerX - BALL2.centerX) < BALL1.radius + BALL2.radius){
            console.log("Collision");
            let vel1 = ((BALL1.mass - BALL2.mass) / (BALL1.mass + BALL2.mass)) * BALL1.velX + ((2 * BALL2.mass) / (BALL1.mass + BALL2.mass)) * BALL2.velX;
            let vel2 = ((BALL2.mass - BALL1.mass) / (BALL1.mass + BALL2.mass)) * BALL2.velX + ((2 * BALL1.mass) / (BALL1.mass + BALL2.mass)) * BALL1.velX;
            BALL1.velX = vel1;
            BALL2.velX = vel2;
        }
        /* Detect Edge Collisions */
        if(BALL1.centerX + BALL1.radius > CANVAS.width || BALL1.centerX - BALL1.radius < 0){
            BALL1.velX *= -1;
        }
        if(BALL2.centerX + BALL2.radius > CANVAS.width || BALL2.centerX - BALL2.radius < 0){
            BALL2.velX *= -1;
        }
        /* Draw */
        BALL1.draw();
        BALL2.draw();
        /* Animate */
        requestAnimationFrame(animationLoop);
    }
    
}