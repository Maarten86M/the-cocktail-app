import {useCocktailContext} from "../../Context/CocktailContext";
import React, {useEffect} from "react";
import './ErrorMessage.css';

function ErrorMessage() {
    const {errorMessage, setErrorMessage, searchResult, alcohollist,ingredientlist,letter } = useCocktailContext();

    useEffect(() => {
        if (searchResult === "None Found") {
            setErrorMessage("Sorry,nothing Found")
        }
        if (alcohollist === "None Found"){
            setErrorMessage("Sorry, nothing Found with that Alcohol Type")
        }
        if (ingredientlist === "None Found"){
            setErrorMessage("Sorry, nothing found with that ingredient")
        }
        if (letter === undefined){
            setErrorMessage("Sorry, something went wrong! Click again on the next of back button");
        }
    }, [searchResult])

    return (
            <h1 className="error-message">{errorMessage}</h1>
    )
}

export default ErrorMessage;