/* Juggling a Ball */
window.onload = () => {
    const CANVAS = document.getElementById("image-canvas");
    const CTX = CANVAS.getContext("2d");

    const gravity = 0.098;
    let mouseX = 0;
    let mouseY = 0;
    let mouseTouching = false;

    const BALL1 = new Ball(25, "blue");
    BALL1.centerX = 400;
    BALL1.centerY = 80;
    BALL1.ctx = CTX;
    /* Velocity */
    BALL1.velY = 0;
    BALL1.draw();

    /* Listeners */
    CANVAS.addEventListener("mousemove", evt => {
        // console.log(evt);
        let boundings = CANVAS.getBoundingClientRect();
        mouseX = evt.clientX - boundings.left;
        mouseY = evt.clientY - boundings.top;
    });


    requestAnimationFrame(animationLoop);
    function animationLoop() {
        /* Clear Canvas */
        CTX.clearRect(0, 0, CANVAS.clientWidth, CANVAS.height);
        /* Update */
        BALL1.velY += gravity;
        BALL1.centerX += BALL1.velX;
        BALL1.centerY += BALL1.velY;
        mouseCollision(BALL1);
        /* Draw */
        BALL1.draw();
        /* Animate */
        requestAnimationFrame(animationLoop);
    }

    function mouseCollision(ball) {
        // console.log(Math.sqrt(Math.pow((ball.centerX - mouseX), 2) + Math.pow((ball.centerY - mouseY), 2)));
        // Distancia euclidiana
        if (Math.sqrt(Math.pow((ball.centerX - mouseX), 2) + Math.pow((ball.centerY - mouseY), 2)) < ball.radius && !mouseTouching) {
            console.log(mouseTouching)
            ball.velY *= -1;
            mouseTouching = true;
            setTimeout(() => {
                mouseTouching = false;
            }, 500);
        } 
    }
}
// var mousePos = getMousePos(canvas, evt);
function getMousePosOnCanvas(canvas, evt) {
    var ClientRect = canvas.getBoundingClientRect();
    var x = evt.clientX - ClientRect.left;
    var y = evt.clientY - ClientRect.top;
    return { x: x, y: y };
}