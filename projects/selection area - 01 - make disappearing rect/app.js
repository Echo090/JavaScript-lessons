const canvas = document.getElementById("overlay");
const ctx = canvas.getContext("2d");
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;
ctx.fillStyle = "red";

let isDragging = false;
let startX = 0;
let startY = 0;
let endX = 0;
let endY = 0;

canvas.addEventListener("mousedown", handleMouseDown);
canvas.addEventListener("mousemove", handleMouseMove);
canvas.addEventListener("mouseup", handleMouseUp);

// const clear = () => {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
// };

function drawRect() {
  // clear();
  console.log("drawing rectangle");
  // ctx.fillRect(startX, startY, endX - startX, endY - startY);
  //   ctx.strokeStyle = "red"; // Set the rectangle color
  //   ctx.lineWidth = 1; // Set the rectangle border width
  //   ctx.strokeRect(startX, startY, width, height); // Draw the rectangle
  ctx.strokeStyle = "#000";
  ctx.beginPath();
  ctx.rect(startX, startY, startX - endX, startY - endY);
  ctx.stroke();
}

function handleMouseDown(event) {
  console.log("mouse down");
  isDragging = true;
  startX = event.clientX;
  startY = event.clientY;
  console.log(startX, startY);
}

function handleMouseMove(event) {
  if (!isDragging) return;

  console.log("mouse moving");
  endX = event.clientX;
  endY = event.clientY;
  drawRect();
}

function handleMouseUp() {
  console.log("mouse up");
  isDragging = false;
  // Reset the selection area
  startX = 0;
  startY = 0;
  width = 0;
  height = 0;
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
}
