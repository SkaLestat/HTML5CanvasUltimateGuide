class GameScore{
    #CANVAS;
    #CTX;
    #startMoment = null;
    #score;
    #posX = 0;
    #posY = 0;

    /**
     * @param {canvas} canvas - Game canvas
     */
    constructor(canvas){
        this.#CANVAS = canvas;
        this.#CTX = this.#CANVAS.getContext("2d");
        // this.#startMoment = new Date();
        this.#score = 0;
        this.#posX = 0;
        this.#posY = 0;
    }

    /**
     * Draw The Score
     */
    drawScore(){
        if(!this.#startMoment){
            this.#startMoment = new Date();
        }
        let drawMoment = new Date();
        this.#score = parseFloat((drawMoment - this.#startMoment) / 1000).toFixed(1) * 10;
        this.#CTX.font = "45px Future";
        this.#CTX.fillStyle = "red";
        this.#CTX.fillText(this.#score, this.#posX, this.#posY);
    }
    get startMoment(){
        return this.#startMoment;
    }
    get score(){
        return this.#score;
    }
    /**
     * @param {Date} date - Start moment
     */
    set startMoment(date){
        this.#startMoment = date;
    }
    /**
     * @param {number} score - Game Score
     */
    set score(score){
        this.#score = score;
    }
    /**
     * @param {number} x - Y position
     */
    set posX(x){
        this.#posX = x;
    }
    /**
     * @param {number} y - Y Position
     */
    set posY(y){
        this.#posY = y;
    }
}