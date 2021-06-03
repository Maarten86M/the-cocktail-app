import React from "react";
import {
    useParams, Link
} from 'react-router-dom';

function SearchResult() {
    const params = useParams();

    return (
        <div className="pagina">
            <h1>{params.result}</h1>
            <Link to="/searchcocktails">
                <button>Search Again</button>
            </Link>

        </div>
    )
}

export default SearchResult;