import React from "react";
// import {CocktailContext} from "../Context/CocktailContext";
import {Link} from "react-router-dom";
import alcoholData from '../Data/SortByAlcohol.json';



function CocktailByAlcohol() {

    return(
        <div className="pagina">
            <h1>Cocktail By Alcohol</h1>
            <div className="Cocktaillist">
                {alcoholData.map(item => <Link to={`/cocktailbyalcohollist/${item.strIngredient1.replace(" ","+")}`}><p>{item.strIngredient1}</p></Link> )}
            </div>
        </div>
    )
}
export default CocktailByAlcohol;