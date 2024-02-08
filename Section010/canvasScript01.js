window.onload = () => {
    const CANVAS = document.getElementById("image-canvas");
    const CTX = CANVAS.getContext("2d");

    const BALL = new Ball(30, "purple");
    BALL.centerX = 400;
    BALL.centerY = 320;
    BALL.ctx = CTX;
    BALL.draw();

    // requestAnimationFrame(animationLoop);
    function animationLoop(){
        /* Clear Canvas */
        CTX.clearRect(0, 0, CANVAS.clientWidth, CANVAS.height);
        /* Update */
        /* Draw */
        /* Animate */
        requestAnimationFrame(animationLoop);
    }
    
}