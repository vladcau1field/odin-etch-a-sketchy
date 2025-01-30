const divContainer = document.querySelector("#container");
const colorChooser = document.querySelector("#colorChooser");

function makeGrid(width, height) {
  function drawPen(color) {
    divGrid.style.backgroundColor = `${color}`;
  }
  for (let j = 0; j < height; j++) {
    let gridRow = document.createElement("div");
    gridRow.classList.add("row");
    for (let i = 0; i < width; i++) {
      let divGrid = document.createElement("div");
      divGrid.classList.add("grid-item");
      gridRow.appendChild(divGrid);
      // adding hover effect
      divGrid.addEventListener(
        "mouseenter",
        () => (divGrid.style.backgroundColor = colorChooser.value)
      );
    }
    divContainer.appendChild(gridRow);
  }
}

makeGrid(36, 36);
