const setup = () => {
    let tekst = "Gisteren zat de jongen op de stoep en at de helft van de appel";
    let resultaat = "";
    let index = 0;

    while (index < tekst.length) {
        if (tekst.slice(index, index + 2) === "de" &&
            (index + 2 === tekst.length || tekst[index + 2] === " ")) {
            resultaat += "het";
            index += 2;
        } else {
            resultaat += tekst[index];
            index++;
        }
    }

    console.log(resultaat);
};

window.addEventListener("load", setup);
