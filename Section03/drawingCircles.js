window.onload = () => {
    /* Definition */
    const canvas = document.getElementById("hello-world-canvas");
    const ctx = canvas.getContext("2d");
    
    const radian = Math.PI / 180;

    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.lineWidth = 15;
    ctx.fillStyle = "orange";
    // context.arc(x,y,r,sAngle,eAngle,counterclockwise);
    ctx.arc(450, 300, 150, 0 * radian, 360 * radian, false)
    ctx.stroke();
    ctx.fill();

}