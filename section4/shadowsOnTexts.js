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
    
    const TEXT = "This text will be shadowed";
    CTX.font = "normal 700 24px times";
    CTX.shadowColor = "red";
    CTX.shadowOffsetX = 5;
    CTX.shadowOffsetY = 5;
    CTX.shadowBlur = 4;
    CTX.fillText(TEXT, 100, 100);
    
    CTX.font = "italic 400 48px monospace";
    CTX.shadowColor = "green";
    CTX.shadowOffsetX = -4;
    CTX.shadowOffsetY = -4;
    CTX.shadowBlur = 4;
    CTX.strokeText(TEXT, 100, 400);
}