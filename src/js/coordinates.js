import config from "./canvas.config";

class CursorCoordinates {

  constructor(canvas, coordinatesGUI) {

    this.canvas = canvas;
    this.coordinatesGUI = coordinatesGUI;
    this.x = 0;
    this.y = 0;

  }

  init() {

    const coordinatesTextElement = document.createElement("p");

    coordinatesTextElement.textContent = `(${this.x},${this.y})`;

    this.coordinatesGUI.append(coordinatesTextElement);

  }

  canvasHovering() {



  }

  getCoordinates() {



  }

}

export default new CursorCoordinates({
  canvas: config.HTML_ELEMENTS_IDS.place_canvas,
  coordinatesGUI: config.HTML_ELEMENTS_IDS.cursor_position_container
})