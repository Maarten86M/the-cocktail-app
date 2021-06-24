import React, {useState} from "react";
import './Login.css';
import {Link, useHistory} from "react-router-dom";
import {useAuth} from "../../Context/AuthContext";
import '../pageStyling.css';
import CocktailCardLogo from "../../Components/CocktailCardLogo/CocktailCardLogo";
import HelpButton from "../../Components/Buttons/HelpButton/HelpButton";
import MainButton from "../../Components/Buttons/MainButton/MainButton";
import register from "../../Assets/Icons/NavIcons/register.png";

function Login() {

    const history = useHistory();
    const {setUser, email, setEmail, password, setPassword, formError, setFormError, logIn} = useAuth();

    // const {succes, setSucces} = useState(false);

    async function onSubmit(event) {
        event.preventDefault();
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
                        <div><HelpButton content={0}/></div>
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

                            <input type="submit" value="login"/>
                        </form>
                        <Link to="/forgotpassword"><p>Forgot your password?</p></Link>
                        <MainButton
                            name="Register Now"
                            icon={register}
                            link={"/register"}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;