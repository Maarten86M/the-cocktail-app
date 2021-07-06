import React, {useEffect} from "react";
import {useHistory} from "react-router-dom";
import {useAuth} from "../../Context/AuthContext";
import {useCocktailContext} from "../../Context/CocktailContext";
import CocktailCardLogo from "../../Components/CocktailCardLogo/CocktailCardLogo";
import HelpButton from "../../Components/Buttons/HelpButton/HelpButton";
import MainButton from "../../Components/Buttons/MainButton/MainButton";
import PageTitle from "../../Components/PageTitle/PageTitle";
import FormErrorMessage from "../../Components/FormErrorMessage/FormErrorMessage";
import FormLink from "../../Components/FormLink/FormLink";
import FormSubmit from "../../Components/FormSubmit/FormSubmit";
import CocktailLoaderOops from "../../Components/CocktailLoader/CocktailLoaderIMG/CocktailLoaderOops";
import register from "../../Assets/Icons/NavIcons/register.png";
import './Login.css';
import '../../App.css';

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
        formError,
        logIn,
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
        <main className="fullpage-container">
            <section className="left-section-container">
                <figure className="CocktailCard-container">
                    {formError ? (<CocktailLoaderOops/>) : (<CocktailCardLogo/>)}
                </figure>
            </section>
            <section className="right-section-container">
                <article className="right-box-container">
                    <div><HelpButton content={0}/></div>
                    <PageTitle title="Login"/>
                    <div className="input-container">
                        <form onSubmit={onSubmit}>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email adress"
                                value={email}
                                onChange={event => setEmail(event.target.value)}/>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={password}
                                onChange={event => setPassword(event.target.value)}/>
                            <FormSubmit type="submit" value="Login" disabled={email === "" || password === ""}/>
                            <FormLink
                                linktext="Forgot your password?"
                                to="/forgotpassword"/>

                            <MainButton
                                name="Register Now"
                                icon={register}
                                link={"/register"}/>
                        </form>
                        <FormErrorMessage/>
                    </div>
                </article>
            </section>
        </main>
    )
}

export default Login;