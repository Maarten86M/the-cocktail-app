import React from "react";
import {Link} from "react-router-dom";
import alcoholData from '../../Data/SortByAlcohol.json';
import MainBackButton from "../../Components/Buttons/MainBackButton/MainBackButton";
import './CocktailByAlcohol.css';
import alcoholIcon from '../../Assets/Icons/ListIcons/alcohol-icon.png';

function CocktailByAlcohol() {
    return (
        <div className="pagina">
            <h1>Cocktail By Alcohol</h1>
            <div className="alcohol-scrollbar">
                {alcoholData.map(item => <Link to={`/cocktailbyalcohollist/${item.strIngredient1}`}>
                    <p><img
                        src={alcoholIcon}
                        alt="alcoholicon"/>
                        {item.strIngredient1}
                    </p></Link>)}
            </div>
            <MainBackButton/>
        </div>
    )
}

export default CocktailByAlcohol;