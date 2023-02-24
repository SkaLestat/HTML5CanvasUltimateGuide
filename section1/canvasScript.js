let canvas = document.getElementById("hello-world-canvas");
let context = canvas.getContext("2d");

//Blue rectangle
context.fillStyle = "blue"; //brush color
context.fillRect(10, 40, 30, 70);

context.fillStyle = "yellow"; //brush color
context.fillRect(50, 30, 60, 30);