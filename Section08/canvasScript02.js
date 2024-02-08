window.onload = () => {
    const CANVAS = document.getElementById("image-canvas");
    const CTX = CANVAS.getContext("2d");

    let BALL_X = 400;
    let BALL_Y = 200;
    let BALL_RADIUS = 30;
    let BALL_COLOR = "orange";
    let CHANGE_X = 10;
    let CHANGE_Y = 10;

    let drawBall = (x, y, radius, color) => {
        let radian = Math.PI / 180;
        CTX.beginPath();
        CTX.strokeStyle = color;
        CTX.fillStyle = color;
        CTX.arc(x, y, radius, 0, 360 * radian, false);
        CTX.stroke();
        CTX.fill();
    }

    let animationLoop = () => {
        /* Clear Canvas */
        CTX.clearRect(0, 0, CANVAS.clientWidth, CANVAS.height);
        /* Update */
        // Y edge
        if(BALL_Y + BALL_RADIUS >= CANVAS.height){
            CHANGE_Y *= -1;
        } else if(BALL_Y - BALL_RADIUS <= 0){
            CHANGE_Y *= -1;
        }
        // X edge
        if(BALL_X + BALL_RADIUS >= CANVAS.width){
            CHANGE_X *= -1;
        } else if(BALL_X - BALL_RADIUS <= 0){
            CHANGE_X *= -1;
        }
        BALL_X += CHANGE_X;
        BALL_Y += CHANGE_Y;
        drawBall(BALL_X, BALL_Y, BALL_RADIUS, BALL_COLOR);
        requestAnimationFrame(animationLoop);
    }

    requestAnimationFrame(animationLoop);

}

(function () {
    var requestAnimationFrame =
      window.requestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
  })();