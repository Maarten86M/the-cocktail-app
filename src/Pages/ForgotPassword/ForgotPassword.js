import React, {useEffect} from "react";
import CocktailCardLogo from "../../Components/CocktailCardLogo/CocktailCardLogo";
import HelpButton from "../../Components/Buttons/HelpButton/HelpButton";
import {useHistory} from "react-router-dom";
import {useAuth} from "../../Context/AuthContext";
import {useCocktailContext} from "../../Context/CocktailContext";
import PageTitle from "../../Components/PageTitle/PageTitle";
import FormErrorMessage from "../../Components/FormErrorMessage/FormErrorMessage";
import FormSuccesMessage from "../../Components/FormSuccesMessage/FormSuccesMessage";
import FormSubmit from "../../Components/FormSubmit/FormSubmit";
import FormLink from "../../Components/FormLink/FormLink";
import '../../App.css';
import './ForgotPassword.css';



function ForgotPassword() {
    const {setPageTitle} = useCocktailContext();
    const history = useHistory();
    const {email, setEmail, setFormError, lostPassword, setSucces} = useAuth();

    async function onSubmit(event) {
        event.preventDefault();

        if (email === "") {
            return setFormError("Please fill in your e-mail.");
        }
        try {
            const lostPasswordReset = await lostPassword(email);
            setSucces("You have received a recover e-mail.");
            setTimeout(() => {
                history.push('./login')
            }, 3000);

        } catch (event) {
            console.error("FireBase Fail:", event);
            setFormError("This e-mail adress does not match with a user account!");
        }
    }

    useEffect(() => {
        setPageTitle("Forgot Your Password ?");
        setFormError('');
        setSucces('')
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
                    <div className="forgot-container">
                        <div><HelpButton content={11}/></div>
                        <PageTitle title="Forgot Your Password ?"/>
                        <div className="input-container">

                            <form onSubmit={onSubmit}>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email adress"
                                    value={email}
                                    onChange={event => setEmail(event.target.value)}
                                />
                                <FormSubmit type="submit" value="Send" disabled={email === ""}/>
                            </form>
                            <FormLink
                                linktext="Back to Login"
                                to="/login"
                            />
                        </div>

                        <FormSuccesMessage/>
                        <FormErrorMessage/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword;