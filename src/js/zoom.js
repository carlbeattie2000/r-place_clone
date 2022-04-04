import config from "./canvas.config";

class Zoom {

  constructor({min_zoom, max_zoom, zoom_container}) {

    this.min_zoom = min_zoom;
    this.max_zoom = max_zoom;
    this.current_zoom = 0.2;
    this.zoom_steps = 0.4;
    this.zoom_container = document.getElementById(zoom_container);

  }

  init() {

    this.mouseWheelZoomInit();
    this.keyBoardZoomInit();

  }

  validateZoom(newZoom) {

    return newZoom > this.max_zoom ?
           this.max_zoom : newZoom < this.min_zoom ?
           this.min_zoom : newZoom

  }

  zoom(direction) {

    if (direction == "in") {

      this.current_zoom = this.validateZoom(this.current_zoom+this.zoom_steps);

      this.zoom_container.style.transform = `scale(${this.current_zoom})`;

      return

    } 
    else if (direction == "out") {

      this.current_zoom = this.validateZoom(this.current_zoom-this.zoom_steps);

      this.zoom_container.style.transform = `scale(${this.current_zoom})`;

      return

    }

    return 0

  }

  mouseWheelZoomInit() {

    this.zoom_container.addEventListener("wheel", (e) => {
      e.preventDefault();

      const zoom = e.deltaY;

      if (zoom < 0) {

        this.zoom("in");

      }
      else if (zoom > 0) {

        this.zoom("out");

      }

    })

  }

  keyBoardZoomInit() {
    
    document.body.addEventListener("keypress", (e) => {
      
      if (e.key == "=") {

        this.zoom("in");

      }
      else if (e.key == "-") {

        this.zoom("out");

      }

    })

  }
}

export default new Zoom({
  min_zoom: config.CANVAS.MIN_ZOOM,
  max_zoom: config.CANVAS.MAX_ZOOM,
  zoom_container: config.HTML_ELEMENTS_IDS.place_viewer
})