import React, {useEffect} from "react";
import '../../App.css';
import CocktailCardLogo from "../../Components/CocktailCardLogo/CocktailCardLogo";
import HelpButton from "../../Components/Buttons/HelpButton/HelpButton";
import {Link, useHistory} from "react-router-dom";
import {useAuth} from "../../Context/AuthContext";
import {useCocktailContext} from "../../Context/CocktailContext";

function ForgotPassword() {
    const {setPageTitle}= useCocktailContext();
    const history = useHistory();
    const {setUser, email, setEmail, formError, setFormError,lostPassword,succes, setSucces} = useAuth();

    async function onSubmit(event) {
        event.preventDefault();

        try {
            const lostPasswordReset = await lostPassword(email);
            setSucces("You have received a recover e-mail");
            // history.push('./login')

        } catch (event) {
            console.error("FireBase Fail:", event);
            setFormError("This e-mail adress does not match with a user account!");
        }
    }

    useEffect(() =>{
        setPageTitle("Forgot Your Password ?");
    },[])

    return (
        <div className="fullpage-container">
            <div className="left-section-container">
                <div className="CocktailCard-container">
                    <CocktailCardLogo/>
                </div>
            </div>

            <div className="right-section-container">
                <div className="right-box-container">
                    <h1>Forgot Your Password?</h1>
                    <div className="input-container">
                        <div><HelpButton content={11}/></div>

                        <form onSubmit={onSubmit}>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email adress"
                                value={email}
                                onChange={event => setEmail(event.target.value)}
                            />

                            <input type="submit" value="Send"/>
                        </form>
                        <h2>{succes}</h2>
                        <h2>{formError}</h2>

                        <Link to="/forgotpassword"><p>Forgot your password?</p></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword;