window.onload = () => {
    const CANVAS = document.getElementById("image-canvas");
    const CTX = CANVAS.getContext("2d");

    /**
     * context.translate(x,y) => Moves the canvas and its origin to (x, y)
     * x => Distance to move in the horizontal direction
     * y => Distance to move in the vertical direction
     */

    const RADIAN = Math.PI / 180; //1 unit radian

    // Red Rectangle
    CTX.fillStyle = "red";
    CTX.fillRect(50, 50, 160, 160);
    CTX.fill();
    //Translate
    CTX.translate(300, 200);
    // Blue Rectangle
    CTX.fillStyle = "blue";
    CTX.fillRect(50, 50, 160, 160);
    CTX.fill();
    //Translate
    CTX.translate(300, 200);
    // Green Rectangle
    CTX.fillStyle = "green";
    CTX.fillRect(50, 50, 160, 160);
    CTX.fill();
}