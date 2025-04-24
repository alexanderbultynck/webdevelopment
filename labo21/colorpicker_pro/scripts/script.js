const setup = () => {
    let sliders = document.getElementsByClassName("slider");
    for (let slider of sliders) {
        slider.addEventListener("input", () => {
            update();
            saveSliderValues();
        });
    }

    document.getElementById("saveColor").addEventListener("click", saveColor);

    loadSliderValues();
    loadSavedColors();
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

const saveSliderValues = () => {
    let sliders = document.getElementsByClassName("slider");
    let values = {
        red: sliders[0].value,
        green: sliders[1].value,
        blue: sliders[2].value
    };
    localStorage.setItem("sliderValues", JSON.stringify(values));
}

const loadSliderValues = () => {
    let saved = localStorage.getItem("sliderValues");
    if (saved) {
        let sliders = document.getElementsByClassName("slider");
        let values = JSON.parse(saved);
        sliders[0].value = values.red;
        sliders[1].value = values.green;
        sliders[2].value = values.blue;
    }
}

const saveColor = () => {
    let colorDemo = document.getElementsByClassName("colorDemo")[0];
    let color = colorDemo.style.backgroundColor;

    let colors = JSON.parse(localStorage.getItem("savedColors")) || [];
    if (!colors.includes(color)) {
        colors.push(color);
        localStorage.setItem("savedColors", JSON.stringify(colors));
    }

    addColorSwatch(color);
}

const loadSavedColors = () => {
    let colors = JSON.parse(localStorage.getItem("savedColors")) || [];
    for (let color of colors) {
        addColorSwatch(color);
    }
}

const addColorSwatch = (color) => {
    let sliders = document.getElementsByClassName("slider");
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
        saveSliderValues();
    });

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.className = "deleteBtn";
    deleteBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        savedColors.removeChild(swatch);
        let colors = JSON.parse(localStorage.getItem("savedColors")) || [];
        colors = colors.filter(c => c !== color);
        localStorage.setItem("savedColors", JSON.stringify(colors));
    });

    swatch.appendChild(deleteBtn);
    savedColors.appendChild(swatch);
}

window.addEventListener("load", setup);
