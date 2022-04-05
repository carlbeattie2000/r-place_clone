import shared_state from "./shared_state";
import { getLastKeyInObject } from "./utils";
import config from "./config";

class CanvasZoom {

  constructor(canvas, zoom_container, zoomLevels) {

    this.canvas = canvas;
    this.zoom_container = zoom_container;
    this.zoomLevels = zoomLevels

    this.currentZoomLevel = 0;
    this.maxZoomLevel = getLastKeyInObject(this.zoomLevels);

  }

  init() {

    this.scrollEvent();

  }

  scrollEvent() {

    this.zoom_container.addEventListener("wheel", (e) => {
      e.preventDefault();

      if (e.deltaY < 0) {
        // Zoom in
        this.zoom("in");
      }
      else if (e.deltaY > 0) {
        // Zoom out
        this.zoom("out");
      }
    })

  }

  zoom(direction) {

    switch (direction) {

      case "in":
        this.currentZoomLevel = this.currentZoomLevel + 1 > this.maxZoomLevel ? this.maxZoomLevel : this.currentZoomLevel + 1;
        break
      case "out":
        this.currentZoomLevel = this.currentZoomLevel - 1 < 0 ? 0 : this.currentZoomLevel - 1;
        break
      default:
        break

    }

    this.updateCanvasScale(this.zoomLevels[this.currentZoomLevel]);

    this.updateMaxMinSpan();
    this.updateCurrentSpan();

  }

  updateCanvasScale(scale) {

    const scaleText = `scale(${scale})`;

    this.canvas.style.transform = scaleText;

  }

  updateMaxMinSpan() {

    const newSpanValue = (this.canvas.width * this.zoomLevels[this.currentZoomLevel]) / 2;

    shared_state.setMaxSpanX(newSpanValue);
    shared_state.setMaxSpanY(newSpanValue);

    shared_state.setMinSpanX(-newSpanValue);
    shared_state.setMinSpanY(-newSpanValue);

  }

  updateCurrentSpan() {

    let currentSpanX = shared_state.current_span_x;
    let currentSpanY = shared_state.current_span_y;

    shared_state.setCurrentSpanX(currentSpanX > shared_state.max_span_x ? shared_state.max_span_x : currentSpanX < shared_state.min_span_x ? 0 : currentSpanX);

    shared_state.setCurrentSpanY(currentSpanY > shared_state.max_span_y ? shared_state.max_span_y : currentSpanY < shared_state.min_span_y ? 0 : currentSpanY);

    shared_state.updateSpanContainer();

  }

}

export default new CanvasZoom(shared_state.canvas, shared_state.span_container, config.CANVAS_ZOOM_LEVELS);