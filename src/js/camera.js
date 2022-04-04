import config from "./canvas.config";

class Camera {

  constructor({ camera_container }) {

    this.camera_container = camera_container;
    this.x = 0;
    this.y = 0;

  }

  init() {



  }

  keyboardArrowsEvent() {



  }

  moveCamera(x, y) {



  }

  centerCamera() {



  }

}

export default new Camera({
  camera_container: config.HTML_ELEMENTS_IDS.place_camera
})