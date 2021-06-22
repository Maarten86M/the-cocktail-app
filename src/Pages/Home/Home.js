import React, {useState, useEffect} from "react";
import '../paginatijdelijkaanpassenperpagina.css';
import CocktailLoaderLong from "../../Components/CocktailLoader/CocktailLoaderLong";
import {useHistory} from "react-router-dom";
import './Home.css';

function Home() {

    const [introloader, setIntroLoader] = useState(false);
    const history = useHistory();

    useEffect(() => {
        setTimeout(() => {
            history.push('./login')
        }, 9000);
        setIntroLoader(true)
    })

    return (
        <div className="pagina">

            {introloader ? (
                <div className="page-container">
                    <CocktailLoaderLong/>
                    <h1>Welcome</h1>
                    <h1>The Cocktail App </h1>
                    <div className="move-container">
                        <p className="loading-text"/>
                        <div className="loader-bullets b-1"/>
                        <div className="loader-bullets b-2"/>
                        <div className="loader-bullets b-3"/>
                        <div className="loader-bullets b-4"/>
                    </div>
                </div>
            ) : (<h1>doorverwijzen naar login</h1>)}
        </div>
    )
}
export default Home;