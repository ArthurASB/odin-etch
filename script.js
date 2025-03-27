function randomColor () {
    let rgbColor = "";
    const rgbFirst = Math.floor(Math.random()*255);
    const rgbSecond = Math.floor(Math.random()*255);
    const rgbThird = Math.floor(Math.random()*255);
    rgbColor = `rgb(${rgbFirst}, ${rgbSecond}, ${rgbThird})`;
    return rgbColor;
}

function createGrid (num=50){
    const container = document.querySelector(".container");

// let num = 50;

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
}

createGrid();

const hoverBoxes = document.querySelectorAll(".columnbox");

hoverBoxes.forEach((box) => {
    box.addEventListener("mouseenter", () => {
        box.style["background-color"] = randomColor();
        let curOpacity = parseFloat(box.style.opacity) || 0;
        box.style.opacity = Math.min(1, curOpacity + 0.1);
    });
});



//Math.floor(Math.random()*255);
