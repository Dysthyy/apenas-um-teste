  const canvas = document.getElementById("canvas");
  const increaseBtn = document.getElementById("increase");
  const decreaseBtn = document.getElementById("decrease");
  const sizeEl = document.getElementById("size");
  const colorEl = document.getElementById("color");
  const clear = document.getElementById("clear");
  const ctx = canvas.getContext("2d");

  let size = 5;
  let isPressed = false;
  let color = "black";
  let x = undefined;
  let y = undefined;

  canvas.addEventListener("mousedown", (e) => {
    isPressed = true;
    
    x = e.offsetX;
    y = e.offsetY;
  });

  canvas.addEventListener("mouseup", (e) => {
    isPressed = false;
  
    x = e.offsetX;
    y = e.offsetY;
  });

  canvas.addEventListener("mousemove", (e) => {
    if (isPressed) {
      
      const x2 = e.offsetX;
      const y2 = e.offsetY;
      
      drawCircle(x2, y2);
      drawLine(x, y, x2, y2);
      x = x2;
      y = y2;
      
    }
  });
  
  function drawCircle(x,y) {
          ctx.beginPath();
          ctx.arc(x,y, size, 0, Math.PI * 2);
          ctx.fillStyle = color;
          ctx.fill();
  }
