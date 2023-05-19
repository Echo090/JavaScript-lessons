const button = document.getElementById("snip-button");

button.addEventListener("click", () => {
  const overlay = document.createElement("div");
  overlay.setAttribute("id", "overlay");
  document.body.appendChild(overlay);

  let isSnipping = false; // flag to indicate whether snipping is in progress
  let startX, startY, endX, endY; // variables to store the coordinates of the selection

  const canvas = document.createElement("canvas");

  async function captureScreen() {
    const canvas2 = await html2canvas(document.body);
    console.log(canvas2 + "ey");

    const context = canvas.getContext("2d");
    console.log("startX: " + startX);
    console.log("startY: " + startY);
    console.log("endX: " + endX);
    console.log("endY: " + endY);
    let width = endX - startX;
    console.log("width: " + width);
    let height = endY - startY;
    console.log("height: " + height);

    // context.drawImage(
    //   canvas2, // the entire document
    //   Math.min(startX, endX), // the leftmost x-coordinate of the selection
    //   Math.min(startY, endY), // the topmost y-coordinate of the selection
    //   Math.abs(endX - startX), // the width of the selection
    //   Math.abs(endY - startY), // the height of the selection
    //   0,
    //   0, // draw the selection at the top left corner of the canvas
    //   canvas2.width,
    //   canvas2.height
    // );

    context.drawImage(
      canvas2, // the entire document
      Math.min(startX, endX), // the leftmost x-coordinate of the selection
      Math.min(startY, endY), // the topmost y-coordinate of the selection
      Math.abs(endX - startX), // the width of the selection
      Math.abs(endY - startY), // the height of the selection
      0,
      0, // draw the selection at the top left corner of the canvas
      Math.abs(endX - startX), // the width of the selection
      Math.abs(endY - startY) // the height of the selection
    );

    console.log("drawimage complete");
    document.body.appendChild(canvas);
  }

  overlay.addEventListener("mousedown", (event) => {
    isSnipping = true; // set flag to indicate that snipping is in progress
    startX = event.clientX; // store the x-coordinate of the starting point
    startY = event.clientY; // store the y-coordinate of the starting point
    console.log("mosuedown - startX, startY captured");
  });

  overlay.addEventListener("mousemove", (event) => {
    if (isSnipping) {
      endX = event.clientX; // update the x-coordinate of the ending point
      endY = event.clientY; // update the y-coordinate of the ending point
      console.log("mousemouse - capturing endX, EndY");
      // draw a rectangle to show the selected area
      // you can use the Canvas API to draw the rectangle on the overlay
    }
  });

  overlay.addEventListener("mouseup", (event) => {
    console.log("mouseup starting");
    isSnipping = false; // set flag to indicate that snipping has ended
    endX = event.clientX; // store the x-coordinate of the ending point
    endY = event.clientY; // store the y-coordinate of the ending point
    canvas.width = Math.abs(endX - startX);
    canvas.height = Math.abs(endY - startY);
    console.log("endX, endY captured");

    captureScreen();
    document.body.removeChild(overlay);
  });
});
