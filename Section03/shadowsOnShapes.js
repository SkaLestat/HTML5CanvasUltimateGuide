window.onload = () => {
    /* Definition */
    const CANVAS = document.getElementById("hello-world-canvas");
    const CTX = CANVAS.getContext("2d");

    const RADIAN = Math.PI / 180;
    
    /* Rectangle */
    CTX.beginPath();
    CTX.strokeStyle = "green";
    CTX.fillStyle = "green";
    CTX.shadowColor = "black";
    CTX.shadowOffsetX = 10;
    CTX.shadowOffsetY = 10;
    CTX.shadowBlur = 5;
    CTX.rect(150, 100, 150, 400);
    CTX.stroke();
    CTX.fill();

    /* Circle */
    CTX.beginPath();
    CTX.strokeStyle = "red";
    CTX.fillStyle = "red";
    CTX.shadowColor = "black";
    CTX.shadowOffsetX = -10;
    CTX.shadowOffsetY = -10;
    CTX.shadowBlur = 5;
    CTX.arc(650, 300, 100, 0 * RADIAN, 360 * RADIAN, false);
    CTX.stroke();
    CTX.fill();

}