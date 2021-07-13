import {useCocktailContext} from "../../../../Context/CocktailContext";
import backIcon from '../../../../Assets/Icons/ButtonIcons/Back.png';
import '../NextBackButton.css';
import {getPreviousLetter} from '../NextBackButtonLogic';

function BackButton() {

    const {letter,setLetter} = useCocktailContext();

    return (
        <button className="nextbackbutton" onClick={() => setLetter(getPreviousLetter(letter))} disabled={letter === "A"}>
            <img src={backIcon} alt="Back button"/>
        </button>
    )
}

export default BackButton;