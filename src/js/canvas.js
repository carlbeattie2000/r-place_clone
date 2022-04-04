import config from "./canvas.config";

class Canvas {

  constructor({width, height, canvas_id}) {
    
    this.width = width,
    this.height = height,
    this.canvas = document.getElementById(canvas_id);

  }
  
  init() {

    this.canvas.width = this.width;
    this.canvas.height = this.height;

  }
  
}

export default new Canvas({
  width: config.CANVAS.WIDTH,
  height: config.CANVAS.HEIGHT,
  canvas_id: config.HTML_ELEMENTS_IDS.place_canvas
})