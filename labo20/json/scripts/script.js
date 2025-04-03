const setup = () => {
    let student1 = {
        voornaam: "Jan",
        familienaam: "Janssens",
        geboortedatum: new Date("1993-12-31")
    };

    let jsonString = JSON.stringify(student1);
    console.log(jsonString);

    let student2 = JSON.parse(jsonString);

    console.log(`Voornaam: ${student2.voornaam}`);
}

window.addEventListener("load", setup);
