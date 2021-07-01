import React, {useEffect, useState} from "react";
import {Link, useHistory} from "react-router-dom";
import {useAuth} from "../../Context/AuthContext";
import {useCocktailContext} from "../../Context/CocktailContext";
import CocktailCardLogo from "../../Components/CocktailCardLogo/CocktailCardLogo";
import HelpButton from "../../Components/Buttons/HelpButton/HelpButton";
import MainButton from "../../Components/Buttons/MainButton/MainButton";
import PageTitle from "../../Components/PageTitle/PageTitle";
import FormErrorMessage from "../../Components/FormErrorMessage/FormErrorMessage";
import register from "../../Assets/Icons/NavIcons/register.png";
import './Login.css';
import '../../App.css';
import FormLink from "../../Components/FormLink/FormLink";
import FormSubmit from "../../Components/FormSubmit/FormSubmit";


function Login() {
    const {setPageTitle} = useCocktailContext();
    const history = useHistory();
    const {
        setUser,
        email,
        setEmail,
        password,
        setPassword,
        setFormError,
        logIn,
        succes,
        setSucces
    } = useAuth();



    async function onSubmit(event) {
        event.preventDefault();
        setSucces('');

        try {
            setFormError('')
            const userCredential = await logIn(email, password);
            console.log("Logged in:", userCredential);
            setUser(userCredential.user);
            history.push('./welcome')

        } catch (event) {
            console.error("FireBase Fail:", event);
            setFormError(event.message);
        }
    }

    useEffect(() => {
        setPageTitle("Login");
        setFormError('')
    }, [])


    return (
        <div className="fullpage-container">
            <div className="left-section-container">
                <div className="CocktailCard-container">
                    <CocktailCardLogo/>
                </div>
            </div>

            <div className="right-section-container">
                <div className="right-box-container">
                    <div><HelpButton content={0}/></div>
                    <PageTitle title="Login"/>
                    <div className="input-container">
                        <form onSubmit={onSubmit}>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email adress"
                                value={email}
                                onChange={event => setEmail(event.target.value)}
                            />
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={password}
                                onChange={event => setPassword(event.target.value)}
                            />
                            <FormSubmit type="submit" value="Login" disabled={email === "" || password === ""}/>

                            <FormLink
                            linktext="Forgot your password?"
                            to="/forgotpassword"
                            />

                            <MainButton
                                name="Register Now"
                                icon={register}
                                link={"/register"}
                            />
                        </form>
                        <FormErrorMessage />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;