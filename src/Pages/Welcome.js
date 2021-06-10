import React from "react";
import search from '../Assets/Icons/NavIcons/search.png';
import random from '../Assets/Icons/NavIcons/dice.png';
import alcohol from '../Assets/Icons/NavIcons/alcohol.png';
import fruit from '../Assets/Icons/NavIcons/fruit.png';
import cocktail from '../Assets/Icons/NavIcons/cocktail.png';
import profile from '../Assets/Icons/NavIcons/profile.png';
import MainButton from "../Components/Buttons/MainButton/MainButton";
import './/paginatijdelijkaanpassenperpagina.css'
import HelpButton from "../Components/Buttons/HelpButton/HelpButton";

function Welcome() {
    return (
        <div className="pagina">

            <div className='welcomepage'>
                <div className="welcomeLeft">
                    <h1>Welcome</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab delectus eaque facilis, fugiat
                        incidunt iusto officiis sapiente soluta veritatis voluptate.</p>
                </div>

                <div className='welcomeright'>
                    <HelpButton content={0}/>
                    <MainButton
                        name="Search Cocktails"
                        img={search}
                        link={"/searchcocktails"}/>

                    <MainButton
                        name="Random Cocktails"
                        img={random}
                        link={"/randomcocktails"}/>

                    <MainButton
                        name="Cocktails By Alcohol"
                        img={alcohol}
                        link={"/cocktailbyalcohol"}/>

                    <MainButton
                        name="Cocktails By Ingredient"
                        img={fruit}
                        link={"/cocktailbyingredient"}/>

                    <MainButton
                        name="All Cocktails"
                        img={cocktail}
                        link={"/allcocktails"}/>

                    <MainButton
                        name="Your Profile"
                        img={profile}
                        link={"/profile"}
                    />
                </div>
            </div>
        </div>
    )
}

export default Welcome;