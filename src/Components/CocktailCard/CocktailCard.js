import React from "react";
import './CocktailCard.css';
import {useCocktailContext} from "../../Context/CocktailContext";

function CocktailCard() {
    const {cocktail} = useCocktailContext();
    const [id] = cocktail;

    return (
        <div>
            <div className="cocktailcard-container">

                {cocktail ? (
                    <div>
                <h2>{id.strDrink}</h2>
                <div>
                    <b>Ingredients</b>
                    <p>{id.strIngredient1}</p>
                    <p>{id.strIngredient2}</p>
                    <p>{id.strIngredient3}</p>
                    <p>{id.strIngredient4}</p>
                    <p>{id.strIngredient5}</p>
                    <p>{id.strIngredient6}</p>
                    <p>{id.strIngredient7}</p>
                    <p>{id.strIngredient8}</p>
                    <p>{id.strIngredient9}</p>
                    <p>{id.strIngredient10}</p>
                </div>
                    </div>
                    ):(<h1> Loading </h1>)}
            </div>
        </div>
    )
}

export default CocktailCard;