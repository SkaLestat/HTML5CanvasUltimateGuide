window.onload = () => {
    /* Definition */
    let canvas = document.getElementById("hello-world-canvas");
    let context = canvas.getContext("2d");

    /* Draw Line steps */
    context.beginPath(); // reset the context state, beginPath() method begins a path, or resets the current path.
    context.moveTo(30, 30); // moveTo(x,y)  -> starting point of the line
    context.lineTo(80, 80); // lineTo(x,y)  -> end point of the line
    context.lineTo(130, 30); // lineTo(x,y)  -> end point of the line
    context.lineTo(180, 80); // lineTo(x,y)  -> end point of the line
    context.lineTo(230, 30); // lineTo(x,y)  -> end point of the line
    context.stroke(); // Draw the line

    /* Draw Line steps */
    // context.beginPath(); // reset the context state
    // context.moveTo(80, 80); // moveTo(x,y)  -> starting point of the line
    // context.lineTo(130, 30); // lineTo(x,y)  -> end point of the line
    // context.stroke(); // Draw the line
    
    /* Draw Line steps */
    // context.beginPath(); // reset the context state
    // context.moveTo(130, 30); // moveTo(x,y)  -> starting point of the line
    // context.lineTo(180, 80); // lineTo(x,y)  -> end point of the line
    // context.stroke(); // Draw the line

    /* Draw Line steps */
    // context.beginPath(); // reset the context state
    // context.moveTo(180, 80); // moveTo(x,y)  -> starting point of the line
    // context.lineTo(230, 30); // lineTo(x,y)  -> end point of the line
    // context.stroke(); // Draw the line
}