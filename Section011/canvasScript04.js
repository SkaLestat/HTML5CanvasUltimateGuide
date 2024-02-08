/* Dragging and Droppping */
window.onload = () => {
    const CANVAS = document.getElementById("image-canvas");
    const CTX = CANVAS.getContext("2d");

    /* Specs */
    const NUM_OF_BALLS = 10;
    const BALLS = [];
    let currentBall;
    for (let i = 0; i < NUM_OF_BALLS; i++) {
        let radius = getRandomInt(25, 50);
        let randomColor = createRandomRGBColor();
        let color = `rgb(${randomColor.red}, ${randomColor.green},${randomColor.blue})`;
        let ball = new Ball(radius, color);
        ball.centerX = getRandomInt(radius, CANVAS.width - radius);
        ball.centerY = getRandomInt(radius, CANVAS.height - radius);
        ball.mass = radius;
        ball.ctx = CTX;
        /* Velocity */
        ball.velX = getRandomInt(0, 20) - 10;
        ball.velY = getRandomInt(0, 20) - 10;
        ball.z = i;
        BALLS.push(ball);
    }
    drawBalls();
    
    /* Listeners */
    CANVAS.addEventListener("mousedown", evt => {
        console.log("mousedown");
        let mousePos = getMousePosOnCanvas(CANVAS, evt);
        isHitOnBall(mousePos);
    });
    CANVAS.addEventListener("mousemove", evt => {
        // console.log("mousemove");
        let mousePos = getMousePosOnCanvas(CANVAS, evt);
        if(currentBall){
            console.log("moving")
            currentBall.centerX = mousePos.x;
            currentBall.centerY = mousePos.y;
            drawBalls();
        }
    });
    CANVAS.addEventListener("mouseup", evt => {
        console.log("mouseup");
        currentBall = undefined;
    });
    
    // requestAnimationFrame(animationLoop);
    function animationLoop() {
        /* Clear Canvas */
        CTX.clearRect(0, 0, CANVAS.clientWidth, CANVAS.height);
        /* Update */
        /* Draw */
        
        /* Animate */
        requestAnimationFrame(animationLoop);
    }

    function drawBalls(){
        // Clear CAnvas
        CTX.clearRect(0, 0, CANVAS.clientWidth, CANVAS.height);
        BALLS.forEach( ball => {
            ball.draw();
        });
    }

    function isHitOnBall(mousePos){
        // se usa de el final al inicio del arreglo por el orden en que se colocan las bolas en el canvas
        // for (let i = NUM_OF_BALLS - 1; i >= 0; i--) { // Me funciona al revez por que al final el if se dispara por cada bola encontrada
        for (let i = 0; i < NUM_OF_BALLS; i++) {
            if(Math.sqrt(Math.pow((BALLS[i].centerX - mousePos.x), 2) + Math.pow((BALLS[i].centerY - mousePos.y), 2)) < BALLS[i].radius){
                console.log(BALLS[i].z);
                currentBall = BALLS[i];
                // break; // si se usa el break si se usaria el for desde la ultima posicion del arreglo
            }
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

function createRandomRGBColor() {
    const RED = getRandomInt(0, 257);
    const GREEN = getRandomInt(0, 257);
    const BLUE = getRandomInt(0, 257);
    return {
        red: RED,
        green: GREEN,
        blue: BLUE
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //maximum exclusive minimum inclusive
}