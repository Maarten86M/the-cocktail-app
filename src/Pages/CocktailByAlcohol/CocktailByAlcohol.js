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
        <main className="fullpage-container">
            <section className="left-section-container">
                <figure className="CocktailCard-container">
                    <CocktailCardLogo/>
                </figure>
            </section>

            <section className="right-section-container">
                <article className="right-box-container">
                    <HelpButton content={8}/>
                    <PageTitle title="Cocktail By Alcohol"/>
                    <div className="scrollbar">
                        {alcoholData.map(item => <Link to={`/cocktailbyalcohollist/${item.strIngredient1}`}
                                                       className="link">
                            <p><img
                                src={alcoholIcon}
                                alt="alcoholicon"/>
                                {item.strIngredient1}
                            </p></Link>)}
                    </div>
                    <MainBackButton/>
                </article>
            </section>
        </main>
    )
}

export default CocktailByAlcohol;