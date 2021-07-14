import {useCocktailContext} from "../../../../Context/CocktailContext";
import {getPreviousLetter} from '../NextBackButtonLogic';
import backIcon from '../../../../Assets/Icons/ButtonIcons/Back.png';
import '../NextBackButton.css';

function BackButton() {

    const {letter, setLetter} = useCocktailContext();

    return (
        <button className="nextbackbutton" onClick={() => setLetter(getPreviousLetter(letter))}
                disabled={letter === "A"}>
            <img src={backIcon} alt="Back button"/>
        </button>
    )
}

export default BackButton;