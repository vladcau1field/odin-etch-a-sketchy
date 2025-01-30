const divContainer = document.querySelector("#container");
const divContainerHeight = document.querySelector("#height");

function makeGrid(width, height) {
  for (let i = 0; i < height; i++) {
    for (let i = 0; i < width; i++) {
      let divGrid = document.createElement("div");
      divGrid.setAttribute(
        "style",
        "width: 16px; height:16px; border: 1px solid black;"
      );
      divContainer.appendChild(divGrid);
    }
  }
}

makeGrid(16, 16);
