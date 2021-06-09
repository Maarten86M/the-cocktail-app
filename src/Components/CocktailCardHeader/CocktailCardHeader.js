import React from "react";
import './CocktailCardHeader.css';

function CocktailCardHeader(props) {
    return (
        <div>
            <img className="cocktailIMG" src={props.cocktailImg} alt={props.alt}/>
        </div>
    )
}
export default CocktailCardHeader;