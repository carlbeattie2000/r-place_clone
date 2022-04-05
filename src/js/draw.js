export function fillRectMethod({ x, y, color }, ctx) {
  ctx.fillStyle = color;
  x = Math.floor(x);
  y = Math.floor(y);
  ctx.fillRect(x, y, 1, 1);
}

export function drawLogoExample(pixels, ctx) {
  for (let pixel of pixels) {
    fillRectMethod(pixel, ctx);
  }
}

import shared_state from "./shared_state";
import coordinates from "./coordinates";

class Draw {

  constructor(canvas) {

    this.canvas = canvas;

  }

  init() {

    this.drawEvent();

  }

  drawEvent() {

    this.canvas.addEventListener("mousedown", (e) => {

      const {x, y} = coordinates.getCursorCoordinates(e);

      this.drawRect(x, y, shared_state.selectedColor);

    })

  }

  drawRect(x, y, color) {

    const ctx = shared_state.ctx;
    
    y = Math.floor(y);
    x = Math.floor(x);

    ctx.fillStyle = color;
    ctx.fillRect(x, y, 1, 1);

  }

  drawWholeBoard(pixels) {

    for (let pixel of pixels) {

      this.drawRect(pixel.x, pixel.y, pixel.color);

    }

  }

}

const main = new Draw(shared_state.canvas);

main.init();

export default main;