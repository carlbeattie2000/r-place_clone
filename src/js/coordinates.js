import config from "./canvas.config";

class CursorCoordinates {

  constructor({view_container, canvas, coordinatesGUI}) {

    this.view_container = document.getElementById(view_container);
    this.canvas = document.getElementById(canvas);
    this.coordinatesGUI = document.getElementById(coordinatesGUI);
    this.x = 0;
    this.y = 0;

  }

  init() {

    this.coordinatesGUI.style.display = "unset"

    const coordinatesTextElement = document.createElement("p");

    coordinatesTextElement.textContent = `(${this.x},${this.y})`;

    this.coordinatesGUI.append(coordinatesTextElement);

    this.canvasHovering();

  }

  canvasHovering() {

    this.view_container.addEventListener("mousemove", (e) => {

      const { x, y } = this.getCoordinates(e);

      this.coordinatesGUI.querySelector("p").textContent = `(${Math.floor(x)}, ${Math.floor(y)})`;

    })

  }

  getCoordinates(e) {

    const rect = this.canvas.getBoundingClientRect();

    // Take scaling into account
    const scaleX = this.canvas.width / rect.width;
    const scaleY = this.canvas.height / rect.height;

    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY
    }

  }

}

export default new CursorCoordinates({
  view_container: config.HTML_ELEMENTS_IDS.place_camera,
  canvas: config.HTML_ELEMENTS_IDS.place_canvas,
  coordinatesGUI: config.HTML_ELEMENTS_IDS.cursor_position_container
})