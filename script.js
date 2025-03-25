const container = document.querySelector(".container");

for (let i =0; i < 10; i++){
    let gridBox = document.createElement("div");
    gridBox.classList.add("gridbox")
    container.appendChild(gridBox);
}