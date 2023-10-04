window.onload = () => {
    const CANVAS = document.getElementById("image-canvas");
    const CTX = CANVAS.getContext("2d");

    /* Wrong way to animate in canvas */
    // setInterval(drawRandomColoredRectangle, 1000, CANVAS, CTX);
    // setTimeout(drawRandomColoredRectangle, 1000, CANVAS, CTX);
    
    let startTime = new Date();
    requestAnimationFrame(drawRandomColoredRectangle);

    function drawRandomColoredRectangle(){
        let nowTime = new Date();
        if(nowTime - startTime >= 1000){
            startTime = nowTime;
            /* Clear Canvas */
            CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);

            /* Random Colors */
            let color = createRandomRGBColor();
            let fillOpacity = Math.random();
            let fillColor = `rgba(${color.red}, ${color.green}, ${color.blue}, ${fillOpacity})`;
            let borderColor = `rgba(${color.red}, ${color.green}, ${color.blue})`;
            let x = getRandomInt(0, CANVAS.width);
            let y = getRandomInt(0, CANVAS.height);
            let w = getRandomInt(0, CANVAS.width - x);
            let h = getRandomInt(0, CANVAS.height - y);
            /* Draw Rectangle */
            CTX.beginPath();
            CTX.fillStyle = fillColor;
            CTX.strokeStyle = borderColor;
            CTX.rect(x, y, w, h);
            CTX.stroke();
            CTX.fill();
            /* Animate */
            // setTimeout(drawRandomColoredRectangle, 1000, canvas, CTX);  
        }
        /* Animate */
        requestAnimationFrame(drawRandomColoredRectangle);
    }
}



let createRandomRGBColor = () => {
    const RED = getRandomInt(0, 257);
    const GREEN = getRandomInt(0, 257);
    const BLUE = getRandomInt(0, 257);
    return {
        red: RED,
        green: GREEN,
        blue: BLUE
    }
}

let getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //maximum exclusive minimum inclusive
}