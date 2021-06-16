import React, {createContext, useState} from 'react';

export const CocktailContext = createContext(null);

function CocktailContextProvider({children}) {
    const [cocktail, setCocktail] = useState(null);
    const [alcohol, setAlchohol] = useState(null);
    const [errors, setErrors] = useState(false);
    const [randomizeButton, setRandomizeButton] = useState(false);
    const [loading, setLoading] = useState(false);
    const [letter, setLetter] = useState('a');
    const [searchText, setSearchText] = useState("");
    const [cocktailList, setCocktailList] = useState('');

    return (
        <CocktailContext.Provider
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
            {children}
        </CocktailContext.Provider>
    )
}

export default CocktailContextProvider
