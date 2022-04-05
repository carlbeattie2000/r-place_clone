import shared_state from "./shared_state";
import config from "./config";

class CanvasExport {

  constructor(canvas, image_download_button) {

    this.canvas = canvas;
    this.image_download_button = image_download_button;
    
  }

  init() {

    this.imageDownloadButtonEventInit();

  }

  imageDownloadButtonEventInit() {

    this.image_download_button.addEventListener("click", () => {

      this.downloadImage();
      
    })

  }

  downloadImage() {

    const imageCanvas = document.createElement("canvas");
    imageCanvas.width = config.canvas_width;
    imageCanvas.height = config.canvas_height;

    const imageCanvasCtx = imageCanvas.getContext("2d");

    imageCanvasCtx.fillStyle = "#FFFFFF";
    imageCanvasCtx.fillRect(0, 0, config.canvas_width, config.canvas_height)

    imageCanvasCtx.drawImage(this.canvas, 0, 0);



    const img = new Image();
    img.src = imageCanvas.toDataURL('image/png', 1);

    const link = document.createElement("a");
    link.href = img.src;
    link.download = "canvas.png";
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(a);

  }

}

const main = new CanvasExport(shared_state.canvas, document.getElementById("image_download_button"));

main.init();

export default main