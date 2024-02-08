window.onload = () => {
    const CANVAS = document.getElementById("image-canvas");
    const CTX = CANVAS.getContext("2d");

    const TILE_WIDTH = 192;
    const TILE_HEIGHT = 200;
    let currentTile = -1;
    let fpsControl = new Date();

    const TILE = new Image();
    TILE.src = "./tile.png";

    TILE.onload = () => {
        // ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
        CTX.drawImage(TILE, 0, 0, 768, 200, 60, 0, 768, 200);
    }

    /* Si se usara arrow function no se podria llamar la funcion antes de declararla por "hoisting" */
    function drawTileCell (index) {
        CTX.drawImage(TILE,  TILE_WIDTH * index, 0, TILE_WIDTH, TILE_HEIGHT, 360, 300, TILE_WIDTH, TILE_HEIGHT);
    }

    function animationLoop(){
        let now = new Date();
        if(now - fpsControl >= 100){
            fpsControl = now;
            // clear
            CTX.clearRect(0, 200, CANVAS.width, CANVAS.height - 200);
            // Update
            currentTile++;
            /* Forma de asegurar que el contador nunca va a pasar de 4 */
            currentTile %= 4;
            // Draw
            drawTileCell(currentTile);
        }

        // Animate
        requestAnimationFrame(animationLoop);
    }

    requestAnimationFrame(animationLoop);
    /* Sobra esta declaracion??? */
    requestAnimationFrame(() => {

    });

    
}