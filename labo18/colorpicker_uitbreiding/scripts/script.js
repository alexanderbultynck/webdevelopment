const setup = () => {
    let sliders = document.getElementsByClassName("slider");
    for (let slider of sliders) {
        slider.addEventListener("input", update);
    }
    document.getElementById("saveColor").addEventListener("click", saveColor);
    update();
}

const update = () => {
    let sliders = document.getElementsByClassName("slider");
    let values = document.getElementsByClassName("value");
    let red = sliders[0].value;
    let green = sliders[1].value;
    let blue = sliders[2].value;

    values[0].textContent = red;
    values[1].textContent = green;
    values[2].textContent = blue;

    let colorString = `rgb(${red}, ${green}, ${blue})`;
    let colorDemo = document.getElementsByClassName("colorDemo")[0];
    colorDemo.style.backgroundColor = colorString;
}

const saveColor = () => {
    let sliders = document.getElementsByClassName("slider");
    let colorDemo = document.getElementsByClassName("colorDemo")[0];
    let color = colorDemo.style.backgroundColor;
    let savedColors = document.getElementById("savedColors");

    let swatch = document.createElement("div");
    swatch.className = "swatch";
    swatch.style.backgroundColor = color;

    let rgbValues = color.match(/\d+/g);

    swatch.addEventListener("click", () => {
        sliders[0].value = rgbValues[0];
        sliders[1].value = rgbValues[1];
        sliders[2].value = rgbValues[2];
        update();
    });

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.className = "deleteBtn";
    deleteBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        savedColors.removeChild(swatch);
    });

    swatch.appendChild(deleteBtn);
    savedColors.appendChild(swatch);
}

window.addEventListener("load", setup);