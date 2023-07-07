window.onload = () => {
    /* Definition */
    const CANVAS = document.getElementById("hello-world-canvas");
    const CTX = CANVAS.getContext("2d");

    /**
     * CTX.fillText(text, xCoord, yCoord, maxWidth)
     * CTX.strokeText(text, xCoord, yCoord, maxWidth)
     */

    CTX.font = "45px verdana"

    const FILL_TEXT = "Fill Text on Canvas";
    const STROKE_TEXT = "Stroke Text on Canvas";

    CTX.fillText(FILL_TEXT, 80, 100);
    CTX.strokeText(STROKE_TEXT, 80, 200, 400);

}