const setup = () => {
    let button = document.getElementById("btnWijzig");
    let pElement = document.getElementById("txtOutput");

    button.addEventListener("click", () => {
        pElement.innerHTML = "Welkom!";
    });
}

window.addEventListener("load", setup);
