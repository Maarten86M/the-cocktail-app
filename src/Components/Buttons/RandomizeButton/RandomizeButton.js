import React from "react";
import './RandomizeButton.css';
import random from '../../../Assets/Icons/NavIcons/dice.png'
import {useCocktailContext} from "../../../Context/CocktailContext";

function RandomizeButton() {
    const {loading, setRandomizeButton,randomizeButton } = useCocktailContext()
    return(
        <div>
            <button
                className="randomizebutton"
                    disabled={loading}
                onClick={() => setRandomizeButton(!randomizeButton)}
            >
                <img src={random} alt="Randomize"/> Randomize
            </button>

        </div>
    )
}
export default RandomizeButton;