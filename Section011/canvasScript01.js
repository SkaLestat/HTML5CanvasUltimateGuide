/* Key Events */
window.onload = () => {
    const CANVAS = document.getElementById("image-canvas");
    const CTX = CANVAS.getContext("2d");

    /**
     * Key events
     * -keydown
     * -keypress
     * -keyup
     */

    const KEY_CODE = {
        leftKey: "ArrowLeft",
        rightKey: "ArrowRight",
        updKey: "ArrowUp",
        downKey: "ArrowDown"
    };

    window.addEventListener("keydown", evt => {
        // console.log(evt);
        // console.log(`Key ${evt} KeyCode: ${evt.keyCode}`);// Depreciada
        // console.log(`Key: ${evt.key} Code: ${evt.code}`);
        switch (evt.key) {
            case KEY_CODE.leftKey:
                console.log("LEFT");
                break;
            case KEY_CODE.rightKey:
                console.log("RIGHT");
                break;
            case KEY_CODE.updKey:
                console.log("UP");
                break;
            case KEY_CODE.downKey:
                console.log("DOWN");
                break;
            default:
                console.log("")
                break;
        }
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