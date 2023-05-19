const canvas = document.getElementById("overlay");
const ctx = canvas.getContext("2d");
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

const drawSelection = (e) => {
  ctx.strokeStyle = "#000";
  ctx.beginPath();
  ctx.rect(origin.x, origin.y, e.offsetX - origin.x, e.offsetY - origin.y);
  ctx.stroke();
};

const clear = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};

const render = (e) => {
  clear();

  if (origin) drawSelection(e);
};

let origin = null;
canvas.onmousedown = (e) => {
  origin = {
    x: e.offsetX,
    y: e.offsetY,
  };
};

canvas.onmousemove = render;

canvas.onmouseup = (e) => {
  origin = null;
  render(e);
};
