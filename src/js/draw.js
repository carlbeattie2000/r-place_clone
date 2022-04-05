import shared_state from "./shared_state";
import coordinates from "./coordinates";
import storage from "./storage";

class Draw {

  constructor(canvas) {

    this.canvas = canvas;

  }

  init() {

    this.drawEvent();

    const loadedData = storage.loadDataFromLocalStorage();

    console.log(loadedData);

    this.drawWholeBoard(loadedData);

  }

  drawEvent() {

    this.canvas.addEventListener("mousedown", (e) => {

      const {x, y} = coordinates.getCursorCoordinates(e);

      this.drawRect(x, y, shared_state.selectedColor);

      storage.saveDataToLocalStorage({x, y, color: shared_state.selectedColor});

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