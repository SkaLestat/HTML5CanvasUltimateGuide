/* Key Events */
window.onload = () => {
    const CANVAS = document.getElementById("paint-canvas");
    const CTX = CANVAS.getContext("2d");
    const COLORS = document.getElementsByClassName("colors")[0];
    const BRUSHES = document.getElementsByClassName("brushes")[0];
    const CLEAR = document.getElementById("clear");
    const SAVE = document.getElementById("save");
    let mousePos = {
        x: 0,
        y: 0
    }
    CTX.strokeStyle = "black"; // Brush color
    CTX.lineWidth = 1; // Brush Width
    let isDrawing = false;

    /* Event Listeners */
    COLORS.addEventListener("click", function(evt){
        console.log(evt.target);// EVENT BUBBLING!!
        console.log(evt.target.value);
        CTX.strokeStyle = evt.target.value || "black";
    });
    BRUSHES.addEventListener("click", function(evt){
        console.log(evt.target);// EVENT BUBBLING!!
        console.log(evt.target.value);
        CTX.lineWidth = evt.target.value || 1;
    });
    CLEAR.addEventListener("click", function(evt){
        CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);
    });
    SAVE.addEventListener("click", function(evt){
        // let canvasDataURL = CANVAS.toDataURL();
        let imageName = prompt("Please enter image name:")
        let canvasDataURL = CANVAS.toDataURL("image/png", 0.1);
        let aTag = document.createElement("a");
        aTag.href = canvasDataURL;
        aTag.download = imageName || "image";
        aTag.click();
    });
    CANVAS.addEventListener("mousedown", function(evt){
        isDrawing = true;
        mousePos = getMousePosOnCanvas(CANVAS, evt);
        /* Start Drwaing */
        CTX.beginPath();
        CTX.moveTo(mousePos.x, mousePos.y);
    });
    CANVAS.addEventListener("mousemove", function(evt){
        mousePos = getMousePosOnCanvas(CANVAS, evt);
        if(isDrawing){
            CTX.lineTo(mousePos.x, mousePos.y);
            CTX.stroke();
        }
    });
    CANVAS.addEventListener("mouseup", function(evt){
        isDrawing = false;
        mousePos = getMousePosOnCanvas(CANVAS, evt);
    });
    
    let getMousePosOnCanvas = (canvas, evt) => {
        var ClientRect = canvas.getBoundingClientRect();
        var x = evt.clientX - ClientRect.left;
        var y = evt.clientY - ClientRect.top;
        return { x: x, y: y };
    }
    
}