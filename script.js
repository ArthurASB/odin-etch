const container = document.querySelector(".container");

let num = 10;

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
