function randomColor () {
    let rgbColor = "";
    const rgbFirst = Math.floor(Math.random()*255);
    const rgbSecond = Math.floor(Math.random()*255);
    const rgbThird = Math.floor(Math.random()*255);
    rgbColor = `rgb(${rgbFirst}, ${rgbSecond}, ${rgbThird})`;
    return rgbColor;
}

function createGrid (container, num=50){
    for (let i=0; i < num; i++){
        let rowBox = document.createElement("div");
        rowBox.classList.add("rowbox");
        container.appendChild(rowBox);

        for (let j=0; j < num; j++){
            let columnBox = document.createElement("div");
            columnBox.classList.add("columnbox");
            rowBox.appendChild(columnBox);
        };
    };

    const hoverBoxes = document.querySelectorAll(".columnbox");

    hoverBoxes.forEach((box) => {
        box.addEventListener("mouseenter", () => {
            box.style["background-color"] = randomColor();
            let curOpacity = parseFloat(box.style.opacity) || 0;
            box.style.opacity = Math.min(1, curOpacity + 0.1);
        });
    });
}

const contDiv = document.querySelector(".container");
createGrid(contDiv);


const btn = document.querySelector("button");

btn.addEventListener("click", ()=>{
    let newNum = prompt("Please input the number that will equally determine the lines and rows" +
        "\n(only one number and it should be smaller than 100)"
    );
    if (newNum > 100){
        alert ("You've entered an invalid number, please try again");
    } else {
                // contDiv.innerHTML= "";
        while (contDiv.firstChild){
            contDiv.removeChild(contDiv.firstChild);
        }
        createGrid(contDiv, newNum);
    }
});
