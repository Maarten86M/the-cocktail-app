import React from "react";
import './RandomizeButton.css';
import random from '../../../Assets/Icons/NavIcons/dice.png'

function RandomizeButton(props) {
    return(
        <div>
            <button
                className="randomizebutton"
                    disabled={props.loading}
                onClick={() => props.setRandomizeButton(!props.randomizeButton)}
            >
                <img src={random} alt="Randomize"/> Randomize
            </button>

        </div>
    )
}
export default RandomizeButton;