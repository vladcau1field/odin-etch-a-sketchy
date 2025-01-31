const divContainer = document.querySelector("#container");
const colorChooser = document.querySelector("#colorChooser");

// button for new grid
const buttonReset = document.querySelector("#reset");

// width/height of grid
let width = 16;
let height = 16;

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
buttonReset.addEventListener("click", gridButton);

function gridButton() {
  const newSize = prompt("size?", height);
  if (newSize !== 101) {
    height = newSize;
    width = newSize;
    divContainer.innerHTML = "";
    makeGrid(width, height);
    console.log(height, width);
  }
}

makeGrid(26, 26);
