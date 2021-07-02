import React from "react";
import './CocktailLoader.css';
import failed from '../../../Assets/Loader/oops.png';

function CocktailLoaderOops() {
    return (
        <>
            <div className="loader-border">
                <div className="logo-container">
                    <img className="loader-img" src={failed} alt="loader"/>
                </div>
            </div>
        </>
    )
}

export default CocktailLoaderOops;