  const canvas = document.getElementById("canvas");
  const increaseBtn = document.getElementById("increase");
  const decreaseBtn = document.getElementById("decrease);
  const sizeEl = document.getElementById("size");
  const colorEl = document.getElementById("color");
  const clear = document.getElementById("clear");

  let size = 5;
  let isPressed = false;
  let color = "black";
  let x = undefined;
  let y = undefined;

  canvas.addEventLister(
