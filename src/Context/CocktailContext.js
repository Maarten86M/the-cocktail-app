import React, {createContext, useState, useContext} from 'react';

export const cocktailContext = createContext({});

export function useCocktailContext() {
    return useContext(cocktailContext);
}

export default function CocktailContextProvider({children}) {
    const [cocktail, setCocktail] = useState('');
    const [cocktailList, setCocktailList] = useState([]);
    const [searchResult, setSearchResult] = useState([]);
    const [alcohol, setAlchohol] = useState([]);
    const [alcohollist, setAlcohollist] = useState([]);
    const [ingredientlist, setIngredientlist] = useState([]);

    const [randomizeButton, setRandomizeButton] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const [pageTitle, setPageTitle] = useState('');

    const [letter, setLetter] = useState('A');
    const [numberToLetter, setNumberToLetter] = useState(1);

const data = {
    cocktail,
    setCocktail,
    randomizeButton,
    setRandomizeButton,
    loading,
    setLoading,
    letter,
    setLetter,
    searchText,
    setSearchText,
    alcohol,
    setAlchohol,
    cocktailList,
    setCocktailList,
    numberToLetter,
    setNumberToLetter,
    searchResult,
    setSearchResult,
    pageTitle,
    setPageTitle,
    errorMessage,
    setErrorMessage,
    alcohollist,
    setAlcohollist,
    ingredientlist,
    setIngredientlist
};

    return (<cocktailContext.Provider value={data}>
            {children}
        </cocktailContext.Provider>
    );
}

