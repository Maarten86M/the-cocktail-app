import React, {useEffect} from "react";
import axios from "axios";
import NextButton from "../../Components/Buttons/NextBackButton/NextButton/NextButton";
import {Link} from "react-router-dom";
import {useCocktailContext} from "../../Context/CocktailContext";
import BackButton from "../../Components/Buttons/NextBackButton/BackButton/BackButton";
import LetterView from "../../Components/Titles/LetterView/LetterView";
import MainBackButton from "../../Components/Buttons/MainBackButton/MainBackButton";
import CocktailCardLogo from "../../Components/CocktailCardLogo/CocktailCardLogo";
import HelpButton from "../../Components/Buttons/HelpButton/HelpButton";
import cocktailIcon from '../../Assets/Icons/ListIcons/cocktail-icon.png';
import '../../App.css';
import './AllCocktails.css';

function AllCocktails() {
    const {letter, cocktail, setCocktail , setPageTitle} = useCocktailContext();

    useEffect(() => {

        async function fetchData() {
            try {
                const result = await axios.get(`https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_API_KEY}/search.php?f=${letter}`);
                console.log(result, "wat is result?")
                setCocktail(result.data.drinks);
            } catch (e) {
                console.error(e);
            }
        }
        fetchData()
    }, [letter]);

    useEffect(() =>{
        setPageTitle('All Cocktails');
    },[])

    return (
        <div className="fullpage-container">
            <div className="left-section-container">
                <div className="CocktailCard-container">
                    <CocktailCardLogo/>
                </div>
            </div>
            <div className="right-section-container">
                <div className="right-box-container">
                    <div>
                        <HelpButton content={9}/>
                    </div>
                    <h1>All Cocktails</h1>

                    <div className="button-header">
                        <BackButton/>
                        <LetterView/>
                        <NextButton/>
                    </div>

                    {cocktail ? (
                        <div className="scrollbar-all">
                            {cocktail.map(cocktail => <Link to={`/cocktailpage/${cocktail.idDrink}`}>
                                <p><img src={cocktailIcon} alt="Cocktail Icon"/>{cocktail.strDrink}</p></Link>)}
                        </div>
                    ) : (<h1>Oeps, Something went wrong,Click again on the Next or Back Button</h1>)}

                    <MainBackButton/>
                </div>
            </div>
        </div>
    )
}

export default AllCocktails;