import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import MainBackButton from "../../Components/Buttons/MainBackButton/MainBackButton";
import CocktailLoaderOops from "../../Components/CocktailLoader/CocktailLoaderOops";
import CocktailCardLogo from "../../Components/CocktailCardLogo/CocktailCardLogo";
import HelpButton from "../../Components/Buttons/HelpButton/HelpButton";
import cocktailIcon from '../../Assets/Icons/ListIcons/cocktail-icon.png';
import '../../App.css';
import {useCocktailContext} from "../../Context/CocktailContext";

function CocktailByAlcoholList() {
    const {setPageTitle} = useCocktailContext();
    const params = useParams();
    const [alcohollist, setAlcohollist] = useState([])

    useEffect(() => {
        async function fetchAlcoholCocktail() {
            try {
                const alcoholResult = await axios.get(`https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_API_KEY}/filter.php?i=${params.result}`);
                setAlcohollist(alcoholResult.data.drinks);
            } catch (e) {
                console.error(e)
            }
        }

        fetchAlcoholCocktail()
    }, []);

    useEffect(() =>{
        setPageTitle(params.result + ' Cocktails');
    },[])

    return (
        <>
            <div className="fullpage-container">
                <div className="left-section-container">
                    <div className="CocktailCard-container">
                        {alcohollist === "None Found" ? (
                            <CocktailLoaderOops/>
                        ) : (<CocktailCardLogo/>)}
                    </div>
                </div>

                <div className="right-section-container">
                    <div className="right-box-container">

                            <div>
                                <HelpButton content={9}/>
                            </div>
                            <h1 className="list-title">Cocktails with {params.result} </h1>
                            <div>
                                {alcohollist === "None Found" ? (
                                    <div>
                                        <h1>sorry, nothing found</h1>
                                    </div>
                                ) : (
                                    <div className="scrollbar">
                                        {alcohollist.map(cocktail => <Link to={`/cocktailpage/${cocktail.idDrink}`}>
                                            <p><img src={cocktailIcon} alt="Cocktail Icon"/>{cocktail.strDrink}</p>
                                        </Link>)}
                                    </div>)}
                            </div>
                            <MainBackButton/>

                    </div>
                </div>
            </div>
        </>
    )
}

export default CocktailByAlcoholList;