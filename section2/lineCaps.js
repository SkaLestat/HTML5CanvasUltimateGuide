window.onload = () => {
    /* Definition */
    let canvas = document.getElementById("hello-world-canvas");
    let ctx = canvas.getContext("2d");

    /**
     * Line Caps -> ctx.lineCap = "";
     * - butt -> default
     * - round
     * - square
     */

    /* First Line */
    ctx.beginPath();
    ctx.lineCap = "butt";
    ctx.strokeStyle = "red";
    ctx.lineWidth = 10;
    ctx.moveTo(100, 100);
    ctx.lineTo(300, 100);
    ctx.stroke();
    
    /* Second Line */
    ctx.beginPath();
    ctx.lineCap = "round";
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 10;
    ctx.moveTo(100, 125);
    ctx.lineTo(300, 125);
    ctx.stroke();
    
    /* Second Line */
    ctx.beginPath();
    ctx.lineCap = "square";
    ctx.strokeStyle = "green";
    ctx.lineWidth = 10;
    ctx.moveTo(100, 150);
    ctx.lineTo(300, 150);
    ctx.stroke();
}