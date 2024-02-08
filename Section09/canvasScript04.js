window.onload = () => {
    const CANVAS = document.getElementById("image-canvas");
    const CTX = CANVAS.getContext("2d");

    /**
     * context.transform(m11, m12, m21, m22, dx, dy)
     * context.setTransform(m11, m12, m21, m22, dx, dy)
     * context.resetTransform
     */

    const RADIAN = Math.PI / 180; //1 unit radian

    // Red Rectangle
    CTX.fillStyle = "red";
    CTX.fillRect(150, 150, 200, 100);
    CTX.fill(); // no es necesario
    //Scale Transform
    CTX.transform(1.5, 0, 0, 1.5, 0, 0);
    // Blue Rectangle
    CTX.fillStyle = "blue";
    CTX.fillRect(150, 150, 200, 100);
    CTX.fill();
    //Scale Transform
    CTX.transform(1.5, 0, 0, 1.5, 0, 0);
    // Green Rectangle
    CTX.fillStyle = "green";
    CTX.fillRect(150, 150, 200, 100);
    CTX.fill();
    //Scale Transform
    CTX.setTransform(1.5, 0, 0, 1.5, 0, 0);
    // Yellow Rectangle
    CTX.fillStyle = "yellow";
    CTX.fillRect(150, 150, 200, 100);
    CTX.fill();
    //Reset Transform
    CTX.resetTransform();
    // Black Rectangle
    CTX.fillStyle = "black";
    CTX.fillRect(150, 150, 200, 100);
    CTX.fill();
}