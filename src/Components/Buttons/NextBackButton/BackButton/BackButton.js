import {useCocktailContext} from "../../../../Context/CocktailContext";
import '../NextBackButton.css';
import backIcon from '../../../../Assets/Icons/ButtonIcons/Back.png';

function BackButton() {

    const {numberToLetter, setNumberToLetter, setLetter, numberToLetterArray, letter} = useCocktailContext();

    function BackButtonFunction() {
        setNumberToLetter(numberToLetter - 1)
        setLetter(numberToLetterArray[numberToLetter])
    }

    return (
        <button className="nextbackbutton" onClick={BackButtonFunction} disabled={letter === "A"}>
            <img src={backIcon} alt="Back button"/>
        </button>
    )
}

export default BackButton;