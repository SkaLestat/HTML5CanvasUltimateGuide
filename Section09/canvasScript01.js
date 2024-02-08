window.onload = () => {
    const CANVAS = document.getElementById("image-canvas");
    const CTX = CANVAS.getContext("2d");

    /**
     * context.scale(horizontalScaleFactor, verticalScaleFactor) => Scales the canvas context
     * horizonalScaleFactor (double) => Scales the width of the current drawing(1=100%, 0.5=50%, 2=200%, etc)
     * verticalScaleFactor (double) => Scales the height of the current drawing(1=100%, 0.5=50%, 2=200%, etc)
     */

    // Red Rectangle
    CTX.fillStyle = "red";
    CTX.fillRect(50, 50, 100, 40);
    CTX.fill();
    // Scale
    CTX.scale(2,2);
    // Blue Rectangle
    CTX.fillStyle = "blue";
    CTX.fillRect(50, 50, 100, 40);
    CTX.fill();
    // Scale
    CTX.scale(2,2);
    // Green Rectangle
    CTX.fillStyle = "green";
    CTX.fillRect(50, 50, 100, 40);
    CTX.fill();
    // Scale
    CTX.scale(0.1,0.1);
    // Yellow Rectangle
    CTX.fillStyle = "yellow";
    CTX.fillRect(50, 50, 100, 40);
    CTX.fill();
    
}