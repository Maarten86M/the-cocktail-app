import React from "react";
import '../NextBackButton.css';
import nextIcon from '../../../../Assets/Icons/ButtonIcons/Next.png';
import {useCocktailContext} from "../../../../Context/CocktailContext";

function NextButton() {

    const {numberToLetter, setNumberToLetter, setLetter,numberToLetterArray, letter}= useCocktailContext();

    function NextButtonFunction() {
        setNumberToLetter(numberToLetter +1)
        setLetter(numberToLetterArray[numberToLetter])
    }

    return(
        <div>
        <button className="nextbackbutton" onClick={NextButtonFunction} disabled={letter === "Z"}>
            <img src={nextIcon} alt="Next Button"/>
        </button>
        </div>
    )
}
export default NextButton;