"use strict";

var canvas = null,
    $canvas = null;
$(document).ready(function() {
    window.canvas = document.getElementById("gameBoard");
    window.$canvas = $(canvas);
    
    generateRandomState();
});

var colors = ["red", "blue", "yellow", "orange", "green", "purple", "orangered"];

var Life = (function() {  
    function Life(options){
        this.opts = {};
        
        _.extend(this.opts, options);
        this.color(this.opts.color || _.sample(window.colors));
    }
    
    Life.prototype.color = function(color) { 
        if(color)
            this.opts.color = color;
        return this.opts.color; 
    };
    
    return Life;
})();

function generateRandomState() {
    var init = _.map(_.range(0, 100), function() {
        return _.map(_.range(0, 100), function() {
            if(Math.floor(Math.random() * 10) < 4)
                return new window.Life();
            else
                return 0;
        });
    });

    window.$canvas.data("gameState", init);
    draw2dArray(init);
}

function drawElement(context, value, index) {
    if(value === 0) return;
    
    var x = (index % 100 ) * 10,
    y = Math.floor(index / 100) * 10;
    context.fillStyle = _.sample(colors);
    context.fillRect(x, y, 10, 10);
};

function drawArray(array) {
    var context = window.canvas.getContext("2d");
    for(var x=0; x < array.length; x++) {
        drawElement(context, array[x], x);
    }
};

var draw2dArray2 = function(array) {
    //Reset the canvas by reassigning the width
    window.canvas.width = window.canvas.width;
    drawArray(_.reduce( array, function(frst, sec) { return frst.concat(sec); }));
};

var drawingLock = false;
var draw2dArray = function(array) {
    if(window.drawingLock)console.log("Warning! We are attempting to draw while currently drawing."); 
    window.drawingLock = true;
    draw2dArray2(array);
    window.drawingLock = false;
};

function checkNeighbor(array, x, y) {
    x = x < 0 ? 99 : ((x >= 100 ) ? 0 : x);
    y = y < 0 ? 99 : ((y >= 100 ) ? 0 : y);
    
    return array[y][x] ? 1 : 0;
}

function getNeighborPop(x, y, state) {
    var neighbors = 0,
        a = checkNeighbor;
    
    neighbors += a(state, x-1, y-1) + a(state, x, y-1) + a(state, x+1, y-1);
    neighbors += a(state, x-1, y)   +     0     + a(state, x+1, y);
    neighbors += a(state, x-1, y+1) + a(state, x, y+1) + a(state, x+1, y+1);
    return neighbors;
}

function changeState(currentState, x, y, state) {
    var neighborPop = getNeighborPop(x, y, state);
    
    if(neighborPop < 2 || neighborPop > 3)
        return 0;
    else if(neighborPop === 3)
        return 1;
    else
        return currentState;
}

function handleStateArray(elements, indexY, state) {
    var newState = [];
    newState.length = elements.length;
    
    for(var x=0; x<elements.length; x++) {
        newState[x] = changeState(elements[x], x, indexY, state);
    }
    
    return newState;
}

function calculateNewState(oldState) {
    var newState = [];
    newState.length = oldState.length;
    
    for(var x=0; x<oldState.length; x++) {
        newState[x] = handleStateArray(oldState[x], x, oldState);
    }
    return newState;
};

function step() {
    var gameState = window.$canvas.data("gameState");
    var newState = calculateNewState(gameState);
    //Draw the array.
    draw2dArray(newState);
    window.$canvas.data("gameState", newState);
};

function timer(interval, func) {
//    return setTimeout(function() {
//            func();
//            return timer();
//    });
    return setInterval(func, interval);
}

(function() {
    var interval = 100,
        mainLoop = null;
    $.extend(window, {
        "start" : function() {
            if(!mainLoop)
                mainLoop = timer(interval, step);
        },
        "stop" : function() {
            mainLoop && clearInterval(mainLoop);
            mainLoop = null;
        },
        "updateInterval" : function(newInterval) {
            interval = newInterval;
            stop();
            start();
        },
        "regenerate" : function() {
            generateRandomState();
        },
    });
})();
