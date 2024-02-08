/* Mouse Events */
window.onload = () => {
    const CANVAS = document.getElementById("image-canvas");
    const CTX = CANVAS.getContext("2d");

    /**
     * Mouse events
     * - mousedown / mouseup
     * - mouseover / mouseout
     * - mousemove
     * - click
     * - doubleclick
     */

    /* CANVAS.addEventListener("mousedown", evt => {
        console.log("mousedown");
        console.log(evt);
    });
    CANVAS.addEventListener("mouseup", evt => {
        console.log("mouseup");
        console.log(evt);
    });
    CANVAS.addEventListener("mousemove", evt => {
        console.log("mousemove");
        console.log(evt);
    }); */
    CANVAS.addEventListener("click", evt => {
        console.log("mouseclick");
        console.log(evt);
    });
    CANVAS.addEventListener("dblclick", evt => {
        console.log("mousedblclick");
        console.log(evt);
    });
    CANVAS.addEventListener("mouseover", evt => {
        console.log("mouseover");
        console.log(evt);
    });
    CANVAS.addEventListener("mouseout", evt => {
        console.log("mouseout");
        console.log(evt);
    });

    // requestAnimationFrame(animationLoop);
    function animationLoop() {
        /* Clear Canvas */
        CTX.clearRect(0, 0, CANVAS.clientWidth, CANVAS.height);
        /* Update */
        /* Draw */
        /* Animate */
        requestAnimationFrame(animationLoop);
    }

}