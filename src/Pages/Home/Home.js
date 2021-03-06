import React, {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";
import CocktailLoaderLong from "../../Components/CocktailLoader/CocktailLoaderIMG/CocktailLoaderLong";
import PageTitle from "../../Components/PageTitle/PageTitle";
import FrontLoader from "../../Components/FrontLoader/FrontLoader";
import '../../App.css';
import './Home.css';

function Home() {

    const [introloader, setIntroLoader] = useState(false);
    const history = useHistory();

    useEffect(() => {
        setTimeout(() => {
            history.push('./login');
        }, 9000);
        setIntroLoader(true);
    })

    return (
        <main className="pagina">
            {introloader && (
                <section className="page-container">
                    <CocktailLoaderLong/>
                    <PageTitle title="Welcome"/>
                    <PageTitle title="The Cocktail App"/>
                    <FrontLoader/>
                </section>
            )}
        </main>
    )
}

export default Home;