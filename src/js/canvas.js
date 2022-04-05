import shared_state from "./shared_state";
import config from "./config";

class Canvas {
  constructor(canvas, width, height) {

    this.canvas = canvas;
    this.width = width;
    this.height = height

  }

  init() {

    this.canvas.height = this.height;
    this.canvas.width = this.width;
    this.canvas.style.backgroundColor = "#fff";

    shared_state.setCtx(this.canvas.getContext("2d"));
    shared_state.setCanvas(this.canvas);

  }
}

export default new Canvas(shared_state.canvas, config.canvas_width, config.canvas_height);