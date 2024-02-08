class GameBackground{
    #CANVAS;
    #CTX;
    #posX = 0;
    #posY = 0;
    #WIDTH;
    #HEIGHT;
    #SRC;
    #image = null;

    /**
     * @param {string} src - Image source 
     * @param {canvas} canvas - Game canvas
     */
    constructor(src, canvas){
        this.#CANVAS = canvas;
        this.#CTX = this.#CANVAS.getContext("2d");
        this.#WIDTH = this.#CANVAS.width;
        this.#HEIGHT = this.#CANVAS.height;
        this.#SRC = src;
        this.#createBgImage();
    }

    #createBgImage(){
        this.#image = new Image();
        this.#image.src = this.#SRC;
    }
    /**
     * Draw Background Image
     */
    drawBgImage(){
        if(this.#image != null){
            this.#CTX.drawImage(this.#image, this.#posX, this.#posY, this.#WIDTH, this.#HEIGHT);
        }
    }
    set posX(x){
        this.#posX = x;
    }
    get posX(){
        return this.#posX;
    }
}