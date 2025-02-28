const setup = () => {
    const button = document.getElementById("logButton")
    button.addEventListener("click", () => {
        const input = document.getElementById("textInput").value
        const spacedText = input.split('').join(' ')
        console.log(spacedText)
    })
}
window.addEventListener("load", setup)