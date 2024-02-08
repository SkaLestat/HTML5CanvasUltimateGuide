window.onload = () => {
    const CANVAS = document.getElementById("flappy-game");
    const GAME = new FlappyGame(CANVAS);
    GAME.startGame();        
}