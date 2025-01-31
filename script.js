const divContainer = document.querySelector("#container");
const colorChooser = document.querySelector("#colorChooser");

// button for new grid
const buttonReset = document.querySelector("#reset");

// width/height of grid
let width = 16;
let height = 16;

function makeGrid(width, height) {
  const containerWidth = 450;
  const squareSize = containerWidth / width;
  for (let j = 0; j < height; j++) {
    let gridRow = document.createElement("div");
    gridRow.classList.add("row");
    for (let i = 0; i < width; i++) {
      let divGrid = document.createElement("div");
      divGrid.classList.add("grid-item");
      divGrid.style.height = `${squareSize}px`;
      divGrid.style.width = `${squareSize}px`;
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
  const newSize = parseInt(prompt("size?(max 100)", height));
  if (isNaN(newSize) || newSize <= 0 || newSize > 100) {
    alert("only between 0 - 100.");
    return;
  }
  height = newSize;
  width = newSize;
  divContainer.innerHTML = "";
  makeGrid(width, height);
  console.log(height, width);
}

makeGrid(26, 26);
