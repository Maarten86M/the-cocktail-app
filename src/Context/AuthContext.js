import React, {useContext, createContext, useState, useEffect} from "react"
import app from "../Modules/Firebase";

export const authContext = createContext({});

export function useAuth() {
    return useContext(authContext);
}

function AuthContextProvider({children}) {

    const [user, setUser] = useState()

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [formError, setFormError] = useState('');

    function signUp(email, password) {
        return app.auth().createUserWithEmailAndPassword(email, password)
    }

    function logIn(email, password) {
        return app.auth().signInWithEmailAndPassword(email, password);
    }

    function logOut() {
        return app.auth().signOut();
    }

    function lostPassword(email) {
        return app.auth().sendPasswordResetEmail(email);
    }


    useEffect(() => {
        const unsubscribe = app.auth().onAuthStateChanged(user => {
            setUser(user)
        })
        return unsubscribe;
    }, []);


    const data = {
        user,
        setUser,
        firstname,
        setFirstname,
        lastname,
        setLastname,
        email,
        setEmail,
        password,
        setPassword,
        formError,
        setFormError,
        signUp,
        logIn,
        logOut,
        lostPassword,
    };

    return (
        <authContext.Provider value={data}>
            {children}
        </authContext.Provider>
    )
}

export default AuthContextProvider;