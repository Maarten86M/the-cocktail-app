import React from 'react';
import {Link} from 'react-router-dom';
import './CocktailList.css';

function CocktailList(props) {

    return (
        <div>
            <Link style={{textDecoration: 'none', color: 'white'}} >
            <p>{props.cocktailName}</p>
            </Link>
        </div>
    )
}

export default CocktailList