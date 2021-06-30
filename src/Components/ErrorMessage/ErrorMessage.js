import {useCocktailContext} from "../../Context/CocktailContext";
import React, {useEffect} from "react";
import './ErrorMessage.css';

function ErrorMessage() {
    const {errorMessage, setErrorMessage, searchResult, alcohollist, ingredientlist, letter} = useCocktailContext();

    useEffect(() => {
        setErrorMessage('');
        if (searchResult === "None Found") {
            setErrorMessage("Sorry,nothing found!")
        }
        if (alcohollist === "None Found") {
            setErrorMessage("Sorry, nothing found with that Alcohol Type!")
        }
        if (ingredientlist === "None Found") {
            setErrorMessage("Sorry, nothing found with that ingredient!")
        }
        if (letter === undefined) {
            setErrorMessage("Sorry, something went wrong! Click again on the next of back button");
        }
    }, [searchResult])

    return (
        <div className="error-container">
            <p className="error-message">{errorMessage}</p>
        </div>
    )
}

export default ErrorMessage;