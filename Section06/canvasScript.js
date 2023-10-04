window.onload = () => {
    const CANVAS = document.getElementById("image-canvas");
    const CTX = CANVAS.getContext("2d");

    /**
     * drawImage(img, dx, dy)
     * drawImage(img, dx, dy, dw , dh)
     * drawImage(img, sx, sy, sw, sh, dx, dy, dw , dh)
     */
    
    // var img = new Image();
    // img.src = "./regularshow.png";
    // img.onload = () => {
    //     CTX.drawImage(img, 100, 100);//necesario que la imagen este cargada antes de usarla
    //     CTX.drawImage(img, 250, 100, 100, 100);
    //     CTX.drawImage(img, 40, 100, 150, 250, 250, 100, 250, 400);
    // }

    // const POKEMON_TILE = new Image();
    // POKEMON_TILE.src = "./pokemons.png";

    // POKEMON_TILE.onload = () => {
    //     // Pikachu
    //     CTX.drawImage(POKEMON_TILE, 0, 0, 200, 200, 0, 0, 200, 200);
    //     // Squirtle
    //     CTX.drawImage(POKEMON_TILE, 400, 180, 200, 200, 200, 0, 200, 200);
    //     // Bulbasaur
    //     CTX.drawImage(POKEMON_TILE, 1000, 0, 200, 200, 400, 0, 200, 200);
    // }

    const AMSTERDAM_IMAGE = new Image();
    AMSTERDAM_IMAGE.src = "./amsterdam.jpg";

    AMSTERDAM_IMAGE.onload = () => {
        CTX.drawImage(AMSTERDAM_IMAGE, 180, 35);
        /**
         * Image Data Functions
         * createImageData() Creates a new, blank ImageData object
         * getImageData() Returns an ImageData object that copies the pixel data for the specified rectangle on 
         * putImageData() Puts the image data (from a specified ImageData object) back onto canvas
         */

        const IMAGE_DATA = CTX.getImageData(180, 35, 500, 365);
        console.log(IMAGE_DATA);

        for (let i = 0; i < IMAGE_DATA.data.length; i += 4) {
            /* Invert */
            // IMAGE_DATA.data[i] = 255 -IMAGE_DATA.data[i]; // Red Component
            // IMAGE_DATA.data[i + 1] = 255 -IMAGE_DATA.data[i + 1]; // Green Component
            // IMAGE_DATA.data[i + 2] = 255 -IMAGE_DATA.data[i + 2]; // Blue Component
            // IMAGE_DATA.data[i + 3] = 255; // Alpha Component
            
            /* Black and White */
            const AVERAGE = (IMAGE_DATA.data[i] + IMAGE_DATA.data[i + 1] + IMAGE_DATA.data[i + 2]) / 3;
            IMAGE_DATA.data[i] = AVERAGE; 
            IMAGE_DATA.data[i + 1] = AVERAGE;
            IMAGE_DATA.data[i + 2] = AVERAGE;
            IMAGE_DATA.data[i + 3] = 255; 
        }

        CTX.putImageData(IMAGE_DATA, 180, 35);

    }

}