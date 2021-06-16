import React, {createContext, useState, useContext} from 'react';

export const cocktailContext = createContext({});

export function useCocktailContext(){
    return useContext(cocktailContext);
}

export default function CocktailContextProvider(props) {
    const [cocktail, setCocktail] = useState(null);
    const [alcohol, setAlchohol] = useState(null);
    const [errors, setErrors] = useState(false);
    const [randomizeButton, setRandomizeButton] = useState(false);
    const [loading, setLoading] = useState(false);
    const [letter, setLetter] = useState('a');
    const [searchText, setSearchText] = useState("");
    const [cocktailList, setCocktailList] = useState('');

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
                setCocktailList
            }}
        >
            {props.children}
        </cocktailContext.Provider>
    );
}

