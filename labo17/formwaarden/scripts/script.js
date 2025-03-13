const setup = () => {
    const toonResultaat = () => {
        let isRoker = document.myForm.roker.checked ? "is roker" : "is geen roker";

        let moedertaal = "geen keuze";
        let radios = document.getElementsByName("moedertaal");
        for (let i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                moedertaal = radios[i].value;
                break;
            }
        }

        let fbuurland = document.getElementById("fbuurland").value;

        let bestelling = "";
        let bestellingOptions = document.myForm.bestelling.options;
        for (let i = 0; i < bestellingOptions.length; i++) {
            if (bestellingOptions[i].selected) {
                bestelling += bestellingOptions[i].value + " ";
            }
        }

        console.log(isRoker);
        console.log("moedertaal is " + moedertaal);
        console.log("Favoriete buurland is " + fbuurland);
        console.log("Bestelling bestaat uit " + bestelling);
    }

    document.getElementById("toonResultaatBtn").addEventListener("click", toonResultaat);
}

window.addEventListener("load", setup);