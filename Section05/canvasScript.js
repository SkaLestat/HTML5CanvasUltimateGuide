window.onload = () => {
    const MIN = 1;
    const MAX = 200;

    /* Chart Data */
    let data = [
        {
            label: "Jan",
            value: getRandomInt(MIN, MAX)
        },
        {
            label: "Feb",
            value: getRandomInt(MIN, MAX)
        },
        {
            label: "March",
            value: getRandomInt(MIN, MAX)
        },
        {
            label: "April",
            value: getRandomInt(MIN, MAX)
        },
        {
            label: "May",
            value: getRandomInt(MIN, MAX)
        },
    ]

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //maximum exclusive minimum inclusive
    }

    /* Chart Specifications */
    const TARGET_ID = "chart";
    const CANVAS_WIDTH = 600;
    const CANVAS_HEIGHT = 450;

    /* Create Chart Object */
    const CHART = new BarChart(TARGET_ID, CANVAS_WIDTH, CANVAS_HEIGHT, data);
    console.log(CHART)

}