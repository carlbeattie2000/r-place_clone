// TODO
// If env mode is static use local stoage
// if production/server use fetch/sockets

import config from "./config";

class Storage {
  
  constructor(env_mode) {

    this.env_mode = env_mode;

  }

  init() {



  }


  loadDataFromLocalStorage() {

    const pixelsCords = JSON.parse(localStorage.getItem("pixels")) || [];

    return pixelsCords;

  }

  saveDataToLocalStorage(newData) {

    let pixelsArray = this.loadDataFromLocalStorage();

    pixelsArray = pixelsArray.filter((data) => {
      if (Math.floor(data.x) != Math.floor(newData.x) || Math.floor(data.y) != Math.floor(newData.y)) {
        return data
      }
    })

    pixelsArray = [...pixelsArray, newData];

    localStorage.setItem("pixels", JSON.stringify(pixelsArray))

  }

}

const main = new Storage(config.env_mode);

export default main;