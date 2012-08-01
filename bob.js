var canvas = document.getElementById("bob");
var c = canvas.getContext("2d");

var numStars = 5000;
var radius = 1;
var focalLength = canvas.width;

var centerX = canvas.width / 2;
var centerY = canvas.height / 2;

var stars = [], star;
var i;

initializeStars();

setInterval(function(){
  moveStars();
  drawStars();
},30);

function rand255(){
  return Math.floor(Math.random() * 255);
}

function initializeStars(){
  for(i = 0; i < numStars; i++){
    star = {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      z: Math.random() * canvas.width,
      color: 'rgb('+rand255()+','+rand255()+','+rand255()+')'
    };
    stars.push(star);
  }
}

function moveStars(){
  for(i = 0; i < numStars; i++){
    star = stars[i];
    star.z--;
    
    if(star.z <= 0){
      star.z = canvas.width;
    }
  }
}

function drawStars(){
  var pixelX, pixelY, pixelRadius;
  
  c.fillStyle = "rgba(0,0,0,.1)";
  c.fillRect(0,0, canvas.width, canvas.height);
  
  for(i = 0; i < numStars; i++){
    star = stars[i];
    
    pixelX = (star.x - centerX) * (focalLength / star.z);
    pixelX += centerX;
    pixelY = (star.y - centerY) * (focalLength / star.z);
    pixelY += centerY;
    pixelRadius = radius * (focalLength / star.z);
    
    c.fillStyle = star.color;
    
    c.beginPath();
    c.arc(pixelX, pixelY, pixelRadius, 0, 2 * Math.PI);
    c.fill();
  }
}

canvas.addEventListener("mousemove",function(e){
  focalLength = e.x;
});