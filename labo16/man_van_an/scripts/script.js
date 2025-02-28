const setup = () => {
    let text = "De man van An geeft geen hand aan ambetante verwanten"
    let sequence = "an"

    let countWithIndexOf = countOccurrencesWithIndexOf(text, sequence)
    console.log(`Aantal keer '${sequence}' met indexOf:`, countWithIndexOf)

    let countWithLastIndexOf = countOccurrencesWithLastIndexOf(text, sequence)
    console.log(`Aantal keer '${sequence}' met lastIndexOf:`, countWithLastIndexOf)
}

const countOccurrencesWithIndexOf = (text, sequence) => {
    let count = 0
    let index = text.indexOf(sequence)

    while (index !== -1) {
        count++
        index = text.indexOf(sequence, index + 1)
    }

    return count
}

const countOccurrencesWithLastIndexOf = (text, sequence) => {
    let count = 0
    let index = text.lastIndexOf(sequence)

    while (index !== -1) {
        count++
        index = text.lastIndexOf(sequence, index - 1)
    }

    return count
}

window.addEventListener("load", setup)