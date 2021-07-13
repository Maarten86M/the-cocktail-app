import {useCocktailContext} from "../../../../Context/CocktailContext";
import nextIcon from '../../../../Assets/Icons/ButtonIcons/Next.png';
import '../NextBackButton.css';
import {getNextLetter} from '../NextBackButtonLogic';

function NextButton() {
    const {letter,setLetter} = useCocktailContext();

    return (
        <button className="nextbackbutton" onClick={() => setLetter(getNextLetter(letter))} disabled={letter === "Z"}>
            <img src={nextIcon} alt="Next Button"/>
        </button>
    )
}

export default NextButton;