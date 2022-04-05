import config from "./config";
import shared_state from "./shared_state";

class ColorMenu {

  constructor(color_selector_container, color_selector_box, colors) {

    this.color_selector_container = color_selector_container;
    this.color_selector_box = color_selector_box;
    this.colors = colors;

    this.toggle_state = false;

  }

  init() {

    this.addButtonEvents();
    this.loadColors();

  }

  toggleContainer() {

    if (!this.toggle_state) {

      this.color_selector_container.style.top = "70%";

      this.toggle_state = true;

      return

    }

    this.color_selector_container.style.top = "110%";

    this.toggle_state = false;

    return

  }

  addButtonEvents() {

    const openBtn = document.getElementById("open_color_selector");

    openBtn.addEventListener("click", () => {
      this.toggleContainer();
    });

    const closeBtn = document.getElementById("close_color_selector")

    closeBtn.addEventListener("click", () => {
      this.toggleContainer();
    });

  }

  loadColors() {

    shared_state.setSelectedColor("transparent");
  
    for (let color of config.DEFAULT_COLOR_PALLET) {
      const colorDiv = document.createElement("div");
  
      colorDiv.style.background = color;
      colorDiv.style.height = "50px";
      colorDiv.style.width = "50px";
  
      this.color_selector_box.append(colorDiv);
  
      colorDiv.addEventListener("click", () => {
        shared_state.setSelectedColor(color);
  
        this.toggleContainer();
      })
    }

  }

}

export default new ColorMenu(shared_state.color_selector_container, shared_state.color_selector_box, config.DEFAULT_COLOR_PALLET);