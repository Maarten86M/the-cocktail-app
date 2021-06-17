import React from "react";

function IngredientView(props) {
    return(
        <div>
            <img className="ingredient-img" src={`https:www.thecocktaildb.com/images/ingredients/${props.IngredientName}-Small.png`} alt=""/>
            <p>{props.IngredientName}</p>
        </div>
    )
}
export default IngredientView;