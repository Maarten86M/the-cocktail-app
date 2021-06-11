import React, {useContext} from "react";
import './CocktailCard.css';
import {CocktailContext} from "../../Context/CocktailContext";

function CocktailCard(props) {
    const {cocktail, setCocktail} = useContext(CocktailContext);

    return (
        <div>
            <div className="cocktailcard-container">
                <img src="" alt=""/>
                <h2>{props.name}</h2>
                <div>
                    <b>Ingredients</b>
                    <p>{props.ingredientOne}</p>
                    <p>{props.ingredientTwo}</p>
                    <p>{props.ingredientThree}</p>
                    <p>{props.ingredientFour}</p>
                    <p>{props.ingredientFive}</p>
                    <p>{props.ingredientSix}</p>
                    <p>{props.ingredientSeven}</p>
                    <p>{props.ingredientEight}</p>
                </div>
            </div>
        </div>
    )
}

export default CocktailCard;