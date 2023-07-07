window.onload = () => {
    /* Definition */
    const CANVAS = document.getElementById("hello-world-canvas");
    const CTX = CANVAS.getContext("2d");

    const TEXT = "This text will be in 3D";
    CTX.font = "normal 600 54px monospace";

    // /* Layer 1 */
    // CTX.fillStyle = "black";
    // CTX.fillText(TEXT, 99, 299);

    // /* Layer 2 */
    // CTX.fillText(TEXT, 98, 298);

    // /* Layer 3 */
    // CTX.fillText(TEXT, 97, 297);

    // /* Layer 4 */
    // CTX.fillText(TEXT, 96, 296);

    // /* Original text*/
    // CTX.fillStyle = "violet";
    // CTX.fillText(TEXT, 100, 300);

    draw3DText(TEXT, 100, 300, CTX.font, "violet", 5);


    function draw3DText(text, x, y, style, color, layers){
        CTX.font = style;
        CTX.fillStyle = "black";

        for (let i = 0; i < layers; i++) {
            CTX.fillText(text, x - i , y - i)
        }

        CTX.fillStyle = color;
        CTX.fillText(text, x , y);
    }
}