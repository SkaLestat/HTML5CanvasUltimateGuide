/* Global Functions */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //maximum exclusive minimum inclusive
}
function createRandomRGBColor() {
    let red = getRandomInt(0, 257);
    let green = getRandomInt(0, 257);
    let blue = getRandomInt(0, 257);
    return `rgb(${red}, ${green}, ${blue})`;
}
/* /Global Functions */

