import {useCocktailContext} from "../../../../Context/CocktailContext";
import {getNextLetter} from '../NextBackButtonLogic';
import nextIcon from '../../../../Assets/Icons/ButtonIcons/Next.png';
import '../NextBackButton.css';

function NextButton() {
    const {letter,setLetter} = useCocktailContext();

    return (
        <button className="nextbackbutton" onClick={() => setLetter(getNextLetter(letter))} disabled={letter === "Z"}>
            <img src={nextIcon} alt="Next Button"/>
        </button>
    )
}

export default NextButton;