import React from "react";
import search from '../../Assets/Icons/NavIcons/search.png';
import random from '../../Assets/Icons/NavIcons/dice.png';
import alcohol from '../../Assets/Icons/NavIcons/alcohol.png';
import fruit from '../../Assets/Icons/NavIcons/fruit.png';
import cocktail from '../../Assets/Icons/NavIcons/cocktail.png';
import profile from '../../Assets/Icons/NavIcons/profile.png';
import MainButton from "../../Components/Buttons/MainButton/MainButton";
import HelpButton from "../../Components/Buttons/HelpButton/HelpButton";
import {useAuth} from "../../Context/AuthContext";
import '../pageStyling.css';
import './Welcome.css';
import CocktailCardLogo from "../../Components/CocktailCardLogo/CocktailCardLogo";


function Welcome() {
    const {user} = useAuth();

    return (
        <main className="fullpage-container">

            <div className='left-section-container'>
                <div className="CocktailCard-container">
                    <CocktailCardLogo/>
                </div>
            </div>

            <div className='right-section-container'>

                <div className="button-container">
                    <HelpButton content={0}/>
                    <MainButton
                        name="Search Cocktails"
                        icon={search}
                        link={"/searchcocktails"}/>

                    <MainButton
                        name="Random Cocktails"
                        icon={random}
                        link={"/randomcocktails"}/>

                    <MainButton
                        name="Cocktails By Alcohol"
                        icon={alcohol}
                        link={"/cocktailbyalcohol"}/>

                    <MainButton
                        name="Cocktails By Ingredient"
                        icon={fruit}
                        link={"/cocktailbyingredient"}/>

                    <MainButton
                        name="All Cocktails"
                        icon={cocktail}
                        link={"/allcocktails"}/>

                    <MainButton
                        name="Your Profile"
                        icon={profile}
                        link={"/profile"}
                    />
                </div>
            </div>

        </main>
    )
}

export default Welcome;