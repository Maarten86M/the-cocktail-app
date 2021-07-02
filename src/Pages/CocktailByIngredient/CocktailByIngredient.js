import React, {useEffect} from "react";
import {useCocktailContext} from "../../Context/CocktailContext";
import {Link} from "react-router-dom";
import ingredientData from "../../Data/SortByIngredient.json";
import ingredientIcon from '../../Assets/Icons/ListIcons/ingredient-icon.png';
import MainBackButton from "../../Components/Buttons/MainBackButton/MainBackButton";
import CocktailCardLogo from "../../Components/CocktailCardLogo/CocktailCardLogo";
import HelpButton from "../../Components/Buttons/HelpButton/HelpButton";
import PageTitle from "../../Components/PageTitle/PageTitle";
import '../../App.css';

function CocktailByIngredient() {

    const {setPageTitle} = useCocktailContext();

    useEffect(() => {
        setPageTitle('Cocktail By Ingredient');
    }, [])

    return (
        <div className="fullpage-container">
            <div className="left-section-container">
                <div className="CocktailCard-container">
                    <CocktailCardLogo/>
                </div>
            </div>

            <div className="right-section-container">
                <div className="right-box-container">
                    <HelpButton content={10}/>
                    <PageTitle title="Cocktail By Ingredient"/>
                    <div className="scrollbar">
                        {ingredientData.map(item => <Link to={`/cocktailbyingredientlist/${item.strIngredient1}`} className="link">
                            <p><img src={ingredientIcon} alt="Ingredient Icon"/>{item.strIngredient1}</p></Link>)}
                    </div>
                    <MainBackButton/>
                </div>
            </div>
        </div>
    )
}

export default CocktailByIngredient;