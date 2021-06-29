import React from "react";
import {useCocktailContext} from "../../../../Context/CocktailContext";
import './LetterView.css';

function LetterView() {

    const {letter} = useCocktailContext();

    return(
        <>
            <div className="letterViewContainer">
                <p>{letter}</p>
            </div>
        </>
    )
}
export default LetterView;