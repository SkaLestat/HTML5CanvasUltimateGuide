class Wall {
    #CANVAS;
    #CTX;
    #posX;
    #posY;
    #width;
    #height;
    #gap;
    #color;
    #topImage = null;
    #topImageSrc = "./assets/rockDown.png";
    #bottomImage = null;
    #bottomImageSrc = "./assets/rock.png";
    /**
     * @param {canvas} canvas - Game canvas
     */
    constructor(canvas) {
        this.#CANVAS = canvas;
        this.#CTX = this.#CANVAS.getContext("2d");
        this.#posX = this.#CANVAS.width;
        this.#posY = 0;
        this.#width = 100;
        this.#height = 0;
        this.#gap = 0;
        // this.#color = createRandomRGBColor();
        this.#createImages();
    }

    drawWall() {
        // this.#CTX.fillStyle = this.#color;
        /* Upper */
        // this.#CTX.fillRect(this.#posX, this.#posY, this.#width, this.#height);
        if (this.#topImage != null) {
            this.#CTX.drawImage(this.#topImage, this.#posX, this.#posY, this.#width, this.#height);
            // SOLO PARA TEST
            this.#CTX.lineWidth = 2;
            this.#CTX.strokeRect(this.#posX, this.#posY, this.#width, this.#height);
        }
        /* Lower */
        // this.#CTX.fillRect(this.#posX, this.#height + this.#gap, this.#width, this.#CANVAS.height);
        if (this.#bottomImage != null) {
            this.#CTX.drawImage(this.#bottomImage, this.#posX, this.#height + this.#gap, this.#width, this.#CANVAS.height);
            // SOLO PARA TEST
            this.#CTX.lineWidth = 2;
            this.#CTX.strokeRect(this.#posX, this.#height + this.#gap, this.#width, this.#CANVAS.height);
        }

    }
    #createImages() {
        this.#topImage = new Image();
        this.#topImage.src = this.#topImageSrc;
        this.#bottomImage = new Image();
        this.#bottomImage.src = this.#bottomImageSrc;
    }

    get width() {
        return this.#width;
    }
    get height() {
        return this.#height;
    }
    get posX() {
        return this.#posX;
    }
    get posY() {
        return this.#posY;
    }
    get gap() {
        return this.#gap;
    }
    /**
     * @param {any} x
    */
    set posX(x) {
        this.#posX = x;
    }
    /**
     * @param {any} gap
    */
    set gap(gap) {
        this.#gap = gap;
    }
    /**
     * @param {any} height
    */
    set height(height) {
        this.#height = height;
    }
}