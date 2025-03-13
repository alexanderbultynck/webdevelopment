const setup = () => {
    const word = "onoorbaar";
    const trigrams = [];

    for (let i = 0; i <= word.length - 3; i++) {
        trigrams.push(word.substring(i, i + 3));
    }

    console.log(trigrams);
};

window.addEventListener("load", setup);
