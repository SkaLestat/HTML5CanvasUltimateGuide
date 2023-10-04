window.onload = () => {
    const CANVAS = document.getElementById("image-canvas");
    const CTX = CANVAS.getContext("2d");

    // CTX.save(); => Saving the context state-canvas
    // CTX.restore(); => restoring the state from state stack

    // State Stack

    // Rect 1
    // CTX.fillStyle = "red";
    // CTX.fillRect(240, 100, 120, 120);
    // CTX.save();

    // // Rect 2
    // CTX.fillStyle = "green";
    // CTX.fillRect(390, 100, 120, 120);
    // CTX.save();

    // // Rect 3
    // CTX.fillStyle = "blue";
    // CTX.fillRect(540, 100, 120, 120);
    // CTX.save();

    // // Rect 4
    // CTX.restore();
    // CTX.fillRect(240, 300, 120, 120);

    // // Rect 5
    // CTX.restore();
    // CTX.fillRect(390, 300, 120, 120);

    // // Rect 6
    // CTX.restore();
    // CTX.fillRect(540, 300, 120, 120);

    // const AMSTERDAM_IMAGE = new Image();
    // AMSTERDAM_IMAGE.src = "./amsterdam.jpg";

    // AMSTERDAM_IMAGE.onload = () => {
    //     CTX.drawImage(AMSTERDAM_IMAGE, 180, 35);

    //     const IMAGE_DATA = CTX.getImageData(180, 35, 500, 365);
    //     console.log(IMAGE_DATA);

    //     for (let i = 0; i < IMAGE_DATA.data.length; i += 4) {
    //         /* Black and White */
    //         const AVERAGE = (IMAGE_DATA.data[i] + IMAGE_DATA.data[i + 1] + IMAGE_DATA.data[i + 2]) / 3;
    //         IMAGE_DATA.data[i] = AVERAGE; 
    //         IMAGE_DATA.data[i + 1] = AVERAGE;
    //         IMAGE_DATA.data[i + 2] = AVERAGE;
    //         IMAGE_DATA.data[i + 3] = 255; 
    //     }

    //     CTX.putImageData(IMAGE_DATA, 180, 35);
    //     // Save Canvas image as data url (Default PNG)
    //     let dataUrl = CANVAS.toDataURL();
    //     console.log(dataUrl);
    //     document.getElementById("canvas-image").src = dataUrl;
    // }

    /** CTX.createPattern(image, repetition)
     * repetition:
     * - repeat: both directions
     * - repeat-x: horizontal only
     * - repeat-y: vertical only
     * - no-repeat: neither
     */

    // const PATTERN_IMAGE = new Image();
    // PATTERN_IMAGE.src = "./apple.png";

    // PATTERN_IMAGE.onload = () => {
    //     // let pattern = CTX.createPattern(PATTERN_IMAGE, "repeat-x");
    //     // let pattern = CTX.createPattern(PATTERN_IMAGE, "repeat-y");
    //     // let pattern = CTX.createPattern(PATTERN_IMAGE, "no-repeat");
    //     let pattern = CTX.createPattern(PATTERN_IMAGE, "repeat");
    //     CTX.fillStyle = pattern;
    //     CTX.fillRect(0, 0, 900, 450);
    // }

    // CTX.createLinearGradient(x1, y1, x2, y2);
    // CTX.createRadialGradient(x1, y1, r1, x2, y2, r2);

    /* Linear Gradient */
    // let linearGradient = CTX.createLinearGradient(240, 40, 660, 680);
    // // linearGradient.addColorStop(stop, color);
    // linearGradient.addColorStop(0, "red");
    // linearGradient.addColorStop(0.25, "blue");
    // linearGradient.addColorStop(0.5, "green");
    // linearGradient.addColorStop(0.75, "orange");
    // linearGradient.addColorStop(1, "white");

    /* Radial Gradient */
    let radiantGradient = CTX.createRadialGradient(570, 380, 300, 570, 300, 50);
    radiantGradient.addColorStop(0, "red");
    radiantGradient.addColorStop(0.25, "blue");
    radiantGradient.addColorStop(0.5, "green");
    radiantGradient.addColorStop(0.75, "orange");
    radiantGradient.addColorStop(1, "white");

    CTX.strokeStyle = "blue";
    CTX.lineWidth = 4;
    // CTX.fillStyle = "red";
    CTX.fillStyle = radiantGradient;
    CTX.rect(240, 40, 420, 420);
    CTX.stroke();
    CTX.fill();

}