let personen = [];
let geselecteerdeIndex = -1;

const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");
    valideer();

    if (!isValid()) return;

    let persoon = {
        voornaam: document.getElementById("txtVoornaam").value,
        familienaam: document.getElementById("txtFamilienaam").value,
        geboorteDatum: document.getElementById("txtGeboorteDatum").value,
        email: document.getElementById("txtEmail").value,
        aantalKinderen: document.getElementById("txtAantalKinderen").value
    };

    if (geselecteerdeIndex === -1) {
        personen.push(persoon);
    } else {
        personen[geselecteerdeIndex] = persoon;
    }

    updatePersonenLijst();
};

const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");
    geselecteerdeIndex = -1;
    document.querySelector("form").reset();
};

const updatePersonenLijst = () => {
    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.innerHTML = "";

    personen.forEach((persoon, index) => {
        let optie = document.createElement("option");
        optie.textContent = `${persoon.voornaam} ${persoon.familienaam}`;
        optie.value = index;
        lstPersonen.appendChild(optie);
    });
};

const selecteerPersoon = (event) => {
    geselecteerdeIndex = parseInt(event.target.value);
    let persoon = personen[geselecteerdeIndex];

    document.getElementById("txtVoornaam").value = persoon.voornaam;
    document.getElementById("txtFamilienaam").value = persoon.familienaam;
    document.getElementById("txtGeboorteDatum").value = persoon.geboorteDatum;
    document.getElementById("txtEmail").value = persoon.email;
    document.getElementById("txtAantalKinderen").value = persoon.aantalKinderen;
};

const isValid = () => {
    return document.querySelectorAll(".errorMessage:empty").length === document.querySelectorAll(".errorMessage").length;
};

const setup = () => {
    document.getElementById("btnBewaar").addEventListener("click", bewaarBewerktePersoon);
    document.getElementById("btnNieuw").addEventListener("click", bewerkNieuwePersoon);
    document.getElementById("lstPersonen").addEventListener("change", selecteerPersoon);
};

window.addEventListener("load", setup);
