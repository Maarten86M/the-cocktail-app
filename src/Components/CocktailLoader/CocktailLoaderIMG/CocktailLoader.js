import React from "react";
import './CocktailLoader.css';
import shortloader from '../../../Assets/Loader/Short-loader.gif';
import './CocktailLoader.css';

function CocktailLoader() {
    return (
        <>
            <div className="loader-border">
                <div className="logo-container">
                    <img className="loader-img" src={shortloader} alt="loader"/>
                </div>
            </div>
        </>
    )
}

export default CocktailLoader;