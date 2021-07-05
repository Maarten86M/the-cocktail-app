import React, {useEffect} from "react";
import {useHistory} from "react-router-dom";
import {useAuth} from "../../Context/AuthContext";
import {useCocktailContext} from "../../Context/CocktailContext";
import CocktailCardLogo from "../../Components/CocktailCardLogo/CocktailCardLogo";
import HelpButton from "../../Components/Buttons/HelpButton/HelpButton";
import PageTitle from "../../Components/PageTitle/PageTitle";
import FormLink from "../../Components/FormLink/FormLink";
import FormSubmit from "../../Components/FormSubmit/FormSubmit";
import FormErrorMessage from "../../Components/FormErrorMessage/FormErrorMessage";
import FormSuccesMessage from "../../Components/FormSuccesMessage/FormSuccesMessage";
import CocktailLoaderOops from "../../Components/CocktailLoader/CocktailLoaderIMG/CocktailLoaderOops";
import '../../App.css';


function Register() {
    const {setPageTitle} = useCocktailContext();
    const history = useHistory();
    const {
        setUser,
        firstname,
        lastname,
        setFirstname,
        setLastname,
        email,
        setEmail,
        password,
        setPassword,
        setFormError,
        formError,
        signUp,
        setSucces,
    } = useAuth();

    async function onSubmit(event) {
        event.preventDefault();
        try {
            const userCredential = await signUp(email, password);
            console.log("registered", userCredential);
            setUser(userCredential.user);
            setSucces("Thank you for your registration. You are now logged in!");
            setTimeout(() => {
                history.push('./welcome')
            }, 5000);

        } catch (event) {
            console.error('Firebase Fail', event);
            setFormError(event.message);
        }
    }

    useEffect(() => {
        setPageTitle("Register");
        setFormError('');
        setSucces('');
    }, [])

    return (
        <div className="fullpage-container">
            <div className="left-section-container">
                <div className="CocktailCard-container">
                    {formError ? (<CocktailLoaderOops/>) : (<CocktailCardLogo/>)}
                </div>
            </div>

            <div className="right-section-container">
                <div className="right-box-container">
                    <div><HelpButton content={1}/></div>
                    <PageTitle title="Register"/>
                    <div className="input-container">
                        <form onSubmit={onSubmit}>

                            {/*REQUIREMENTS INBOUWEN!! */}
                            {/*firstname & lastname werkend maken met databadse*/}
                            <input
                                type="text"
                                name='firstname'
                                placeholder='Firstname'
                                value={firstname}
                                onChange={event => setFirstname(event.target.value)}
                            />

                            <input
                                type="text"
                                name='lastname'
                                placeholder='Lastname'
                                value={lastname}
                                onChange={event => setLastname(event.target.value)}
                            />

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
                            <FormLink
                                linktext="Already have an account ? Click here to login."
                                to="/login"
                            />
                            <FormSubmit type="submit" value="register" disabled={email === "" || password === ""}/>
                            <FormErrorMessage/>
                            <FormSuccesMessage/>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Register;