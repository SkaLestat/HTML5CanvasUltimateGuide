/**
 * 
 * bar.js
 * simple, elegant bar chart library
 * june-08-2023 - version 1.0
 * {repositoryUrl}
 * 
 * Copyright 2023 Ruben T
 * Released under the MIT License
 * https://opensource.org/license/mit/
 * 
 */

"use strict";

class BarChart {
    /* Chart specifications */
    // axis configuration
    #AXISRATIO = 10; // In terms of percentage
    #verticalMargin;
    #horizontalMargin;
    #AXISCOLOR = "#b1b1b1";
    #AXISWIDTH = 0.75;
    // Label configuration
    #FONTRATIO = 3; // percentage
    #FONTFAMILY = "times";
    #FONTSTYLE = "normal";
    #FONTWEIGHT = "300";
    #FONTCOLOR = "#666";
    #verticalFontSize;
    #horizontalFontSize;
    // Guideline configuration
    #GUIDELINECOLOR = "e5e5e5";
    #GUIDELINEWIDTH = 0.5;
    #canvas;
    #ctx;

    constructor(targetId, width, height, data) {
        /* Canvas Specifications come from outside */
        this.id = targetId;
        this.width = width;
        this.height = height;
        this.data = data;
        this.#verticalMargin = (this.height * this.#AXISRATIO) / 100;
        this.#horizontalMargin = (this.width * this.#AXISRATIO) / 100;
        this.#verticalFontSize = (this.height * this.#FONTRATIO) / 100;
        this.#horizontalFontSize = (this.width * this.#FONTRATIO) / 100;

        this.#performPreOperations();
        this.#drawChart();
    }

    get canvasId() {
        return this.#canvas.id;
    }

