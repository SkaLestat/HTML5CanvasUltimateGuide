window.onload = () => {
    /* Definition */
    const CANVAS = document.getElementById("hello-world-canvas");
    const CTX = CANVAS.getContext("2d");

    /**
     * CTX.font = "font-style font-weight font-size font family";
     * font-style:
     * -normal (default)
     * -italic
     * -oblique
     * -inherit (style comes from the parent element)
     * 
     * font-weight:
     * -normal (default)
     * -bold
     * -bolder
     * -lighter
     * -100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
     * -inherit
     * 
     * font-size:
     * -xx-small | x-small | small | smaller | medium | large | x-large | xx-large
     * -exact number in px, pt or em
     * -inherit
     * 
     * font-family:
     * -family-name (like "times", "courier", ...)
     * -generic-family (like "serif", "sans-serif", "cursive", ...)
     * -inherit
     */

    const STYLED_TEXT = "This text wil be styled";
    CTX.font = "normal bolder xx-large courier"
    CTX.fillText(STYLED_TEXT, 100, 100);
    CTX.font = "normal 800 xx-large times"
    CTX.fillText(STYLED_TEXT, 100, 200);
    CTX.font = "italic 700 48px fantasy";
    CTX.strokeText(STYLED_TEXT, 100, 300);
    CTX.font = "italic 400 48px monospace";
    CTX.strokeText(STYLED_TEXT, 100, 400);

}