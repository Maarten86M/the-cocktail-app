import React, {useEffect} from "react";
import {useHistory} from "react-router-dom";
import {useAuth} from "../../Context/AuthContext";
import CocktailCardLogo from "../../Components/CocktailCardLogo/CocktailCardLogo";
import HelpButton from "../../Components/Buttons/HelpButton/HelpButton";
import '../../App.css';
import {useCocktailContext} from "../../Context/CocktailContext";

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
        formError,
        setFormError,
        signUp
    } = useAuth();

    async function onSubmit(event) {
        event.preventDefault();

        try {
            const userCredential = await signUp(email, password);
            console.log("registered", userCredential);
            setUser(userCredential.user);
            history.push('./welcome')
        } catch (event) {
            console.error('Firebase Fail', event);
            setFormError(event.message);
        }
    }

    useEffect(() =>{
        setPageTitle("Register");
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
                <h1>Register</h1>
                {/*{succesMessage && (<h1> Thank you for your account.</h1>)}*/}
                {/*{loading && (<h1>Moment geduld</h1>)}*/}
                <h2>{formError}</h2>
                    <div className="input-container">
                        <div>
                            <HelpButton content={1}/>
                        </div>
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

                    <input type="submit" value="login"/>
                </form>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Register;