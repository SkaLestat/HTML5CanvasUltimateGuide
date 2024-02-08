window.onload = () => {
    const CANVAS = document.getElementById("image-canvas");
    const CTX = CANVAS.getContext("2d");

    /**
     * context.rotate(rotationAmount) => Rotate the canvas context "clockwise direction"
     * rotationAmount (radiant) => The angle amount of rotation
     */

    const RADIAN = Math.PI / 180; //1 unit radian

    // Rotate
    CTX.rotate(-10 * RADIAN);
    // Red Rectangle
    CTX.fillStyle = "red";
    CTX.fillRect(250, 250, 400, 160);
    CTX.fill();
    // Rotate
    CTX.rotate(10 * RADIAN);
    // Blue Rectangle
    CTX.fillStyle = "blue";
    CTX.fillRect(250, 250, 400, 160);
    CTX.fill();
    // Rotate
    CTX.rotate(20 * RADIAN);
    // Green Rectangle
    CTX.fillStyle = "green";
    CTX.fillRect(250, 250, 400, 160);
    CTX.fill();
}