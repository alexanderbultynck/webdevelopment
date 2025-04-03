const setup = () => {
    const geboortedatum = new Date(2005, 0, 27);

    const huidigeDatum = new Date();

    const verschilInMillis = huidigeDatum - geboortedatum;
    const verschilInDagen = Math.floor(verschilInMillis / (1000 * 60 * 60 * 24));

    console.log("Alexander is " + verschilInDagen + " dagen oud");
}

window.addEventListener("load", setup);
