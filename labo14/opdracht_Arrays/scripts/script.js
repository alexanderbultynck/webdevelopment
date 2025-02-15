const setup = () => {
    let famileleden = ['Thomas', 'Sarah', 'Natasha', 'Dimitri', 'Mathijs'];

    console.log(famileleden);
    console.log(famileleden.length);
    console.log(famileleden[0], famileleden[2], famileleden[4]);

    VoegNaamToe(famileleden)

    console.log(famileleden)
    console.log(famileleden.length)

    console.log(famileleden.join(", "))
}

const VoegNaamToe = (familieleden) => {
    let nieuweNaam = prompt("Voer een nieuwe naam in:")
    if (nieuweNaam) {
        familieleden.push(nieuweNaam)
    }
}

window.addEventListener("load", setup)
