window.onload = () => {
    /* Definition */
    const CANVAS = document.getElementById("hello-world-canvas");
    const CTX = CANVAS.getContext("2d");

    /* Polygon Variables */
    const SIDES = 7;
    const RADIUS = 100;
    const CENTER_X = 400;
    const CENTER_Y = 300;
    const START_ANGLE = 200;
    const ANGLE = (2 * Math.PI) / SIDES;

    /* Start Drawing */
    CTX.beginPath();
    CTX.strokeStyle = "red";
    CTX.lineWidth = 5;
    CTX.lineJoin = "round";

    /* Begin Point Coordinates */
    let beginX = CENTER_X + RADIUS * Math.cos(START_ANGLE);
    let beginY = CENTER_Y - RADIUS * Math.sin(START_ANGLE);

    CTX.moveTo(beginX, beginY);

    /* Draw lines */
    for(let i = 0; i < SIDES; i++){
        let currentAngle = START_ANGLE + i * ANGLE;
        let currentPointX = CENTER_X + RADIUS * Math.cos(currentAngle);
        let currentPointY = CENTER_Y - RADIUS * Math.sin(currentAngle);

        /* Draw the line */
        CTX.lineTo(currentPointX, currentPointY);
    }

    CTX.closePath(); //To close paths manually
    CTX.stroke();

}