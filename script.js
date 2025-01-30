const divContainer = document.querySelector("#container");

function makeGrid(width, height) {
  for (let j = 0; j < height; j++) {
    let gridRow = document.createElement("div");
    gridRow.classList.add("row");
    for (let i = 0; i < width; i++) {
      let divGrid = document.createElement("div");
      divGrid.classList.add("grid-item");
      gridRow.appendChild(divGrid);
      // adding hover effect
    }
    divContainer.appendChild(gridRow);
  }
}

makeGrid(18, 18);
