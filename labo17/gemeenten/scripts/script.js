const setup = () => {
    let gemeenten = [];
    let invoer;

    while (true) {
        invoer = prompt("Voer een gemeente in (typ 'stop' om te stoppen):");
        if (invoer === null || invoer.toLowerCase() === "stop") {
            break;
        }
        gemeenten.push(invoer);
    }

    gemeenten.sort(); // Sorteer alfabetisch

    let opties = "";
    for (let i = 0; i < gemeenten.length; i++) {
        opties += "<option>" + gemeenten[i] + "</option>";
    }

    document.getElementById("gemeenteLijst").innerHTML = opties;
};

window.addEventListener("load", setup);