    #performPreOperations() {
        /* Create Canvas */
        this.#createCanvas();
        /* Get Data */
        this.#handleData();
        /* Prepare Data */
        this.#prepareData();
    }

    #createCanvas() {
        const CANVAS = document.createElement("canvas");
        CANVAS.id = `${this.id}-${Math.random()}`;
        CANVAS.width = this.width;
        CANVAS.height = this.height;
        document.getElementById(this.id).innerHTML = "";
        document.getElementById(this.id).style.width = `${this.width}px`;
        document.getElementById(this.id).style.height = `${this.height}px`;
        document.getElementById(this.id).appendChild(CANVAS);
        this.#canvas = CANVAS;
        this.#ctx = this.#canvas.getContext("2d");
    }

    #handleData() {
        /* Data sets */
        this.labels = [];
        this.values = [];
        /* Handle Data */
        this.data.forEach(element => {
            this.labels.push(element.label);
            this.values.push(element.value);
        });
    }

    #prepareData() {
        this.itemsNum = this.data.length;
        this.maxValue = Math.max(...this.values);
        this.minValue = Math.min(...this.values);
        /* axis Specifications */
        this.verticalAxisSize = this.height - 2 * this.#verticalMargin;
        this.horizontalAxisSize = this.width - 2 * this.#horizontalMargin;
        /* Label Specifications */
        this.verticalUpperBound = Math.ceil(this.maxValue / 10) * 10;
        this.verticalLabelFreq = this.verticalUpperBound / this.itemsNum;
        this.horizontalLabelFreq = this.horizontalAxisSize / this.itemsNum;
    }

    #drawChart() {
        /* Vertical Axis */
        this.#drawVerticalAxis();
        this.#drawHorizontalAxis();
        this.#drawVerticalLabels();
        this.#drawHorizontalLabels();
        this.#drawHorizontalGuidelines();
        this.#drawVerticalGuidelines();
        this.#drawBars();
    }

    #drawVerticalAxis() {
        /* Vertical Axis */
        this.#ctx.beginPath();
        this.#ctx.strokeStyle = this.#AXISCOLOR;
        this.#ctx.lineWidth = this.#AXISWIDTH;
        this.#ctx.moveTo(this.#horizontalMargin, this.#verticalMargin);
        this.#ctx.lineTo(this.#horizontalMargin, this.height - this.#verticalMargin);
        this.#ctx.stroke();
    }

    #drawHorizontalAxis() {
        /* Horizontal Axis */
        this.#ctx.beginPath();
        this.#ctx.strokeStyle = this.#AXISCOLOR;
        this.#ctx.lineWidth = this.#AXISWIDTH;
        this.#ctx.moveTo(this.#horizontalMargin, this.height - this.#verticalMargin);
        this.#ctx.lineTo(this.width - this.#horizontalMargin, this.height - this.#verticalMargin);
        this.#ctx.stroke();
    }

    #drawVerticalLabels() {
        /* Text specifications */
        const LABEL_FONT = `${this.#FONTSTYLE} ${this.#FONTWEIGHT} ${this.#verticalFontSize}px ${this.#FONTFAMILY}`;
        this.#ctx.font = LABEL_FONT;
        this.#ctx.textAlign = "right";
        this.#ctx.fillStyle = this.#FONTCOLOR;
        // Scale Values
        const SCALED_VERTICAL_LABEL_FREQ = this.verticalAxisSize / this.verticalUpperBound * this.verticalLabelFreq;
        // const SCALED_VERTICAL_LABEL_FREQ = this.verticalAxisSize / this.itemsNum; // Logica RT Funciona igual
        /* Draw Labels */
        for (let i = 0; i <= this.itemsNum; i++) {
            const LABEL_TEXT = Math.ceil(this.verticalUpperBound - i * this.verticalLabelFreq);
            const VERTICAL_LABEL_X = this.#horizontalMargin - this.#horizontalMargin / this.#AXISRATIO;
            const VERTICAL_LABEL_Y = this.#verticalMargin + i * SCALED_VERTICAL_LABEL_FREQ;

            this.#ctx.fillText(LABEL_TEXT, VERTICAL_LABEL_X, VERTICAL_LABEL_Y);
        }
    }

    #drawHorizontalLabels() {
        /* Text specifications */
        const LABEL_FONT = `${this.#FONTSTYLE} ${this.#FONTWEIGHT} ${this.#horizontalFontSize}px ${this.#FONTFAMILY}`;
        this.#ctx.font = LABEL_FONT;
        this.#ctx.textAlign = "center";
        this.#ctx.textBaseline = "top";
        this.#ctx.fillStyle = this.#FONTCOLOR;
        /* Draw Labels */
        for (let i = 0; i < this.itemsNum; i++) {
            const HORIZONTAL_LABEL_X = this.#horizontalMargin + i * this.horizontalLabelFreq + this.horizontalLabelFreq / 2;
            const HORIZONTAL_LABEL_Y = this.verticalAxisSize + this.#verticalMargin + this.#verticalMargin / this.#AXISRATIO;

            this.#ctx.fillText(this.labels[i], HORIZONTAL_LABEL_X, HORIZONTAL_LABEL_Y);
        }
    }

    #drawHorizontalGuidelines() {
        // specifications
        this.#ctx.strokeStyle = this.#GUIDELINECOLOR;
        this.#ctx.lineWidth = this.#GUIDELINEWIDTH;
        // scale values
        const SCALED_VERTICAL_LABEL_FREQ = this.verticalAxisSize / this.verticalUpperBound * this.verticalLabelFreq;
        for (let i = 0; i <= this.itemsNum; i++) {
            // starting point coordinates
            const HORIZONTAL_GUIDELINE_START_X = this.#horizontalMargin;
            const HORIZONTAL_GUIDELINE_START_Y = this.#verticalMargin + i * SCALED_VERTICAL_LABEL_FREQ;
            // end point coordinates
            const HORIZONTAL_GUIDELINE_END_X = this.#horizontalMargin + this.horizontalAxisSize;
            const HORIZONTAL_GUIDELINE_END_Y = HORIZONTAL_GUIDELINE_START_Y;

            this.#ctx.beginPath();
            this.#ctx.moveTo(HORIZONTAL_GUIDELINE_START_X, HORIZONTAL_GUIDELINE_START_Y)
            this.#ctx.lineTo(HORIZONTAL_GUIDELINE_END_X, HORIZONTAL_GUIDELINE_END_Y)
            this.#ctx.stroke();
        }
    }

    #drawVerticalGuidelines() {
        // specifications
        this.#ctx.strokeStyle = this.#GUIDELINECOLOR;
        this.#ctx.lineWidth = this.#GUIDELINEWIDTH;

        /* Draw Labels */
        for (let i = 0; i <= this.itemsNum; i++) {
            const VERTICAL_GUIDELINE_START_X = this.#horizontalMargin + i * this.horizontalLabelFreq;
            const VERTICAL_GUIDELINE_START_Y = this.verticalAxisSize + this.#verticalMargin;
            // end point coordinates
            const VERTICAL_GUIDELINE_END_X = VERTICAL_GUIDELINE_START_X;
            const VERTICAL_GUIDELINE_END_Y = this.#verticalMargin;

            this.#ctx.beginPath();
            this.#ctx.moveTo(VERTICAL_GUIDELINE_START_X, VERTICAL_GUIDELINE_START_Y)
            this.#ctx.lineTo(VERTICAL_GUIDELINE_END_X, VERTICAL_GUIDELINE_END_Y)
            this.#ctx.stroke();
        }
    }

    #drawBars() {
        for (let i = 0; i < this.itemsNum; i++) {
            const BAR_X = this.#horizontalMargin + i * this.horizontalLabelFreq + this.horizontalLabelFreq / this.#AXISRATIO;
            const BAR_Y = this.height -  this.#verticalMargin;
            const BAR_WIDTH = this.horizontalLabelFreq - 2 * this.horizontalLabelFreq / this.#AXISRATIO;
            const BAR_HEIGHT = -1 * this.verticalAxisSize * this.values[i] / this.maxValue;// -1 para invertir los rectangulos, si el height es positivo saldrian por debajo del eje

            const COLOR = this.#createRandomRGBColor();
            const FILL_OPACITY = "0.3";
            const FILL_COLOR = `rgba(${COLOR.red}, ${COLOR.green}, ${COLOR.blue}, ${FILL_OPACITY})`;
            const BORDER_COLOR = `rgba(${COLOR.red}, ${COLOR.green}, ${COLOR.blue})`;

            this.#ctx.beginPath();
            this.#ctx.fillStyle = FILL_COLOR;
            this.#ctx.strokeStyle = BORDER_COLOR;
            this.#ctx.rect(BAR_X, BAR_Y, BAR_WIDTH, BAR_HEIGHT);
            this.#ctx.stroke();
            this.#ctx.fill();

        }
    }

    #createRandomRGBColor() {
        const RED = this.#getRandomInt(0, 257);
        const GREEN = this.#getRandomInt(0, 257);
        const BLUE = this.#getRandomInt(0, 257);

        return {
            red: RED,
            green: GREEN,
            blue: BLUE
        }
    }

    #getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //maximum exclusive minimum inclusive
    }
} 