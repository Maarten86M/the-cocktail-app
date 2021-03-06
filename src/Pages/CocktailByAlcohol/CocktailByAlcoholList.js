import React, {useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import MainBackButton from "../../Components/Buttons/MainBackButton/MainBackButton";
import CocktailLoaderOops from "../../Components/CocktailLoader/CocktailLoaderIMG/CocktailLoaderOops";
import CocktailCardLogo from "../../Components/CocktailCardLogo/CocktailCardLogo";
import HelpButton from "../../Components/Buttons/HelpButton/HelpButton";
import {useCocktailContext} from "../../Context/CocktailContext";
import ErrorMessage from "../../Components/ErrorMessage/ErrorMessage";
import CocktailLoaderText from "../../Components/CocktailLoader/CocktailLoaderText/CocktailLoaderText";
import cocktailIcon from '../../Assets/Icons/ListIcons/cocktail-icon.png';
import '../../App.css';

function CocktailByAlcoholList() {
    const {
        setPageTitle,
        alcohollist,
        setAlcohollist,
        setErrorMessage,
        loading,
        setLoading,
    } = useCocktailContext();
    const params = useParams();

    useEffect(() => {
        async function fetchAlcoholCocktail() {
            setLoading(true);
            try {
                const alcoholResult = await axios.get(`https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_API_KEY}/filter.php?i=${params.result}`);
                setAlcohollist(alcoholResult.data.drinks);
                setPageTitle(params.result + ' Cocktails');
            } catch (e) {
                console.error(e);
                setErrorMessage("Oops, something went wrong!");
            }
            setLoading(false);
        }

        fetchAlcoholCocktail()
    }, []);


    return (
        <>
            <main className="fullpage-container">
                <section className="left-section-container">
                    <figure className="CocktailCard-container">
                        {alcohollist === "None Found" ? (
                            <CocktailLoaderOops/>
                        ) : (<CocktailCardLogo/>)}
                    </figure>
                </section>

                <section className="right-section-container">
                    <article className="right-box-container">
                        <div className="cocktaillist">
                            <div>
                                <HelpButton content={9}/>
                            </div>
                            <h1 className="list-title">Cocktails with {params.result} </h1>
                            <div>
                                {loading && (<CocktailLoaderText/>)}
                                {alcohollist === "None Found" ? (<ErrorMessage/>) : (
                                    <div className="scrollbar">
                                        {alcohollist.map(cocktail => <Link to={`/cocktailpage/${cocktail.idDrink}`} className="link">
                                            <p><img src={cocktailIcon} alt="Cocktail Icon"/>{cocktail.strDrink}</p>
                                        </Link>)}
                                    </div>)}
                            </div>
                        </div>
                        <MainBackButton/>
                    </article>
                </section>
            </main>
        </>
    )
}

export default CocktailByAlcoholList;