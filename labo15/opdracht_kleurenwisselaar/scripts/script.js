const setup = () => {
    const btn1 = document.getElementById("btn1");
    const btn2 = document.getElementById("btn2");
    const btn3 = document.getElementById("btn3");

    const toggleColor = (button) => {
        button.style.backgroundColor = (button.style.backgroundColor === "blue") ? "white" : "blue";
    };

    btn1.addEventListener("click", () => toggleColor(btn1));
    btn2.addEventListener("click", () => toggleColor(btn2));
    btn3.addEventListener("click", () => toggleColor(btn3));
};

window.addEventListener("load", setup);