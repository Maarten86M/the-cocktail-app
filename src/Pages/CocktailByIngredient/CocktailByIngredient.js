import React from "react";
import {Link} from "react-router-dom";
import ingredientData from "../../Data/SortByIngredient.json";
import MainBackButton from "../../Components/Buttons/MainBackButton/MainBackButton";
import './CocktailByIngredient.css';

function CocktailByIngredient() {
    return (
        <div className="pagina">
            <h1>Cocktail By Ingredient</h1>
            <div className="ingredient-scrollbar">
                {ingredientData.map(item => <Link to={`/cocktailbyingredientlist/${item.strIngredient1}`}>
                    <p>{item.strIngredient1}</p></Link>)}
            </div>
            <MainBackButton/>
        </div>
    )
}

export default CocktailByIngredient;