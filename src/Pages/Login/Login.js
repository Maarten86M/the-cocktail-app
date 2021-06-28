import React, {useState} from "react";
import {Link, useHistory} from "react-router-dom";
import {useAuth} from "../../Context/AuthContext";
import CocktailCardLogo from "../../Components/CocktailCardLogo/CocktailCardLogo";
import HelpButton from "../../Components/Buttons/HelpButton/HelpButton";
import MainButton from "../../Components/Buttons/MainButton/MainButton";
import './Login.css';
import '../../App.css';
import register from "../../Assets/Icons/NavIcons/register.png";

function Login() {

    const history = useHistory();
    const {
        setUser,
        email,
        setEmail,
        password,
        setPassword,
        formError,
        setFormError,
        logIn,
        succes,
        setSucces
    } = useAuth();

    async function onSubmit(event) {
        event.preventDefault();
        setSucces('');
        setFormError('')

        try {
            const userCredential = await logIn(email, password);
            console.log("Logged in:", userCredential);
            setUser(userCredential.user);
            history.push('./welcome')
        } catch (event) {
            console.error("FireBase Fail:", event);
            setFormError(event.message);
        }

    }

    return (
        <div className="fullpage-container">
            <div className="left-section-container">
                <div className="CocktailCard-container">
                    <CocktailCardLogo/>
                </div>
            </div>

            <div className="right-section-container">
                <div className="right-box-container">

                    <h1>Login</h1>
                    <h3>{formError}</h3>

                    <div className="input-container">

                        <form onSubmit={onSubmit}>
                            <div><HelpButton content={0}/></div>
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
                            <input type="submit" value="login"/>
                            <Link to="/forgotpassword"><p>Forgot your password?</p></Link>

                            <MainButton
                                name="Register Now"
                                icon={register}
                                link={"/register"}
                            />
                        </form>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;