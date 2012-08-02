// Utilities
// from http://paulirish.com/2011/requestanimationframe-for-smart-animating/
window.requestAnimFrame = (function(){
  return window.requestAnimationFrame       || 
    window.webkitRequestAnimationFrame || 
    window.mozRequestAnimationFrame    || 
    window.oRequestAnimationFrame      || 
    window.msRequestAnimationFrame     || 
    function( callback ){
      window.setTimeout(callback, 1000 / 60);
    };
})();

function transform(x, min1, max1, min2, max2){
  // normalizedX is between 0 and 1
  var normalizedX = (x - min1) / (max1 - min1);
  return normalizedX * (max2 - min2) + min2;
}

function sin(x){
  return Math.sin(x);
}

function tan(x){
  return Math.tan(x);
}

var model = (function(){
    return {
       plotXMin: -10,
       plotXMax: 10,
       plotYMin: -10,
       plotYMax: 10,
       time: 0,
       executeEquation: null,
       function setEquation(text){
        var code = ["model.executeEquation = function(x){",
        "  var y;",
        "  var time = model.time;",
        text+";",
        "  return y;",
        "};"].join("\n");
        eval(code);
}
        }
    };
})();

// Model



// Controller

// Main App
model.numSegments = canvas.width;

(function animate(){
  requestAnimFrame(animate);
  model.time += 0.05;
  drawPlot();
})();

function plotButtonClicked(text){
    model.setEquation(text);
}