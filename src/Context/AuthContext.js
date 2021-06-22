import {createContext} from "react";

export const authContext = createContext({});

function AuthContextProvider({children}){

    const data ={};

    return <authContext.Provider value={data}>
        {children}
    </authContext.Provider>
}

export default AuthContextProvider;