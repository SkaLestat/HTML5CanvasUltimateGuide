class Player{
    #CANVAS;
    #CTX;
    #tileX;
    #tileY;
    #TILE_WIDTH = 88;
    #TILE_HEIGHT = 72.5;
    #GRAVITY = 0.20;
    #velY;
    #posX;
    #posY;
    #tileImage = null;
    #tileSrc;
    #tileFrame;
    #startTimeAnimation;

    /**
     * @param {canvas} canvas - Game canvas
     * @param {text} tileSrc - Tile Source
     */
    constructor(canvas, tileSrc){
        this.#CANVAS = canvas;
        this.#CTX = this.#CANVAS.getContext("2d");
        this.#tileSrc = tileSrc;
        this.#tileX = [0, 0, 0]; // Deberia ir como parametro del constructor
        this.#tileY = [73, 0, 365]; // Deberia ir como parametro del constructor
        this.#velY = 0;
        this.#posX = 115;
        this.#posY = 115;
        this.#tileFrame = 0;
        this.#startTimeAnimation = new Date();
        this.#createPlayerImage();
    }
    #createPlayerImage(){
        this.#tileImage = new Image();
        this.#tileImage.src = this.#tileSrc;
    }
    /**
     * Draw Background Image
     */
    drawPlayerImage(){
        if(this.#tileImage != null){
            this.#velY += this.#GRAVITY;
            this.#posY += this.#velY;
            if(this.#posY + this.#TILE_HEIGHT > this.#CANVAS.height){
                this.#posY = this.#CANVAS.height - this.#TILE_HEIGHT;
                this.#velY = 0;
            } else if(this.#posY < 0){
                this.#velY = 0;
            }
            // ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
            this.#CTX.drawImage(this.#tileImage, this.#tileX[this.#tileFrame], this.#tileY[this.#tileFrame], this.#TILE_WIDTH, this.#TILE_HEIGHT, this.#posX, this.#posY, this.#TILE_WIDTH, this.#TILE_HEIGHT);
            let currentAnimationTime = new Date();
            if(currentAnimationTime -this.#startTimeAnimation > 100){
                this.#tileFrame ++;
                this.#tileFrame %= 3;
                this.#startTimeAnimation = currentAnimationTime;
            }
        }
    }

    get posX(){
        return this.#posX;
    }
    get posY(){
        return this.#posY;
    }
    get velY(){
        return this.#velY;
    }
    get width(){
        return this.#TILE_WIDTH;
    }
    get height(){
        return this.#TILE_HEIGHT;
    }
    /**
     * @param {number} v
    */
   set velY(v){
       this.#velY = v;
    }
    /**
     * @param {any} y
     */
    set posY(y){
        this.#posY = y;
    }
    /**
     * @param {any} x
     */
    set posX(x){
        this.#posY = x;
    }
}