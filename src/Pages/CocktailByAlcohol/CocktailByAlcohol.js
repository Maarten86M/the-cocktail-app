import React, {useEffect} from "react";
import {useCocktailContext} from "../../Context/CocktailContext";
import {Link} from "react-router-dom";
import alcoholData from '../../Data/SortByAlcohol.json';
import alcoholIcon from '../../Assets/Icons/ListIcons/alcohol-icon.png';
import MainBackButton from "../../Components/Buttons/MainBackButton/MainBackButton";
import CocktailCardLogo from "../../Components/CocktailCardLogo/CocktailCardLogo";
import HelpButton from "../../Components/Buttons/HelpButton/HelpButton";
import PageTitle from "../../Components/PageTitle/PageTitle";
import '../../App.css';

function CocktailByAlcohol() {
    const {setPageTitle} = useCocktailContext();

    useEffect(() => {
        setPageTitle('Cocktail By Alcohol');
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
                    <HelpButton content={8}/>
                    <PageTitle title="Cocktail By Alcohol"/>
                    <div className="scrollbar">
                        {alcoholData.map(item => <Link to={`/cocktailbyalcohollist/${item.strIngredient1}`}>
                            <p><img
                                src={alcoholIcon}
                                alt="alcoholicon"/>
                                {item.strIngredient1}
                            </p></Link>)}
                    </div>
                    <MainBackButton/>
                </div>
            </div>
        </div>
    )
}

export default CocktailByAlcohol;