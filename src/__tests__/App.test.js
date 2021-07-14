const {getNextLetter, getPreviousLetter } = require ("../Components/Buttons/NextBackButton/NextBackButtonLogic.js");

test('Given current letter is A when getting previous letter Then letter stays A', function () {

    //Arange
    const currentLetter = "A"

    //Act
    const result = getPreviousLetter(currentLetter);

    //Assert
    expect(result).toEqual("A")

});


test('Given current letter is A when getting next letter Then letter becomes B', function () {

    //Arange
    const currentLetter = "A"

    //Act
    const result = getNextLetter(currentLetter);

    //Assert
    expect(result).toEqual("B")

});


test('Given current letter is B when getting previous letter then becomes A', function () {

    //Arange
    const currentLetter = "B"

    //Act
    const result = getPreviousLetter(currentLetter);

    //Assert
    expect(result).toEqual("A")

});


test('Given current Letter is Z when next letter then stays Z ', function () {

    //Arange
    const currentLetter = "Z"

    //Act
    const result = getNextLetter(currentLetter);

    //Assert
    expect(result).toEqual("Z")

});

