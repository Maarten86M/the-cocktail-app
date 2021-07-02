import {useCocktailContext} from "../../../Context/CocktailContext";
import random from '../../../Assets/Icons/NavIcons/dice.png'
import './RandomizeButton.css';

function RandomizeButton() {
    const {loading, setRandomizeButton, randomizeButton} = useCocktailContext()
    return (
        <button
            className="randomizebutton"
            disabled={loading}
            onClick={() => setRandomizeButton(!randomizeButton)}>
            <img src={random} alt="Randomize"/> Randomize
        </button>
    )
}

export default RandomizeButton;