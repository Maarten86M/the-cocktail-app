import React, {useEffect} from "react";
import axios from "axios";
import NextButton from "../../Components/Buttons/NextBackButton/NextButton/NextButton";
import {Link} from "react-router-dom";
import {useCocktailContext} from "../../Context/CocktailContext";
import BackButton from "../../Components/Buttons/NextBackButton/BackButton/BackButton";
import LetterView from "../../Components/Buttons/NextBackButton/LetterView/LetterView";
import MainBackButton from "../../Components/Buttons/MainBackButton/MainBackButton";
import CocktailCardLogo from "../../Components/CocktailCardLogo/CocktailCardLogo";
import HelpButton from "../../Components/Buttons/HelpButton/HelpButton";
import ErrorMessage from "../../Components/ErrorMessage/ErrorMessage";
import PageTitle from "../../Components/PageTitle/PageTitle";
import CocktailLoaderText from "../../Components/CocktailLoader/CocktailLoaderText/CocktailLoaderText";
import cocktailIcon from '../../Assets/Icons/ListIcons/cocktail-icon.png';
import '../../App.css';
import './AllCocktails.css';

function AllCocktails() {
    const {
        letter,
        cocktail,
        setCocktail,
        setPageTitle,
        setErrorMessage,
        loading,
        setLoading,
    } = useCocktailContext();

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            try {
                const result = await axios.get(`https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_API_KEY}/search.php?f=${letter}`);
                console.log(result, "wat is result?");
                setCocktail(result.data.drinks);
                setPageTitle("All Cocktails");
            } catch (e) {
                console.error(e);
                setErrorMessage("Oops, something went wrong!");
            }
            setLoading(false);
        }
        fetchData()
    }, [letter]);

    return (
        <main className="fullpage-container">
            <section className="left-section-container">
                <figure className="CocktailCard-container">
                    <CocktailCardLogo/>
                </figure>
            </section>
            <section className="right-section-container">
                <article className="right-box-container">
                    <HelpButton content={9}/>
                    <PageTitle title="All Cocktails"/>
                    <div className="button-header">
                        <BackButton/>
                        <LetterView/>
                        <NextButton/>
                    </div>
                    {cocktail ? (
                        <div className="scrollbar-all">
                            {loading && (<CocktailLoaderText/>)}
                            {cocktail.map(cocktail => <Link to={`/cocktailpage/${cocktail.idDrink}`} className="link">
                                <p><img src={cocktailIcon} alt="Cocktail Icon"/>{cocktail.strDrink}</p></Link>)}
                        </div>
                    ) : (<ErrorMessage/>)}
                    <MainBackButton/>
                </article>
            </section>
        </main>
    )
}

export default AllCocktails;