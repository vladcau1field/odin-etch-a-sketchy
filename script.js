const divContainer = document.querySelector("#container");
const divContainerHeight = document.querySelector("#height");
const divContainerWidth = document.querySelector("#width");

function makeGrid(width, height) {
  for (let j = 0; j < height; j++) {
    let gridRow = document.createElement("div");
    gridRow.classList.add("row");
    for (let i = 0; i < width; i++) {
      let divGrid = document.createElement("div");
      divGrid.classList.add("grid-item");
      gridRow.appendChild(divGrid);
    }
    divContainerHeight.appendChild(gridRow);
  }
}

makeGrid(24, 24);
