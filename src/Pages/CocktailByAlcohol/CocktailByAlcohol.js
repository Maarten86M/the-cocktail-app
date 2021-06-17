import React from "react";
import {Link} from "react-router-dom";
import alcoholData from '../../Data/SortByAlcohol.json';
import MainBackButton from "../../Components/Buttons/MainBackButton/MainBackButton";

function CocktailByAlcohol() {
    return(
        <div className="pagina">
            <h1>Cocktail By Alcohol</h1>
            <div className="Cocktaillist">
                {alcoholData.map(item => <Link to={`/cocktailbyalcohollist/${item.strIngredient1}`}><p>{item.strIngredient1}</p></Link> )}
            </div>
            <MainBackButton />
        </div>
    )
}
export default CocktailByAlcohol;