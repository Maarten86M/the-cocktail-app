import React, {createContext, useState} from 'react';

export const CocktailContext = createContext(null);

function CocktailContextProvider({children}) {
    const [cocktail, setCocktail] = useState(null);
    const [errors, setErrors] = useState(false);
    const [randomizeButton, setRandomizeButton] = useState(true);
    const [loading, setLoading] = useState(false);
    const[letter, setLetter] = useState('A');
    const [allCocktails, setAllCocktails] = useState(null);
    const [searchText, setSearchText] = useState("");
    const [searchCocktail, setSearchCocktail]=useState(null);


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
                allCocktails,
                setAllCocktails,
                searchText,
                setSearchText,
                searchCocktail,
                setSearchCocktail
            }}
        >
            {children}
        </CocktailContext.Provider>
    )
}

export default CocktailContextProvider
