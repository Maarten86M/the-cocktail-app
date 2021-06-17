import React from "react";
import './MainBackButton.css';
import {useCocktailContext} from "../../../Context/CocktailContext";
import {useHistory} from "react-router-dom";


function MainBackButton() {
    const history = useHistory();

    return (
        <button
            className="backbutton"
            onClick={() => history.goBack()}
        >
         Back
        </button>
    )
}

export default MainBackButton;