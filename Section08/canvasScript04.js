window.onload = () => {
    const CANVAS = document.getElementById("image-canvas");
    const CTX = CANVAS.getContext("2d");

    const TILE_WIDTH = 256;
    const TILE_HEIGHT = 256;
    let currentTile = -1;
    let isBackgroundLoaded = false;
    let isHeroLoaded = false;
    /* Tiempo */
    let fpsControl = new Date();
    /* Movimiento */
    const MOVE_AMOUNT = 15;
    let moveX = 95;

    /* Dibujar Background */
    const BACKGROUND = new Image();
    BACKGROUND.src = "./back.png";
    BACKGROUND.onload = () => {
        // CTX.drawImage(BACKGROUND, 0 , 0, CANVAS.clientWidth, CANVAS.height);
        isBackgroundLoaded = true;
    }
    /* Dibujar Personaje */
    const HERO = new Image();
    HERO.src = "./sprite.png";
    HERO.onload = () => {
        // CTX.drawImage(HERO, 0 , 0, 256, 256, 100, 400, 100, 100);
        isHeroLoaded = true;
    }

    requestAnimationFrame(animationLoop);

    function animationLoop(){
        let now = new Date();
        if(now - fpsControl >= 100){
            fpsControl = now;
            /* Limpiar */
            CTX.clearRect(0, 0, CANVAS.clientWidth, CANVAS.height);
            /* Update */
            currentTile++;
            currentTile %= 6;
            if(moveX >= CANVAS.width){
                // moveX = -1 * TILE_WIDTH;
                // moveX = 0 - TILE_WIDTH;
                moveX = -100;
            } else {
                moveX += MOVE_AMOUNT;
            }
            /* Dibujar */
            if(isBackgroundLoaded){
                CTX.drawImage(BACKGROUND, 0 , 0, CANVAS.clientWidth, CANVAS.height);
            }
            if(isHeroLoaded){
                CTX.drawImage(HERO, currentTile *  TILE_WIDTH, 0, TILE_WIDTH, TILE_HEIGHT, moveX, 400, 100, 100);
            }
        }
        /* Animate */
        requestAnimationFrame(animationLoop);
    }
    


}