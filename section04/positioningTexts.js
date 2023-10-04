window.onload = () => {
    /* Definition */
    const CANVAS = document.getElementById("hello-world-canvas");
    const CTX = CANVAS.getContext("2d");

    /**
     * CTX.textAlign = "center | end | left | right | start"
     * default "start"
     * CTX.textBaseline = "alphabetic | top | hanging | middle | ideographic | bottom"
     * default "alphabethic"
     */
    
    CTX.font = "italic 400 18px monospace";

    CTX.strokeStyle = "red";
    CTX.moveTo(300, 20);
    CTX.lineTo(300, 580);
    CTX.stroke();

    CTX.textAlign = "start";
    CTX.fillText("start", 300, 20);

    CTX.textAlign = "end";
    CTX.fillText("end", 300, 50);

    CTX.textAlign = "left";
    CTX.fillText("left", 300, 80);

    CTX.textAlign = "right";
    CTX.fillText("right", 300, 110);

    CTX.textAlign = "center";
    CTX.fillText("center", 300, 140);

    CTX.strokeStyle = "green";
    CTX.moveTo(300, 300);
    CTX.lineTo(800, 300);
    CTX.stroke();

    CTX.textBaseline = "alphabetic";
    CTX.fillText("alphabetic", 300, 300);

    CTX.textBaseline = "top";
    CTX.fillText("top", 400, 300);

    CTX.textBaseline = "hanging";
    CTX.fillText("hanging", 500, 300);

    CTX.textBaseline = "middle";
    CTX.fillText("middle", 600, 300);

    CTX.textBaseline = "ideographic";
    CTX.fillText("ideographic", 700, 300);

    CTX.textBaseline = "bottom";
    CTX.fillText("bottom", 800, 300);


}