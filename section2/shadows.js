window.onload = () => {
    /* Definition */
    let canvas = document.getElementById("hello-world-canvas");
    let ctx = canvas.getContext("2d");

    /**
     * Shadow attributes on canvas
     * -shadowColor
     * -shadowOffsetX
     * -shadowOffsetY
     * -shadowBlur
     */

    ctx.beginPath();
    ctx.strokeStyle = "red"
    ctx.lineWidth = 20;
    ctx.shadowColor = "black";
    ctx.shadowOffsetX = 10;
    ctx.shadowOffsetY = 10;
    ctx.shadowBlur = 5;
    ctx.moveTo(100, 60);
    ctx.lineTo(200, 60);
    ctx.stroke();
    
}