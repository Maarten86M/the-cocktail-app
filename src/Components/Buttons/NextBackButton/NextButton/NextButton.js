import {useCocktailContext} from "../../../../Context/CocktailContext";
import nextIcon from '../../../../Assets/Icons/ButtonIcons/Next.png';
import '../NextBackButton.css';

function NextButton() {
    const {numberToLetter, setNumberToLetter, setLetter, numberToLetterArray, letter} = useCocktailContext();

    function NextButtonFunction() {
        setNumberToLetter(numberToLetter + 1);
        setLetter(numberToLetterArray[numberToLetter]);
    }

    return (
        <button className="nextbackbutton" onClick={NextButtonFunction} disabled={letter === "Z"}>
            <img src={nextIcon} alt="Next Button"/>
        </button>
    )
}

export default NextButton;