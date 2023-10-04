window.onload = () => {
    /* Definition */
    const canvas = document.getElementById("hello-world-canvas");
    const ctx = canvas.getContext("2d");
    
    const radian = Math.PI / 180;

    /* first way */
    // Body
    ctx.beginPath();
    ctx.strokeStyle = "orange";
    // ctx.lineWidth = 10;
    ctx.fillStyle = "orange"
    ctx.moveTo(250, 250);
    ctx.lineTo(330, 310);
    ctx.arc(250,250, 100, 37 * radian, 323 * radian, false);
    ctx.lineTo(250, 250);
    ctx.stroke();
    ctx.fill();
    // Eye
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.arc(250, 200, 10, 0 * radian, 360 * radian, false);
    ctx.stroke();
    ctx.fill();

    /* Second way */
    // Object 1
    ctx.beginPath();
    ctx.strokeStyle = "orange";
    // ctx.lineWidth = 10;
    ctx.fillStyle = "orange";
    ctx.arc(600, 250, 100, 143 * radian, 323 * radian, false);
    ctx.stroke();
    ctx.fill();    
    
    // Object 2
    ctx.beginPath();
    ctx.strokeStyle = "orange";
    // ctx.lineWidth = 10;
    ctx.fillStyle = "orange";
    ctx.arc(600, 250, 100, 37 * radian, 217 * radian, false);
    ctx.stroke();
    ctx.fill();

     // Eye
     ctx.beginPath();
     ctx.fillStyle = "black";
     ctx.arc(600, 200, 10, 0 * radian, 360 * radian, false);
     ctx.stroke();
     ctx.fill();

}