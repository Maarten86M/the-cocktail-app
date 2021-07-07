import React, {useContext, createContext, useState, useEffect} from "react";
import app from "../Modules/Firebase";

export const authContext = createContext({});

export function useAuth() {
    return useContext(authContext);
}

function AuthContextProvider({children}) {
    const [user, setUser] = useState()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [formError, setFormError] = useState('');
    const [pageLoading, setPageLoading] = useState(true)
    const [succes, setSucces] = useState('');

    function signUp(email, password) {
        app.auth().createUserWithEmailAndPassword(email, password);
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
            setUser(user);
            setPageLoading(false);
        })
        return unsubscribe;
    }, []);

    const data = {
        user,
        setUser,
        email,
        setEmail,
        password,
        setPassword,
        formError,
        setFormError,
        succes,
        setSucces,
        passwordConfirm,
        setPasswordConfirm,
        signUp,
        logIn,
        logOut,
        lostPassword
    };

    return (
        <authContext.Provider value={data}>
            {!pageLoading && children}
        </authContext.Provider>
    )
}

export default AuthContextProvider;