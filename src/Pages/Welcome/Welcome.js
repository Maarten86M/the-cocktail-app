import React, {useEffect} from "react";
import {useCocktailContext} from "../../Context/CocktailContext";
import MainButton from "../../Components/Buttons/MainButton/MainButton";
import HelpButton from "../../Components/Buttons/HelpButton/HelpButton";
import CocktailCardLogo from "../../Components/CocktailCardLogo/CocktailCardLogo";
import search from '../../Assets/Icons/NavIcons/search.png';
import random from '../../Assets/Icons/NavIcons/dice.png';
import alcohol from '../../Assets/Icons/NavIcons/alcohol.png';
import fruit from '../../Assets/Icons/NavIcons/fruit.png';
import cocktail from '../../Assets/Icons/NavIcons/cocktail.png';
import profile from '../../Assets/Icons/NavIcons/profile.png';
import '../../App.css';
import './Welcome.css';

function Welcome() {
    const {setPageTitle} = useCocktailContext();

    useEffect(() => {
        setPageTitle('Welcome');
    }, [])

    return (
        <main className="fullpage-container">
            <section className='left-section-container'>
                <figure className="CocktailCard-container">
                    <CocktailCardLogo/>
                </figure>
            </section>

            <section className='right-section-container'>
                <article className="button-container">
                    <div>
                        <HelpButton content={0}/>
                    </div>
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
                        link={"/profile"}/>
                </article>
            </section>
        </main>
    )
}

export default Welcome;