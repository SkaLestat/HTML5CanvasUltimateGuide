class WallFactory{
    #CANVAS;
    #CTX;
    #minGap;
    #maxGap;
    #frecuency;
    #walls;
    /**
     * @param {canvas} canvas - Game canvas
     */
    constructor(canvas){
        this.#CANVAS = canvas;
        this.#CTX = this.#CANVAS.getContext("2d");
        this.#minGap = 200;
        this.#maxGap = 300;
        this.#frecuency = 1500;
        this.#walls = [];
    }

    generateWalls(){
        setInterval(()=>{
            let gap = getRandomInt(this.#minGap, this.#maxGap);
            let height = getRandomInt(0, this.#maxGap);
            let wall = new Wall(this.#CANVAS);
            wall.gap = gap;
            wall.height = height;
            this.#walls.push(wall);
        }, this.#frecuency);
    }

    get walls(){
        return this.#walls;
    }
    /**
     * @param {Array} walls
     */
    set walls(walls){
        this.#walls = walls;
    }
}