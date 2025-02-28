const maakMetSpaties = (inputText) => {
    return inputText.split('').join(' ')
}

const setup = () => {
    const button = document.getElementById("logButton")
    button.addEventListener("click", () => {
        const input = document.getElementById("textInput").value
        const spacedText = maakMetSpaties(input)
        console.log(spacedText)
    })
}

window.addEventListener("load", setup)