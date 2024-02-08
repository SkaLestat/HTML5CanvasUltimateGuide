/**
 * 
 * flappyGame.js
 * Flappy game clone with canvas
 * january-23-2024 - version 1.0
 * {repositoryUrl}
 * 
 * Copyright 2024 Ruben T
 * Released under the MIT License
 * https://opensource.org/license/mit/
 * 
 */

"use strict";

class FlappyGame {
    #CANVAS;
    #CTX;
    #currentState
    /* Game States */
    #GAME_STATES = {
        startScreen: 1,
        playing: 2,
        gameOver: 3
    }
    #gameBackground1;
    #gameBackground2;
    #gameScore;
    #wallFactory;
    #player;
    #VELOCITY = 5;

    /**
     * @param {canvas} canvas - Game canvas
    */
    constructor(canvas) {
        this.#CANVAS = canvas;
        this.#CTX = this.#CANVAS.getContext("2d");
        this.#currentState = this.#GAME_STATES.startScreen;
        /* Bind Events */
        this.#bindEvents(this);
        /* Create Game Objects */
        this.#createGameObjects();
    }

    /**
     * Starts the Game
    */
    startGame() {
        // requestAnimationFrame(this.#runGameLoop); // Genera error por que se pierde la referencia del this de la clase
        requestAnimationFrame(() => {
            this.#runGameLoop();
        });
    }
    #runGameLoop() {
        /* Game State */
        switch (this.#currentState) {
            case this.#GAME_STATES.startScreen:
                this.#drawStartScreen();
                break;
            case this.#GAME_STATES.playing:
                this.#drawplayingScreen();
                break;
            case this.#GAME_STATES.gameOver:
                this.#drawGameOverScreen();
                break;
            default:
                break;
        }

        requestAnimationFrame(() => {
            this.#runGameLoop();
        });
    }
    #drawStartScreen() {
        /* Background */
        this.#CTX.fillStyle = "black";
        this.#CTX.fillRect(0, 0, this.#CANVAS.width, this.#CANVAS.height);
        /* Text */
        this.#CTX.fillStyle = "white";
        this.#CTX.font = "36px Arial";
        this.#CTX.fillText("Click To Start", this.#CANVAS.width / 2 - 100, this.#CANVAS.height / 2);
    }
    #drawplayingScreen() {
        /* Clear Canvas */
        this.#CTX.clearRect(0, 0, this.#CANVAS.width, this.#CANVAS.height);
        /* Background */
        this.#gameBackground1.drawBgImage();
        this.#gameBackground2.drawBgImage();
        this.#animateBackground();
        /* Walls */
        this.#drawWalls();
        /* Score */
        this.#gameScore.drawScore();
        /* Player */
        this.#player.drawPlayerImage();
        /* Check Collision */
        this.#checkCollisions();
    }
    #drawGameOverScreen() {
        /* Background */
        this.#CTX.fillStyle = "black";
        this.#CTX.fillRect(0, 0, this.#CANVAS.width, this.#CANVAS.height);
        /* Text */
        this.#CTX.fillStyle = "white";
        this.#CTX.font = "54px Arial";
        this.#CTX.fillText(`Final Score : ${this.#gameScore.score}`, this.#CANVAS.width / 2 - 180, this.#CANVAS.height / 2 - 100);
        this.#CTX.font = "36px Arial";
        this.#CTX.fillText("GAME OVER :(", this.#CANVAS.width / 2 - 100, this.#CANVAS.height / 2);
        this.#CTX.font = "24px Arial";
        this.#CTX.fillText("Press R to Restart", this.#CANVAS.width / 2 - 100, this.#CANVAS.height / 2 + 50);
    }
    #bindEvents(game) {
        /* Mouse Listener */
        this.#CANVAS.addEventListener("click", function (evt) {
            switch (game.#currentState) {
                case game.#GAME_STATES.startScreen:
                    game.#currentState = game.#GAME_STATES.playing;
                    game.#wallFactory.generateWalls();
                    break;
                case game.#GAME_STATES.playing:
                    // game.#player.velY *= -1;
                    game.#player.velY = game.#VELOCITY * -1; //revisar por que no me gusta como se ve
                    break;
                default:
                    break;
            }
        });
        /* Key Listener */
        window.addEventListener("keydown", function (evt) {
            switch (game.#currentState) {
                case game.#GAME_STATES.gameOver:
                    if(evt.code == "KeyR"){
                        game.#reset();
                        game.#currentState = game.#GAME_STATES.playing;
                    }
                    break;
                default:
                    break;
            }
        });
    }
    #createGameObjects(){
        /* Background */
        this.#gameBackground1 = new GameBackground("./assets/background.png", this.#CANVAS);
        this.#gameBackground2 = new GameBackground("./assets/background.png", this.#CANVAS);
        this.#gameBackground2.posX = this.#CANVAS.width;
        /* Score */
        this.#gameScore = new GameScore(this.#CANVAS);
        this.#gameScore.posX = this.#CANVAS.width - 150;
        this.#gameScore.posY = 80;
        /* Wall Factory */
        this.#wallFactory = new WallFactory(this.#CANVAS);
        // this.#wallFactory.generateWalls(); // Se estan sobre poniendo las columnas por que se generan al momento de cargar el juego, no al iniciarlo
        /* Player */
        this.#player = new Player(this.#CANVAS, "./assets/planes.png");
    }
    #animateBackground(){
        if(Math.abs(this.#gameBackground1.posX) > this.#CANVAS.width){
            this.#gameBackground1.posX = this.#CANVAS.width - this.#VELOCITY; // ?? cuando la imagen1 supera el borde, la imagen 2 ya se ha movido 1 vez por eso el uso del -VELOCITY 
        }
        this.#gameBackground1.posX =  this.#gameBackground1.posX - this.#VELOCITY;
        if(Math.abs(this.#gameBackground2.posX) > this.#CANVAS.width){
            this.#gameBackground2.posX = this.#CANVAS.width - this.#VELOCITY; // ??
        }
        this.#gameBackground2.posX =  this.#gameBackground2.posX - this.#VELOCITY;
    }
    #drawWalls(){
        let walls = this.#wallFactory.walls;
        walls.forEach(wall => {
            wall.drawWall();
            wall.posX -= this.#VELOCITY;
        });
        this.#removeWalls(walls)
    }
    #removeWalls(walls){
        walls.forEach(wall => {
            if(wall.posX + wall.width < 0){
                walls.shift();
            }
        });
    }
    #checkCollisions(){
        let walls = this.#wallFactory.walls;
        for (let i = 0; i < walls.length; i++) {
            if(this.#isCollided(this.#player, walls[i])){
                this.#currentState = this.#GAME_STATES.gameOver;
            } 
        }
    }
    #isCollided(player, wall){
        let isCollided = true;
        let playerCollisionBox = {
            top: this.#player.posY,
            bottom: this.#player.posY + this.#player.height,
            right: this.#player.posX + this.#player.width,
            left: this.#player.posX
        }
        let wallCollisionBox = {
            top: wall.posY + wall.height + wall.gap, // top of lower wall
            bottom: wall.posY + wall.height, // bottom of upper wall
            right: wall.posX + wall.width,
            left: wall.posX
        }
        /* let wallCollisionBox = {
            top: wall.posY,
            bottom: wall.posY + wall.height,
            right: wall.posX + wall.width,
            left: wall.posX
        } */
        /* OJO DEBERIA CAMBIAR LA FORMA EN QUE SE GENERAN LOS OBSTACULOS */
        if((playerCollisionBox.bottom < wallCollisionBox.top && playerCollisionBox.top > wallCollisionBox.bottom)
        || playerCollisionBox.left > wallCollisionBox.right
        || playerCollisionBox.right < wallCollisionBox.left){
            isCollided = false;
        }
        /* if((playerCollisionBox.bottom > wallCollisionBox.top && playerCollisionBox.top < wallCollisionBox.bottom)
        && (playerCollisionBox.right > wallCollisionBox.left && playerCollisionBox.left < wallCollisionBox.right)){
            return true;
        } */
        return isCollided;
    }
    #reset(){
        this.#gameScore.startMoment = new Date();
        this.#gameScore.score = 0;
        this.#wallFactory.walls = [];
        this.#player.posX = 115;
        this.#player.posY = 115;
    }
}