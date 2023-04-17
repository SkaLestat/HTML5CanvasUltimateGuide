window.onload = () => {
    /* Definition */
    let canvas = document.getElementById("hello-world-canvas");
    let ctx = canvas.getContext("2d");

    /**
     * arc(x, y, radius, startAngle, endAngle, counterClockWise)
     * 
     */

    var radian = Math.PI / 180;

    /* First Arc */
    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 10;
    ctx.arc(100, 100, 50, 0 * radian, 180 * radian, false);
    ctx.stroke();
    /* Second Arc */
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.lineWidth = 10;
    ctx.arc(300, 200, 50, 45 * radian, 135 * radian, false);
    ctx.stroke();
    /* Third Arc */
    ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.lineWidth = 10;
    ctx.arc(300, 100, 50, 45 * radian, 135 * radian, true);
    ctx.stroke();
    
}