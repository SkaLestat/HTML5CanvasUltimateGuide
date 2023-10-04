window.onload = () => {
    /* Definition */
    let canvas = document.getElementById("hello-world-canvas");
    let ctx = canvas.getContext("2d");

    /**
     * ctx.rect(x, y, widht, height)
     * ctx.fillRect(x, y, widht, height)
     * ctx.strokeRect(x, y, widht, height)
     * ctx.clearRect(x, y, widht, height)
     */
    
    ctx.strokeStyle = "red";
    ctx.lineWidth = 11;
    ctx.lineJoin = "round";
    ctx.fillStyle = "blue";
    ctx.rect(50, 200, 200, 200);
    ctx.stroke();
    ctx.fill();

    ctx.fillStyle = "green";
    ctx.fillRect(300, 200, 200, 200);

    ctx.lineWidth = 3;
    ctx.strokeStyle = "blue";
    ctx.lineJoin = "square";
    ctx.strokeRect(550, 200, 200, 200);

    ctx.clearRect(100, 100, 200, 200);
    // ctx.clearRect(0, 0, 900, 600); //Clear canvas
}