import shared_state from "./shared_state"

class Camera {

  constructor() {



  }

  init() {

    this.keyboardMovement();

  }

  keyboardMovement() {

    document.body.addEventListener("keydown", (e) => {

      const key = e.key
        .replace("ArrowUp", "up")
        .replace("ArrowRight", "right")
        .replace("ArrowDown", "down")
        .replace("ArrowLeft", "left")

      const current_x = shared_state.current_span_x;
      const current_y = shared_state.current_span_y;
      
      switch(key) {
        
        case "up":
          shared_state.setCurrentSpanY(
            current_y + 50 > shared_state.max_span_y ? shared_state.max_span_y :
            current_y + 50
          )
          break
        case "right":
          shared_state.setCurrentSpanX(
            current_x + 50 > shared_state.max_span_x ? shared_state.max_span_x :
            current_x + 50
          )
          break
        case "down":
          shared_state.setCurrentSpanY(
            current_y - 50 < shared_state.min_span_y ? shared_state.min_span_y :
            current_y - 50
          )
          break
        case "left":
          shared_state.setCurrentSpanX(
            current_x - 50 < shared_state.min_span_x ? shared_state.min_span_x :
            current_x - 50
          )
          break
        default:
          break

      }

      shared_state.updateSpanContainer();

    })

  }

}

export default new Camera();