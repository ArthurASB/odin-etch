const container = document.querySelector(".container");

let num = 100;

for (let i=0; i < num; i++){
    let rowBox = document.createElement("div");
    rowBox.classList.add("rowbox");
    container.appendChild(rowBox);

    for (let j=0; j < num; j++){
        let columnBox = document.createElement("div");
        columnBox.classList.add("columnbox");
        rowBox.appendChild(columnBox);
    }
}

const hoverBoxes = document.querySelectorAll(".columnbox");

hoverBoxes.forEach((box) => {
    box.addEventListener("mouseenter", () => {
        box.style["background-color"] = "black";
    });
});
