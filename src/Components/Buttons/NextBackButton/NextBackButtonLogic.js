const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "V", "W", "Y", "Z",];

function getNextLetter(inputLetter) {
    if (inputLetter === "Z") {
        return alphabet[23];
    }
    const positionOfLetter = alphabet.indexOf(inputLetter);
    const nextLetter = alphabet[positionOfLetter + 1];
    return nextLetter;
}

function getPreviousLetter(inputLetter) {
    if (inputLetter === "A") {
        return alphabet[0];
    }
    const positionOfLetter = alphabet.indexOf(inputLetter);
    const previousLetter = alphabet[positionOfLetter - 1];
    return previousLetter;
}

module.exports = {
    getNextLetter: getNextLetter,
    getPreviousLetter: getPreviousLetter
}
