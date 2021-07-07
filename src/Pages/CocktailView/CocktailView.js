import React, {useEffect} from "react";
import axios from "axios";
import {useCocktailContext} from "../../Context/CocktailContext";
import {useParams} from 'react-router-dom';
import CocktailCard from "../../Components/CocktailCard/CocktailCard";
import CocktailCardHeader from "../../Components/CocktailCardHeader/CocktailCardHeader";
import HelpButton from "../../Components/Buttons/HelpButton/HelpButton";
import CocktailLoaderOops from "../../Components/CocktailLoader/CocktailLoaderIMG/CocktailLoaderOops";
import CocktailName from "../../Components/CocktailName/CocktailName";
import MainBackButton from "../../Components/Buttons/MainBackButton/MainBackButton";
import ErrorMessage from "../../Components/ErrorMessage/ErrorMessage";
import '../../App.css';
import './CocktailView.css';

function CocktailView() {

    const params = useParams();
    const {cocktail, setCocktail, setPageTitle, setErrorMessage} = useCocktailContext();

    useEffect(() => {
        async function fetchCocktailView() {
            try {
                setErrorMessage('');
                const viewResult = await axios.get(`https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_API_KEY}/lookup.php?i=${params.id}`);
                setCocktail(viewResult.data.drinks);
                setPageTitle(viewResult.data.drinks[0].strDrink);
            } catch (e) {
                console.error(e);
            }
        }

        fetchCocktailView();
    }, []);

    return (
        <main className="fullpage-container">
            <section className="left-section-container">
                <figure className="CocktailCard-container">
                    {cocktail ? (
                        <CocktailCardHeader/>
                    ) : (<CocktailLoaderOops/>)}
                </figure>
            </section>

            <section className="right-section-container">
                <article className="right-box-container">
                    <div className="help-container">
                        <HelpButton content={7}/>
                    </div>
                    <div className="cocktail-view">
                        <ErrorMessage/>
                        <CocktailName/>
                        <CocktailCard/>
                    </div>
                </article>
                <MainBackButton/>
            </section>
        </main>
    )
}

export default CocktailView;