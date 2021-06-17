import React from "react";

function IngredientView({IngredientName}) {
    return(
        <div>
            <img className="ingredient-img" src={`https:www.thecocktaildb.com/images/ingredients/${IngredientName}-Small.png`} alt=""/>
            <p>{IngredientName}</p>
        </div>
    )
}
export default IngredientView;