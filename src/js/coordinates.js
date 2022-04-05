import shared_state from "./shared_state";

class Coordinates {

  constructor(canvas, coordinates_display) {

    this.canvas = canvas;
    this.coordinates_display = coordinates_display;

  }

  init() {

    this.getCoordinatesOnMouseOverCanvas();

  }


  getCursorCoordinates(e) {

    const rect = this.canvas.getBoundingClientRect();

    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY
    }

  }

  updateCoordinatesDisplay(x, y) {

    x = Math.floor(x);
    y = Math.floor(y);

    this.coordinates_display.querySelector("p").textContent = `(${x}, ${y})`;

  }

  getCoordinatesOnMouseOverCanvas() {

    this.canvas.addEventListener("mousemove", (e) => {

      const { x, y } = this.getCursorCoordinates(e);

      this.updateCoordinatesDisplay(x, y);

    })

  }

}

const main = new Coordinates(shared_state.canvas, shared_state.coordinates_display);

main.init();

export default main;