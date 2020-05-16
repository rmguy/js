var i=0;
var leftPos=0;

function animateImg() {
  console.log("painting background with index " + i);
  draw(i);
  i += 1;
  leftPos += 5;
}

function draw(index) {
  console.log("painting background.");
  var offset = index * 24;
  var divElem = document.getElementById("divstyle");
  divElem.style.backgroundPosition = offset + "px";
  // Remove to retain static in-place update
  divElem.style.marginLeft = leftPos + "px";
  divElem.style.marginColor = "red";
}
