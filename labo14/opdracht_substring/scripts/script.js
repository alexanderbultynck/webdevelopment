const setup = () => {
    document.getElementById("substringButton").addEventListener("click", getSubstring);
}

const getSubstring = () => {
    let text = document.getElementById('inputText').value;
    let start = parseInt(document.getElementById('startIndex').value);
    let length = parseInt(document.getElementById('length').value);

    if (isNaN(start) || isNaN(length) || start < 0 || length <= 0 || start >= text.length) {
        document.getElementById('output').textContent = "(geen output)";
        return;
    }

    let result = text.substring(start, start + length);
    document.getElementById('output').textContent = result;
}

window.addEventListener("load", setup);