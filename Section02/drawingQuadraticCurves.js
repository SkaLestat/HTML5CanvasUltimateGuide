window.onload = () => {
    /* Definition */
    let canvas = document.getElementById("hello-world-canvas");
    let ctx = canvas.getContext("2d");

    /**
     * quadraticCurveTo(controlX, controlY, endX, endY)
     * 
     */

    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.lineWidth = 10;
    ctx.moveTo(200, 250);
    ctx.quadraticCurveTo(100, 100, 400, 250);
    ctx.stroke();
    
}