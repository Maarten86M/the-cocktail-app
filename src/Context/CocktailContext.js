import React, {createContext, useState, useContext} from 'react';

export const cocktailContext = createContext({});

export function useCocktailContext(){
    return useContext(cocktailContext);
}

export default function CocktailContextProvider(props) {
    const [cocktail, setCocktail] = useState('');
    const [cocktailList, setCocktailList] = useState('');
    const [randomizeButton, setRandomizeButton] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [searchResult, setSearchResult] = useState([])

    const [alcohol, setAlchohol] = useState(null);

    const [errors, setErrors] = useState(false);
    const [loading, setLoading] = useState(false);

    const [letter, setLetter] = useState('A');
    const [numberToLetter, setNumberToLetter] = useState(1);
    const numberToLetterArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","V","W","Y","Z",];
    const convertNumberToLetter = numberToLetterArray[numberToLetter];

    return ( <cocktailContext.Provider
            value={{
                cocktail,
                setCocktail,
                errors,
                setErrors,
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
                numberToLetterArray,
                convertNumberToLetter,
                searchResult,
                setSearchResult
            }}
        >
            {props.children}
        </cocktailContext.Provider>
    );
}

