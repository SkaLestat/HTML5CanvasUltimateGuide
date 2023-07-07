window.onload = () => {
    /* Definition */
    const canvas = document.getElementById("hello-world-canvas");
    const ctx = canvas.getContext("2d");
    // Colors
    const lightCellColor = "#ddb180";
    const darkCellColor = "#7c330c";

    /* Frame */
    ctx.strokeStyle = "black";
    ctx.strokeRect(250, 100, 400, 400);

    // /* Cell1 */
    // ctx.fillStyle = lightCellColor;
    // ctx.fillRect(250, 100, 50, 50)
    // /* Cell2 */
    // ctx.fillStyle = darkCellColor;
    // ctx.fillRect(300, 100, 50, 50)
    // /* Cell3 */
    // ctx.fillStyle = lightCellColor;
    // ctx.fillRect(350, 100, 50, 50)
    // /* Cell4 */
    // ctx.fillStyle = darkCellColor;
    // ctx.fillRect(400, 100, 50, 50)

    // /* First Row */
    // for (let i = 0; i < 8; i++) {
    //     if(i % 2 == 0){
    //         ctx.fillStyle = darkCellColor;
    //     } else {
    //         ctx.fillStyle = lightCellColor;
    //     }
    //     ctx.fillRect(250 + i * 50, 100, 50, 50)

    // }
    // /* Second Row */
    // for (let i = 0; i < 8; i++) {
    //     if(i % 2 == 0){
    //         ctx.fillStyle = lightCellColor;
    //     } else {
    //         ctx.fillStyle = darkCellColor;
    //     }
    //     ctx.fillRect(250 + i * 50, 150, 50, 50)

    // }

    for (let y = 0; y < 8; y++) {
        for (let x = 0; x < 8; x++) {
            if ((x + y) % 2 == 0) {
                ctx.fillStyle = darkCellColor;
            } else {
                ctx.fillStyle = lightCellColor;
            }
            ctx.fillRect(250 + x * 50, 100 + y * 50, 50, 50)
        }
    }
}