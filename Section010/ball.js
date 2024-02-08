class Ball {
    constructor(radius = 10, color = "red") {
        this.radius = radius; //Ball radius
        this.color = color; //Ball color
        this.centerX = 0; //Center x
        this.centerY = 0; //Center y
        this.mass = 0; //Mass
        this.velX = 0; //velocity of x direction
        this.velY = 0; //velocity of x direction
        this.ctx = null; //The drawing context of the ball

    }

    draw() {
        // Check context
        if(!this.ctx){ 
            return 
        }
        const CTX = this.ctx;
        /* Draw Ball */
        CTX.beginPath();
        CTX.fillStyle = this.color;
        CTX.arc(this.centerX, this.centerY, this.radius, 0, 2 * Math.PI); // 2 * PI => 360°
        CTX.fill();

    }
}