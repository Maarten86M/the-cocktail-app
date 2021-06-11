import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import './CocktailList.css';

function CocktailList(props) {
    const history = useHistory();
    console.log(props);

    function listHandle() {
        history.push(`/cocktailpage/${props.id}`)
    }

    return (
        <div>
            <Link style={{textDecoration: 'none', color: 'white'}}>
                <button onClick={() => (listHandle)}> {props.cocktailName}</button>
            </Link>
        </div>
    )
}

export default CocktailList