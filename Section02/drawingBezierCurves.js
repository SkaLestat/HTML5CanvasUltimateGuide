window.onload = () => {
    /* Definition */
    let canvas = document.getElementById("hello-world-canvas");
    let ctx = canvas.getContext("2d");

    /**
     * bezierCurveTo(controlX1, controlY1, controlX2, controlY2, endX, endY)
     * 
     */

    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.lineWidth = 10;
    ctx.moveTo(200, 250);
    ctx.bezierCurveTo(100, 100, 500, 100, 400, 250);
    ctx.stroke();
    
}