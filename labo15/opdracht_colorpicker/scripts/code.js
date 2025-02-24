const setup = () => {
    let sliders = document.getElementsByClassName("slider");

    for (let slider of sliders) {
        slider.addEventListener("input", update);
    }

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

    console.log("Huidige kleur: " + colorString);
}

window.addEventListener("load", setup);
