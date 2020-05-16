var i=0;
var leftPos=0;
const threshold=10;
var delay=threshold;

function init() {
  requestAnimationFrame(animateImg);
}

function animateImg() {
  delay += 1; 
  if (delay > threshold) {
    delay = 0;
    console.log("painting background with index " + i);
    draw(i);
    i += 1;
    leftPos += 5;
  }
  requestAnimationFrame(animateImg);
}

function draw(index) {
  console.log("painting background.");
  var offset = index * 24;
  var divElem = document.getElementById("animation-window");
  divElem.style.backgroundPosition = offset + "px";
  // Remove to retain static in-place update
  // divElem.style.marginLeft = leftPos + "px";
}
