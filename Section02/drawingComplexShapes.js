window.onload = () => {
    /* Definition */
    let canvas = document.getElementById("hello-world-canvas");
    let ctx = canvas.getContext("2d");

    
    /**
     * lineCap = butt|round|square
     * lineJoin = bevel|round|miter
     * shadowColor = color of shadow
     * shadowBlur = blur amount of shadows
     * shadowOffsetX = horizontal distance of the shadow from the shape
     * shadowOffsetY = vertical distance of the shadow from shape
     */

    /* First Z object */
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.lineWidth = 15;
    ctx.lineCap = "butt";
    ctx.lineJoin = "mitter";
    ctx.shadowColor = "blue";
    ctx.shadowOffsetX = 10;
    ctx.shadowOffsetY = 10;
    ctx.shadowBlur = 10;
    ctx.moveTo(60, 80);
    ctx.lineTo(160, 80);
    ctx.lineTo(80, 180);
    ctx.lineTo(180, 180);
    ctx.stroke();
    
    /* Second Z object */
    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 15;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.shadowColor = "yellow";
    ctx.shadowOffsetX = 10;
    ctx.shadowOffsetY = 10;
    ctx.shadowBlur = 10;
    ctx.moveTo(340, 80);
    ctx.lineTo(240, 80);
    ctx.lineTo(340, 180);
    ctx.lineTo(240, 180);
    ctx.stroke();
    
    /* Second Z object */
    ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.lineWidth = 15;
    ctx.lineCap = "butt";
    ctx.lineJoin = "bevel";
    ctx.shadowColor = "red";
    ctx.shadowOffsetX = 10;
    ctx.shadowOffsetY = 10;
    ctx.shadowBlur = 10;
    ctx.moveTo(420, 80);
    ctx.lineTo(520, 80);
    ctx.lineTo(440, 180);
    ctx.lineTo(540, 180);
    ctx.stroke();

}