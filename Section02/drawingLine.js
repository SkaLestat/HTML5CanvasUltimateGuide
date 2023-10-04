window.onload = () => {
    /* Definition */
    let canvas = document.getElementById("hello-world-canvas");
    let context = canvas.getContext("2d");

    /* Draw Line steps */
    context.beginPath(); // reset the context state
    context.strokeStyle = "red"; // color of the line
    context.lineWidth = 5; // thickness of the line
    context.moveTo(30, 70); // moveTo(x,y)  -> starting point of the line
    context.lineTo(130, 70); // lineTo(x,y)  -> end point of the line
    context.stroke(); // Draw the line

}